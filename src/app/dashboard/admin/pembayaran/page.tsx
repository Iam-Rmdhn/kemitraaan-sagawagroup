import { desc } from "drizzle-orm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db, schema } from "@/lib/db";
import { formatRupiah } from "@/lib/utils";

export default async function AdminPembayaranPage() {
  const payments = process.env.DATABASE_URL
    ? await db.query.payments.findMany({ orderBy: [desc(schema.payments.createdAt)] })
    : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kelola Pembayaran</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tipe</TableHead>
              <TableHead>Nominal</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.type === "dp" ? "DP" : "Full Payment"}</TableCell>
                <TableCell>{formatRupiah(payment.amount)}</TableCell>
                <TableCell>
                  <Badge variant={payment.status === "valid" || payment.status === "paid" ? "success" : "warning"}>
                    {payment.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
            {payments.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-slate-500">
                  Belum ada pembayaran.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
