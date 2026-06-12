import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { getSession } from "@/lib/auth";
import { db, schema } from "@/lib/db";

export async function requireUser() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/login");
  }

  return session.user;
}

export async function requireProfile(role?: "admin" | "mitra") {
  const currentUser = await requireUser();

  if (!process.env.DATABASE_URL) {
    return {
      user: currentUser,
      profile: {
        role: role ?? "mitra",
        approvalStatus: "active",
      },
    };
  }

  const profile = await db.query.userProfiles.findFirst({
    where: eq(schema.userProfiles.userId, currentUser.id),
  });

  if (!profile) {
    redirect("/login");
  }

  if (role && profile.role !== role) {
    redirect(profile.role === "admin" ? "/dashboard/admin" : "/dashboard/mitra");
  }

  if (profile.role === "mitra" && profile.approvalStatus !== "active") {
    redirect("/login?pending=1");
  }

  return { user: currentUser, profile };
}
