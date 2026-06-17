import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Case Types Requiring Dispute Accounting | Forensic Accountant Guide",
  description:
    "Which disputes need a dispute accountant? Commercial disputes, fraud, shareholder conflicts, M&A, matrimonial, insolvency, and professional negligence explained.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Types", path: "/case-types" },
        ])}
      />
      <PageHero
        title="Case Types Requiring Dispute Accounting"
        subtitle="litigation and disputes spanning commercial contracts, fraud, shareholder conflicts, M&A, matrimonial financial remedy, insolvency, and insurance each require specialist dispute accounting. Select your case type for expert guidance and FAQs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Types" },
        ]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {caseTypes.map((ct) => (
            <Card
              key={ct.slug}
              title={ct.title}
              description={ct.paragraphs[0].slice(0, 160) + "…"}
              href={`/case-types/${ct.slug}`}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
