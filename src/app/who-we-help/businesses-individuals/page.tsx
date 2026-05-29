import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BUSINESS_PAGE_LINKS } from "@/lib/seo-internal-links";

export const metadata = createMetadata({
  title:
    "Dispute Accounting for Businesses & Individuals UK | Financial Dispute Help",
  description:
    "Dispute accounting for UK businesses and individuals facing fraud, shareholder conflict, M&A disputes, or financial irregularities. Independent forensic accounting support.",
  path: "/who-we-help/businesses-individuals",
});

export default function BusinessesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Who We Help", path: "/who-we-help" },
        {
          name: "Businesses & Individuals",
          path: "/who-we-help/businesses-individuals",
        },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        title="Dispute Accounting for UK Businesses & Individuals"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Who We Help", href: "/who-we-help" },
          { label: "Businesses & Individuals" },
        ]}
      />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          <h2>You Don&apos;t Always Need a Solicitor First</h2>
          <p>
            Many businesses and individuals discover a financial dispute before
            engaging a solicitor, a suspected fraud, a shareholder conflict, a
            deal that has gone wrong. A dispute accountant can help you
            understand the financial position, quantify what has happened, and
            advise on whether formal legal proceedings are warranted, and
            prepare the evidence if they are.
          </p>

          <h2>Common Situations Where Businesses Need Us</h2>
          <ul>
            <li>
              Suspected employee fraud or financial irregularity discovered
              internally
            </li>
            <li>Shareholder or director dispute with financial at its core</li>
            <li>
              M&A deal that has not gone as expected, completion accounts,
              warranty claims, earn-out disputes
            </li>
            <li>
              Partnership dissolution with disputed profits, goodwill, or
              capital accounts
            </li>
            <li>Insurance claim requiring independent loss assessment</li>
            <li>HMRC investigation requiring independent financial analysis</li>
            <li>Contract dispute where you have suffered financial loss</li>
          </ul>

          <h2>How We Help Businesses</h2>
          <ul>
            <li>
              Independent investigation of suspected fraud (evidence-quality
              workpapers)
            </li>
            <li>Quantification of financial losses for claim or defence</li>
            <li>Financial analysis supporting negotiation and settlement</li>
            <li>Report prepared to court standard (ready for litigation if needed)</li>
            <li>Advisory support through the dispute resolution process</li>
          </ul>

          <h2>What to Bring to Your First Conversation</h2>
          <p>
            Financial records (accounts, bank statements, management
            information), the contracts or agreements at issue, any
            correspondence, and a clear description of what you believe has gone
            wrong financially.
          </p>
          <RelatedLinks links={BUSINESS_PAGE_LINKS} />
        </div>
      </Section>
      <CTASection
        title="Discuss Your Dispute"
        description="Tell us about your situation and we will match you with a qualified UK dispute accountant. Response within 1 business day."
        buttonLabel="Discuss Your Dispute"
      />
    </>
  );
}
