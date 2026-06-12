import {
  boolean,
  date,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const roleEnum = pgEnum("role", ["admin", "mitra"]);
export const approvalStatusEnum = pgEnum("approval_status", [
  "pending",
  "active",
  "rejected",
  "suspended",
]);
export const partnershipSystemEnum = pgEnum("partnership_system", [
  "auto_pilot",
  "semi_auto_pilot",
  "self_manage",
]);
export const paymentTypeEnum = pgEnum("payment_type", ["dp", "full_payment"]);
export const paymentStatusEnum = pgEnum("payment_status", [
  "waiting_validation",
  "valid",
  "rejected",
  "partial",
  "paid",
]);
export const documentTypeEnum = pgEnum("document_type", [
  "ktp",
  "npwp",
  "partner_photo",
  "payment_proof",
]);
export const applicationStatusEnum = pgEnum("application_status", [
  "pending",
  "approved",
  "rejected",
]);

export const userProfiles = pgTable("user_profiles", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  role: roleEnum("role").notNull().default("mitra"),
  approvalStatus: approvalStatusEnum("approval_status").notNull().default("pending"),
  phone: text("phone"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const salesPics = pgTable("sales_pics", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone"),
  email: text("email"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const packages = pgTable("packages", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  basePrice: integer("base_price").notNull(),
  description: text("description"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const partnershipApplications = pgTable("partnership_applications", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  salesPicId: text("sales_pic_id").references(() => salesPics.id, { onDelete: "set null" }),
  packageId: text("package_id")
    .notNull()
    .references(() => packages.id),
  partnershipSystem: partnershipSystemEnum("partnership_system").notNull(),
  partnerName: text("partner_name").notNull(),
  partnerAddress: text("partner_address").notNull(),
  partnerPhone: text("partner_phone").notNull(),
  partnerEmail: text("partner_email").notNull(),
  registrationDate: timestamp("registration_date").notNull(),
  basePackagePrice: integer("base_package_price").notNull(),
  dateDiscountAmount: integer("date_discount_amount").notNull(),
  finalPackagePrice: integer("final_package_price").notNull(),
  paymentType: paymentTypeEnum("payment_type").notNull(),
  amountDue: integer("amount_due").notNull(),
  transferSenderName: text("transfer_sender_name").notNull(),
  transferSenderBank: text("transfer_sender_bank").notNull(),
  transferSenderAccountNumber: text("transfer_sender_account_number").notNull(),
  proofFileKey: text("proof_file_key").notNull(),
  status: applicationStatusEnum("status").notNull().default("pending"),
  adminNotes: text("admin_notes"),
  reviewedAt: timestamp("reviewed_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const partners = pgTable("partners", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  applicationId: text("application_id").references(() => partnershipApplications.id),
  name: text("name").notNull(),
  address: text("address").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const outlets = pgTable("outlets", {
  id: text("id").primaryKey(),
  partnerId: text("partner_id")
    .notNull()
    .references(() => partners.id, { onDelete: "cascade" }),
  packageId: text("package_id").references(() => packages.id),
  name: text("name").notNull(),
  address: text("address"),
  status: text("status").notNull().default("setup"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const products = pgTable("products", {
  id: text("id").primaryKey(),
  packageId: text("package_id").references(() => packages.id, { onDelete: "set null" }),
  name: text("name").notNull(),
  category: text("category"),
  price: integer("price"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const payments = pgTable("payments", {
  id: text("id").primaryKey(),
  applicationId: text("application_id")
    .notNull()
    .references(() => partnershipApplications.id, { onDelete: "cascade" }),
  partnerId: text("partner_id").references(() => partners.id, { onDelete: "set null" }),
  type: paymentTypeEnum("type").notNull(),
  amount: integer("amount").notNull(),
  status: paymentStatusEnum("status").notNull().default("waiting_validation"),
  validatedAt: timestamp("validated_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const paymentProofs = pgTable("payment_proofs", {
  id: text("id").primaryKey(),
  paymentId: text("payment_id").references(() => payments.id, { onDelete: "cascade" }),
  applicationId: text("application_id").references(() => partnershipApplications.id, {
    onDelete: "cascade",
  }),
  fileKey: text("file_key").notNull(),
  fileName: text("file_name").notNull(),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const partnerDocuments = pgTable("partner_documents", {
  id: text("id").primaryKey(),
  applicationId: text("application_id")
    .notNull()
    .references(() => partnershipApplications.id, { onDelete: "cascade" }),
  partnerId: text("partner_id").references(() => partners.id, { onDelete: "set null" }),
  type: documentTypeEnum("type").notNull(),
  fileKey: text("file_key").notNull(),
  fileName: text("file_name").notNull(),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const sheetConnections = pgTable("sheet_connections", {
  id: text("id").primaryKey(),
  outletId: text("outlet_id")
    .notNull()
    .references(() => outlets.id, { onDelete: "cascade" }),
  spreadsheetId: text("spreadsheet_id").notNull(),
  sheetName: text("sheet_name").notNull(),
  dateColumn: text("date_column").notNull().default("Tanggal"),
  revenueColumn: text("revenue_column").notNull().default("Omset"),
  transactionColumn: text("transaction_column").default("Transaksi"),
  lastSyncedAt: timestamp("last_synced_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const revenueRecords = pgTable(
  "revenue_records",
  {
    id: text("id").primaryKey(),
    outletId: text("outlet_id")
      .notNull()
      .references(() => outlets.id, { onDelete: "cascade" }),
    revenueDate: date("revenue_date").notNull(),
    revenue: integer("revenue").notNull(),
    transactions: integer("transactions"),
    raw: jsonb("raw"),
    sourceRowHash: text("source_row_hash").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => ({
    outletDateHashIdx: uniqueIndex("revenue_records_outlet_date_hash_idx").on(
      table.outletId,
      table.revenueDate,
      table.sourceRowHash
    ),
  })
);

export const applicationRelations = relations(partnershipApplications, ({ one }) => ({
  user: one(user, {
    fields: [partnershipApplications.userId],
    references: [user.id],
  }),
  package: one(packages, {
    fields: [partnershipApplications.packageId],
    references: [packages.id],
  }),
  salesPic: one(salesPics, {
    fields: [partnershipApplications.salesPicId],
    references: [salesPics.id],
  }),
}));
