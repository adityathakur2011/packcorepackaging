const badges = ["Zero Delamination", "FSC® Certified", "Inline Caliper QC"];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-white py-10 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-16">
          <div className="mb-3 inline-flex items-center rounded bg-kraft-200 px-3 py-1 font-mono text-xs uppercase tracking-wider text-charcoal-800">
            Manufacturing Philosophy & Vision
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-charcoal-900 sm:text-4xl lg:text-5xl">
            Engineered for Protection.
            <br />
            Crafted for Unboxing.
          </h2>
        </div>

        <div className="crosshair-corners relative overflow-hidden rounded-3xl border border-kraft-300 bg-kraft-100/60 p-6 shadow-pop-card sm:p-12 lg:p-14">
          <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-brandblue-600">
                The Packcore Engineering Promise
              </div>
              <blockquote className="mb-6 text-xl font-bold leading-snug text-charcoal-900 sm:text-2xl">
                “We believe packaging is not just about protecting a product—it is an essential bridge between industrial performance and brand emotion.”
              </blockquote>
              <div className="space-y-4 text-base leading-relaxed text-charcoal-700">
                <p>
                  <strong className="font-semibold text-charcoal-900">Packcore Packaging</strong> focuses on consistent quality and efficient manufacturing processes. We combine modern corrugation technology with practical structural expertise to eliminate damage during transit while elevating customer unboxing.
                </p>
                <p>
                  Every dieline profile, crease channel, and corrugated wall leaving our Ghaziabad hub is calibrated for high compressive strength, strict Edge Crush Test (ECT) compliance, and smooth tactile flap folding.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 border-t border-kraft-300 pt-6 font-mono text-xs text-charcoal-800 sm:grid-cols-3">
                {badges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2 rounded-lg border border-kraft-300 bg-white p-2.5">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-brandblue-600" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-5">
              <div className="relative rounded-2xl border-2 border-dashed border-charcoal-400 bg-white p-6 text-center shadow-sm">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-charcoal-900 px-3 py-0.5 font-mono text-[10px] font-bold text-white">
                  BOX CERTIFICATE STAMP
                </div>
                <div className="mx-auto my-2 flex h-48 w-48 flex-col items-center justify-center rounded-full border-2 border-charcoal-800 p-3 text-charcoal-800">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-charcoal-500">Packcore Packaging</div>
                  <div className="my-0.5 text-xs font-bold uppercase">Singlewall Corrugated</div>
                  <div className="my-1 w-full border-t border-charcoal-300" />
                  <div className="font-mono text-[10px]">
                    BURSTING TEST: <strong>200 LBS</strong>
                  </div>
                  <div className="font-mono text-[10px]">
                    MIN COMB WT: <strong>84 LBS</strong>
                  </div>
                  <div className="font-mono text-[10px]">
                    SIZE LIMIT: <strong>75 INCHES</strong>
                  </div>
                  <div className="my-1 w-full border-t border-charcoal-300" />
                  <div className="font-mono text-[9px] font-bold text-brandblue-600">Ghaziabad, INDIA</div>
                </div>
                <div className="mt-2 font-mono text-[11px] text-charcoal-500">
                  Meets or exceeds all Indian & international freight handling parameters.
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-kraft-300 bg-kraft-200/80 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-kraft-300 bg-white text-lg font-bold text-green-600">
                  ♻
                </div>
                <div className="text-xs text-charcoal-700">
                  <span className="block font-mono font-bold text-charcoal-900">100% Circular Lifecycle</span>
                  Water-soluble adhesives and non-toxic repulpable kraft fibers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
