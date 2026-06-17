import Link from "next/link";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";

const servicesCol = [
  { href: "/services#loss-quantification", label: "Loss Quantification" },
  { href: "/services#fraud-investigation", label: "Fraud Investigation" },
  { href: "/services#asset-tracing", label: "Asset Tracing" },
  { href: "/services#business-share-valuation", label: "Business Valuation" },
  {
    href: "/services#shareholder-partnership-disputes",
    label: "Shareholder Disputes",
  },
  { href: "/services#ma-transaction-disputes", label: "M&A Disputes" },
  { href: "/services#matrimonial-financial", label: "Matrimonial Financial" },
  { href: "/services#expert-witness-reports", label: "Expert Witness Reports" },
];

const caseTypesCol = [
  {
    href: "/case-types/commercial-contract-disputes",
    label: "Commercial Contracts",
  },
  { href: "/case-types/shareholder-disputes", label: "Shareholder Disputes" },
  { href: "/case-types/fraud-financial-crime", label: "Fraud & Financial Crime" },
  { href: "/case-types/ma-transaction-disputes", label: "M&A Disputes" },
  { href: "/case-types/matrimonial-financial-disputes", label: "Matrimonial" },
  { href: "/case-types", label: "View all 10 →" },
];

const resourcesCol = [
  { href: "/guides", label: "Guides" },
  { href: "/glossary", label: "Glossary" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/what-is-dispute-accounting", label: "What Is Dispute Accounting?" },
];

const whoWeHelpCol = [
  { href: "/who-we-help/solicitors-law-firms", label: "Solicitors & Law Firms" },
  {
    href: "/who-we-help/businesses-individuals",
    label: "Businesses & Individuals",
  },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              Services
            </h3>
            <ul className="space-y-2">
              {servicesCol.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              Case Types
            </h3>
            <ul className="space-y-2">
              {caseTypesCol.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourcesCol.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
              Who We Help
            </h3>
            <ul className="space-y-2">
              {whoWeHelpCol.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-8">
          <p className="text-sm text-white/70">
            <span className="text-white/80">Email: </span>
            <SiteEmailLink className="font-medium text-white hover:underline" />
          </p>
          <p className="mt-3 text-sm text-white/60">
            DisputeAccounting.com connects legal teams and businesses with dispute
            accounting experts. We are not a law firm and do not provide legal
            advice.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>
            <CookieSettingsButton />
          </div>
          <p className="mt-4 text-sm text-white/50">
            © 2025 DisputeAccounting.
          </p>
        </div>
      </div>
    </footer>
  );
}
