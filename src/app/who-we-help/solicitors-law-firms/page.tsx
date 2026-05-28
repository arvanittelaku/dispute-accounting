import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import {
  CPR_PART_35_CONTENT,
  SJE_VS_PAE_CONTENT,
  FPR_PART_25_CONTENT,
} from "@/data/shared-content";
import { caseTypes } from "@/data/case-types";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SOLICITORS_PAGE_LINKS } from "@/lib/seo-internal-links";

export const metadata = createMetadata({
  title:
    "Dispute Accounting for Solicitors & Law Firms UK | Expert Witness Reports",
  description:
    "Forensic accountants and dispute accounting expert witnesses for UK solicitors. CPR Part 35 compliant reports, SJE appointments, and litigation support across all dispute types.",
  path: "/who-we-help/solicitors-law-firms",
});

export default function SolicitorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Who We Help", path: "/who-we-help" },
        {
          name: "Solicitors & Law Firms",
          path: "/who-we-help/solicitors-law-firms",
        },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        title="Dispute Accounting for UK Solicitors & Law Firms"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Who We Help", href: "/who-we-help" },
          { label: "Solicitors & Law Firms" },
        ]}
      />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          <h2>What Solicitors Need from a Dispute Accountant</h2>
          <p>
            Expert witness reports that are technically sound, clearly written,
            defensible under cross-examination, and compliant with CPR Part 35
            and FPR Part 25. Dispute accountants who understand litigation
            procedure and can work within court timetables.
          </p>

          <h2>How We Support Solicitors</h2>
          <ul>
            <li>
              Preliminary review and case assessment (before formal instruction)
            </li>
            <li>Expert witness reports (CPR Part 35 / FPR Part 25)</li>
            <li>SJE appointments (jointly instructed by both parties)</li>
            <li>Rebuttal reports (responding to opposing expert)</li>
            <li>Joint expert meetings and joint statements</li>
            <li>Oral evidence at trial, arbitration, or tribunal</li>
            <li>Shadow expert / litigation support (advisory only)</li>
            <li>Expert determination (acting as decision-maker)</li>
          </ul>

          <h2>Practice Areas We Cover</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caseTypes.map((ct) => (
            <Card
              key={ct.slug}
              title={ct.title}
              href={`/case-types/${ct.slug}`}
            />
          ))}
        </div>

        <div className="prose-content mx-auto mt-10 max-w-3xl">
          <h2>CPR Part 35 & FPR Part 25 Compliance</h2>
          {CPR_PART_35_CONTENT.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
          <p>{FPR_PART_25_CONTENT}</p>

          <h2>SJE vs Party-Appointed</h2>
          {SJE_VS_PAE_CONTENT.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
          <RelatedLinks links={SOLICITORS_PAGE_LINKS} />
        </div>
      </Section>
      <CTASection
        title="Instruct a Dispute Accountant"
        buttonLabel="Instruct an Expert"
      />
    </>
  );
}
