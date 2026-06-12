"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { requireProfile } from "@/lib/authorization";
import { db, schema } from "@/lib/db";

export async function approveApplication(formData: FormData) {
  await requireProfile("admin");
  const applicationId = String(formData.get("applicationId") ?? "");

  if (!applicationId || !process.env.DATABASE_URL) return;

  const application = await db.query.partnershipApplications.findFirst({
    where: eq(schema.partnershipApplications.id, applicationId),
  });

  if (!application) return;

  await db.transaction(async (tx) => {
    await tx
      .update(schema.partnershipApplications)
      .set({ status: "approved", reviewedAt: new Date(), updatedAt: new Date() })
      .where(eq(schema.partnershipApplications.id, applicationId));

    await tx
      .update(schema.userProfiles)
      .set({ approvalStatus: "active", updatedAt: new Date() })
      .where(eq(schema.userProfiles.userId, application.userId));

    const partnerId = crypto.randomUUID();
    await tx.insert(schema.partners).values({
      id: partnerId,
      userId: application.userId,
      applicationId: application.id,
      name: application.partnerName,
      address: application.partnerAddress,
      phone: application.partnerPhone,
      email: application.partnerEmail,
    });

    await tx.insert(schema.outlets).values({
      id: crypto.randomUUID(),
      partnerId,
      packageId: application.packageId,
      name: `${application.partnerName} Outlet`,
      address: application.partnerAddress,
      status: "setup",
    });

    await tx
      .update(schema.payments)
      .set({ status: "valid", validatedAt: new Date() })
      .where(eq(schema.payments.applicationId, applicationId));
  });

  revalidatePath("/dashboard/admin");
  revalidatePath("/dashboard/admin/pendaftaran");
}

export async function rejectApplication(formData: FormData) {
  await requireProfile("admin");
  const applicationId = String(formData.get("applicationId") ?? "");

  if (!applicationId || !process.env.DATABASE_URL) return;

  const application = await db.query.partnershipApplications.findFirst({
    where: eq(schema.partnershipApplications.id, applicationId),
  });

  if (!application) return;

  await db.transaction(async (tx) => {
    await tx
      .update(schema.partnershipApplications)
      .set({ status: "rejected", reviewedAt: new Date(), updatedAt: new Date() })
      .where(eq(schema.partnershipApplications.id, applicationId));

    await tx
      .update(schema.userProfiles)
      .set({ approvalStatus: "rejected", updatedAt: new Date() })
      .where(eq(schema.userProfiles.userId, application.userId));

    await tx
      .update(schema.payments)
      .set({ status: "rejected" })
      .where(eq(schema.payments.applicationId, applicationId));
  });

  revalidatePath("/dashboard/admin");
  revalidatePath("/dashboard/admin/pendaftaran");
}
