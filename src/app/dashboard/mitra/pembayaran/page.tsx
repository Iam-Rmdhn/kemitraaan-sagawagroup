import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { requireProfile } from "@/lib/authorization";
import { getMitraDashboardData } from "@/lib/dashboard-data";
import { formatRupiah } from "@/lib/utils";

export default async function MitraPembayaranPage() {
  const { user } = await requireProfile("mitra");
  const data = await getMitraDashboardData(user.id);
  const application = data.application;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Status Pembayaran</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        <Info label="Tipe Pembayaran" value={application?.paymentType === "full_payment" ? "Full Payment" : "DP"} />
        <Info label="Jumlah Dibayar" value={formatRupiah(application?.amountDue ?? 0)} />
        <Info label="Harga Final Paket" value={formatRupiah(application?.finalPackagePrice ?? 0)} />
        <div>
          <p className="text-sm text-slate-500">Validasi</p>
          <Badge variant={application?.status === "approved" ? "success" : "warning"}>
            {application?.status ?? "pending"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-950">{value}</p>
    </div>
  );
}
