/** Stable anchor slugs for glossary deep links (docs/SEO-ARCHITECTURE.md §2) */
export const GLOSSARY_ANCHOR_BY_TERM: Record<string, string> = {
  "Account of Profits": "account-of-profits",
  "Allied Maples Principle": "allied-maples-principle",
  "Asset Tracing": "asset-tracing",
  "But-For Analysis": "but-for-analysis",
  "Completion Accounts": "completion-accounts",
  "CPR Part 35": "cpr-part-35",
  "Earn-Out Agreement": "earn-out",
  "Emden Formula": "emden-formula",
  "Expert Determination": "expert-determination",
  "Forensic Accounting": "forensic-accounting",
  "FPR Part 25": "fpr-part-25",
  "Frozen Asset Order": "frozen-asset-order",
  "Hadley v Baxendale": "hadley-v-baxendale",
  "Hidden Income Analysis": "hidden-income-analysis",
  "Ikarian Reefer Duties": "ikarian-reefer",
  "Insolvency Act s214": "wrongful-trading-s214",
  "Insolvency Act s238": "transaction-at-undervalue-s238",
  "ISDA Master Agreement": "isda-master-agreement",
  "Joint Statement": "joint-statement",
  "Locked Box Mechanism": "locked-box",
  "Loss Quantification": "loss-quantification",
  "Norwich Pharmacal Order": "norwich-pharmacal",
  "Party-Appointed Expert": "party-appointed-expert",
  POCA: "poca",
  Quantum: "quantum",
  "S994 Petition": "s994-petition",
  "SAAMCo Principle": "saamco-principle",
  "Shadow Expert": "shadow-expert",
  "Single Joint Expert": "single-joint-expert",
  "Transaction at Undervalue": "transaction-at-undervalue",
  "Wasted Expenditure": "wasted-expenditure",
  "Wrotham Park Damages": "wrotham-park-damages",
};

export function glossaryAnchorId(term: string): string {
  return GLOSSARY_ANCHOR_BY_TERM[term] ?? termToSlug(term);
}

export function termToSlug(term: string): string {
  return term
    .toLowerCase()
    .replace(/\[.*?\]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function glossaryHref(term: string): string {
  return `/glossary#${glossaryAnchorId(term)}`;
}
