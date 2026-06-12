import { DashboardAreaChart } from "@/components/dashboard/DashboardAreaChart";
import { DashboardSectionCards } from "@/components/dashboard/DashboardSectionCards";
import { DashboardTableCard } from "@/components/dashboard/DashboardTableCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { requireProfile } from "@/lib/authorization";
import { getMitraDashboardData } from "@/lib/dashboard-data";
import { formatRupiah } from "@/lib/utils";

export default async function MitraDashboardPage() {
  const { user } = await requireProfile("mitra");
  const data = await getMitraDashboardData(user.id);

  return (
    <>
      <DashboardSectionCards
        metrics={[
          {
            label: "Omset Hari Ini",
            value: formatRupiah(data.todayRevenue),
            trend: "+12.5%",
            trendDirection: "up",
            footerTitle: "Pantau performa harian",
            footerDescription: "Berdasarkan sync Google Sheet outlet",
          },
          {
            label: "Omset Bulan Ini",
            value: formatRupiah(data.monthRevenue),
            trend: "+4.5%",
            trendDirection: "up",
            footerTitle: "Akumulasi bulan berjalan",
            footerDescription: "Data diperbarui dari sheet outlet",
          },
          {
            label: "Status Pembayaran",
            value: data.application?.paymentType === "full_payment" ? "Full Payment" : "DP",
            trend: data.application?.status === "approved" ? "Valid" : "Review",
            trendDirection: data.application?.status === "approved" ? "up" : "down",
            footerTitle: "Validasi pembayaran",
            footerDescription: "Status mengikuti approval admin",
          },
          {
            label: "Paket Kemitraan",
            value: data.application?.package?.name ?? "-",
            trend: "Aktif",
            trendDirection: "up",
            footerTitle: "Profil kemitraan",
            footerDescription: "Paket yang terhubung dengan outlet",
          },
        ]}
      />
      <DashboardAreaChart
        title="Tren Omset Outlet"
        description="Omset outlet dari data Google Sheet yang tersinkron"
        data={getRevenueChartData(data.recentRevenue)}
        valueLabel="Omset"
      />
      <div className="px-4 lg:px-6">
        <Card>
        <CardHeader>
          <CardTitle>Status Kemitraan</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <Info label="Nama Mitra" value={data.application?.partnerName ?? user.name} />
          <Info label="Paket" value={data.application?.package?.name ?? "-"} />
          <div>
            <p className="text-sm text-slate-500">Approval</p>
            <Badge variant="success">Active</Badge>
          </div>
        </CardContent>
        </Card>
      </div>

      <DashboardTableCard title="Riwayat Omset Terbaru" description="Data terakhir dari sinkronisasi outlet.">
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
                    Data omset belum tersedia.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
      </DashboardTableCard>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 font-semibold text-foreground">{value}</p>
    </div>
  );
}

function getRevenueChartData(items: Array<{ revenueDate: string; revenue: number }>) {
  if (items.length > 0) {
    return items
      .map((item) => ({
        date: item.revenueDate,
        value: item.revenue,
      }))
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  return Array.from({ length: 12 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (11 - index));

    return {
      date: date.toISOString().slice(0, 10),
      value: 0,
    };
  });
}
