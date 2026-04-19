type AboutMeProps = {
  name: string;
  surname: string;
  degrees: {
    degreeName: string;
    type: "Bachelor" | "Master";
    vote: number | "110L";
    universityName: string;
    graduationYear: number;
    specialization?: string;
  }[];
};

export default function AboutMe({ name, surname, degrees }: AboutMeProps) {
  const masterDegree = degrees.find(({ type }) => type === "Master");
  const bachelorDegree = degrees.find(({ type }) => type === "Bachelor");
  const universityName =
    masterDegree?.universityName ??
    bachelorDegree?.universityName ??
    "Universita degli Studi di Salerno";

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
          About Me
        </p>

        <p className="mt-4 w-full text-lg leading-8 text-slate-700 sm:text-xl">
          I&apos;m {name} {surname}, a Front-End Developer focused on Angular,
          RxJS, and modern web architectures. I&apos;ve worked on Horizon Europe
          and NextGenerationEU projects, building scalable applications with a
          strong focus on performance, UI/UX, and clean design.
        </p>

        <p className="mt-4 w-full text-base leading-8 text-slate-600 sm:text-lg">
          I hold both a Master&apos;s and a Bachelor&apos;s degree in{" "}
          {masterDegree?.degreeName ?? bachelorDegree?.degreeName ??
            "Computer Science"}{" "}
          from {universityName}.
          {masterDegree
            ? ` I completed my Master's degree in ${masterDegree.graduationYear} with a final grade of ${masterDegree.vote}${masterDegree.specialization ? `, specializing in ${masterDegree.specialization}` : ""}`
            : ""}
          {bachelorDegree
            ? `${masterDegree ? " and" : " I completed"} my Bachelor's degree in ${bachelorDegree.graduationYear}`
            : ""}
          .
        </p>

        <p className="mt-4 w-full text-base leading-8 text-slate-600 sm:text-lg">
          Outside of work, I&apos;m really into riding motorcycles, playing
          video games, and spending time at the gym. I also enjoy chess, even if
          I have to admit I&apos;m not exactly a great player.
        </p>
      </div>
    </section>
  );
}
