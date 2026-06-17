export interface GlossaryTerm {
  term: string;
  definition: string;
  link?: { href: string; label: string };
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Account of Profits",
    definition:
      "An equitable remedy requiring a wrongdoer to disgorge profits made from a breach of fiduciary duty or breach of confidence, rather than compensating the claimant's loss. The claimant must elect between damages and an account of profits; dispute accountants quantify the profits attributable to the breach, distinguishing them from legitimate trading profits.",
    link: { href: "/case-types/commercial-contract-disputes", label: "Commercial contract disputes" },
  },
  {
    term: "Allied Maples Principle",
    definition:
      "From Allied Maples Group Ltd v Simmons & Simmons [1995] 1 WLR 1602: where a defendant's wrong deprives the claimant of a chance to obtain a benefit from a third party, damages reflect the value of the chance lost, expressed as a percentage probability multiplied by the full benefit. Widely applied in solicitor negligence and professional negligence loss quantification.",
    link: { href: "/case-types/professional-negligence", label: "Professional negligence" },
  },
  {
    term: "Asset Tracing",
    definition:
      "The forensic process of following misappropriated money or property through successive transfers to identify substituted assets available for recovery. In English law, tracing at common law and tracing in equity follow different rules; dispute accountants prepare chronological tracing schedules supporting proprietary claims and freezing injunctions.",
    link: { href: "/services#asset-tracing", label: "Asset tracing service" },
  },
  {
    term: "But-For Analysis",
    definition:
      "The counterfactual methodology comparing the claimant's actual financial position after breach with the position they would have been in had the wrong not occurred. The difference, after deducting avoided costs and crediting mitigation, represents expectation loss under Robinson v Harman [1848] and is the standard approach to commercial damages quantification.",
    link: { href: "/guides/loss-quantification-guide", label: "Loss quantification guide" },
  },
  {
    term: "Completion Accounts",
    definition:
      "A post-completion price adjustment mechanism in share and asset purchase agreements, whereby the final purchase price is adjusted based on actual closing balance sheet figures compared to an agreed target. Disputes arise over SPA-defined items such as working capital, net debt, and normalised earnings, requiring expert reconstruction per the contract.",
    link: { href: "/case-types/ma-transaction-disputes", label: "M&A transaction disputes" },
  },
  {
    term: "CPR Part 35",
    definition:
      "Part 35 of the Civil Procedure Rules governs expert evidence in civil proceedings. Experts owe an overriding duty to the court, must provide independent opinions within their expertise, and must comply with Practice Direction 35 on report format, joint meetings, and oral evidence.",
    link: { href: "/qualifications", label: "Expert qualifications" },
  },
  {
    term: "Earn-Out Agreement",
    definition:
      "A contractual mechanism deferring part of the purchase price contingent on post-completion performance, typically measured against EBITDA, revenue, or retention targets. Disputes arise over calculation methodology, permitted adjustments, management conduct, and whether targets were achieved on the contractually defined basis.",
    link: { href: "/case-types/ma-transaction-disputes", label: "M&A transaction disputes" },
  },
  {
    term: "Emden Formula",
    definition:
      "A method used in construction disputes to allocate head office overhead to prolongation claims when the contractor cannot demonstrate actual overhead costs incurred. The formula applies a percentage (typically derived from audited accounts) to the contract sum or to time-related costs. Dispute accountants support Emden, Hudson, and other formulae by analysing the contractor's financial accounts and verifying the appropriateness of the percentage applied.",
    link: { href: "/sectors/construction-engineering", label: "Construction Disputes" },
  },
  {
    term: "Expert Determination",
    definition:
      "A contractual dispute resolution process whereby an independent expert makes a binding or final determination on defined issues, commonly completion accounts and earn-out disputes in M&A. The expert acts as determiner rather than witness, and the process is typically faster and more confidential than court proceedings.",
    link: { href: "/case-types/ma-transaction-disputes", label: "M&A transaction disputes" },
  },
  {
    term: "Forensic Accounting",
    definition:
      "The application of accounting, auditing, and investigative skills to legal disputes, involving analysis of financial records to quantify loss, detect fraud, trace assets, and value businesses. Forensic accountants acting as expert witnesses must comply with CPR Part 35 or FPR Part 25 and owe their primary duty to the court.",
    link: { href: "/what-is-dispute-accounting", label: "What is dispute accounting?" },
  },
  {
    term: "FPR Part 25",
    definition:
      "Part 25 of the Family Procedure Rules 2010 governs expert evidence in family proceedings, including financial remedy cases. Experts must comply with Practice Direction 25B and confirm their understanding of the duty to the court, parallel to CPR Part 35 in civil litigation.",
    link: { href: "/qualifications", label: "Expert qualifications" },
  },
  {
    term: "Frozen Asset Order",
    definition:
      "An interim injunction (formerly known as Mareva relief) restraining a defendant from dealing with assets up to a specified value pending judgment, to prevent dissipation. Applicants must show a good arguable case, real risk of dissipation, and that assets exist within the jurisdiction; tracing evidence supports the proportionate limit of the order.",
    link: { href: "/guides/fraud-investigation-civil-recovery", label: "Fraud investigation guide" },
  },
  {
    term: "Hadley v Baxendale",
    definition:
      "Hadley v Baxendale [1854] 9 Exch 341 establishes the two-limb rule for remoteness of damage in contract: Limb 1 covers losses arising naturally from the breach; Limb 2 covers losses within the reasonable contemplation of both parties at contracting as the probable result of breach. Dispute accountants structure loss heads to address which limb applies.",
    link: { href: "/case-types/commercial-contract-disputes", label: "Commercial contract disputes" },
  },
  {
    term: "Hidden Income Analysis",
    definition:
      "Forensic techniques applied in matrimonial and civil fraud proceedings to identify income not disclosed in tax returns or Form E, using bank statement analysis, lifestyle benchmarking, and comparison of declared turnover to observable business activity. The objective is to establish true financial resources for division or quantification.",
    link: { href: "/case-types/matrimonial-financial-disputes", label: "Matrimonial financial disputes" },
  },
  {
    term: "Ikarian Reefer Duties",
    definition:
      "From National Justice Compania Naviera SA v Prudential Assurance Co Ltd (The Ikarian Reefer) [1993] 2 Lloyd's Rep 68: the foundational duties of expert witnesses include independence, objectivity, and an overriding obligation to the court. English courts treat breach of these duties as seriously undermining the weight of expert evidence.",
    link: { href: "/qualifications", label: "Expert qualifications" },
  },
  {
    term: "Insolvency Act s214",
    definition:
      "Section 214 of the Insolvency Act 1986 imposes wrongful trading liability on directors who knew or ought to have concluded there was no reasonable prospect of avoiding insolvent liquidation and failed to minimise creditor loss. Liquidators may pursue directors personally; dispute accountants quantify the increase in creditor deficit attributable to continued trading.",
    link: { href: "/case-types/insolvency-administration", label: "Insolvency disputes" },
  },
  {
    term: "Insolvency Act s238",
    definition:
      "Section 238 of the Insolvency Act 1986 allows a liquidator or administrator to apply to set aside transactions at an undervalue entered into within the relevant look-back period (typically two years for connected persons, six months otherwise). The office-holder must show the company received no consideration or significantly less than full value, causing detriment to creditors.",
    link: { href: "/case-types/insolvency-administration", label: "Insolvency disputes" },
  },
  {
    term: "ISDA Master Agreement",
    definition:
      "The standard contractual framework published by the International Swaps and Derivatives Association governing over-the-counter derivatives transactions. Disputes involve close-out amounts, valuation disputes under the 2002 or 2021 ISDA definitions, and termination payment quantification following default or credit events.",
    link: { href: "/sectors/financial-services", label: "Financial services disputes" },
  },
  {
    term: "Joint Statement",
    definition:
      "A document produced following a meeting between opposing experts under CPR Part 35, identifying matters agreed, matters agreed in part, and matters remaining in dispute. Joint statements narrow trial issues and are frequently ordered by the court before trial in the Business and Property Courts.",
    link: { href: "/how-to-instruct", label: "How to instruct" },
  },
  {
    term: "Locked Box Mechanism",
    definition:
      "An M&A pricing structure fixing the purchase price by reference to a historical balance sheet at an agreed locked box date, with the seller giving anti-leakage covenants protecting value to completion. Disputes concern permitted leakage, breach of covenants, and the quantification of leakage claims rather than completion account line items.",
    link: { href: "/case-types/ma-transaction-disputes", label: "M&A transaction disputes" },
  },
  {
    term: "Loss Quantification",
    definition:
      "The expert accounting process of calculating the monetary value of a legal claim, applying appropriate damages principles, but-for analysis for expectation loss, wasted expenditure for reliance loss, account of profits for equitable claims, and SAAMCo scope-of-duty limits in professional negligence.",
    link: { href: "/services#loss-quantification", label: "Loss quantification service" },
  },
  {
    term: "Norwich Pharmacal Order",
    definition:
      "An equitable disclosure order requiring a third party, typically a bank, accountant, or intermediary, to disclose information identifying wrongdoers or tracing assets, where the claimant has no direct cause of action against the third party but needs information to pursue the true defendant. Named after Norwich Pharmacal Co v Customs and Excise Commissioners [1974] AC 133.",
    link: { href: "/guides/fraud-investigation-civil-recovery", label: "Fraud investigation guide" },
  },
  {
    term: "Party-Appointed Expert",
    definition:
      "An expert instructed by one party to litigation to provide an independent opinion disclosed to the court and the opposing party under CPR Part 35. Each side may appoint its own expert; the court may direct a joint meeting and joint statement, and experts may be called for cross-examination at trial.",
    link: { href: "/how-to-instruct", label: "How to instruct" },
  },
  {
    term: "POCA",
    definition:
      "The Proceeds of Crime Act 2002, which provides criminal confiscation, civil recovery, and cash forfeiture mechanisms for assets representing the proceeds of unlawful conduct. Forensic accountants trace and quantify recoverable assets, supporting restraint orders, civil recovery claims, and settlement in fraud proceedings.",
    link: { href: "/case-types/fraud-financial-crime", label: "Fraud & financial crime" },
  },
  {
    term: "Quantum",
    definition:
      "The legal term for the amount of damages or compensation awarded or claimed in litigation. In dispute accounting, quantum work encompasses all heads of financial loss and valuation issues that the expert must quantify to assist the court in reaching a monetary judgment.",
    link: { href: "/guides/loss-quantification-guide", label: "Loss quantification guide" },
  },
  {
    term: "S994 Petition",
    definition:
      "A petition brought under section 994 of the Companies Act 2006 alleging that a company's affairs are being conducted in a manner unfairly prejudicial to the interests of members. The court may make any order it thinks fit under section 996, commonly including a buy-out of the petitioner's shares at fair value determined with expert accounting evidence.",
    link: { href: "/case-types/shareholder-disputes", label: "Shareholder disputes" },
  },
  {
    term: "SAAMCo Principle",
    definition:
      "From South Australia Asset Management Corp v York Montague Ltd [1997] AC 191: damages for professional negligence are limited to losses within the scope of the professional's duty. The distinction between 'advice' cases and 'information' cases determines whether full transaction losses or only losses caused by the specific misinformation are recoverable.",
    link: { href: "/case-types/professional-negligence", label: "Professional negligence" },
  },
  {
    term: "Shadow Expert",
    definition:
      "An expert retained by a party to advise solicitors and counsel on strategy, critique opposing expert reports, and assist with cross-examination preparation, without producing a report for disclosure or giving oral evidence. Proper engagement terms and disclosure obligations must be observed to avoid conflicts with CPR Part 35.",
    link: { href: "/who-we-help/solicitors-law-firms", label: "For solicitors" },
  },
  {
    term: "Single Joint Expert",
    definition:
      "An expert appointed jointly by the parties or directed by the court to provide one independent opinion on a defined issue, typically to reduce costs and narrow disputes. The SJE receives instructions from both parties and owes the same overriding duty to the court as a party-appointed expert.",
    link: { href: "/how-to-instruct", label: "How to instruct" },
  },
  {
    term: "Transaction at Undervalue",
    definition:
      "A disposition of company assets for significantly less than full value, potentially voidable under section 238 of the Insolvency Act 1986 if entered within the look-back period and the company was insolvent or became insolvent as a result. Liquidators use forensic analysis to identify and quantify recoverable sums from recipients.",
    link: { href: "/case-types/insolvency-administration", label: "Insolvency disputes" },
  },
  {
    term: "Wasted Expenditure",
    definition:
      "Expenditure incurred by a claimant in reliance on a contract that has been wasted due to breach, the measure of reliance loss under Anglia Television Ltd v Reed [1972]. Recoverable where expectation loss cannot be calculated or where the claimant elects reliance damages, subject to the bad bargain defence.",
    link: { href: "/guides/loss-quantification-guide", label: "Loss quantification guide" },
  },
  {
    term: "Wrotham Park Damages",
    definition:
      "Negotiating damages (formerly known as Wrotham Park damages) awarded where a defendant has breached a negative covenant or contractual restriction without causing measurable financial loss to the claimant, based on the amount a reasonable person would have paid for release from the obligation: Wrotham Park Estate Co Ltd v Parkside Homes Ltd [1974] 1 WLR 798.",
    link: { href: "/case-types/commercial-contract-disputes", label: "Commercial contract disputes" },
  },
];

export function getGlossaryTerm(term: string): GlossaryTerm | undefined {
  const normalised = term.trim().toLowerCase();
  return glossaryTerms.find(
    (item) => item.term.trim().toLowerCase() === normalised
  );
}

export function getGlossaryFaqs(): { question: string; answer: string }[] {
  return glossaryTerms.map((item) => ({
    question: `What is ${item.term}?`,
    answer: item.definition,
  }));
}
