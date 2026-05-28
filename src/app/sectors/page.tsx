import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { sectors } from "@/data/sectors";

export const metadata = createMetadata({
  title: "Dispute Accounting by Sector | UK Industry Specialists",
  description:
    "Sector-specialist dispute accountants for UK litigation. Financial services, construction, technology, professional practices, retail, and more.",
  path: "/sectors",
});

export default function SectorsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sectors", path: "/sectors" },
        ])}
      />
      <PageHero
        title="Dispute Accounting by Sector"
        subtitle="Industry-specific financial disputes require dispute accountants who understand sector economics, accounting practices, and typical transaction structures."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors" },
        ]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <Card
              key={s.slug}
              title={s.title}
              description={s.paragraphs[0].slice(0, 140) + "…"}
              href={`/sectors/${s.slug}`}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
