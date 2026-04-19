import JobsCard from "./JobsCard";

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
          {jobs.map((job) => (
            <JobsCard
              key={`${job.companyName}-${job.startDate}`}
              {...job}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
