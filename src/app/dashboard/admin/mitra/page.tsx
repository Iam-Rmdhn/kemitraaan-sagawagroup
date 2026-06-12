import { desc } from "drizzle-orm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db, schema } from "@/lib/db";

export default async function AdminMitraPage() {
  const partners = process.env.DATABASE_URL
    ? await db.query.partners.findMany({ orderBy: [desc(schema.partners.createdAt)] })
    : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monitoring Mitra</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>No HP</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {partners.map((partner) => (
              <TableRow key={partner.id}>
                <TableCell className="font-medium">{partner.name}</TableCell>
                <TableCell>{partner.email}</TableCell>
                <TableCell>{partner.phone}</TableCell>
                <TableCell>
                  <Badge variant="success">Active</Badge>
                </TableCell>
              </TableRow>
            ))}
            {partners.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-slate-500">
                  Belum ada mitra aktif.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
