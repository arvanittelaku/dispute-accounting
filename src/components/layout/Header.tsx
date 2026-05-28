"use client";

import Link from "next/link";
import { useState } from "react";
import { NavDropdown } from "./NavDropdown";
import {
  navServiceLinks,
  navDisputeTypeLinks,
  navCaseTypeLinks,
  navSectorLinks,
  navResourcesMenuLinks,
  whoWeHelpItems,
} from "@/data/nav";

const mobileGroups = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "All Services" },
      ...navServiceLinks,
    ],
  },
  {
    title: "Dispute Types",
    links: navDisputeTypeLinks,
  },
  {
    title: "Who We Help",
    links: whoWeHelpItems,
  },
  {
    title: "Case Types",
    links: [
      { href: "/case-types", label: "All Case Types" },
      ...navCaseTypeLinks,
    ],
  },
  {
    title: "Sectors",
    links: [
      { href: "/sectors", label: "All Sectors" },
      ...navSectorLinks,
    ],
  },
  {
    title: "Resources",
    links: navResourcesMenuLinks,
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMobile = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="min-w-0 shrink truncate text-base font-bold text-primary sm:text-lg"
          onClick={closeMobile}
        >
          Dispute<span className="text-accent">Accounting</span>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex"
          aria-label="Main"
        >
          <Link
            href="/"
            className="rounded px-2 py-2 text-sm text-body transition-colors hover:bg-section-alt hover:text-primary"
          >
            Home
          </Link>
          <NavDropdown
            label="Services"
            href="/services"
            items={navServiceLinks}
          />
          <NavDropdown
            label="Dispute Types"
            href="/dispute-types"
            items={navDisputeTypeLinks}
          />
          <NavDropdown
            label="Who We Help"
            href="/who-we-help"
            items={whoWeHelpItems}
          />
          <NavDropdown
            label="Case Types"
            href="/case-types"
            items={navCaseTypeLinks}
          />
          <NavDropdown
            label="Sectors"
            href="/sectors"
            items={navSectorLinks}
          />
          <NavDropdown
            label="Resources"
            href="/guides"
            items={navResourcesMenuLinks}
          />
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="hidden min-h-[44px] items-center rounded bg-accent px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#8f4f17] sm:px-4 lg:inline-flex"
          >
            Contact Us
          </Link>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-border p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="max-h-[min(85vh,32rem)] overflow-y-auto border-t border-border bg-white lg:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <Link
              href="/"
              className="mb-4 flex min-h-[44px] items-center text-sm font-medium text-body"
              onClick={closeMobile}
            >
              Home
            </Link>
            <div className="grid gap-6 xs:grid-cols-2">
              {mobileGroups.map((group) => (
                <div key={group.title} className="min-w-0">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary/60">
                    {group.title}
                  </p>
                  <ul className="space-y-1">
                    {group.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          className="flex min-h-[44px] items-center rounded px-2 text-sm text-body hover:bg-section-alt"
                          onClick={closeMobile}
                        >
                          <span className="line-clamp-2">{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-4 flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-4 py-3 font-semibold text-white"
              onClick={closeMobile}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
