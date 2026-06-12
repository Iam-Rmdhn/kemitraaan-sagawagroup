import type { Metadata } from "next";
import { Suspense } from "react";
import { PartnershipRegistrationForm } from "@/components/forms/PartnershipRegistrationForm";

export const metadata: Metadata = {
  title: "Daftar Kemitraan",
  description: "Form pendaftaran kemitraan Sagawa Group.",
};

export default function DaftarKemitraanPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-red-600">Pendaftaran Kemitraan</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Lengkapi data kemitraan dan pembayaran awal
          </h1>
          <p className="mt-4 text-slate-600">
            Akun mitra akan aktif setelah admin memvalidasi data, dokumen, dan bukti transfer.
          </p>
        </div>
        <Suspense fallback={<div className="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-500">Memuat form...</div>}>
          <PartnershipRegistrationForm />
        </Suspense>
      </div>
    </main>
  );
}
