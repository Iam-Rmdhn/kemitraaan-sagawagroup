import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db } from "@/lib/db";

export default async function AdminOutletPage() {
  const outlets = process.env.DATABASE_URL ? await db.query.outlets.findMany() : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kelola Outlet</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Outlet</TableHead>
              <TableHead>Alamat</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {outlets.map((outlet) => (
              <TableRow key={outlet.id}>
                <TableCell className="font-medium">{outlet.name}</TableCell>
                <TableCell>{outlet.address ?? "-"}</TableCell>
                <TableCell>{outlet.status}</TableCell>
              </TableRow>
            ))}
            {outlets.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-slate-500">
                  Belum ada outlet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
