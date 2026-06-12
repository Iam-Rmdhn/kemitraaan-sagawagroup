import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminSheetSyncPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Google Sheet Sync</CardTitle>
        <CardDescription>
          MVP menyiapkan service Google Sheets API dan table koneksi satu sheet per outlet.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-slate-600">
        <p>Env yang dibutuhkan: `GOOGLE_SERVICE_ACCOUNT_EMAIL` dan `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`.</p>
        <p>Setiap outlet menyimpan Spreadsheet ID, sheet name, kolom tanggal, kolom omset, dan kolom transaksi.</p>
      </CardContent>
    </Card>
  );
}
