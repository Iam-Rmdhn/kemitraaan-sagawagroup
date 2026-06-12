import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { requireProfile } from "@/lib/authorization";
import { getMitraDashboardData } from "@/lib/dashboard-data";

export default async function MitraProfilPage() {
  const { user } = await requireProfile("mitra");
  const data = await getMitraDashboardData(user.id);
  const application = data.application;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profil Mitra</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        <Info label="Nama" value={application?.partnerName ?? user.name} />
        <Info label="Email" value={application?.partnerEmail ?? user.email} />
        <Info label="No HP" value={application?.partnerPhone ?? "-"} />
        <Info label="Paket" value={application?.package?.name ?? "-"} />
        <div className="md:col-span-2">
          <Info label="Alamat" value={application?.partnerAddress ?? "-"} />
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
