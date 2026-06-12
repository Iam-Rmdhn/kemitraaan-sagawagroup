import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db, schema } from "@/lib/db";
import { readRevenueSheet } from "@/lib/services/google-sheets";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers }).catch(() => null);

  if (!session?.user || !process.env.DATABASE_URL) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const profile = await db.query.userProfiles.findFirst({
    where: eq(schema.userProfiles.userId, session.user.id),
  });

  if (profile?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await request.json().catch(() => ({}));
  const connectionId = String(body.connectionId ?? "");

  if (!connectionId) {
    return NextResponse.json({ error: "connectionId wajib dikirim." }, { status: 400 });
  }

  const connection = await db.query.sheetConnections.findFirst({
    where: eq(schema.sheetConnections.id, connectionId),
  });

  if (!connection) {
    return NextResponse.json({ error: "Koneksi sheet tidak ditemukan." }, { status: 404 });
  }

  const rows = await readRevenueSheet({
    spreadsheetId: connection.spreadsheetId,
    sheetName: connection.sheetName,
    dateColumn: connection.dateColumn,
    revenueColumn: connection.revenueColumn,
    transactionColumn: connection.transactionColumn,
  });

  if (rows.length > 0) {
    await db
      .insert(schema.revenueRecords)
      .values(
        rows.map((row) => ({
          id: crypto.randomUUID(),
          outletId: connection.outletId,
          revenueDate: normalizeDate(row.revenueDate),
          revenue: row.revenue,
          transactions: row.transactions,
          raw: row.raw,
          sourceRowHash: row.sourceRowHash,
        }))
      )
      .onConflictDoNothing();
  }

  await db
    .update(schema.sheetConnections)
    .set({ lastSyncedAt: new Date() })
    .where(eq(schema.sheetConnections.id, connection.id));

  return NextResponse.json({ ok: true, insertedOrSkipped: rows.length });
}

function normalizeDate(value: string) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const [day, month, year] = value.split(/[/-]/);

  if (day && month && year) {
    const normalizedYear = year.length === 2 ? `20${year}` : year;
    return `${normalizedYear}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  return new Date(value).toISOString().slice(0, 10);
}
