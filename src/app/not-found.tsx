import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-6 text-center text-white">
      <div>
        <p className="font-display text-7xl font-extrabold text-brand-accent sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/products" className="btn-outline-light">
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}
