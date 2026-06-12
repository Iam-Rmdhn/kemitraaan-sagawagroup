import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db, schema } from "@/lib/db";
import { packageSeeds } from "@/lib/partnership-data";
import { DP_AMOUNT, getFinalPackagePrice } from "@/lib/pricing";
import { uploadFileToR2 } from "@/lib/services/r2";
import { partnershipRegistrationSchema } from "@/lib/validations/partnership";

export const runtime = "nodejs";

const requiredFiles = ["ktp", "npwp", "partnerPhoto", "paymentProof"] as const;

export async function POST(request: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "DATABASE_URL belum diset. Isi env Neon dulu sebelum submit pendaftaran." },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const payload = Object.fromEntries(
      Array.from(formData.entries()).filter(([, value]) => typeof value === "string")
    );
    const parsed = partnershipRegistrationSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Data tidak valid." }, { status: 400 });
    }

    const files = Object.fromEntries(
      requiredFiles.map((key) => [key, formData.get(key)])
    ) as Record<(typeof requiredFiles)[number], FormDataEntryValue | null>;

    for (const key of requiredFiles) {
      if (!(files[key] instanceof File) || files[key].size === 0) {
        return NextResponse.json({ error: "Foto KTP, NPWP, foto mitra, dan bukti transfer wajib diupload." }, { status: 400 });
      }
    }

    await ensurePackages();

    const selectedPackage = await db.query.packages.findFirst({
      where: eq(schema.packages.slug, parsed.data.packageSlug),
    });

    if (!selectedPackage) {
      return NextResponse.json({ error: "Paket usaha tidak ditemukan." }, { status: 404 });
    }

    const registrationDate = new Date();
    const pricing = getFinalPackagePrice(selectedPackage.basePrice, registrationDate);
    const amountDue =
      parsed.data.paymentType === "dp" ? DP_AMOUNT : pricing.finalPrice;

    const signUpResult = await auth.api.signUpEmail({
      body: {
        email: parsed.data.email,
        password: parsed.data.password,
        name: parsed.data.name,
      },
      headers: request.headers,
    });
    const authUser = signUpResult.user;

    const applicationId = crypto.randomUUID();
    const folder = `partnership-applications/${applicationId}`;
    const ktpFile = await uploadFileToR2(files.ktp as File, folder);
    const npwpFile = await uploadFileToR2(files.npwp as File, folder);
    const partnerPhotoFile = await uploadFileToR2(files.partnerPhoto as File, folder);
    const proofFile = await uploadFileToR2(files.paymentProof as File, folder);

    await db.transaction(async (tx) => {
      await tx.insert(schema.userProfiles).values({
        id: crypto.randomUUID(),
        userId: authUser.id,
        role: "mitra",
        approvalStatus: "pending",
        phone: parsed.data.phone,
      });

      await tx.insert(schema.partnershipApplications).values({
        id: applicationId,
        userId: authUser.id,
        salesPicId: parsed.data.salesPicId || null,
        packageId: selectedPackage.id,
        partnershipSystem: parsed.data.partnershipSystem,
        partnerName: parsed.data.name,
        partnerAddress: parsed.data.address,
        partnerPhone: parsed.data.phone,
        partnerEmail: parsed.data.email,
        registrationDate,
        basePackagePrice: selectedPackage.basePrice,
        dateDiscountAmount: pricing.discount,
        finalPackagePrice: pricing.finalPrice,
        paymentType: parsed.data.paymentType,
        amountDue,
        transferSenderName: parsed.data.transferSenderName,
        transferSenderBank: parsed.data.transferSenderBank,
        transferSenderAccountNumber: parsed.data.transferSenderAccountNumber,
        proofFileKey: proofFile.key,
        status: "pending",
      });

      await tx.insert(schema.paymentProofs).values({
        id: crypto.randomUUID(),
        applicationId,
        fileKey: proofFile.key,
        fileName: proofFile.fileName,
        mimeType: proofFile.mimeType,
        size: proofFile.size,
      });

      await tx.insert(schema.partnerDocuments).values([
        {
          id: crypto.randomUUID(),
          applicationId,
          type: "ktp",
          fileKey: ktpFile.key,
          fileName: ktpFile.fileName,
          mimeType: ktpFile.mimeType,
          size: ktpFile.size,
        },
        {
          id: crypto.randomUUID(),
          applicationId,
          type: "npwp",
          fileKey: npwpFile.key,
          fileName: npwpFile.fileName,
          mimeType: npwpFile.mimeType,
          size: npwpFile.size,
        },
        {
          id: crypto.randomUUID(),
          applicationId,
          type: "partner_photo",
          fileKey: partnerPhotoFile.key,
          fileName: partnerPhotoFile.fileName,
          mimeType: partnerPhotoFile.mimeType,
          size: partnerPhotoFile.size,
        },
      ]);

      await tx.insert(schema.payments).values({
        id: crypto.randomUUID(),
        applicationId,
        type: parsed.data.paymentType,
        amount: amountDue,
        status: "waiting_validation",
      });
    });

    return NextResponse.json({ ok: true, applicationId });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Pendaftaran gagal diproses.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

async function ensurePackages() {
  const existing = await db.query.packages.findMany({
    columns: {
      slug: true,
    },
  });
  const existingSlugs = new Set(existing.map((item) => item.slug));
  const missing = packageSeeds.filter((item) => !existingSlugs.has(item.slug));

  if (missing.length === 0) return;

  await db.insert(schema.packages).values(
    missing.map((item) => ({
      id: crypto.randomUUID(),
      slug: item.slug,
      name: item.name,
      basePrice: item.basePrice,
    }))
  );
}
