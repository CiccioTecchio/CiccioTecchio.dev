type Job = {
  companyName: string;
  description: string;
  startDate: string;
  endDate: string;
};

type JobsProps = {
  jobs: Job[];
};

export default function Jobs({ jobs }: JobsProps) {
  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
          Job Experiences
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {jobs.map(({ companyName, description, startDate, endDate }) => (
            <article
              key={`${companyName}-${startDate}`}
              className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-6 shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-2xl font-semibold text-slate-900">
                    {companyName}
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                    {startDate} - {endDate}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-base leading-8 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
