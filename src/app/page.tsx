import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <section className="max-w-xl w-full space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Next.js + Vercel Starter
        </h1>
        <p className="text-balance text-muted-foreground">
          Deployed on Vercel, API routes at <code>/api/hello</code>, Tailwind enabled.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/api/hello"
            className="rounded-xl border px-4 py-2 hover:bg-gray-50"
          >
            Call API
          </Link>
          <Link
            href="https://github.com/dannrubio/new-vercel-app/tree/develop"
            className="rounded-xl border px-4 py-2 hover:bg-gray-50"
          >
            Go to Develop
          </Link>
          <a
            href="https://nextjs.org/docs"
            className="rounded-xl border px-4 py-2 hover:bg-gray-50"
            target="_blank"
          >
            Read Docs
          </a>
        </div>
      </section>
    </main>
  );
}
