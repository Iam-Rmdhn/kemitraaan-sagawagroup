import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminProdukPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Kelola Produk</CardTitle>
        <CardDescription>
          Struktur produk sudah tersedia di database untuk paket/menu. CRUD detail bisa ditambahkan di iterasi berikutnya.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">
        Produk terhubung opsional ke paket kemitraan agar admin bisa mengelola menu per brand.
      </CardContent>
    </Card>
  );
}
