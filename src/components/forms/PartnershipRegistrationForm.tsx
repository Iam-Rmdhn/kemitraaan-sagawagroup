"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { packageSeeds, partnershipSystems, type PaymentType } from "@/lib/partnership-data";
import { DP_AMOUNT, getFinalPackagePrice } from "@/lib/pricing";
import { formatRupiah } from "@/lib/utils";

export function PartnershipRegistrationForm() {
  const router = useRouter();
  const params = useSearchParams();
  const initialPackage = params.get("paket") ?? packageSeeds[0].slug;
  const [packageSlug, setPackageSlug] = useState(initialPackage);
  const [paymentType, setPaymentType] = useState<PaymentType>("dp");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedPackage = packageSeeds.find((item) => item.slug === packageSlug) ?? packageSeeds[0];
  const pricing = useMemo(
    () => getFinalPackagePrice(selectedPackage.basePrice),
    [selectedPackage.basePrice]
  );
  const amountDue = paymentType === "dp" ? DP_AMOUNT : pricing.finalPrice;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.set("packageSlug", packageSlug);
    formData.set("paymentType", paymentType);

    try {
      const response = await fetch("/api/partnership/register", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Pendaftaran gagal diproses.");
      }

      toast.success("Pendaftaran berhasil dikirim. Admin akan memvalidasi data dan pembayaran.");
      router.push("/login?registered=1");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Pendaftaran gagal diproses.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Detail Kemitraan</CardTitle>
          <CardDescription>Pilih sistem kemitraan, PIC sales, dan paket usaha.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Sistem Kemitraan</Label>
            <Select name="partnershipSystem" defaultValue="auto_pilot" required>
              <SelectTrigger>
                <SelectValue placeholder="Pilih sistem" />
              </SelectTrigger>
              <SelectContent>
                {partnershipSystems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="salesPicId">PIC Sales (opsional)</Label>
            <Input id="salesPicId" name="salesPicId" placeholder="ID/nama sales jika ada" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label>Paket Usaha</Label>
            <Select value={packageSlug} onValueChange={setPackageSlug}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {packageSeeds.map((item) => (
                  <SelectItem key={item.slug} value={item.slug}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Diri Mitra</CardTitle>
          <CardDescription>Data ini dipakai untuk akun dashboard dan validasi admin.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5 md:grid-cols-2">
          <Field label="Nama Lengkap" name="name" required />
          <Field label="No HP" name="phone" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Password Akun" name="password" type="password" required />
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="address">Alamat</Label>
            <Textarea id="address" name="address" required placeholder="Alamat lengkap calon mitra" />
          </div>
          <FileField label="Foto KTP" name="ktp" />
          <FileField label="Foto NPWP" name="npwp" />
          <FileField label="Foto Mitra" name="partnerPhoto" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Nilai Paket dan Pembayaran</CardTitle>
          <CardDescription>Diskon tanggal otomatis dikunci saat pendaftaran disubmit.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-4">
            <PriceBox label="Harga dasar" value={formatRupiah(selectedPackage.basePrice)} />
            <PriceBox label="Diskon tanggal" value={formatRupiah(pricing.discount)} />
            <PriceBox label="Harga final" value={formatRupiah(pricing.finalPrice)} />
            <PriceBox label="Jumlah bayar" value={formatRupiah(amountDue)} highlight />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <PaymentChoice
              active={paymentType === "dp"}
              title="DP"
              amount={formatRupiah(DP_AMOUNT)}
              onClick={() => setPaymentType("dp")}
            />
            <PaymentChoice
              active={paymentType === "full_payment"}
              title="Full Payment"
              amount={formatRupiah(pricing.finalPrice)}
              onClick={() => setPaymentType("full_payment")}
            />
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-bold">Informasi Pembayaran</p>
            <p>Pembayaran dapat dilakukan melalui rekening BCA A.N Iman Wahyudi (OWNER).</p>
            <p className="font-semibold">No. Rekening: 540-607-5938</p>
            <p className="mt-2">Sebelum transfer, pastikan nominal yang dibayarkan tidak salah.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Field label="Nama Pengirim" name="transferSenderName" required />
            <Field label="Bank Pengirim" name="transferSenderBank" required />
            <Field label="No Rekening Pengirim" name="transferSenderAccountNumber" required />
          </div>
          <FileField label="Bukti Transfer" name="paymentProof" />
        </CardContent>
      </Card>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="animate-spin" />}
        Kirim Pendaftaran
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} required={required} />
    </div>
  );
}

function FileField({ label, name }: { label: string; name: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type="file" accept="image/*,.pdf" required />
    </div>
  );
}

function PriceBox({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={highlight ? "rounded-lg bg-red-600 p-4 text-white" : "rounded-lg border border-slate-200 p-4"}>
      <p className={highlight ? "text-xs text-red-100" : "text-xs text-slate-500"}>{label}</p>
      <p className="mt-1 text-base font-bold">{value}</p>
    </div>
  );
}

function PaymentChoice({
  active,
  title,
  amount,
  onClick,
}: {
  active: boolean;
  title: string;
  amount: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "rounded-lg border-2 border-red-600 bg-red-50 p-4 text-left"
          : "rounded-lg border border-slate-200 p-4 text-left hover:bg-slate-50"
      }
    >
      <p className="font-bold text-slate-950">{title}</p>
      <p className="text-sm text-slate-600">{amount}</p>
    </button>
  );
}
