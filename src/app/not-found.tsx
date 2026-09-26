export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-kraft-200 px-4 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-brandblue-600">Spec missing</p>
      <h1 className="mt-3 text-3xl font-extrabold text-charcoal-900">Page not found</h1>
      <a href="/" className="mt-6 rounded-xl bg-brandblue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brandblue-700">
        Back to Packcore Packaging
      </a>
    </div>
  );
}
