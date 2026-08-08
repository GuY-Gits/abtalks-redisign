import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Code2,
  GitCommit,
  Route,
  Share2,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: Route,
    title: "Pick a track",
    description:
      "Choose Web, DSA, or Full Stack — a path built for Indian college students.",
  },
  {
    icon: CalendarDays,
    title: "Build daily",
    description:
      "Ship something every day for 60 days. Small wins compound into real skills.",
  },
  {
    icon: GitCommit,
    title: "Submit proof",
    description:
      "Share your GitHub commits and LinkedIn posts. Show your work, earn credibility.",
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-slate-900 text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.18)_0%,_transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-24 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-[390px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
            <Sparkles className="size-3.5 text-amber-400" aria-hidden />
            60-day challenge for Indian college students
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white">
            Build real skills.
            <span className="mt-1 block bg-gradient-to-r from-amber-400 to-indigo-400 bg-clip-text text-transparent">
              One day at a time.
            </span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-400">
            ABTalks is a structured 60-day coding challenge designed to help you
            stay consistent, ship projects, and stand out — without burning out.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-base font-semibold text-slate-900 shadow-lg shadow-amber-500/25 transition hover:bg-amber-400 active:scale-[0.98]"
            >
              Start Challenge
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <p className="text-center text-xs text-slate-500">
              Free to join · No fluff · Just daily progress
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-slate-800 bg-slate-800/40 p-4">
            {[
              { value: "60", label: "Days" },
              { value: "3", label: "Tracks" },
              { value: "1", label: "Goal" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-amber-400">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="border-t border-slate-800 px-5 py-16 sm:px-6">
        <div className="mx-auto max-w-[390px]">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-wider text-indigo-400">
              How it works
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">
              Three steps to a stronger portfolio
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Simple rules. Real accountability. Built for late-night study sessions
              and early-morning commits alike.
            </p>
          </div>

          <ol className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="group rounded-2xl border border-slate-800 bg-slate-800/50 p-5 transition hover:border-indigo-500/30 hover:bg-slate-800/80"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 ring-1 ring-indigo-500/20">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-xs font-semibold text-amber-400/80">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-8 flex items-center justify-center gap-4 rounded-2xl border border-dashed border-slate-700 bg-slate-800/30 px-5 py-4">
            <GitCommit className="size-5 text-slate-400" aria-hidden />
            <span className="text-slate-600" aria-hidden>
              +
            </span>
            <Share2 className="size-5 text-slate-400" aria-hidden />
            <span className="text-sm text-slate-400">
              Your daily proof, publicly visible
            </span>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-slate-800 px-5 py-12 sm:px-6">
        <div className="mx-auto max-w-[390px] text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-slate-800 p-3">
            <Code2 className="size-6 text-amber-400" aria-hidden />
          </div>
          <h2 className="text-xl font-bold text-white">
            Ready to commit to 60 days?
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Join students across India who are building in public and leveling up
            together.
          </p>
          <Link
            href="/dashboard"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-6 py-3 text-sm font-semibold text-indigo-300 transition hover:border-indigo-400/60 hover:bg-indigo-500/20"
          >
            Start Challenge
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
