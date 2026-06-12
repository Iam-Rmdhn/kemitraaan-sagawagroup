export type PartnershipSystem = "auto_pilot" | "semi_auto_pilot" | "self_manage";
export type PaymentType = "dp" | "full_payment";

export const partnershipSystems: Array<{
  value: PartnershipSystem;
  label: string;
  description: string;
}> = [
  {
    value: "auto_pilot",
    label: "Auto Pilot",
    description: "Operasional dibantu penuh oleh tim Sagawa sesuai kesepakatan kemitraan.",
  },
  {
    value: "semi_auto_pilot",
    label: "Semi Auto Pilot",
    description: "Operasional dikelola bersama dengan supervisi dan pendampingan pusat.",
  },
  {
    value: "self_manage",
    label: "Self Manage",
    description: "Mitra mengelola outlet sendiri dengan standar dan dukungan Sagawa.",
  },
];

export const packageSeeds = [
  {
    slug: "kagawa-ricebowl",
    name: "Kagawa Rice Bowl",
    basePrice: 150_000_000,
  },
  {
    slug: "kagawa-coffee",
    name: "Kagawa Coffee Conner",
    basePrice: 125_000_000,
  },
  {
    slug: "kagawa-coffee-ricebowl",
    name: "Kagawa Coffee & Rice Bowl Conner",
    basePrice: 259_000_000,
  },
  {
    slug: "rm-nusantara",
    name: "RM Nusantara",
    basePrice: 189_000_000,
  },
  {
    slug: "independent-brand",
    name: "Independent Brand",
    basePrice: 389_000_000,
  },
];
