import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { requireProfile } from "@/lib/authorization";

export const dynamic = "force-dynamic";

export default async function MitraDashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = await requireProfile("mitra");

  return (
    <DashboardShell role="mitra" userName={user.name}>
      {children}
    </DashboardShell>
  );
}
