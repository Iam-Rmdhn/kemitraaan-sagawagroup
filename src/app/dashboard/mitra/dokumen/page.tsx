import { eq } from "drizzle-orm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { requireProfile } from "@/lib/authorization";
import { db, schema } from "@/lib/db";

export default async function MitraDokumenPage() {
  const { user } = await requireProfile("mitra");
  const application = process.env.DATABASE_URL
    ? await db.query.partnershipApplications.findFirst({
        where: eq(schema.partnershipApplications.userId, user.id),
      })
    : null;
  const documents =
    application && process.env.DATABASE_URL
      ? await db.query.partnerDocuments.findMany({
          where: eq(schema.partnerDocuments.applicationId, application.id),
        })
      : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dokumen Mitra</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tipe</TableHead>
              <TableHead>Nama File</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((document) => (
              <TableRow key={document.id}>
                <TableCell>{document.type}</TableCell>
                <TableCell>{document.fileName}</TableCell>
              </TableRow>
            ))}
            {documents.length === 0 && (
              <TableRow>
                <TableCell colSpan={2} className="text-center text-slate-500">
                  Dokumen belum tersedia.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
