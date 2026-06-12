import { requireProfile } from "@/lib/authorization";
import { getMitraDashboardData } from "@/lib/dashboard-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatRupiah } from "@/lib/utils";

export default async function MitraOmsetPage() {
  const { user } = await requireProfile("mitra");
  const data = await getMitraDashboardData(user.id);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Omset Outlet</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tanggal</TableHead>
              <TableHead>Omset</TableHead>
              <TableHead>Transaksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.recentRevenue.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.revenueDate}</TableCell>
                <TableCell>{formatRupiah(item.revenue)}</TableCell>
                <TableCell>{item.transactions ?? "-"}</TableCell>
              </TableRow>
            ))}
            {data.recentRevenue.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-slate-500">
                  Data omset belum tersedia dari Google Sheet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
