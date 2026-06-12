import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db } from "@/lib/db";
import { packageSeeds } from "@/lib/partnership-data";
import { formatRupiah } from "@/lib/utils";

export default async function AdminPaketPage() {
  const packages = process.env.DATABASE_URL
    ? await db.query.packages.findMany()
    : packageSeeds.map((item) => ({ id: item.slug, ...item, isActive: true }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kelola Paket Kemitraan</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Paket</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Harga Dasar</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {packages.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.slug}</TableCell>
                <TableCell>{formatRupiah(item.basePrice)}</TableCell>
                <TableCell>{item.isActive ? "Aktif" : "Nonaktif"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
