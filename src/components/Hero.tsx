"use client";

import { useState } from "react";
import { Icon } from "@/components/Icons";

const specs = [
  { label: "Flute Type", value: "B/E Micro-Flute", accent: false },
  { label: "Board Caliper", value: "Virgin Kraft 350g", accent: false },
  { label: "Closure", value: "Crash Lock Base", accent: true },
];

export function Hero() {
  const [folded, setFolded] = useState(false);

  return (
    <section id="home" className="dieline-blueprint relative scroll-mt-20 overflow-hidden pb-8 pt-5 sm:pb-20 sm:pt-12 lg:pb-28 lg:pt-16">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-4 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <div className="mb-3 inline-flex max-w-full flex-nowrap items-center gap-1 whitespace-nowrap rounded border border-kraft-300 bg-white px-2 py-1 font-mono text-[9px] uppercase leading-none tracking-tight text-charcoal-700 shadow-sm min-[400px]:text-[10px] sm:mb-6 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs sm:tracking-wider">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brandblue-600 sm:h-2 sm:w-2" />
              Industrial-Grade Custom Packaging
              <span className="text-kraft-400">|</span>
              <span className="font-bold text-brandblue-600">100% Recyclable</span>
            </div>

            <h1 className="mb-3 text-[1.45rem] font-extrabold leading-[1.08] tracking-tight text-charcoal-900 min-[380px]:text-[1.6rem] sm:mb-6 sm:text-4xl lg:text-5xl">
              <span className="block whitespace-nowrap">Powering Products with</span>
              <span className="relative inline-block whitespace-nowrap text-brandblue-600">
                Better Packaging.
                <svg className="absolute -bottom-1 left-0 h-2.5 w-full sm:-bottom-2 sm:h-3" fill="none" viewBox="0 0 280 12" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 9 C 80 2, 180 12, 278 4" stroke="#2563EB" strokeDasharray="6 4" strokeLinecap="round" strokeWidth="2.5" />
                </svg>
              </span>
            </h1>

            <p className="mb-4 max-w-xl text-[15px] leading-snug text-charcoal-700 sm:mb-8 sm:text-xl sm:leading-relaxed">
              Innovative, structural packaging engineered for modern brands. Designed for transit durability, sustainable impact, and flawless customer perception.
            </p>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-xl bg-brandblue-600 px-7 py-3.5 text-base font-semibold text-white shadow-pop-sm transition-all hover:-translate-y-0.5 hover:bg-brandblue-700 hover:shadow-pop-hover"
              >
                Get a Quote
                <Icon name="arrowRight" className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-xl border border-kraft-300 bg-white px-6 py-3.5 text-base font-semibold text-charcoal-800 shadow-sm transition-all hover:border-charcoal-700 hover:bg-kraft-50 hover:shadow"
              >
                <Icon name="doc" className="mr-2 h-5 w-5 text-brandblue-600" />
                Explore Dieline Specs
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1">
            <div className="crosshair-corners relative rounded-3xl border border-kraft-300 bg-white p-4 shadow-pop-card sm:p-8">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-kraft-300 pb-3 sm:mb-5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  <span className="font-mono text-[11px] font-semibold text-charcoal-800 sm:text-xs">
                    UNBOXING STAGE 3D: KRAFT MASTER
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setFolded((value) => !value)}
                  className="inline-flex items-center gap-1 rounded border border-kraft-300 bg-kraft-100 px-3 py-1 font-mono text-xs font-medium text-brandblue-600 transition-colors hover:bg-kraft-200"
                >
                  {folded ? "Open Flaps" : "Toggle Flaps"}
                  <Icon name="refresh" className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="group/box relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-kraft-300 bg-kraft-100">
                <img
                  src="/images/box.jpg"
                  alt="Packcore corrugated cardboard packaging box"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover/box:scale-105"
                  style={{
                    transform: folded ? "scale(0.97) rotate(-1deg)" : undefined,
                    transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                />
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded border border-charcoal-700 bg-charcoal-900/90 px-2 py-1 font-mono text-[10px] text-white sm:left-4 sm:top-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-brandblue-400" />
                  FOLD LINE A-01 [90° CREASE]
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded border border-kraft-300 bg-white/95 px-2 py-1 font-mono text-[10px] text-charcoal-900 sm:bottom-4 sm:right-4 sm:px-2.5">
                  <span className="font-bold text-brandblue-600">ECT:</span> 44 lbs/in • 350 GSM
                </div>
                <div className="pointer-events-none absolute inset-x-6 top-1/2 hidden items-center justify-between opacity-0 transition-opacity duration-300 group-hover/box:opacity-100 sm:flex">
                  <div className="h-4 w-2 border-l-2 border-brandblue-600" />
                  <div className="relative flex flex-1 items-center justify-center border-t-2 border-dashed border-brandblue-600">
                    <span className="-translate-y-3 rounded bg-brandblue-600 px-2 py-0.5 font-mono text-[9px] text-white">
                      WIDTH: 320mm ±0.4mm
                    </span>
                  </div>
                  <div className="h-4 w-2 border-r-2 border-brandblue-600" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 border-t border-kraft-200 pt-3 text-center font-mono text-xs sm:grid-cols-3">
                {specs.map((spec) => (
                  <div key={spec.label} className="rounded border border-kraft-200 bg-kraft-50 p-2">
                    <div className="text-[10px] uppercase text-charcoal-500">{spec.label}</div>
                    <div className={`font-bold ${spec.accent ? "text-brandblue-600" : "text-charcoal-900"}`}>{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2">
            <div className="grid max-w-lg grid-cols-3 gap-2 border-t border-kraft-300/80 pt-4 sm:gap-4 sm:pt-6">
              <Metric value="99.8%" label="Dieline Accuracy" />
              <Metric value="12M+" label="Boxes Shipped/Mo" bordered />
              <Metric value="<48h" label="Sample Lead Time" bordered accent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({
  value,
  label,
  bordered = false,
  accent = false,
}: {
  value: string;
  label: string;
  bordered?: boolean;
  accent?: boolean;
}) {
  return (
    <div className={bordered ? "border-l border-kraft-300 pl-2 sm:pl-4" : ""}>
      <div className={`font-mono text-xl font-extrabold sm:text-3xl ${accent ? "text-brandblue-600" : "text-charcoal-900"}`}>
        {value}
      </div>
      <div className="mt-0.5 font-mono text-[10px] uppercase leading-tight tracking-wider text-charcoal-600 sm:text-[11px]">
        {label}
      </div>
    </div>
  );
}
