import { desc } from "drizzle-orm";
import { approveApplication, rejectApplication } from "@/app/dashboard/admin/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db, schema } from "@/lib/db";
import { formatRupiah } from "@/lib/utils";

export default async function AdminPendaftaranPage() {
  const applications = process.env.DATABASE_URL
    ? await db.query.partnershipApplications.findMany({
        with: { package: true, salesPic: true },
        orderBy: [desc(schema.partnershipApplications.createdAt)],
      })
    : [];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-black text-foreground">Pendaftaran Mitra</h1>
        <p className="text-sm text-muted-foreground">Validasi data, dokumen, dan bukti transfer calon mitra.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Daftar Pendaftaran</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mitra</TableHead>
                <TableHead>Paket</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Diskon</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="font-semibold">{item.partnerName}</div>
                    <div className="text-xs text-muted-foreground">{item.partnerEmail}</div>
                  </TableCell>
                  <TableCell>{item.package?.name ?? "-"}</TableCell>
                  <TableCell>
                    <div>{item.paymentType === "dp" ? "DP" : "Full Payment"}</div>
                    <div className="text-xs text-muted-foreground">{formatRupiah(item.amountDue)}</div>
                  </TableCell>
                  <TableCell>{formatRupiah(item.dateDiscountAmount)}</TableCell>
                  <TableCell>
                    <Badge variant={item.status === "approved" ? "success" : item.status === "rejected" ? "destructive" : "warning"}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {item.status === "pending" ? (
                      <div className="flex gap-2">
                        <form action={approveApplication}>
                          <input type="hidden" name="applicationId" value={item.id} />
                          <Button size="sm">Approve</Button>
                        </form>
                        <form action={rejectApplication}>
                          <input type="hidden" name="applicationId" value={item.id} />
                          <Button size="sm" variant="outline">
                            Reject
                          </Button>
                        </form>
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">Selesai</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {applications.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-muted-foreground">
                    Belum ada pendaftaran.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
