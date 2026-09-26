"use client";

import { useState } from "react";
import { Logo, Icon } from "@/components/Icons";
import { nav } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-kraft-300 bg-kraft-100/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-20">
          <a href="#home" className="flex items-center" onClick={() => setOpen(false)}>
            <Logo className="h-9 w-auto sm:h-11" />
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-charcoal-700 lg:flex xl:gap-8">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="nav-link py-1 transition-colors hover:text-brandblue-600">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="hidden rounded border border-kraft-300 bg-white/70 px-2.5 py-1 font-mono text-xs text-charcoal-500 md:inline">
              CALIPER: 350 GSM
            </span>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-charcoal-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-brandblue-600 hover:shadow-pop-hover active:scale-95 lg:px-5"
            >
              Get a Quote
              <Icon name="arrow" className="h-4 w-4 text-brandblue-400 transition-all group-hover:translate-x-1 group-hover:text-white" />
            </a>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-charcoal-800 hover:bg-kraft-300 lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeWidth="2" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>

        {open ? (
          <div className="border-t border-kraft-300 pb-5 pt-2 lg:hidden">
            <div className="flex flex-col gap-1 text-sm font-medium">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2.5 text-charcoal-800 hover:bg-kraft-200"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 rounded-lg bg-brandblue-600 py-2.5 text-center font-semibold text-white shadow"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
