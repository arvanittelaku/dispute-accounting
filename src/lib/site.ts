export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.disputeaccounting.com";

export const SITE_NAME = "DisputeAccounting";
export const SITE_EMAIL = "contact@disputeaccounting.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/dispute-accounting";

export const COLORS = {
  primary: "#0D3D4A",
  accent: "#B5651D",
  background: "#FFFFFF",
  sectionAlt: "#F5F9FA",
  border: "#D0E4E8",
  heading: "#0D3D4A",
  body: "#374151",
} as const;
