import { createSlice } from "@reduxjs/toolkit";

type ProjectState = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  committedBy: string; //chi lo ha commissionato l'azienda ACME s.p.a o l'Università
  url: string;
};

const initialState: ProjectState[] = [
  {
    name: "AVANT",
    description:
      "Cybersecurity project focused on Digital Twin systems. Contributed to web applications and front-end architecture in a research and innovation context.",
    startDate: "2025",
    endDate: "Present",
    committedBy: "Engineering",
    url: "https://www.eng.it/it/insights/stories/research-projects/ipcei-cis-avant",
  },
  {
    name: "ENCRYPT",
    description:
      "Horizon Europe cybersecurity project focused on privacy risk assessment, with Angular 18, RxJS, NgRx, international collaboration, and technical dissemination.",
    startDate: "2023",
    endDate: "2025",
    committedBy: "Engineering",
    url: "https://encrypt-project.eu/",
  },
  {
    name: "PAB Goes Digital",
    description:
      "Platform for the digitalization of public administration services developed with Angular.",
    startDate: "2020",
    endDate: "2023",
    committedBy: "NTT Data",
    url: "",
  },
  {
    name: "ShareErasmus",
    description:
      "University Erasmus platform developed as project manager of a team of 8 people.",
    startDate: "2018",
    endDate: "2019",
    committedBy: "University",
    url: "https://github.com/CiccioTecchio/SharErasmus",
  },
  {
    name: "N-body Simulation",
    description:
      "University parallel simulation project with AWS cluster configuration and performance testing.",
    startDate: "2018",
    endDate: "2018",
    committedBy: "University",
    url: "https://github.com/CiccioTecchio/n-Body_MPI",
  },
];

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectSlice.reducer;
