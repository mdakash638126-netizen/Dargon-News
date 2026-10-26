"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, ArrowLeft, Search, Compass } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-white">
      {/* Background Effects */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />

      {/* Main Content */}
      <section className="relative z-10 mx-auto w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-purple-500/10 backdrop-blur">
          <Compass className="h-10 w-10 text-purple-400" />
        </div>

        {/* 404 Number */}
        <h1 className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-8xl font-black tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-4xl">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-3.5 font-semibold shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40 sm:w-auto"
          >
            <Home size={19} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-white/10 sm:w-auto"
          >
            <ArrowLeft size={19} />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-500">
          <Search size={16} />
          <span>Lost? Let get you back on track.</span>
        </div>
      </section>
    </main>
  );
}