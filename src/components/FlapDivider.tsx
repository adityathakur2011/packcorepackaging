export function FlapDivider({
  label,
  bg,
  fill,
  path,
}: {
  label: string;
  bg: string;
  fill: string;
  path: string;
}) {
  return (
    <div className={`relative flex h-10 w-full items-center justify-center overflow-hidden ${bg}`}>
      <svg className={`h-10 w-full fill-current ${fill}`} viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden>
        <path d={path} />
      </svg>
      <div className="absolute -translate-y-1 px-3 text-center font-mono text-[9px] uppercase tracking-widest text-charcoal-500">
        {label}
      </div>
    </div>
  );
}
