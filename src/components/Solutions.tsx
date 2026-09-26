import { Icon } from "@/components/Icons";
import { pillars } from "@/content/site";

export function Solutions() {
  return (
    <section id="solutions" className="relative scroll-mt-20 bg-white py-10 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-16">
          <div className="mb-3 inline-flex items-center rounded bg-kraft-200 px-3 py-1 font-mono text-xs uppercase tracking-wider text-charcoal-800">
            Core Engineering Pillars
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-charcoal-900 sm:text-4xl lg:text-5xl">
            Packaging Designed Around Your Product
          </h2>
          <p className="mt-4 text-base text-charcoal-600 sm:text-lg">
            Four foundational principles dictate every dieline cut, flute selection, and adhesive joint we manufacture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.code} className="tactical-pop crosshair-corners relative rounded-2xl border border-kraft-300 bg-kraft-50/70 p-6 sm:p-7">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-kraft-300 bg-white text-brandblue-600 shadow-sm">
                <Icon name={pillar.icon} className="h-7 w-7" />
              </div>
              <div className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-brandblue-600">{pillar.code}</div>
              <h3 className="mb-3 text-xl font-bold text-charcoal-900">{pillar.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-charcoal-600">{pillar.body}</p>
              <ul className="space-y-1.5 border-t border-dashed border-kraft-300 pt-3 font-mono text-xs text-charcoal-700">
                {pillar.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-charcoal-700 bg-charcoal-900 p-5 text-white shadow-pop-card sm:mt-16 sm:gap-6 sm:p-8 md:flex-row md:items-center">
          <div>
            <div className="mb-1 font-mono text-xs uppercase tracking-wider text-brandblue-400">Custom Prototyping Laboratory</div>
            <h3 className="text-xl font-bold sm:text-2xl">Need a custom dieline sample before mass manufacturing?</h3>
            <p className="mt-1 max-w-xl text-sm text-kraft-300">
              Send us your CAD files or physical product dimensions. We craft rapid structural unboxing mockups in under 48 hours.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-brandblue-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition-all hover:bg-brandblue-500 hover:shadow-pop-hover md:w-auto"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
