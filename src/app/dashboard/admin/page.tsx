import { DashboardAreaChart } from "@/components/dashboard/DashboardAreaChart";
import { DashboardSectionCards } from "@/components/dashboard/DashboardSectionCards";
import { DashboardTableCard } from "@/components/dashboard/DashboardTableCard";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getAdminDashboardData } from "@/lib/dashboard-data";
import { formatRupiah } from "@/lib/utils";

export default async function AdminDashboardPage() {
  const data = await getAdminDashboardData();
  const totalApplicationValue = data.applications.reduce((total, item) => total + item.amountDue, 0);
  const chartData = getChartData(
    data.applications.map((item) => ({
      date: item.createdAt instanceof Date ? item.createdAt.toISOString() : String(item.createdAt),
      value: item.amountDue,
    }))
  );

  return (
    <>
      <DashboardSectionCards
        metrics={[
          {
            label: "Pendaftaran Pending",
            value: data.pendingApplications,
            trend: "+12.5%",
            trendDirection: "up",
            footerTitle: "Pipeline pendaftaran aktif",
            footerDescription: "Calon mitra menunggu validasi admin",
          },
          {
            label: "Mitra Aktif",
            value: data.activePartners,
            trend: "+4.5%",
            trendDirection: "up",
            footerTitle: "Akun mitra siap operasional",
            footerDescription: "Role dan approval sudah aktif",
          },
          {
            label: "Pembayaran Menunggu",
            value: data.pendingPayments,
            trend: "-2.1%",
            trendDirection: data.pendingPayments > 0 ? "down" : "up",
            footerTitle: "Butuh validasi bukti transfer",
            footerDescription: "Periksa bukti DP/full payment",
          },
          {
            label: "Nilai Pendaftaran",
            value: formatRupiah(totalApplicationValue),
            trend: "+8.2%",
            trendDirection: "up",
            footerTitle: "Akumulasi nominal masuk",
            footerDescription: "Berdasarkan pendaftaran terbaru",
          },
        ]}
      />
      <DashboardAreaChart
        title="Nilai Pendaftaran"
        description="Nominal pendaftaran berdasarkan data terbaru"
        data={chartData}
        valueLabel="Nominal"
      />
      <DashboardTableCard
        title="Pendaftaran Terbaru"
        description="Validasi data, paket, dan pembayaran calon mitra."
      >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mitra</TableHead>
                <TableHead>Paket</TableHead>
                <TableHead>Jumlah Bayar</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.applications.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.partnerName}</TableCell>
                  <TableCell>{item.package?.name ?? "-"}</TableCell>
                  <TableCell>{formatRupiah(item.amountDue)}</TableCell>
                  <TableCell>
                    <StatusBadge status={item.status} />
                  </TableCell>
                </TableRow>
              ))}
              {data.applications.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-slate-500">
                    Belum ada pendaftaran.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
      </DashboardTableCard>
    </>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === "approved") return <Badge variant="success">Approved</Badge>;
  if (status === "rejected") return <Badge variant="destructive">Rejected</Badge>;
  return <Badge variant="warning">Pending</Badge>;
}

function getChartData(items: Array<{ date: string; value: number }>) {
  if (items.length > 0) {
    return items
      .map((item) => ({
        date: new Date(item.date).toISOString().slice(0, 10),
        value: item.value,
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
