import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/forms/LoginForm";

export const metadata: Metadata = {
  title: "Login Dashboard",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-24">
      <div className="mx-auto max-w-md">
        <div className="mb-6 text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-red-600">Sagawa Partnership</p>
          <h1 className="mt-3 text-3xl font-black text-slate-950">Login</h1>
        </div>
        <Suspense fallback={<div className="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-500">Memuat login...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
