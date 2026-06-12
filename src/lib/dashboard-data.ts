import { and, desc, eq, gte, sql, sum } from "drizzle-orm";
import { db, schema } from "@/lib/db";

export async function getAdminDashboardData() {
  if (!process.env.DATABASE_URL) {
    return {
      pendingApplications: 0,
      activePartners: 0,
      pendingPayments: 0,
      applications: [],
    };
  }

  const applications = await db.query.partnershipApplications.findMany({
    with: {
      package: true,
      salesPic: true,
    },
    orderBy: [desc(schema.partnershipApplications.createdAt)],
    limit: 10,
  });

  const pendingApplications = applications.filter((item) => item.status === "pending").length;

  const activeProfiles = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(schema.userProfiles)
    .where(eq(schema.userProfiles.approvalStatus, "active"));

  const waitingPayments = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(schema.payments)
    .where(eq(schema.payments.status, "waiting_validation"));

  return {
    pendingApplications,
    activePartners: activeProfiles[0]?.count ?? 0,
    pendingPayments: waitingPayments[0]?.count ?? 0,
    applications,
  };
}

export async function getMitraDashboardData(userId: string) {
  if (!process.env.DATABASE_URL) {
    return {
      application: null,
      partner: null,
      outlet: null,
      todayRevenue: 0,
      monthRevenue: 0,
      recentRevenue: [],
    };
  }

  const application = await db.query.partnershipApplications.findFirst({
    where: eq(schema.partnershipApplications.userId, userId),
    with: {
      package: true,
      salesPic: true,
    },
    orderBy: [desc(schema.partnershipApplications.createdAt)],
  });

  const partner = await db.query.partners.findFirst({
    where: eq(schema.partners.userId, userId),
  });

  const outlet = partner
    ? await db.query.outlets.findFirst({
        where: eq(schema.outlets.partnerId, partner.id),
      })
    : null;

  const recentRevenue = outlet
    ? await db.query.revenueRecords.findMany({
        where: eq(schema.revenueRecords.outletId, outlet.id),
        orderBy: [desc(schema.revenueRecords.revenueDate)],
        limit: 14,
      })
    : [];

  const today = new Date().toISOString().slice(0, 10);
  const monthStart = `${today.slice(0, 8)}01`;

  const todayRevenue = recentRevenue
    .filter((item) => item.revenueDate === today)
    .reduce((total, item) => total + item.revenue, 0);

  const monthRevenue = outlet
    ? await db
        .select({ value: sum(schema.revenueRecords.revenue) })
        .from(schema.revenueRecords)
        .where(
          and(
            eq(schema.revenueRecords.outletId, outlet.id),
            gte(schema.revenueRecords.revenueDate, monthStart)
          )
        )
    : [{ value: "0" }];

  return {
    application,
    partner,
    outlet,
    todayRevenue,
    monthRevenue: Number(monthRevenue[0]?.value ?? 0),
    recentRevenue,
  };
}
