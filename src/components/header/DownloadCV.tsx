import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
export default function DownloadCV() {
  return (
    <div>
      <a
        href="/F-V_CV-2026.pdf"
        download
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-slate-50 shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3"
        aria-label="Download CV"
        title="Download CV"
      >
        <DownloadRoundedIcon fontSize="small" />
        <span className="hidden text-xs font-semibold uppercase tracking-[0.28em] sm:inline">
          Download CV
        </span>
      </a>
    </div>
  );
}
