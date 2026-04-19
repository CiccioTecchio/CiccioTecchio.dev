type JobsCardProps = {
  companyName: string;
  description: string;
  startDate: string;
  endDate: string;
};

export default function JobsCard({
  companyName,
  description,
  startDate,
  endDate,
}: JobsCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200/80 bg-slate-50/80 p-6 shadow-[0_16px_48px_rgba(15,23,42,0.06)]">
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

      <p className="mt-6 text-base leading-8 text-slate-600">{description}</p>
    </article>
  );
}
