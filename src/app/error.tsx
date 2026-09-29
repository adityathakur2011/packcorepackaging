"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-kraft-200 px-4 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-brandblue-600">Packcore Packaging</p>
      <h1 className="mt-3 text-2xl font-extrabold text-charcoal-900">Something went wrong</h1>
      <p className="mt-2 max-w-md text-sm text-charcoal-600">The page could not load. Try again, or write to info@packcorepackaging.com.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-xl bg-charcoal-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brandblue-600"
      >
        Try again
      </button>
    </div>
  );
}
