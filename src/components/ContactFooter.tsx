"use client";

import { FormEvent, useState } from "react";
import { Icon, Logo } from "@/components/Icons";
import { sectors, site, volumes } from "@/content/site";

export function ContactFooter() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const sector = String(data.get("sector") || "");
    const volume = String(data.get("volume") || "");
    const specs = String(data.get("specs") || "");
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Industry: ${sector}`,
      `Monthly volume: ${volume}`,
      "",
      specs || "No extra specifications provided.",
    ].join("\n");
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Packaging quote request")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <footer id="contact" className="dieline-blueprint relative scroll-mt-20 border-t border-kraft-400 bg-kraft-300/80 pb-40 pt-8 sm:pb-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="crosshair-corners relative mx-auto max-w-5xl overflow-hidden rounded-3xl border-2 border-charcoal-900 bg-white p-5 shadow-shipping sm:p-10 lg:p-12">
          <div className="mb-8 flex flex-col gap-4 border-b-2 border-charcoal-900 pb-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <div className="w-fit rounded bg-charcoal-900 px-3 py-1.5 font-mono text-xs font-bold tracking-wider text-white">
                EXPRESS FREIGHT BILL
              </div>
              <div className="font-mono text-xs text-charcoal-600">
                TRACKING ID: <span className="font-bold text-charcoal-900">TRK: PK-IND-90218-X</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="shipping-barcode h-9 w-28 rounded-sm border border-charcoal-800 sm:w-36" />
              <span className="hidden font-mono text-[10px] text-charcoal-500 sm:inline">*PACKCORE*</span>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-6 border-b border-dashed border-charcoal-300 pb-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
              <div>
                <div className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-charcoal-500">Manufacturing origin:</div>
                <Logo className="mb-2 h-8 w-auto" />
                <p className="font-mono text-xs leading-relaxed text-charcoal-600">
                  {site.address.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>

              <div className="rounded-xl border border-kraft-300 bg-kraft-100 p-4">
                <div className="mb-1 font-mono text-[10px] font-bold uppercase tracking-wider text-brandblue-600">
                  Direct Sales & Marketing Lead
                </div>
                <div className="text-lg font-bold text-charcoal-900">Avinash Thakur</div>
                <div className="text-xs font-medium text-charcoal-600">Head of Sales & Strategic Marketing</div>
                <div className="mt-3 space-y-2 border-t border-kraft-300 pt-3 font-mono text-xs">
                  <div className="flex items-start gap-2 text-charcoal-800">
                    <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brandblue-600" />
                    <a className="text-brandblue-600 hover:underline" href={`tel:${site.phoneTel}`}>
                      {site.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-charcoal-800">
                    <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brandblue-600" />
                    <a className="break-all text-brandblue-600 hover:underline" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-charcoal-800">
                    <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brandblue-600" />
                    <span>{site.location}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-charcoal-500">Verified compliance:</div>
                <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                  {["FSC® C12894", "ISO 9001:2015", "ROHS Compliant"].map((seal) => (
                    <span key={seal} className="rounded border border-charcoal-300 bg-white px-2.5 py-1 font-semibold text-charcoal-700">
                      {seal}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-4">
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-brandblue-600">Transmit Packaging Brief</div>
                <h3 className="text-2xl font-extrabold text-charcoal-900">Message Our Packaging Engineers</h3>
                <p className="mt-1 text-xs text-charcoal-600">
                  Get custom quotes, dieline consultation, and production estimates within 4 business hours.
                </p>
              </div>

              {sent ? (
                <div className="rounded-xl border border-brandblue-200 bg-brandblue-50 p-5 text-sm text-charcoal-800" role="status">
                  <p className="font-semibold text-charcoal-900">Your brief is ready to send.</p>
                  <p className="mt-2 leading-relaxed">
                    Your email app should open a message to {site.email}. If it did not, write to us directly and include your box size, flute, and monthly volume.
                  </p>
                  <a href={`mailto:${site.email}`} className="mt-4 inline-flex font-semibold text-brandblue-600 hover:underline">
                    {site.email}
                  </a>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Your Full Name *" name="name" type="text" placeholder="e.g. Rahul Sharma" required />
                    <Field label="Business Email *" name="email" type="email" placeholder="rahul@company.com" required />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1 block font-mono text-xs font-bold uppercase text-charcoal-700">Industry Sector</span>
                      <select name="sector" className="field">
                        {sectors.map((sector) => (
                          <option key={sector}>{sector}</option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className="mb-1 block font-mono text-xs font-bold uppercase text-charcoal-700">Estimated Monthly Volume</span>
                      <select name="volume" className="field">
                        {volumes.map((volume) => (
                          <option key={volume}>{volume}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-1 block font-mono text-xs font-bold uppercase text-charcoal-700">
                      Packaging Specifications & Requirements
                    </span>
                    <textarea
                      name="specs"
                      rows={3}
                      className="field"
                      placeholder="Provide box dimensions (L×W×H), preferred flute type, custom printing, or dieline notes..."
                    />
                  </label>
                  <div className="flex flex-col items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                    <div className="font-mono text-[11px] text-charcoal-500">Confidential specification submission</div>
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-charcoal-900 px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brandblue-600 hover:shadow-pop-hover sm:w-auto"
                    >
                      Dispatch Message
                      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t-2 border-dashed border-charcoal-300 pt-4 font-mono text-[11px] text-charcoal-500 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Packcore Packaging. All rights reserved. Powering Products with Better Packaging.</div>
            <div className="flex flex-wrap items-center gap-4">
              <a className="hover:text-brandblue-600" href="#solutions">
                Dieline Library
              </a>
              <a className="hover:text-brandblue-600" href="#about">
                Material Specs
              </a>
              <a className="hover:text-brandblue-600" href="#privacy">
                Privacy Policy
              </a>
            </div>
          </div>
          <p id="privacy" className="mt-4 scroll-mt-24 font-mono text-[11px] leading-relaxed text-charcoal-500">
            Privacy: quote details are used only to reply to your packaging inquiry. Packcore Packaging does not sell contact information.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-xs font-bold uppercase text-charcoal-700">{label}</span>
      <input name={name} type={type} required={required} placeholder={placeholder} className="field" />
    </label>
  );
}
