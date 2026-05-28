"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { PhoneField, formatPhoneFromFormData } from "./PhoneField";

const disputeTypes = [
  "Commercial Contract",
  "Shareholder Dispute",
  "Fraud Investigation",
  "M&A Transaction Dispute",
  "Matrimonial Financial",
  "Insolvency",
  "Partnership Dispute",
  "Professional Negligence",
  "Tax / HMRC",
  "Insurance / BI",
  "Other",
];

const rolesNeeded = [
  "Expert Witness (CPR Part 35)",
  "SJE",
  "Fraud Investigator",
  "Advisory / Shadow Expert",
  "Expert Determiner",
  "Not sure",
];

const legalFrameworks = [
  "CPR Part 35 (civil)",
  "FPR Part 25 (family)",
  "Arbitration",
  "FTT (Tax)",
  "Pre-litigation",
  "Not sure",
];

const claimValues = [
  "Under £100k",
  "£100k–£500k",
  "£500k–£5M",
  "£5M–£50M",
  "Over £50M",
  "Unknown",
];

const urgencyOptions = [
  "Urgent (within 5 days)",
  "Within 2 weeks",
  "Within 1 month",
  "Planning ahead",
];

const audienceTypes = [
  "Solicitor/Law Firm",
  "Business",
  "Individual",
  "Other",
];

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const formspreeUrl = formspreeId ? `https://formspree.io/f/${formspreeId}` : null;

/**
 * POST full lead to /api/submit-lead → Google Sheets + optional n8n webhook.
 * Formspree fallback when neither is configured (503).
 */
export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function submitToFormspree(form: HTMLFormElement): Promise<boolean> {
    if (!formspreeUrl) return false;
    try {
      const data = new FormData(form);
      data.set("phone", formatPhoneFromFormData(data));
      const res = await fetch(formspreeUrl, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    const leadPayload = {
      fullName: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: formatPhoneFromFormData(data),
      organisation: String(data.get("organisation") || "").trim(),
      audienceType: String(data.get("audienceType") || "").trim(),
      disputeType: String(data.get("disputeType") || "").trim(),
      roleNeeded: String(data.get("roleNeeded") || "").trim(),
      legalFramework: String(data.get("legalFramework") || "").trim(),
      claimValue: String(data.get("claimValue") || "").trim(),
      deadline: String(data.get("deadline") || "").trim(),
      urgency: String(data.get("urgency") || "").trim(),
      description: String(data.get("description") || "").trim(),
    };

    if (!leadPayload.fullName || !leadPayload.email) {
      setStatus("error");
      setErrorMessage("Please enter your full name and email.");
      return;
    }

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      });

      if (res.ok) {
        router.push("/thank-you");
        return;
      }

      if (res.status === 503 && (await submitToFormspree(form))) {
        router.push("/thank-you");
        return;
      }

      setStatus("error");
      setErrorMessage(
        res.status === 503
          ? "Lead delivery is not configured. Please email us directly."
          : "Something went wrong. Please try again or email us directly."
      );
    } catch {
      if (await submitToFormspree(form)) {
        router.push("/thank-you");
        return;
      }
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  const inputClass =
    "w-full min-h-[44px] min-w-0 rounded border border-border px-3 py-2 text-base text-body focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:text-sm";
  const labelClass = "mb-1 block text-sm font-medium text-heading";

  return (
    <form onSubmit={handleSubmit} className="min-w-0 space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="organisation" className={labelClass}>
            Organisation *
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            required
            autoComplete="organization"
            className={inputClass}
          />
        </div>
      </div>

      <div className="min-w-0">
        <label htmlFor="audienceType" className={labelClass}>
          You are *
        </label>
        <select
          id="audienceType"
          name="audienceType"
          required
          className={inputClass}
          defaultValue="Solicitor/Law Firm"
        >
          {audienceTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <PhoneField inputClass={inputClass} labelClass={labelClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="disputeType" className={labelClass}>
            Dispute Type
          </label>
          <select id="disputeType" name="disputeType" className={inputClass}>
            {disputeTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="roleNeeded" className={labelClass}>
            Role Needed
          </label>
          <select id="roleNeeded" name="roleNeeded" className={inputClass}>
            {rolesNeeded.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="legalFramework" className={labelClass}>
            Legal framework
          </label>
          <select id="legalFramework" name="legalFramework" className={inputClass}>
            {legalFrameworks.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="claimValue" className={labelClass}>
            Approximate value of dispute
          </label>
          <select id="claimValue" name="claimValue" className={inputClass}>
            {claimValues.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="deadline" className={labelClass}>
            Deadline / hearing date
          </label>
          <input
            id="deadline"
            name="deadline"
            type="date"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="urgency" className={labelClass}>
            Urgency
          </label>
          <select id="urgency" name="urgency" className={inputClass}>
            {urgencyOptions.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="min-w-0">
        <label htmlFor="description" className={labelClass}>
          Brief description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage ?? "Something went wrong. Please try again or email "}{" "}
          <SiteEmailLink className="underline" />.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#8f4f17] disabled:opacity-60 sm:w-auto sm:text-sm"
      >
        {status === "loading" ? "Submitting…" : "Submit Enquiry"}
      </button>
    </form>
  );
}
