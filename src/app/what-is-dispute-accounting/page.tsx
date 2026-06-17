import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { CPR_PART_35_CONTENT } from "@/data/shared-content";

export const metadata = createMetadata({
  title: "What Is Dispute Accounting? | Definition & Role",
  description:
    "Dispute accounting is the application of forensic accounting expertise to litigation, arbitration, and commercial disputes. Loss quantification, fraud investigation, and expert witness reports explained.",
  path: "/what-is-dispute-accounting",
});

export default function WhatIsDisputeAccountingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "What Is Dispute Accounting?",
            path: "/what-is-dispute-accounting",
          },
        ])}
      />
      <PageHero
        title="What Is Dispute Accounting?"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What Is Dispute Accounting?" },
        ]}
      />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          <h2>Definition</h2>
          <p>
            Dispute accounting is a specialist branch of forensic accounting
            focused on the financial analysis, investigation, and quantification
            required to resolve legal disputes. It encompasses expert witness
            evidence, loss quantification, fraud investigation, asset tracing,
            business valuation in contentious contexts, and accounting advisory
            in litigation, arbitration, and alternative dispute resolution.
          </p>

          <h2>How It Differs from Regular Accounting</h2>
          <p>
            Regular accounting focuses on financial reporting, compliance, tax,
            and business advisory, the ongoing financial management of an
            organisation. Dispute accounting applies forensic investigative
            skills and accounting expertise specifically to resolve
            disagreements, analysing historical financial records with the
            rigour of a forensic investigation, producing court-admissible
            reports, and presenting findings under cross-examination.
          </p>

          <h2>What Dispute Accountants Do</h2>
          <ul>
            <li>
              Quantify financial losses arising from breach of contract, fraud,
              or other commercial wrongs
            </li>
            <li>Investigate financial irregularities and suspected fraud</li>
            <li>Trace assets through complex transaction records</li>
            <li>Value businesses and shareholdings in contentious contexts</li>
            <li>Prepare CPR Part 35 compliant expert witness reports</li>
            <li>
              Attend court, arbitration, or tribunal to give oral evidence
            </li>
            <li>Act as Single Joint Expert (SJE) where directed</li>
            <li>
              Provide dispute advisory to assist parties in resolving disputes
              without litigation
            </li>
            <li>Review and rebut opposing expert accounting evidence</li>
          </ul>

          <h2>When Is Dispute Accounting Needed?</h2>
          <h3>For Solicitors</h3>
          <ul>
            <li>
              Client needs an expert witness for an accounting-related dispute
            </li>
            <li>Loss quantification for a commercial claim</li>
            <li>Fraud investigation supporting civil recovery proceedings</li>
            <li>Business valuation in shareholder or matrimonial dispute</li>
            <li>Rebuttal of opposing expert&apos;s accounting evidence</li>
          </ul>
          <h3>For Businesses</h3>
          <ul>
            <li>Suspected internal fraud or financial irregularity</li>
            <li>
              Shareholder conflict requiring independent financial analysis
            </li>
            <li>
              M&A deal dispute, completion accounts or warranty claims
            </li>
            <li>Partnership dissolution with disputed financials</li>
            <li>Insurance claim requiring independent loss assessment</li>
          </ul>
          <p>
            <Link href="/who-we-help/solicitors-law-firms" className="text-accent">
              Dispute accounting for solicitors →
            </Link>{" "}
            |{" "}
            <Link
              href="/who-we-help/businesses-individuals"
              className="text-accent"
            >
              For businesses →
            </Link>
          </p>

          <h2>CPR Part 35 & Expert Duties</h2>
          {CPR_PART_35_CONTENT.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
          <p>
            <Link href="/qualifications" className="text-accent">
              Expert qualifications and CPR compliance →
            </Link>
          </p>

          <h2>Dispute Accounting vs Forensic Accounting</h2>
          <p>
            These terms are used interchangeably in disputes market.
            &quot;Forensic accounting&quot; is the broader term covering all
            investigative financial work; &quot;dispute accounting&quot;
            specifically refers to forensic accounting applied in the context of
            legal disputes and litigation. All dispute accountants are forensic
            accountants, but not all forensic accounting work is
            dispute-focused.
          </p>
          <p>
            <Link href="/dispute-types" className="text-accent">
              Types of accounting disputes →
            </Link>{" "}
            |{" "}
            <Link href="/services" className="text-accent">
              Our services →
            </Link>
          </p>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
