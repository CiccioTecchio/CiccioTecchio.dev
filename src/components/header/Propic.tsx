import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function Propic() {
  const { name, surname } = useSelector(
    (state: RootState) => state.personalInfo,
  );
  return (
    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/80 bg-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.12)] sm:h-16 sm:w-16">
      <img
        src="/Propic-CV.jpg"
        alt={`${name} ${surname}`}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
