"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const registered = params.get("registered") === "1";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/auth/sign-in/email", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });

      if (!response.ok) {
        throw new Error("Email atau password tidak sesuai.");
      }

      toast.success("Login berhasil.");
      router.push("/dashboard/mitra");
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login gagal.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Masuk Dashboard</CardTitle>
        <CardDescription>
          {registered
            ? "Pendaftaran sudah terkirim. Akun bisa masuk dashboard setelah admin approve."
            : "Gunakan email dan password yang dipakai saat pendaftaran."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="animate-spin" />}
            Masuk
          </Button>
        </form>
        <p className="mt-5 text-center text-sm text-slate-500">
          Belum daftar?{" "}
          <Link href="/daftar-kemitraan" className="font-semibold text-red-600 hover:underline">
            Daftar kemitraan
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
