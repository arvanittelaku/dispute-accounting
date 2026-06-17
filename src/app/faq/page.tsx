import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { faqs } from "@/data/faqs";

export const metadata = createMetadata({
  title: "Dispute Accounting FAQ | Common Questions Answered",
  description:
    "Answers to common questions about dispute accounting in disputes, what it covers, who needs it, fees, CPR Part 35, and how forensic accountants help.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqPageSchema(faqs),
        ]}
      />
      <PageHero
        title="Dispute Accounting FAQ"
        subtitle="Answers to the most common questions legal teams and businesses ask about dispute accounting and forensic accountants."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h2 className="text-lg font-bold text-heading">{faq.question}</h2>
              <p className="mt-2 text-body leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
