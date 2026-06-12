import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db, schema } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const setupToken = process.env.SETUP_ADMIN_TOKEN;

    if (!setupToken || !process.env.DATABASE_URL) {
      return NextResponse.json({ error: "Setup admin tidak aktif." }, { status: 404 });
    }

    const body = await request.json().catch(() => ({}));

    if (body.token !== setupToken) {
      return NextResponse.json({ error: "Token setup tidak valid." }, { status: 403 });
    }

    const email = String(body.email ?? "");
    const password = String(body.password ?? "");
    const name = String(body.name ?? "Admin Sagawa");

    if (!email || !password) {
      return NextResponse.json({ error: "Email dan password wajib diisi." }, { status: 400 });
    }

    const existingUser = await db.query.user.findFirst({
      where: eq(schema.user.email, email),
    });

    const authUser =
      existingUser ??
      (
        await auth.api.signUpEmail({
          body: {
            email,
            password,
            name,
          },
          headers: request.headers,
        })
      ).user;

    const existingProfile = await db.query.userProfiles.findFirst({
      where: eq(schema.userProfiles.userId, authUser.id),
    });

    if (existingProfile) {
      await db
        .update(schema.userProfiles)
        .set({ role: "admin", approvalStatus: "active", updatedAt: new Date() })
        .where(eq(schema.userProfiles.userId, authUser.id));
    } else {
      await db.insert(schema.userProfiles).values({
        id: crypto.randomUUID(),
        userId: authUser.id,
        role: "admin",
        approvalStatus: "active",
      });
    }

    return NextResponse.json({ ok: true, userId: authUser.id });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Gagal membuat admin." },
      { status: 500 }
    );
  }
}
