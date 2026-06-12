"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";

export function SignOutButton({ variant = "outline" }: { variant?: ButtonProps["variant"] }) {
  const router = useRouter();

  async function signOut() {
    await fetch("/api/auth/sign-out", {
      method: "POST",
    });
    router.push("/login");
    router.refresh();
  }

  return (
    <Button
      type="button"
      onClick={signOut}
      variant={variant}
      size="sm"
    >
      <LogOut data-icon="inline-start" />
      Keluar
    </Button>
  );
}
