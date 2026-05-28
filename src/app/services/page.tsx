import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  organizationSchema,
  serviceNode,
  faqPageSchema,
} from "@/lib/schema";
import { services } from "@/data/services";
import { ServiceSectionFooter } from "@/components/ServiceSectionFooter";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { ServiceFAQs } from "@/components/ServiceFAQs";
import { RelatedLinks } from "@/components/RelatedLinks";

export const metadata = createMetadata({
  title: "Dispute Accounting Services UK | Full Service List",
  description:
    "UK dispute accounting services: loss quantification, fraud investigation, asset tracing, business valuation, shareholder disputes, M&A disputes, and expert witness reports.",
  path: "/services",
});

export default function ServicesPage() {
  const allServiceFaqs = services.flatMap((s) => s.faqs);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      ...services.map((s) => serviceNode(s.id, s.name, s.description)),
    ],
  };

  return (
    <>
      <JsonLd
        data={[
          schema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          faqPageSchema(allServiceFaqs),
        ]}
      />
      <PageHero
        title="Dispute Accounting Services UK"
        subtitle="From loss quantification and fraud investigation to business valuation, shareholder disputes, and CPR Part 35 expert witness reports — our UK dispute accountants support solicitors and businesses across every type of financial dispute."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      {services.map((service, idx) => (
        <Section key={service.id} alt={idx % 2 === 1} id={service.id}>
          <div className="min-w-0">
            <h2 className="text-xl font-bold text-heading sm:text-2xl lg:text-3xl">
              {service.name}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-body sm:mt-4 sm:text-base">
              {service.content}
            </p>
            {service.methodology && service.methodology.length > 0 && (
              <>
                <h3 className="mt-8 text-lg font-semibold text-heading sm:text-xl">
                  Methodology
                </h3>
                <ResponsiveTable className="mt-4">
                  <table className="w-full min-w-[280px] border-collapse text-sm sm:min-w-[600px]">
                    <thead>
                      <tr className="bg-section-alt">
                        <th className="border border-border px-3 py-2 text-left text-xs font-semibold text-heading sm:px-4 sm:py-3 sm:text-sm">
                          Phase
                        </th>
                        <th className="border border-border px-3 py-2 text-left text-xs font-semibold text-heading sm:px-4 sm:py-3 sm:text-sm">
                          What We Do
                        </th>
                        <th className="border border-border px-3 py-2 text-left text-xs font-semibold text-heading sm:px-4 sm:py-3 sm:text-sm">
                          Deliverable
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.methodology.map((row) => (
                        <tr key={row.phase}>
                          <td className="border border-border px-3 py-2 align-top text-xs font-medium text-heading sm:px-4 sm:py-3 sm:text-sm">
                            {row.phase}
                          </td>
                          <td className="border border-border px-3 py-2 align-top text-xs text-body sm:px-4 sm:py-3 sm:text-sm">
                            {row.whatWeDo}
                          </td>
                          <td className="border border-border px-3 py-2 align-top text-xs text-body sm:px-4 sm:py-3 sm:text-sm">
                            {row.deliverable}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ResponsiveTable>
              </>
            )}
            <ServiceFAQs faqs={service.faqs} serviceName={service.id} />
            <ServiceSectionFooter serviceId={service.id} />
          </div>
        </Section>
      ))}
      <Section alt>
        <RelatedLinks
          links={[
            { href: "/dispute-types", label: "Types of Accounting Disputes" },
            { href: "/case-types", label: "All Case Types" },
            { href: "/how-to-instruct", label: "How to Instruct" },
            { href: "/contact", label: "Contact" },
          ]}
        />
      </Section>
      <CTASection />
    </>
  );
}
