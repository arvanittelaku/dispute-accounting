import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { guides } from "@/data/guides";

export const metadata = createMetadata({
  title: "Guides: Dispute Accounting | Forensic Accounting & Disputes",
  description:
    "In-depth guides on dispute accounting for legal teams and businesses, fraud investigation, loss quantification, shareholder disputes, M&A, and more.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <PageHero
        title="Guides: Dispute Accounting for Solicitors & Businesses"
        subtitle="In-depth guides on instructing dispute accountants, loss quantification methodology, fraud investigation, shareholder disputes, and M&A accounting disputes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides" },
        ]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((g) => (
            <Card
              key={g.slug}
              title={g.title}
              description={g.sections[0]?.content.slice(0, 160) + "…"}
              href={`/guides/${g.slug}`}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
