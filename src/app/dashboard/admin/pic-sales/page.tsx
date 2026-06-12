import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPicSalesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Kelola PIC Sales</CardTitle>
        <CardDescription>
          MVP sudah menyediakan table `sales_pics`; form create/update bisa ditambahkan setelah daftar PIC final.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">
        PIC sales bersifat opsional pada pendaftaran. Jika field kosong, pendaftaran tetap bisa diproses.
      </CardContent>
    </Card>
  );
}
