import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import Propic from "./Propic";
import DownloadCV from "./DownloadCV";

export default function Header() {
  const { name, surname } = useSelector(
    (state: RootState) => state.personalInfo,
  );

  return (
    <header className="relative z-10 px-4 pt-5 sm:px-6 sm:pt-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[2rem] border border-white/55 bg-white/75 px-4 py-4 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:gap-5 sm:px-6">
        <Propic name={name} surname={surname} />

        <h1 className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-800 sm:text-base sm:tracking-[0.45em]">
          {name} {surname}
        </h1>

        <DownloadCV />
      </div>
    </header>
  );
}
