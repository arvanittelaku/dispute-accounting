import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Who We Help | Dispute Accounting for Solicitors & Businesses UK",
  description:
    "Dispute accounting services for UK solicitors and law firms needing expert witnesses, and for businesses and individuals facing financial disputes.",
  path: "/who-we-help",
});

export default function WhoWeHelpPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help" },
        ])}
      />
      <PageHero
        title="Who We Help"
        subtitle="DisputeAccounting.com serves two distinct audiences, UK solicitors instructing expert witnesses, and businesses and individuals facing financial disputes. Both need independent forensic accounting expertise; the instruction pathway differs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Who We Help" },
        ]}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Solicitors & Law Firms"
            href="/who-we-help/solicitors-law-firms"
            description="Expert witness reports, SJE appointments, rebuttal reports, and litigation support. CPR Part 35 and FPR Part 25 compliant dispute accountants for every case type."
          />
          <Card
            title="Businesses & Individuals"
            href="/who-we-help/businesses-individuals"
            description="Fraud investigation, shareholder disputes, M&A deal failures, and financial analysis before or instead of litigation. Independent dispute accounting without requiring a solicitor first."
          />
        </div>
        <p className="prose-content mt-10 max-w-3xl text-body leading-relaxed">
          Whether you are a solicitor preparing for trial or a business owner who
          has discovered a financial irregularity, the right dispute accountant
          provides the independent analysis courts and tribunals rely on.{" "}
          <Link href="/what-is-dispute-accounting" className="text-accent underline">
            What is dispute accounting?
          </Link>{" "}
          |{" "}
          <Link href="/how-to-instruct" className="text-accent underline">
            How to instruct
          </Link>{" "}
          |{" "}
          <Link href="/contact" className="text-accent underline">
            Contact us
          </Link>
        </p>
      </Section>
      <CTASection />
    </>
  );
}
