import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { glossaryTerms, getGlossaryFaqs } from "@/data/glossary";
import { GlossarySearch } from "./GlossarySearch";

export const metadata = createMetadata({
  title: "Dispute Accounting Glossary | Key UK Forensic Accounting Terms",
  description:
    "Definitions of key dispute accounting and forensic accounting terms for UK litigation — from asset tracing to Wrotham Park damages, CPR Part 35, and quantum.",
  path: "/glossary",
});

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Glossary", path: "/glossary" },
          ]),
          faqPageSchema(getGlossaryFaqs()),
        ]}
      />
      <PageHero
        title="Dispute Accounting Glossary"
        subtitle="Key UK legal and forensic accounting terms used in dispute accounting and expert witness reports — from but-for analysis to CPR Part 35."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Glossary" }]}
      />
      <Section>
        <GlossarySearch terms={glossaryTerms} />
      </Section>
      <CTASection />
    </>
  );
}
