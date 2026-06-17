import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { experts } from "@/data/experts";

export const metadata = createMetadata({
  title: "Our Dispute Accountants | Forensic Accounting Experts",
  description:
    "DisputeAccounting.com connects legal teams and businesses with qualified dispute accountants, ACA, CFE, and CIMA credentialed forensic accounting specialists.",
  path: "/experts",
});

export default function ExpertsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Experts", path: "/experts" },
          ]),
          ...experts.map((e) => personSchema(e)),
        ]}
      />
      <PageHero
        title="Our Dispute Accountants"
        subtitle="DisputeAccounting.com connects legal teams and businesses with qualified dispute accountants, forensic accounting specialists with ACA, CFE, and CIMA credentials and extensive CPR Part 35 experience."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Experts" },
        ]}
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <h2 className="text-xl font-bold text-heading">{expert.name}</h2>
              <p className="mt-1 text-sm font-medium text-accent">
                {expert.jobTitle}
              </p>
              <p className="mt-4 text-body leading-relaxed">
                {expert.description}
              </p>
              <ul className="mt-4 space-y-1">
                {expert.credentials.map((c) => (
                  <li key={c} className="text-sm text-body">
                    • {c}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-body/80">
          Experts shown represent the calibre and credentials of specialists in
          our network. Specific expert matching depends on case type, sector,
          and availability.
        </p>
      </Section>
      <CTASection />
    </>
  );
}
