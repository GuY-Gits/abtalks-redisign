import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Flame,
  GitCommit,
  Share2,
  Snowflake,
  Sparkles,
  Trophy,
} from "lucide-react";
import mockData from "@/app/data/mockData.json";

function formatSubmittedAt(isoDate: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(isoDate));
}

export default function DashboardPage() {
  const { user, todaysTask, pastSubmissions } = mockData;
  const progressPercent = Math.round(
    (user.currentStreak / user.totalDays) * 100,
  );

  return (
    <div className="min-h-full bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-[390px] px-5 pb-10 pt-8">
        {/* Header */}
        <header className="mb-6 flex items-center gap-4">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-full ring-2 ring-indigo-500/30">
            <Image
              src={user.avatarUrl}
              alt={`${user.name}'s avatar`}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm text-slate-400">Welcome back,</p>
            <h1 className="truncate text-xl font-bold text-white">
              {user.name}
            </h1>
            <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400 ring-1 ring-amber-500/20">
              <Trophy className="size-3" aria-hidden />
              {user.standing}
            </div>
          </div>
        </header>

        {/* Streak & Progress */}
        <section
          aria-label="Streak and progress"
          className="relative mb-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 p-5"
        >
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-indigo-400">
                <Flame className="size-4 text-amber-400" aria-hidden />
                <span className="text-sm font-medium">Current streak</span>
              </div>
              <p className="mt-1 text-3xl font-bold text-white">
                {user.currentStreak}
                <span className="ml-1 text-base font-normal text-slate-400">
                  / {user.totalDays} days
                </span>
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Best streak: {user.bestStreak} days
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium text-slate-400">
              <Snowflake className="size-3 text-indigo-400/80" aria-hidden />
              1 Streak Freeze Available
            </span>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-slate-400">Challenge progress</span>
              <span className="font-medium text-indigo-300">
                {progressPercent}%
              </span>
            </div>
            <div
              className="h-2 overflow-hidden rounded-full bg-slate-900"
              role="progressbar"
              aria-valuenow={user.currentStreak}
              aria-valuemin={0}
              aria-valuemax={user.totalDays}
              aria-label={`${user.currentStreak} of ${user.totalDays} days completed`}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-indigo-500 transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </section>

        {/* Today's Task */}
        <section
          aria-label="Today's challenge"
          className="mb-5 rounded-2xl border border-indigo-500/20 bg-slate-800 p-5"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-300 ring-1 ring-indigo-500/20">
              <CalendarDays className="size-3.5" aria-hidden />
              Day {todaysTask.day}
            </span>
            <span className="inline-flex items-center gap-1 text-xs capitalize text-amber-400/90">
              <Sparkles className="size-3" aria-hidden />
              {todaysTask.status}
            </span>
          </div>

          <h2 className="text-lg font-bold text-white">{todaysTask.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {todaysTask.description}
          </p>

          <Link
            href={`/day/${todaysTask.day}`}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 active:scale-[0.98]"
          >
            Start Today&apos;s Challenge
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </section>

        {/* Past Submissions */}
        <section aria-label="Past submissions">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Past submissions
            </h2>
            <span className="text-xs text-slate-600">
              {pastSubmissions.length} recent
            </span>
          </div>

          <ul className="max-h-56 space-y-2 overflow-y-auto pr-1 [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-700">
            {pastSubmissions.map((submission) => (
              <li
                key={submission.day}
                className="rounded-xl border border-slate-800 bg-slate-800/70 p-3.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-indigo-400">
                      Day {submission.day}
                    </p>
                    <p className="truncate text-sm font-medium text-white">
                      {submission.title}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500">
                      {formatSubmittedAt(submission.submittedAt)}
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <a
                      href={submission.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub submission for day ${submission.day}`}
                      className="inline-flex size-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-400 transition hover:border-indigo-500/40 hover:text-indigo-300"
                    >
                      <GitCommit className="size-3.5" aria-hidden />
                    </a>
                    <a
                      href={submission.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn post for day ${submission.day}`}
                      className="inline-flex size-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-400 transition hover:border-amber-500/40 hover:text-amber-300"
                    >
                      <Share2 className="size-3.5" aria-hidden />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {pastSubmissions.length === 0 && (
            <p className="rounded-xl border border-dashed border-slate-800 px-4 py-8 text-center text-sm text-slate-500">
              No submissions yet. Complete today&apos;s challenge to get
              started.
            </p>
          )}
        </section>

        <p className="mt-8 text-center text-[11px] text-slate-600">
          Keep going — consistency beats perfection.
        </p>
      </div>
    </div>
  );
}
