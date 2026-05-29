export interface MethodologyRow {
  phase: string;
  whatWeDo: string;
  deliverable: string;
}

import type { FAQ } from "./types";

export interface Service {
  id: string;
  name: string;
  description: string;
  content: string;
  methodology?: MethodologyRow[];
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    id: "loss-quantification",
    name: "Loss Quantification & Quantum",
    description:
      "Independent quantification of financial loss across commercial, shareholder, and professional negligence disputes using but-for modelling, reliance loss, and SAAMCo-compliant methodologies.",
    content:
      "Loss quantification, often referred to as quantum in UK litigation, is the forensic accounting process of translating a legal cause of action into a defensible monetary figure. Our dispute accountants apply the compensatory principle from Robinson v Harman [1848], constructing but-for models for expectation loss, reliance schedules for wasted expenditure under Anglia Television Ltd v Reed [1972], and account of profits where equitable remedies apply. Each engagement addresses causation, remoteness under Hadley v Baxendale [1854], mitigation, and the scope of duty under South Australia Asset Management Corp v York Montague Ltd [1997] (SAAMCo) where professional negligence is alleged. Reports are structured for CPR Part 35 compliance, with transparent assumptions, sensitivity analysis on material variables, and clear separation of heads of loss. Whether the dispute concerns breach of contract, tortious interference, or director misconduct, we provide court-ready quantum that withstands scrutiny from joint expert meetings through to cross-examination at trial.",
    methodology: [
      {
        phase: "Instruction & Scoping",
        whatWeDo:
          "Review the letter of instruction, pleadings, and legal framework to define the heads of loss, relevant periods, and applicable legal tests.",
        deliverable: "Scope memorandum",
      },
      {
        phase: "Document Review",
        whatWeDo:
          "Analyse financial statements, management accounts, contracts, correspondence, and forecasts to establish the factual baseline.",
        deliverable: "Document index & dataset",
      },
      {
        phase: "Loss Modelling",
        whatWeDo:
          "Build but-for, reliance, or account of profits models as appropriate, applying UK damages principles and addressing mitigation.",
        deliverable: "Working papers & loss schedules",
      },
      {
        phase: "Sensitivity & Challenge",
        whatWeDo:
          "Stress-test key assumptions, prepare scenario analysis, and anticipate counter-arguments on causation and quantum.",
        deliverable: "Sensitivity tables",
      },
      {
        phase: "Expert Report",
        whatWeDo:
          "Prepare a CPR Part 35 compliant report with executive summary, methodology, findings, and appendices of workings.",
        deliverable: "Court-ready expert report",
      },
    ],
    faqs: [
      {
        question: "What is the difference between loss quantification and quantum?",
        answer:
          "In UK practice the terms are often used interchangeably: both refer to calculating the monetary value of a claim. 'Quantum' is the legal term for the amount of damages; loss quantification is the expert accounting process that produces the figure the court awards. Our reports bridge both, applying legal tests to financial evidence.",
      },
      {
        question: "Which methodology is used for loss quantification in UK disputes?",
        answer:
          "The methodology depends on the cause of action. Expectation loss uses but-for analysis comparing projected performance with actual results. Reliance loss quantifies wasted expenditure. Professional negligence claims require SAAMCo scope-of-duty analysis. We select and document the appropriate framework in every engagement.",
      },
    ],
  },
  {
    id: "fraud-investigation",
    name: "Fraud Investigation & Detection",
    description:
      "Forensic investigation of suspected fraud, asset misappropriation, and financial irregularities for civil claims, regulatory proceedings, and POCA-related recovery.",
    content:
      "Fraud investigation in UK dispute accounting goes beyond routine audit: it applies forensic techniques to identify deliberate misrepresentation, concealed transactions, and patterns indicative of dishonesty. Our investigators analyse bank statements, general ledgers, journal entries, and related-party transactions to reconstruct the true financial position and quantify misappropriated funds. Engagements frequently support claims for deceit, conspiracy to defraud, breach of fiduciary duty, and unjust enrichment, as well as applications under the Proceeds of Crime Act 2002 (POCA) where criminal or civil recovery is pursued. We apply Benford's Law analysis, journal entry testing, and lifestyle benchmarking where appropriate, and document the chain of evidence to civil standards of proof, balance of probabilities in most civil fraud claims, with clear articulation of alternative explanations. Reports are suitable for without-prejudice settlement discussions, interim injunctions, and full trial, and our experts are experienced in giving oral evidence on tracing paths and quantification of loss caused by fraudulent conduct.",
    methodology: [
      {
        phase: "Risk Assessment",
        whatWeDo:
          "Map the allegation, identify red flags, and define investigation hypotheses based on instruction and available intelligence.",
        deliverable: "Investigation plan",
      },
      {
        phase: "Data Acquisition",
        whatWeDo:
          "Obtain and preserve accounting records, banking data, emails, and third-party documents with appropriate chain of custody.",
        deliverable: "Secured evidence set",
      },
      {
        phase: "Forensic Analysis",
        whatWeDo:
          "Apply data analytics, transaction tracing, and interview support to identify irregular flows and concealed assets.",
        deliverable: "Tracing schedules",
      },
      {
        phase: "Quantification",
        whatWeDo:
          "Calculate loss suffered by the victim entity or individuals, distinguishing fraudulent from legitimate transactions.",
        deliverable: "Loss quantification report",
      },
      {
        phase: "Reporting & Testimony",
        whatWeDo:
          "Prepare a CPR Part 35 compliant report and support counsel at trial or in regulatory hearings as required.",
        deliverable: "Expert report & oral evidence",
      },
    ],
    faqs: [
      {
        question: "Can a dispute accountant investigate fraud without a criminal conviction?",
        answer:
          "Yes. Civil fraud claims are decided on the balance of probabilities and do not require a criminal prosecution or conviction. Our forensic accountants gather and analyse financial evidence to support civil claims for deceit, breach of trust, or dishonest assistance, working alongside solicitors throughout.",
      },
      {
        question: "How does POCA relate to fraud investigation?",
        answer:
          "The Proceeds of Crime Act 2002 provides civil recovery and confiscation mechanisms for assets representing the proceeds of unlawful conduct. Forensic tracing identifies the flow of misappropriated funds and links assets to criminal or unlawful conduct, supporting restraint orders, civil recovery proceedings, and settlement negotiations.",
      },
    ],
  },
  {
    id: "asset-tracing",
    name: "Asset Tracing & Recovery",
    description:
      "Forensic tracing of misappropriated funds and hidden assets through corporate structures, trusts, and offshore jurisdictions to support recovery and freezing order applications.",
    content:
      "Asset tracing is the forensic accounting discipline of following money and value from its source through subsequent transfers to identify where assets can be recovered. In English law, tracing in equity allows a claimant to follow misappropriated property into substituted assets and mixed funds, subject to the rules on tracing at common law and in equity established in cases such as Foskett v McKeown [2001]. Our dispute accountants prepare tracing schedules showing each material transfer, identify dissipation into property, investments, and related-party entities, and quantify the recoverable balance. We support applications for worldwide freezing injunctions (Mareva relief), Norwich Pharmacal orders against banks and intermediaries, and disclosure orders in support of asset recovery. Tracing engagements often run in parallel with fraud investigation and insolvency proceedings under the Insolvency Act 1986, including claims for transactions at an undervalue under section 238 and preferences under section 239. Clear, chronological tracing reports are essential for persuading the court that identified assets represent traceable proceeds of the claimant's property.",
    methodology: [
      {
        phase: "Source Identification",
        whatWeDo:
          "Establish the origin of funds or assets claimed, linking to breach of trust, fraud, or contractual wrong.",
        deliverable: "Source schedule",
      },
      {
        phase: "Transaction Mapping",
        whatWeDo:
          "Trace each material transfer through bank accounts, inter-company journals, and third-party payments.",
        deliverable: "Flow diagram & ledger trace",
      },
      {
        phase: "Asset Identification",
        whatWeDo:
          "Identify substituted assets, property, shares, vehicles, and investments, and related-party recipients.",
        deliverable: "Asset register",
      },
      {
        phase: "Recovery Analysis",
        whatWeDo:
          "Assess recoverable amounts, mixing issues, and competing claims; advise on proportionate recovery strategies.",
        deliverable: "Recovery quantum schedule",
      },
      {
        phase: "Injunction Support",
        whatWeDo:
          "Provide affidavit evidence and schedules supporting freezing orders and disclosure applications.",
        deliverable: "Court-ready tracing report",
      },
    ],
    faqs: [
      {
        question: "What is the difference between tracing at law and tracing in equity?",
        answer:
          "Tracing at common law is more restrictive and generally requires identifiable proceeds in unchanged form. Tracing in equity is more flexible and permits following value into substituted assets and mixed accounts, subject to proprietary claim rules. Our reports address which regime applies and document the trace accordingly for UK courts.",
      },
      {
        question: "Can assets held offshore be traced?",
        answer:
          "Yes, though offshore structures add complexity. We analyse transfer chains using bank records, corporate filings, and disclosure obtained via Norwich Pharmacal or cross-border judicial assistance. Tracing schedules identify jurisdiction, entity, and asset type to support worldwide freezing relief and enforcement strategy.",
      },
    ],
  },
  {
    id: "business-share-valuation",
    name: "Business & Share Valuation",
    description:
      "Independent valuations of businesses and shareholdings for shareholder disputes, M&A completion accounts, matrimonial proceedings, and expert determination.",
    content:
      "Business and share valuation sits at the heart of many UK disputes where the court or parties must determine fair value rather than a negotiated price. Our dispute accountants apply recognised valuation approaches, income (DCF), market (comparable transactions and multiples), and asset-based, selecting the method appropriate to the company, its stage, and the purpose of the valuation under the Share Valuation Regulations 2008, the Companies Act 2006 unfair prejudice framework, or contractual valuation clauses. Minority discounts and control premiums are applied only where legally permissible: the House of Lords in O'Neill v Phillips [1999] and subsequent unfair prejudice case law requires careful analysis of whether a minority shareholder is entitled to pro rata fair value without discount. We also value businesses for matrimonial proceedings under section 25 of the Matrimonial Causes Act 1973, completion account disputes, earn-out disagreements, and partnership dissolution. Every valuation report sets out assumptions, normalisation adjustments to maintain earnings, and sensitivity analysis, and complies with CPR Part 35 or FPR Part 25 as applicable. Where disputes are referred to expert determination, we act as determiner or advising expert per the appointment terms.",
    methodology: [
      {
        phase: "Purpose & Standard",
        whatWeDo:
          "Confirm the valuation date, standard of value (fair value, market value, equitable value), and legal framework governing the engagement.",
        deliverable: "Valuation brief",
      },
      {
        phase: "Financial Normalisation",
        whatWeDo:
          "Adjust reported earnings for one-off items, related-party charges, and owner remuneration to reach maintainable earnings.",
        deliverable: "Normalised accounts",
      },
      {
        phase: "Method Selection",
        whatWeDo:
          "Apply DCF, market multiples, or net assets as appropriate; document why rejected methods are unsuitable.",
        deliverable: "Valuation model",
      },
      {
        phase: "Discounts & Premiums",
        whatWeDo:
          "Analyse minority interest, marketability, and control issues in line with UK case law and instruction.",
        deliverable: "Adjustment schedule",
      },
      {
        phase: "Expert Report",
        whatWeDo:
          "Prepare a reasoned valuation report with range analysis where uncertainty is material.",
        deliverable: "CPR/FPR compliant valuation report",
      },
    ],
    faqs: [
      {
        question: "Is a minority discount applied in unfair prejudice claims?",
        answer:
          "Not automatically. Under section 994 of the Companies Act 2006 and case law including Re Bird Precision Bellows Ltd [1984], the court may order fair value without a minority discount where a buy-out is ordered. The applicable discount depends on the facts, the company's articles, and any shareholders' agreement, we address this explicitly in every valuation.",
      },
      {
        question: "How are completion account disputes valued?",
        answer:
          "Completion accounts disputes turn on the sale and purchase agreement definitions of working capital, net debt, and normalised earnings at completion. We reconstruct the closing balance sheet per the contract, identify disputed adjustments, and quantify the price adjustment, often referred to as the 'true-up', payable under the locked box or completion accounts mechanism.",
      },
    ],
  },
  {
    id: "shareholder-partnership-disputes",
    name: "Shareholder & Partnership Dispute Accounting",
    description:
      "Forensic accounting for unfair prejudice petitions, partnership dissolution, deadlock buy-outs, and breach of directors' duties claims under the Companies Act 2006.",
    content:
      "Shareholder and partnership disputes in England and Wales frequently require a dispute accountant to unravel years of management accounts, director remuneration, dividends, and related-party transactions. Under section 994 of the Companies Act 2006, a member may petition where the company's affairs are conducted in a manner unfairly prejudicial to their interests; the court's remedy often includes a buy-out order at fair value. We analyse whether profits have been diverted through excessive director salaries, undisclosed related-party dealings, or improper expense claims, and quantify the financial prejudice suffered. In partnership disputes governed by the Partnership Act 1890 or bespoke partnership agreements, we address profit allocation, capital accounts, and goodwill on dissolution. Our work supports without prejudice negotiations, mediation, and trial, including preparation of Scott Schedules of disputed items where appropriate. We also advise on section 212 misfeasance claims and breach of fiduciary duty quantification, applying account of profits methodology where equitable accounting is sought. All reports comply with CPR Part 35 and are structured for joint expert discussion where the court directs a Single Joint Expert on valuation issues.",
    methodology: [
      {
        phase: "Governance Review",
        whatWeDo:
          "Examine articles, shareholders' agreements, partnership deeds, and board minutes to establish rights and duties.",
        deliverable: "Governance summary",
      },
      {
        phase: "Financial Forensics",
        whatWeDo:
          "Analyse management accounts, payroll, dividends, and related-party transactions for prejudice or breach.",
        deliverable: "Forensic findings schedule",
      },
      {
        phase: "Prejudice Quantification",
        whatWeDo:
          "Quantify financial detriment, suppressed dividends, excessive remuneration, or diverted opportunities.",
        deliverable: "Prejudice quantum",
      },
      {
        phase: "Valuation",
        whatWeDo:
          "Value the shareholding or partnership interest for buy-out, applying fair value principles and relevant discounts.",
        deliverable: "Share/partnership valuation",
      },
      {
        phase: "Expert Report",
        whatWeDo:
          "Prepare a CPR Part 35 report addressing liability-related accounting issues and quantum for trial or settlement.",
        deliverable: "Expert witness report",
      },
    ],
    faqs: [
      {
        question: "What is an S994 petition and when is a dispute accountant needed?",
        answer:
          "An S994 petition is brought under section 994 of the Companies Act 2006 alleging unfair prejudice to a shareholder. A dispute accountant is typically instructed to analyse whether financial conduct was prejudicial, quantify loss, and value the petitioner's shares for a potential buy-out order under section 996.",
      },
      {
        question: "Can a dispute accountant act on partnership dissolution without a company?",
        answer:
          "Yes. Partnership disputes involve profit-sharing accounts, capital balances, and goodwill allocation on dissolution under the Partnership Act 1890 or express agreement. We prepare dissolution accounts, identify undrawn profits, and value partnership interests for buy-out or court-ordered winding up.",
      },
    ],
  },
  {
    id: "ma-transaction-disputes",
    name: "M&A Transaction Dispute Accounting",
    description:
      "Expert accounting on completion accounts, locked box mechanisms, earn-out disputes, warranty claims, and purchase price adjustment disagreements.",
    content:
      "M&A transaction disputes arise when buyers and sellers disagree on the final price adjustment, earn-out payment, or warranty claim quantum following a share or asset purchase. Our dispute accountants are experienced in the accounting mechanics of SPA-defined completion accounts, locked box balance sheets, and earn-out formulae tied to EBITDA, revenue, or customer retention metrics. We reconstruct closing balance sheets per the sale and purchase agreement definitions, normalising working capital, identifying items requiring specific treatment under the contract, and calculating the true-up payable to buyer or seller. Earn-out disputes frequently involve disagreements over whether management ran the business consistent with pre-completion conduct, whether permitted adjustments apply, and whether targets were achieved on the contractually defined basis. Warranty and indemnity claims require quantification of loss flowing from breach of warranty, subject to disclosure, de minimis, and cap provisions. We act in High Court proceedings, expert determination under ICC or LCIA rules, and without prejudice negotiations. Reports address the contractual hierarchy, specific definitions override general accounting standards unless the SPA provides otherwise, and are prepared for CPR Part 35 or as determinations per appointment terms.",
    methodology: [
      {
        phase: "SPA Analysis",
        whatWeDo:
          "Review the sale and purchase agreement, disclosure letter, and completion mechanisms to identify disputed provisions.",
        deliverable: "Contract issues matrix",
      },
      {
        phase: "Closing Reconstruction",
        whatWeDo:
          "Rebuild completion or locked box accounts per SPA definitions, applying agreed accounting policies.",
        deliverable: "Draft completion accounts",
      },
      {
        phase: "Adjustment Disputes",
        whatWeDo:
          "Analyse each disputed line item, working capital, debt, capex, normalisation, and quantify the price impact.",
        deliverable: "Adjustment schedule",
      },
      {
        phase: "Earn-Out / Warranty",
        whatWeDo:
          "Calculate earn-out entitlements or warranty claim quantum with reference to contractual conditions precedent.",
        deliverable: "Claim quantification",
      },
      {
        phase: "Determination / Report",
        whatWeDo:
          "Issue expert determination or CPR Part 35 report as appointed, with clear findings on each disputed item.",
        deliverable: "Final determination or report",
      },
    ],
    faqs: [
      {
        question: "What is the difference between locked box and completion accounts?",
        answer:
          "A locked box fixes the price based on a historical balance sheet at an agreed date; the seller gives anti-leakage covenants protecting value to completion. Completion accounts adjust the price post-completion based on actual closing figures. Disputes differ: locked box claims often concern leakage; completion account disputes concern line-by-line balance sheet items.",
      },
      {
        question: "Can M&A accounting disputes be referred to expert determination?",
        answer:
          "Yes. Many SPAs include expert determination clauses for completion account and earn-out disputes, often under ICC or similar rules. Our accountants act as expert determiner or as advising party expert, producing binding or persuasive decisions faster and more cost-effectively than full litigation.",
      },
    ],
  },
  {
    id: "matrimonial-financial",
    name: "Matrimonial Financial Dispute Accounting",
    description:
      "Forensic accounting for Form E disclosure, hidden income analysis, business valuations, and expert reports under FPR Part 25 in financial remedy proceedings.",
    content:
      "Matrimonial financial dispute accounting supports family practitioners in financial remedy proceedings under the Matrimonial Causes Act 1973 and Family Procedure Rules 2010. Our experts analyse Form E disclosure, identify discrepancies between declared and actual income, and value business interests, partnerships, and trusts that form part of the matrimonial pot. Hidden income analysis applies forensic techniques, bank statement review, lifestyle expenditure benchmarking, and analysis of undeclared cash businesses, to establish the true resources available for division. Business valuations for family proceedings apply a fair value standard, often without minority discounts where the court treats the holding as part of the matrimonial assets. We prepare reports compliant with FPR Part 25 and the Ikarian Reefer duties of expert independence, and give oral evidence at Financial Dispute Resolution hearings and final hearings. Engagements also cover trust structures, offshore holdings, and pre-nuptial agreement disclosure challenges. Our work assists the court in applying the section 25 factors, particularly the income, earning capacity, property, and financial resources of each party, on an evidenced basis rather than incomplete disclosure.",
    methodology: [
      {
        phase: "Disclosure Review",
        whatWeDo:
          "Analyse Form E, bank statements, tax returns, and business accounts for completeness and consistency.",
        deliverable: "Disclosure assessment",
      },
      {
        phase: "Hidden Income Analysis",
        whatWeDo:
          "Apply forensic techniques to identify undeclared income, cash takings, and lifestyle inconsistencies.",
        deliverable: "Reconstructed income schedule",
      },
      {
        phase: "Asset & Business Valuation",
        whatWeDo:
          "Value companies, property portfolios, and investments forming part of the matrimonial assets.",
        deliverable: "Valuation report",
      },
      {
        phase: "Needs & Resources",
        whatWeDo:
          "Support counsel with schedules of resources, liquidity, and tax consequences of proposed orders.",
        deliverable: "Resource schedule",
      },
      {
        phase: "FPR Part 25 Report",
        whatWeDo:
          "Prepare an expert report for court or settlement, compliant with family court practice directions.",
        deliverable: "Family court expert report",
      },
    ],
    faqs: [
      {
        question: "How does FPR Part 25 differ from CPR Part 35 for experts?",
        answer:
          "FPR Part 25 governs expert evidence in family proceedings and imposes the same fundamental duty, the expert's overriding obligation is to the court. Practice Direction 25B sets additional requirements for family reports. Our matrimonial experts are experienced in both frameworks and the specific disclosure obligations in financial remedy cases.",
      },
      {
        question: "Can you prove hidden income in divorce proceedings?",
        answer:
          "Forensic accountants reconstruct income from bank flows, business records, and lifestyle analysis where disclosure is incomplete or inconsistent. While no expert can guarantee discovery of all concealed assets, systematic analysis frequently identifies material undeclared resources that affect the section 25 exercise and settlement negotiations.",
      },
    ],
  },
  {
    id: "expert-witness-reports",
    name: "Expert Witness Reports & Testimony",
    description:
      "CPR Part 35 and FPR Part 25 compliant expert reports, joint statements, conference attendance, and oral evidence for UK courts, tribunals, and arbitration.",
    content:
      "Expert witness reports are the primary vehicle through which dispute accounting evidence reaches the English court. Under CPR Part 35 and the associated Practice Direction, experts must provide independent opinions within their area of expertise, comply with the report format requirements, and confirm their understanding of the overriding duty to the court. Our experts prepare reports addressing specific questions of quantum, valuation, and forensic accounting set out in the letter of instruction, with clear separation of instructions, assumptions, and opinions. We attend experts' meetings with opposing experts to produce joint statements identifying agreed facts, agreed methodology, and remaining areas of disagreement, often narrowing trial issues significantly. Where appointed as Single Joint Expert, we maintain independence from both parties while responding to joint instructions. Party-appointed experts attend pre-trial conferences with counsel and give oral evidence under cross-examination. We also accept appointments in arbitration (LCIA, ICC, UNCITRAL) and expert determination, adapting report format to the applicable rules. Shadow expert engagements, where we advise counsel without producing a report, are available for case strategy and critique of opposing expert evidence, subject to proper disclosure rules.",
    methodology: [
      {
        phase: "Instruction",
        whatWeDo:
          "Review the letter of instruction, pleadings, and legal framework; confirm scope, timetable, and CPR/FPR compliance.",
        deliverable: "Engagement letter response",
      },
      {
        phase: "Analysis",
        whatWeDo:
          "Perform the underlying forensic accounting, valuation, or tracing work required to answer the instructed questions.",
        deliverable: "Working papers",
      },
      {
        phase: "Draft Report",
        whatWeDo:
          "Prepare the expert report with statement of truth, qualifications, instructions, assumptions, and reasoned opinions.",
        deliverable: "Draft expert report",
      },
      {
        phase: "Joint Meeting",
        whatWeDo:
          "Meet the opposing expert, identify common ground, and produce the CPR Part 35 joint statement.",
        deliverable: "Joint statement",
      },
      {
        phase: "Trial / Arbitration",
        whatWeDo:
          "Attend court or tribunal, give oral evidence, and respond to cross-examination on report findings.",
        deliverable: "Oral expert evidence",
      },
    ],
    faqs: [
      {
        question: "What must a CPR Part 35 expert report contain?",
        answer:
          "A compliant report must include the expert's qualifications, material instructions, documents relied upon, assumptions, methodology, opinions, and a statement that the expert understands their duty to the court. Practice Direction 35 sets out the full format. Our reports follow the standard template accepted in the Business and Property Courts.",
      },
      {
        question: "What is the difference between a shadow expert and a party-appointed expert?",
        answer:
          "A party-appointed expert produces a report for disclosure and may give oral evidence. A shadow expert advises the legal team behind the scenes on strategy and critique of the opponent's expert but does not give evidence unless their role is disclosed. We offer both, with clear engagement terms to avoid conflicts with CPR disclosure obligations.",
      },
    ],
  },
];
