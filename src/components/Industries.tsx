import { Icon } from "@/components/Icons";
import { industries } from "@/content/site";

export function Industries() {
  return (
    <section id="industries" className="dieline-blueprint-subtle relative scroll-mt-20 py-10 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:mb-16 md:flex-row md:items-end">
          <div>
            <div className="mb-3 inline-flex items-center rounded border border-brandblue-200 bg-brandblue-50 px-3 py-1 font-mono text-xs uppercase tracking-wider text-brandblue-700">
              Market Sectors
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-charcoal-900 sm:text-4xl lg:text-5xl">
              Industries We Serve
            </h2>
            <p className="mt-3 max-w-xl text-base text-charcoal-600 sm:text-lg">
              Custom corrugated dielines, folding cartons, and freight shippers calibrated to sector-specific transit dynamics.
            </p>
          </div>
          <div className="self-start rounded-lg border border-kraft-300 bg-white px-4 py-2 font-mono text-xs text-charcoal-500 md:self-end">
            6 SPECIALIZED SECTORS
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {industries.map((item) => (
            <article key={item.code} className="tactical-pop crosshair-corners group overflow-hidden rounded-2xl border border-kraft-300 bg-white p-6 shadow-sm sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-kraft-300 bg-kraft-100 text-brandblue-600 transition-colors duration-300 group-hover:bg-brandblue-600 group-hover:text-white">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-charcoal-400">{item.code}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-charcoal-900 transition-colors group-hover:text-brandblue-600">
                {item.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-charcoal-600">{item.body}</p>
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-kraft-200 pt-4 font-mono text-xs text-charcoal-700">
                <span>{item.meta}</span>
                <a href="#contact" className="font-semibold text-brandblue-600 transition-transform group-hover:translate-x-1">
                  Spec Sheet →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
