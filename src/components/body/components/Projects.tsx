import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Stepper from "@mui/material/Stepper";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

type Project = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  committedBy: string;
  url?: string;
  repoUrl?: string;
};

type ProjectsProps = {
  projects: Project[];
};

const stepLabels = [
  "Work projects",
  "Personal Projects",
  "University Projects",
] as const;

const stepIcons = {
  "Work projects": (
    <span className="projects-step-icon">
      <ApartmentRoundedIcon fontSize="small" />
    </span>
  ),
  "Personal Projects": (
    <span className="projects-step-icon">
      <AutoAwesomeRoundedIcon fontSize="small" />
    </span>
  ),
  "University Projects": (
    <span className="projects-step-icon">
      <SchoolRoundedIcon fontSize="small" />
    </span>
  ),
} as const;

export default function Projects({ projects }: ProjectsProps) {
  const [activeStep, setActiveStep] = useState(0);

  const workProjects: Project[] = [];
  const personalProjects: Project[] = [];
  const universityProjects: Project[] = [];

  projects.forEach((project) => {
    if (project.committedBy === "My self") {
      personalProjects.push(project);
    } else if (project.committedBy === "University") {
      universityProjects.push(project);
    } else {
      workProjects.push(project);
    }
  });

  const groupedProjects = [
    workProjects,
    personalProjects,
    universityProjects,
  ];

  const visibleProjects = groupedProjects[activeStep] ?? [];

  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
          Projects
        </p>

        <div className="mt-8">
          <Stepper nonLinear activeStep={activeStep}>
            {stepLabels.map((label, index) => (
              <Step key={label}>
                <StepButton
                  color="inherit"
                  icon={stepIcons[label]}
                  onClick={() => setActiveStep(index)}
                  sx={{
                    "& .projects-step-icon": {
                      display: "inline-flex",
                      height: 36,
                      width: 36,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "999px",
                      border: "1px solid rgba(148, 163, 184, 0.28)",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(241,245,249,0.92) 100%)",
                      color: "#64748b",
                      boxShadow: "0 8px 20px rgba(15,23,42,0.08)",
                      transition:
                        "transform 180ms ease, box-shadow 180ms ease, color 180ms ease, border-color 180ms ease, background 180ms ease",
                    },
                    "& .MuiStepLabel-label": {
                      color: "#64748b",
                      fontWeight: 500,
                      transition: "color 180ms ease",
                    },
                    '&[aria-selected="true"] .projects-step-icon': {
                      borderColor: "rgba(56, 189, 248, 0.4)",
                      background:
                        "linear-gradient(180deg, rgba(240,249,255,1) 0%, rgba(224,242,254,0.95) 100%)",
                      color: "#0369a1",
                      boxShadow: "0 12px 28px rgba(14,165,233,0.18)",
                      transform: "translateY(-1px)",
                    },
                    '&[aria-selected="true"] .MuiStepLabel-label': {
                      color: "#0f172a",
                    },
                    "&:hover .projects-step-icon": {
                      borderColor: "rgba(56, 189, 248, 0.35)",
                      color: "#0284c7",
                    },
                  }}
                >
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={`${project.name}-${project.startDate}`}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
