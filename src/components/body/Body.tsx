import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import AboutMe from "./components/AboutMe";

export default function Body() {
  const { name, surname, degrees } = useSelector(
    (state: RootState) => state.personalInfo,
  );

  return (
    <div>
      <AboutMe name={name} surname={surname} degrees={degrees} />
    </div>
  );
}
