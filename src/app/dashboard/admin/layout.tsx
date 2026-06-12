import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { requireProfile } from "@/lib/authorization";

export const dynamic = "force-dynamic";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = await requireProfile("admin");

  return (
    <DashboardShell role="admin" userName={user.name}>
      {children}
    </DashboardShell>
  );
}
