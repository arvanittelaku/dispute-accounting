import Link from "next/link";

interface ServiceSectionFooterProps {
  serviceId: string;
}

const FOOTER_BY_SERVICE: Record<
  string,
  { href: string; label: string }[]
> = {
  "loss-quantification": [
    { href: "/guides/loss-quantification-guide", label: "Loss quantification guide" },
    { href: "/case-types/commercial-contract-disputes", label: "Commercial contract disputes" },
    { href: "/dispute-types", label: "Types of accounting disputes" },
  ],
  "fraud-investigation": [
    { href: "/guides/fraud-investigation-civil-recovery", label: "Fraud investigation guide" },
    { href: "/case-types/fraud-financial-crime", label: "Fraud & financial crime" },
  ],
  "asset-tracing": [
    { href: "/case-types/fraud-financial-crime", label: "Fraud & asset recovery" },
    { href: "/glossary", label: "Glossary: Asset tracing" },
  ],
  "business-share-valuation": [
    { href: "/case-types/shareholder-disputes", label: "Shareholder disputes" },
    { href: "/case-types/matrimonial-financial-disputes", label: "Matrimonial valuation" },
  ],
  "shareholder-partnership-disputes": [
    { href: "/guides/shareholder-dispute-accounting-guide", label: "Shareholder dispute guide" },
    { href: "/case-types/partnership-disputes", label: "Partnership disputes" },
  ],
  "ma-transaction-disputes": [
    { href: "/guides/ma-dispute-accounting-guide", label: "M&A dispute guide" },
    { href: "/case-types/ma-transaction-disputes", label: "M&A transaction disputes" },
  ],
  "matrimonial-financial": [
    { href: "/case-types/matrimonial-financial-disputes", label: "Matrimonial disputes" },
    { href: "/qualifications", label: "FPR Part 25 qualifications" },
  ],
  "expert-witness-reports": [
    { href: "/how-to-instruct", label: "How to instruct" },
    { href: "/guides/instructing-dispute-accountant", label: "Solicitor instruction guide" },
    { href: "/qualifications", label: "CPR Part 35 compliance" },
  ],
};

export function ServiceSectionFooter({ serviceId }: ServiceSectionFooterProps) {
  const links = FOOTER_BY_SERVICE[serviceId] ?? [
    { href: "/dispute-types", label: "Types of accounting disputes" },
    { href: "/case-types", label: "Case types" },
  ];

  return (
    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4 text-sm">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="text-accent hover:underline">
          {link.label}
        </Link>
      ))}
      <Link href="/contact" className="font-medium text-accent hover:underline">
        Instruct an expert →
      </Link>
    </div>
  );
}
