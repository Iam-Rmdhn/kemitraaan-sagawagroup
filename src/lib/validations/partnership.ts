import { z } from "zod";

export const partnershipRegistrationSchema = z.object({
  partnershipSystem: z.enum(["auto_pilot", "semi_auto_pilot", "self_manage"]),
  salesPicId: z.string().optional(),
  packageSlug: z.string().min(1, "Paket usaha wajib dipilih"),
  name: z.string().min(3, "Nama wajib diisi"),
  address: z.string().min(10, "Alamat wajib diisi"),
  phone: z.string().min(8, "No HP wajib diisi"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  paymentType: z.enum(["dp", "full_payment"]),
  transferSenderName: z.string().min(3, "Nama pengirim wajib diisi"),
  transferSenderBank: z.string().min(2, "Bank pengirim wajib diisi"),
  transferSenderAccountNumber: z.string().min(4, "No rekening pengirim wajib diisi"),
});

export type PartnershipRegistrationInput = z.infer<typeof partnershipRegistrationSchema>;
