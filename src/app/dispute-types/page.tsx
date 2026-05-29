import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { RelatedLinks } from "@/components/RelatedLinks";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { DISPUTE_TYPES_PAGE_LINKS } from "@/lib/seo-internal-links";

export const metadata = createMetadata({
  title:
    "Types of Accounting Disputes UK | When You Need a Forensic Accountant",
  description:
    "The complete guide to types of disputes requiring a forensic accountant in the UK, commercial disputes, fraud, shareholder conflicts, matrimonial, insolvency, and more.",
  path: "/dispute-types",
});

const pageDescription =
  "The complete guide to types of disputes requiring a forensic accountant in the UK, commercial disputes, fraud, shareholder conflicts, matrimonial, insolvency, and more.";

export default function DisputeTypesPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Dispute Types", path: "/dispute-types" },
    ]),
    articleSchema({
      headline:
        "Types of Accounting Disputes: When UK Businesses & Solicitors Need a Forensic Accountant",
      description: pageDescription,
      path: "/dispute-types",
      aboutServiceId: "loss-quantification",
    }),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <PageHero
        title="Types of Accounting Disputes: When UK Businesses & Solicitors Need a Forensic Accountant"
        subtitle="A definition-first guide to the ten dispute categories where UK courts and tribunals rely on independent forensic accounting, from contract loss quantification to shareholder valuation, fraud tracing, and business interruption quantum."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dispute Types" },
        ]}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <p>
            Not every legal dispute needs an accountant, but whenever the
            outcome turns on financial records, valuation, or how much money was
            lost, a{" "}
            <Link href="/what-is-dispute-accounting">dispute accountant</Link>{" "}
            (forensic accountant instructed for litigation) becomes essential.
            This page is the master taxonomy of accounting disputes in England
            and Wales: what each type involves, the core accounting question,
            the expert&apos;s role, and where cases are heard. Whether you are a{" "}
            <Link href="/who-we-help/solicitors-law-firms">solicitor</Link>{" "}
            scoping expert evidence or a{" "}
            <Link href="/who-we-help/businesses-individuals">business</Link>{" "}
            facing a financial conflict, use it to identify the right specialist
            and{" "}
            <Link href="/contact">discuss instruction</Link> before quantum or
            valuation becomes contested at trial.
          </p>

          <h2>The Role of Accounting in Disputes</h2>
          <p>
            Financial records sit at the heart of most commercial and financial
            litigation. Whether the question is how much was lost after a breach
            of contract, what a private company is worth in an unfair prejudice
            petition, whether fraud occurred, or what the accounts should have
            shown before insolvency, courts and tribunals depend on independent
            expert analysis that translates accounting evidence into answers
            lawyers can plead and judges can apply. A dispute accountant applies
            forensic investigative skills and UK damages principles to
            historical records, producing{" "}
            <Link href="/services#expert-witness-reports">
              CPR Part 35 compliant reports
            </Link>{" "}
            (or FPR Part 25 in family proceedings) with an overriding duty to
            the court, not the instructing party. That independence is why
            solicitors instruct early: to frame heads of loss, test disclosure,
            and avoid adopting a quantum position that cannot survive{" "}
            <Link href="/glossary#ikarian-reefer-duties">
              cross-examination
            </Link>
            . For a deeper introduction to the discipline, see{" "}
            <Link href="/what-is-dispute-accounting">
              what is dispute accounting
            </Link>{" "}
            and our{" "}
            <Link href="/guides/what-forensic-accountants-do-disputes">
              guide to forensic accountants in disputes
            </Link>
            .
          </p>

          <h2>Overview of Dispute Types</h2>
          <p>
            The table below summarises the ten dispute categories most frequently
            requiring forensic accounting in UK litigation. Each row links to a
            dedicated case-type page with fuller detail, FAQs, and related
            services.
          </p>
          <ResponsiveTable>
            <table className="min-w-[40rem]">
              <thead>
                <tr>
                  <th>Dispute Type</th>
                  <th>Core Accounting Issue</th>
                  <th>Expert Role</th>
                  <th>Court/Forum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="#commercial-contract-disputes">
                      Commercial contract breach
                    </Link>
                  </td>
                  <td>Loss quantification</td>
                  <td>Expert witness</td>
                  <td>High Court / County Court</td>
                </tr>
                <tr>
                  <td>
                    <Link href="#shareholder-disputes">
                      Shareholder dispute (S994)
                    </Link>
                  </td>
                  <td>Share valuation</td>
                  <td>Expert witness / SJE</td>
                  <td>High Court (Chancery)</td>
                </tr>
                <tr>
                  <td>
                    <Link href="#fraud-financial-crime">
                      Fraud &amp; financial crime
                    </Link>
                  </td>
                  <td>Irregularity investigation</td>
                  <td>Expert witness / investigator</td>
                  <td>Civil / Crown Court</td>
                </tr>
                <tr>
                  <td>
                    <Link href="#ma-transaction-disputes">M&amp;A disputes</Link>
                  </td>
                  <td>Completion accounts, warranty claims</td>
                  <td>Expert witness</td>
                  <td>High Court (Commercial)</td>
                </tr>
                <tr>
                  <td>
                    <Link href="#matrimonial-financial-disputes">
                      Matrimonial / divorce
                    </Link>
                  </td>
                  <td>Business valuation, hidden income</td>
                  <td>Expert witness / SJE</td>
                  <td>Family Court</td>
                </tr>
                <tr>
                  <td>
                    <Link href="#insolvency-administration">Insolvency</Link>
                  </td>
                  <td>Solvency, asset value, transactions</td>
                  <td>Expert witness</td>
                  <td>High Court / Insolvency</td>
                </tr>
                <tr>
                  <td>
                    <Link href="#partnership-disputes">
                      Partnership dissolution
                    </Link>
                  </td>
                  <td>Profit share, goodwill, capital</td>
                  <td>Expert witness / SJE</td>
                  <td>High Court</td>
                </tr>
                <tr>
                  <td>
                    <Link href="#tax-disputes-hmrc">Tax disputes</Link>
                  </td>
                  <td>HMRC valuation challenge</td>
                  <td>Expert witness</td>
                  <td>First-tier Tribunal (Tax)</td>
                </tr>
                <tr>
                  <td>
                    <Link href="#professional-negligence">
                      Professional negligence
                    </Link>
                  </td>
                  <td>But-for analysis, loss causation</td>
                  <td>Expert witness</td>
                  <td>High Court</td>
                </tr>
                <tr>
                  <td>
                    <Link href="#insurance-business-interruption">
                      Insurance disputes
                    </Link>
                  </td>
                  <td>Loss of profit, claim quantum</td>
                  <td>Expert witness / investigator</td>
                  <td>High Court</td>
                </tr>
              </tbody>
            </table>
          </ResponsiveTable>

          <h2 id="commercial-contract-disputes">
            1. Commercial Contract Disputes
          </h2>
          <p>
            <strong>Definition:</strong> Disputes arising from breach or alleged
            breach of a commercial contract, where the central remedy is
            financial compensation and the amount must be quantified from
            accounting evidence.
          </p>
          <p>
            <strong>Key accounting issues:</strong>{" "}
            <Link href="/guides/loss-quantification-guide">Lost profits</Link> using{" "}
            <Link href="/glossary#but-for-analysis">but-for methodology</Link>;
            wasted expenditure (reliance loss); consequential loss; and
            remoteness under{" "}
            <Link href="/glossary#hadley-v-baxendale">Hadley v Baxendale</Link>
            . The expert must separate expectation, reliance, and consequential
            heads so the court can apply the correct legal tests without
            conflating categories of damage.
          </p>
          <p>
            <strong>Expert role:</strong> Quantify loss in a{" "}
            <Link href="/glossary#cpr-part-35">CPR Part 35</Link> compliant
            report, constructing the counterfactual position had the contract
            been performed, comparing it to actual results, addressing
            mitigation, and producing sensitivity analysis on material
            assumptions. See our{" "}
            <Link href="/services#loss-quantification">
              loss quantification service
            </Link>
            ,{" "}
            <Link href="/guides/loss-quantification-guide">
              loss quantification guide
            </Link>
            , and{" "}
            <Link href="/case-types/commercial-contract-disputes">
              commercial contract disputes
            </Link>{" "}
            case-type page.
          </p>

          <h2 id="shareholder-disputes">2. Shareholder Disputes</h2>
          <p>
            <strong>Definition:</strong> Disputes between shareholders of a
            private company, typically unfair prejudice petitions under{" "}
            <Link href="/glossary#s994-petition">
              section 994 of the Companies Act 2006
            </Link>
            , where the court may order a buy-out at fair value.
          </p>
          <p>
            <strong>Key accounting issues:</strong> Share valuation (fair value
            vs fair market value); whether a minority discount applies (often
            disapplied in s994 cases where majority conduct has depressed
            value); and financial investigation of alleged misconduct,
            excessive remuneration, related-party transactions, or improper
            distributions.
          </p>
          <p>
            <strong>Expert role:</strong> Independent share valuation and
            financial investigation of disputed transactions, often in a single
            combined report. Our{" "}
            <Link href="/services#business-share-valuation">
              business &amp; share valuation
            </Link>{" "}
            and{" "}
            <Link href="/services#shareholder-partnership-disputes">
              shareholder dispute accounting
            </Link>{" "}
            services support{" "}
            <Link href="/case-types/shareholder-disputes">
              shareholder disputes
            </Link>
            ; read the{" "}
            <Link href="/guides/shareholder-dispute-accounting-guide">
              shareholder dispute accounting guide
            </Link>
            .
          </p>

          <h2 id="fraud-financial-crime">3. Fraud &amp; Financial Crime</h2>
          <p>
            <strong>Definition:</strong> Investigations into suspected fraud,
            embezzlement, financial misrepresentation, or financial crime where
            establishing what happened to money, and how much was lost, is
            essential.
          </p>
          <p>
            <strong>Key accounting issues:</strong>{" "}
            <Link href="/glossary#asset-tracing">Transaction tracing</Link>;
            identifying irregularities in ledgers and bank records; quantifying
            proceeds of fraud; and reconstructing financial records where books
            are incomplete or deliberately obscured.
          </p>
          <p>
            <strong>Expert role:</strong> Investigator producing
            evidence-quality findings; expert witness in civil recovery or
            criminal proceedings including{" "}
            <Link href="/glossary#poca">POCA</Link> confiscation. The same
            forensic accountant may perform privileged investigation before
            litigation and later prepare a court report. See{" "}
            <Link href="/services#fraud-investigation">
              fraud investigation
            </Link>
            ,{" "}
            <Link href="/services#asset-tracing">asset tracing</Link>, the{" "}
            <Link href="/guides/fraud-investigation-civil-recovery">
              civil fraud recovery guide
            </Link>
            , and{" "}
            <Link href="/case-types/fraud-financial-crime">
              fraud &amp; financial crime
            </Link>
            .
          </p>

          <h2 id="ma-transaction-disputes">4. M&amp;A Transaction Disputes</h2>
          <p>
            <strong>Definition:</strong> Disputes arising from mergers,
            acquisitions, or business sales, including{" "}
            <Link href="/glossary#completion-accounts">completion accounts</Link>{" "}
            adjustments, warranty and indemnity claims,{" "}
            <Link href="/glossary#earn-out-agreement">earn-outs</Link>, and{" "}
            <Link href="/glossary#locked-box-mechanism">
              locked box
            </Link>{" "}
            leakage.
          </p>
          <p>
            <strong>Key accounting issues:</strong> Completion accounts
            methodology against SPA definitions; whether warranties were
            breached; earn-out calculation when sellers allege buyer conduct
            suppressed performance; and working capital or net debt
            normalisation disputes.
          </p>
          <p>
            <strong>Expert role:</strong> Independent completion accounts review
            and loss quantification for warranty claims, often via expert
            determination before court. Our{" "}
            <Link href="/services#ma-transaction-disputes">
              M&amp;A dispute accounting
            </Link>{" "}
            service and{" "}
            <Link href="/guides/ma-dispute-accounting-guide">
              M&amp;A dispute guide
            </Link>{" "}
            support{" "}
            <Link href="/case-types/ma-transaction-disputes">
              M&amp;A transaction disputes
            </Link>
            .
          </p>

          <h2 id="matrimonial-financial-disputes">
            5. Matrimonial Financial Disputes
          </h2>
          <p>
            <strong>Definition:</strong> Financial remedy proceedings in divorce
            under the Matrimonial Causes Act 1973 where a business or
            professional practice is a matrimonial asset or income source.
          </p>
          <p>
            <strong>Key accounting issues:</strong> Business valuation;
            <Link href="/glossary#hidden-income-analysis">
              {" "}
              hidden income analysis
            </Link>{" "}
            in owner-managed businesses; personal vs enterprise goodwill; and
            add-backs to normalise earnings for sharing and maintenance
            calculations.
          </p>
          <p>
            <strong>Expert role:</strong>{" "}
            <Link href="/glossary#fpr-part-25">FPR Part 25</Link> compliant
            business valuation and income analysis, commonly as a{" "}
            <Link href="/glossary#single-joint-expert">
              single joint expert
            </Link>
            . See{" "}
            <Link href="/services#matrimonial-financial">
              matrimonial financial disputes
            </Link>{" "}
            and{" "}
            <Link href="/case-types/matrimonial-financial-disputes">
              matrimonial financial disputes
            </Link>
            ; family practitioners should also review{" "}
            <Link href="/qualifications">expert qualifications</Link> for FPR
            compliance.
          </p>

          <h2 id="insolvency-administration">
            6. Insolvency &amp; Administration Disputes
          </h2>
          <p>
            <strong>Definition:</strong> Disputes arising in insolvency,
            wrongful trading, transactions at undervalue, preferences, and
            challenges to office-holder or director conduct.
          </p>
          <p>
            <strong>Key accounting issues:</strong> Solvency analysis at key
            dates; asset valuation on a going concern vs forced sale basis; and
            transaction analysis under{" "}
            <Link href="/glossary#insolvency-act-s214">
              Insolvency Act s214
            </Link>{" "}
            (wrongful trading) and{" "}
            <Link href="/glossary#insolvency-act-s238">
              s238
            </Link>{" "}
            (transactions at undervalue).
          </p>
          <p>
            <strong>Expert role:</strong> Expert witness on solvency, asset
            values, and the increase in net deficit attributable to continued
            trading. Supports liquidators, administrators, and directors&apos; D&amp;O
            insurers in the Insolvency and Companies Court. See{" "}
            <Link href="/case-types/insolvency-administration">
              insolvency &amp; administration
            </Link>{" "}
            and{" "}
            <Link href="/services#business-share-valuation">
              asset valuation
            </Link>
            .
          </p>

          <h2 id="partnership-disputes">7. Partnership Disputes</h2>
          <p>
            <strong>Definition:</strong> Disputes on dissolution of a
            partnership or LLP, profit shares, goodwill, and capital account
            balances on retirement or expulsion.
          </p>
          <p>
            <strong>Key accounting issues:</strong> Goodwill valuation
            (personal vs practice goodwill in professional firms); profit share
            and drawings analysis; reconstruction of capital accounts; and
            restrictive covenant impact on value.
          </p>
          <p>
            <strong>Expert role:</strong> Independent financial analysis and
            valuation, often by{" "}
            <Link href="/glossary#expert-determination">
              expert determination
            </Link>{" "}
            under the partnership deed. Our{" "}
            <Link href="/services#shareholder-partnership-disputes">
              partnership dispute accounting
            </Link>{" "}
            supports{" "}
            <Link href="/case-types/partnership-disputes">
              partnership disputes
            </Link>
            .
          </p>

          <h2 id="professional-negligence">8. Professional Negligence</h2>
          <p>
            <strong>Definition:</strong> Claims against accountants, auditors, or
            financial advisers for negligent advice, reporting, or tax planning
            where loss must be linked to breach of duty.
          </p>
          <p>
            <strong>Key accounting issues:</strong> The but-for position, what
            accounts, advice, or valuation should have been; causation between
            negligence and loss; and scope of duty under the{" "}
            <Link href="/glossary#saamco-principle">SAAMCo principle</Link> and{" "}
            <Link href="/glossary#allied-maples-principle">
              Allied Maples
            </Link>{" "}
            loss of chance where third-party action is involved.
          </p>
          <p>
            <strong>Expert role:</strong> Expert witness on standard of care and
            loss quantification, structuring quantum to match advice vs
            information cases. See{" "}
            <Link href="/services#loss-quantification">
              loss quantification
            </Link>
            , the{" "}
            <Link href="/guides/loss-quantification-guide">
              loss quantification guide
            </Link>
            , and{" "}
            <Link href="/case-types/professional-negligence">
              professional negligence
            </Link>
            .
          </p>

          <h2 id="tax-disputes-hmrc">9. Tax Disputes</h2>
          <p>
            <strong>Definition:</strong> Disputes with HMRC on share or business
            valuation, tax liabilities, penalties, or clearance challenges where
            accounting methodology determines the tax at stake.
          </p>
          <p>
            <strong>Key accounting issues:</strong> Correct valuation at the
            relevant date; trading vs investment analysis for reliefs; transfer
            pricing benchmarking; and quantum of disputed tax or penalties.
          </p>
          <p>
            <strong>Expert role:</strong> Expert witness in the First-tier
            Tribunal (Tax Chamber), assisting on valuation and accounting
            matters without usurping the tribunal&apos;s function on tax law. See{" "}
            <Link href="/case-types/tax-disputes-hmrc">
              tax disputes &amp; HMRC
            </Link>{" "}
            and{" "}
            <Link href="/services#business-share-valuation">
              business valuation
            </Link>
            ; early instruction supports disclosure to HMRC and settlement.
          </p>

          <h2 id="insurance-business-interruption">
            10. Insurance Claims &amp; Business Interruption
          </h2>
          <p>
            <strong>Definition:</strong> Insurance disputes where the quantum of
            a business interruption or property-related claim is contested
            between policyholder and insurer.
          </p>
          <p>
            <strong>Key accounting issues:</strong> Loss of profit calculation
            using the gross profit basis formula; indemnity period; increased
            cost of working; trend and seasonality adjustments; and interaction
            with coverage arguments.
          </p>
          <p>
            <strong>Expert role:</strong> Independent loss of profit assessment
            and expert witness for insurer or policyholder, challenging or
            supporting loss adjuster figures. Our{" "}
            <Link href="/services#loss-quantification">
              loss quantification
            </Link>{" "}
            methodology applies to BI schedules; see{" "}
            <Link href="/case-types/insurance-business-interruption">
              insurance &amp; business interruption
            </Link>
            .
          </p>

          <RelatedLinks
            links={DISPUTE_TYPES_PAGE_LINKS}
            title="Explore Dispute Accounting Resources"
          />
        </article>
      </Section>
      <CTASection />
    </>
  );
}
