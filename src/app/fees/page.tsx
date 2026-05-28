import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Dispute Accounting Fees UK | 2025 Hourly Rates & Costs",
  description:
    "UK dispute accountants typically charge £150–£500/hour. Learn about fee structures, retainers, report costs, and what affects total engagement costs.",
  path: "/fees",
});

export default function FeesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Fees", path: "/fees" },
        ])}
      />
      <PageHero
        title="Dispute Accounting Fees UK"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Fees" }]}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <h2>Forensic Accountant Rates</h2>
          <ul>
            <li>
              Fraud investigation / loss quantification: £150–£350/hour
              (regional); £300–£500/hour (London / senior)
            </li>
            <li>
              Expert witness (High Court / international arbitration):
              £450–£750/hour
            </li>
            <li>
              Leading forensic accounting partners (Big 4 / top firms):
              £700–£1,200+/hour
            </li>
          </ul>

          <h2>Report Costs</h2>
          <ul>
            <li>
              Standard loss quantification or fraud report: £5,000–£20,000
            </li>
            <li>
              Complex multi-issue report (High Court quality): £20,000–£75,000+
            </li>
            <li>SJE report (shared between parties): 50% of above per party</li>
            <li>Rebuttal report: £3,000–£15,000</li>
            <li>Preliminary review: £1,500–£5,000</li>
          </ul>

          <h2>Fee Structures</h2>
          <p>
            Hourly billing is the most common structure for dispute accounting
            engagements. Fixed fees may be agreed for defined scopes such as a
            preliminary review or a single-issue valuation. Retainers are used
            for ongoing disputes requiring regular advisory support. Contingency
            fee arrangements (no win, no fee) are not permitted for expert
            witnesses under CPR Part 35 — the expert&apos;s duty to the court
            requires independence from the outcome.
          </p>

          <h2>What Affects Cost</h2>
          <ul>
            <li>Complexity and volume of financial records</li>
            <li>
              Whether multiple issues are combined (valuation + loss + fraud)
            </li>
            <li>
              Court level (County Court vs High Court vs arbitration)
            </li>
            <li>Whether oral evidence at trial is required</li>
            <li>Whether a rebuttal report to opposing expert is needed</li>
            <li>International element requiring multi-jurisdiction analysis</li>
          </ul>

          <h2>Sources</h2>
          <p className="text-sm text-body/80">
            Rates are indicative based on industry surveys, Chambers and Partners
            2025 forensic accounting rankings, and typical UK forensic practice
            fee structures. Actual fees depend on expert seniority, case
            complexity, and geographic location. Always agree fees in writing
            before formal instruction.
          </p>
        </article>
      </Section>
      <CTASection />
    </>
  );
}
