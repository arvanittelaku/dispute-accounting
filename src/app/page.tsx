import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { JsonLd } from "@/components/JsonLd";
import {
  organizationSchema,
  professionalServiceSchema as buildProfessionalServiceSchema,
  serviceNode,
  websiteSchema,
} from "@/lib/schema";
import { services } from "@/data/services";
import { RelatedLinks } from "@/components/RelatedLinks";
import { HOMEPAGE_SEO_LINKS } from "@/lib/seo-internal-links";

const serviceCards = [
  { href: "/services#loss-quantification", title: "Loss Quantification & Quantum" },
  { href: "/services#fraud-investigation", title: "Fraud Investigation & Detection" },
  { href: "/services#asset-tracing", title: "Asset Tracing & Recovery" },
  { href: "/services#business-share-valuation", title: "Business & Share Valuation" },
  {
    href: "/services#shareholder-partnership-disputes",
    title: "Shareholder & Partnership Disputes",
  },
  { href: "/services#ma-transaction-disputes", title: "M&A Transaction Disputes" },
  { href: "/services#matrimonial-financial", title: "Matrimonial Financial Disputes" },
  { href: "/services#expert-witness-reports", title: "Expert Witness Reports & Testimony" },
];

const stats = [
  ["Typical hourly rate", "£150–£500/hr", "Industry average"],
  ["Court framework (civil)", "CPR Part 35", "Civil Procedure Rules"],
  ["Court framework (family)", "FPR Part 25", "Family Procedure Rules"],
  ["Primary credential", "ACA/FCA + CFE", "ICAEW / ACFE"],
  ["Grant Thornton disputes ranking", "Band 1", "Chambers & Partners 2025"],
  ["Typical report completion", "4–12 weeks", "Case-dependent"],
  ["Available as SJE", "Yes", "CPR 35.7"],
];

export default function HomePage() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      buildProfessionalServiceSchema(services.map((s) => s.name)),
      websiteSchema,
      ...services.map((s) => serviceNode(s.id, s.name, s.description)),
    ],
  };

  return (
    <>
      <JsonLd data={homepageSchema} />
      <PageHero
        title="Dispute Accounting Services for UK Solicitors & Businesses"
        subtitle="When financial complexity meets legal conflict, you need a forensic accountant who speaks both languages, accounting and litigation. DisputeAccounting.com connects UK solicitors and businesses with qualified dispute accountants: forensic accounting experts who quantify losses, investigate fraud, trace assets, and deliver CPR Part 35 compliant expert witness reports."
      />
      <Section>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/who-we-help/solicitors-law-firms"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-[#8f4f17] sm:w-auto"
          >
            I&apos;m a Solicitor
          </Link>
          <Link
            href="/who-we-help/businesses-individuals"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded border-2 border-primary px-8 py-3 font-semibold text-primary transition-colors hover:bg-section-alt sm:w-auto"
          >
            I&apos;m a Business
          </Link>
        </div>
      </Section>

      <Section alt>
        <h2 className="text-2xl font-bold text-heading sm:text-3xl">
          What Our Dispute Accountants Cover
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card) => (
            <Card key={card.href} title={card.title} href={card.href} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold text-heading sm:text-3xl">
          Dispute Accounting UK: Key Facts
        </h2>
        <ResponsiveTable className="mt-6">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="bg-section-alt">
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Metric
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Figure
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.map(([metric, figure, source]) => (
                <tr key={metric}>
                  <td className="border border-border px-4 py-3 text-body">
                    {metric}
                  </td>
                  <td className="border border-border px-4 py-3 font-medium text-heading">
                    {figure}
                  </td>
                  <td className="border border-border px-4 py-3 text-body">
                    {source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ResponsiveTable>
        <p className="mt-4 text-sm text-body/80">
          Sources: Chambers and Partners 2025; Civil Procedure Rules Part 35;
          Association of Certified Fraud Examiners. Rates are indicative.
        </p>
      </Section>

      <Section alt>
        <h2 className="text-2xl font-bold text-heading sm:text-3xl">
          Who Uses Dispute Accounting?
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card
            title="Solicitors & Law Firms"
            href="/who-we-help/solicitors-law-firms"
            description="You need an independent forensic accountant who produces CPR Part 35 compliant expert reports, gives credible oral evidence, and withstands cross-examination."
          />
          <Card
            title="Businesses & Individuals"
            href="/who-we-help/businesses-individuals"
            description="You've discovered fraud, you're in a shareholder dispute, or your M&A deal has gone wrong. You need a dispute accountant to investigate and quantify the financial position."
          />
        </div>
        <p className="mt-8 text-body leading-relaxed">
          <strong className="text-heading">Dispute accounting</strong> is the
          forensic accounting industry&apos;s term for applying accounting
          expertise to legal disputes, expert witness reports, loss
          quantification, fraud investigation, and more.{" "}
          <Link href="/what-is-dispute-accounting" className="text-accent underline">
            Read our full definition →
          </Link>{" "}
          or explore{" "}
          <Link href="/dispute-types" className="text-accent underline">
            types of accounting disputes
          </Link>
          .
        </p>
        <RelatedLinks links={HOMEPAGE_SEO_LINKS} title="Explore Further" />
      </Section>

      <CTASection />
    </>
  );
}
