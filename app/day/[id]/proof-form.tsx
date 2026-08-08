"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, GitCommit, Share2 } from "lucide-react";

type ProofOfWorkFormProps = {
  day: number;
};

export function ProofOfWorkForm({ day }: ProofOfWorkFormProps) {
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-slate-800 p-5 text-center">
        <CheckCircle2
          className="mx-auto size-10 text-emerald-400"
          aria-hidden
        />
        <p className="mt-3 text-sm font-semibold text-white">
          Proof submitted for Day {day}
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Your public streak has been updated.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-800 bg-slate-800 p-5"
    >
      <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
        Proof of work
      </h2>
      <p className="mt-1 text-xs text-slate-500">
        Share links to your code and your build-in-public post.
      </p>

      <div className="mt-5 space-y-4">
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
            <GitCommit className="size-4 text-indigo-400" aria-hidden />
            GitHub Repository / Commit URL
          </span>
          <input
            type="url"
            name="githubUrl"
            required
            value={githubUrl}
            onChange={(event) => setGithubUrl(event.target.value)}
            placeholder="https://github.com/you/repo/commit/abc123"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none ring-indigo-500/0 transition focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20"
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
            <Share2 className="size-4 text-amber-400" aria-hidden />
            LinkedIn Post URL
          </span>
          <input
            type="url"
            name="linkedinUrl"
            required
            value={linkedinUrl}
            onChange={(event) => setLinkedinUrl(event.target.value)}
            placeholder="https://linkedin.com/in/you/post/..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none ring-amber-500/0 transition focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-amber-500 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 active:scale-[0.98]"
      >
        Submit Proof of Work
      </button>

      <p className="mt-3 text-center text-[11px] text-slate-500">
        Submitting updates your public streak immediately.
      </p>
    </form>
  );
}
