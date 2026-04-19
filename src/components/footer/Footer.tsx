import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function Footer() {
  const { email, name, surname, urls } = useSelector(
    (state: RootState) => state.personalInfo,
  );
  const githubProfile = urls.find(({ name }) => name === "GitHub");
  const linkedInProfile = urls.find(({ name }) => name === "LinkedIn");

  return (
    <footer className="relative z-10 px-4 pb-5 sm:px-6 sm:pb-8">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-slate-900/10 bg-slate-950 px-4 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.16)] sm:px-6">
        {githubProfile ? (
          <a
            href={githubProfile.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-gradient-to-br from-slate-50 to-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition duration-200 hover:-translate-y-0.5 hover:from-white hover:to-slate-200"
          >
            <GitHubIcon fontSize="small" />
            GitHub
          </a>
        ) : null}

        {linkedInProfile ? (
          <a
            href={linkedInProfile.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sky-300/70 bg-gradient-to-br from-white to-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800 shadow-[0_10px_24px_rgba(14,165,233,0.18)] transition duration-200 hover:-translate-y-0.5 hover:from-sky-50 hover:to-sky-200"
          >
            <LinkedInIcon fontSize="small" />
            LinkedIn
          </a>
        ) : null}

        {email ? (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-[linear-gradient(135deg,_#ffffff_0%,_#dbeafe_20%,_#dcfce7_45%,_#fef3c7_70%,_#fee2e2_100%)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-[0_10px_24px_rgba(239,68,68,0.14)] transition duration-200 hover:-translate-y-0.5 hover:brightness-105"
          >
            <MailOutlineRoundedIcon fontSize="small" />
            Email
          </a>
        ) : null}
      </div>

      <p className="mt-4 text-center text-[0.68rem] font-medium uppercase tracking-[0.28em] text-slate-500">
        &copy; {name} {surname} 2026
      </p>
    </footer>
  );
}
