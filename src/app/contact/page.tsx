import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ContactForm } from "@/components/forms/ContactForm";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Instruct a Dispute Accountant | DisputeAccounting.com",
  description:
    "Submit your case details to be matched with a qualified dispute accountant. Solicitor or business enquiries welcome. Response within 1 business day.",
  path: "/contact",
});

const trustPoints = [
  "Solicitors and businesses welcome",
  "CPR Part 35 & FPR Part 25 compliant",
  "Fraud investigators & expert witnesses available",
  "Response within 1 business day",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Instruct a Dispute Accountant"
        subtitle="Submit your case details and we will match you with a qualified dispute accounting expert. All enquiries are treated confidentially."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Section>
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[8px] border border-border bg-section-alt p-6">
            <h2 className="text-lg font-bold text-heading">
              Path 1: Solicitors
            </h2>
            <p className="mt-2 text-body">
              Need an expert witness or litigation support? Submit your
              instruction details and we will match you with a CPR Part 35
              compliant dispute accountant.
            </p>
            <Link
              href="/who-we-help/solicitors-law-firms"
              className="mt-4 inline-block text-sm font-medium text-accent underline"
            >
              Learn more for solicitors →
            </Link>
          </div>
          <div className="rounded-[8px] border border-border bg-section-alt p-6">
            <h2 className="text-lg font-bold text-heading">
              Path 2: Businesses
            </h2>
            <p className="mt-2 text-body">
              Facing a financial dispute without a solicitor yet? A dispute
              accountant can help you understand the position before
              proceedings.
            </p>
            <Link
              href="/who-we-help/businesses-individuals"
              className="mt-4 inline-block text-sm font-medium text-accent underline"
            >
              Learn more for businesses →
            </Link>
          </div>
        </div>

        <div className="grid min-w-0 gap-10 lg:grid-cols-3">
          <div className="min-w-0 lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="rounded-[8px] border border-border bg-section-alt p-6">
            <h2 className="text-lg font-bold text-heading">Why Instruct Through Us</h2>
            <ul className="mt-4 space-y-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-body">
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-body">
              Email us directly:{" "}
              <SiteEmailLink className="font-medium text-accent hover:underline" />
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
