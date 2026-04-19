import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import AboutMe from "./components/AboutMe";
import Jobs from "./components/Jobs";

export default function Body() {
  const { name, surname, degrees } = useSelector(
    (state: RootState) => state.personalInfo,
  );
  const jobs = useSelector((state: RootState) => state.jobs);

  return (
    <div className="flex flex-col gap-10 sm:gap-16">
      <AboutMe name={name} surname={surname} degrees={degrees} />
      <Jobs jobs={jobs} />
    </div>
  );
}
