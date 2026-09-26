import { About } from "@/components/About";
import { ContactFooter } from "@/components/ContactFooter";
import { FlapDivider } from "@/components/FlapDivider";
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { SiteHeader } from "@/components/SiteHeader";
import { Solutions } from "@/components/Solutions";
import { Icon } from "@/components/Icons";
import { site } from "@/content/site";

const flapA = "M0,0 L450,0 L470,26 L730,26 L750,0 L1200,0 L1200,40 L0,40 Z";
const flapB = "M0,0 L350,0 L380,24 L820,24 L850,0 L1200,0 L1200,40 L0,40 Z";
const flapC = "M0,0 L500,0 L520,24 L680,24 L700,0 L1200,0 L1200,40 L0,40 Z";

export default function HomePage() {
  return (
    <>
      <div className="border-b border-charcoal-700 bg-charcoal-900 px-4 font-mono text-[11px] text-kraft-300 sm:text-xs">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-3 overflow-hidden whitespace-nowrap">
          <div className="flex min-w-0 items-center gap-3">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded border border-brandblue-500/40 bg-brandblue-600/30 px-2 py-0.5 text-[10px] font-bold tracking-wider text-brandblue-400">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-brandblue-400" />
              SPEC: PK-2025
            </span>
            <span className="hidden truncate text-kraft-300/80 lg:inline">
              ISO 9001:2015 & FSC® Certified Structural Packaging Facility
            </span>
          </div>
          <div className="flex min-w-0 items-center justify-end gap-4 text-kraft-400">
            <span className="hidden shrink-0 items-center gap-1.5 md:inline-flex">
              <Icon name="pin" className="h-3.5 w-3.5 text-brandblue-400" />
              Ghaziabad, UP, India
            </span>
            <a className="inline-flex shrink-0 items-center gap-1.5 text-brandblue-400 underline-offset-2 hover:text-white hover:underline" href={`tel:${site.phoneTel}`}>
              <span className="phone-ring text-brandblue-400">
                <Icon name="phone" className="h-3.5 w-3.5" />
              </span>
              {site.phone}
            </a>
          </div>
        </div>
      </div>
      <SiteHeader />
      <main>
        <Hero />
        <FlapDivider label="Dieline cut margin • Section 02" bg="bg-kraft-200" fill="text-white" path={flapA} />
        <About />
        <FlapDivider label="Interlocking flap fold • Section 03" bg="bg-white" fill="text-kraft-100" path={flapB} />
        <Industries />
        <FlapDivider label="Engineering pillars • Section 04" bg="bg-kraft-100" fill="text-white" path={flapC} />
        <Solutions />
      </main>
      <ContactFooter />
    </>
  );
}
