import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, ListChecks } from "lucide-react";
import mockData from "@/app/data/mockData.json";
import { ProofOfWorkForm } from "./proof-form";

type DayPageProps = PageProps<"/day/[id]">;

function getChallenge(dayId: number) {
  if (mockData.todaysTask.day === dayId) {
    return {
      day: mockData.todaysTask.day,
      title: mockData.todaysTask.title,
      instructions: mockData.todaysTask.description,
    };
  }

  const pastChallenge = mockData.pastSubmissions.find(
    (submission) => submission.day === dayId,
  );

  if (pastChallenge) {
    return {
      day: pastChallenge.day,
      title: pastChallenge.title,
      instructions: pastChallenge.instructions,
    };
  }

  return null;
}

export default async function DayPage({ params }: DayPageProps) {
  const { id } = await params;
  const dayId = Number(id);

  if (!Number.isInteger(dayId) || dayId < 1) {
    notFound();
  }

  const challenge = getChallenge(dayId);

  if (!challenge) {
    notFound();
  }

  return (
    <div className="min-h-full bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-[390px] px-5 pb-10 pt-6">
        <Link
          href="/dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-indigo-300"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to Dashboard
        </Link>

        <section
          aria-label="Task details"
          className="mb-5 rounded-2xl border border-indigo-500/20 bg-slate-800 p-5"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-300 ring-1 ring-indigo-500/20">
            <CalendarDays className="size-3.5" aria-hidden />
            Day {challenge.day}
          </span>

          <h1 className="mt-3 text-xl font-bold text-white">
            {challenge.title}
          </h1>

          <div className="mt-4 rounded-xl border border-slate-700/80 bg-slate-900/60 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400/90">
              <ListChecks className="size-3.5" aria-hidden />
              What to build
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {challenge.instructions}
            </p>
          </div>
        </section>

        <ProofOfWorkForm day={challenge.day} />
      </div>
    </div>
  );
}
