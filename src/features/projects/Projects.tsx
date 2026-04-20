import { createSlice } from "@reduxjs/toolkit";

type ProjectState = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  committedBy: string; //chi lo ha commissionato l'azienda ACME s.p.a o l'Università
  url?: string;
  repoUrl?: string;
};

const initialState: ProjectState[] = [
  {
    name: "Cicciotecchio.dev",
    description:
      "Personal project behind this website, used to experiment and improve my skills on technologies I do not know yet, in this case React.",
    startDate: "2026",
    endDate: "2026",
    committedBy: "My self",
    url: "https://cicciotecchio.dev",
    repoUrl: "https://github.com/CiccioTecchio/CiccioTecchio.dev",
  },
  {
    name: "My Awesome Coin Collection",
    description:
      'Educational app created for a seminar I held in the "Web Technologies" course at the Università degli Studi di Salerno.',
    startDate: "2026",
    endDate: "2026",
    committedBy: "My self",
    url: "https://cicciotecchio.github.io/My-Aws-Coins-Collections/",
    repoUrl: "https://github.com/CiccioTecchio/My-Aws-Coins-Collections",
  },
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
    name: "Knoxly",
    description:
      "Master's thesis project focused on a machine learning model able to detect when a person is talking about sensitive topics such as health information, travel details, and financial conditions.",
    startDate: "2020",
    endDate: "2020",
    committedBy: "University",
    repoUrl: "https://github.com/CiccioTecchio/IA-Knoxly",
  },
  {
    name: "ShareErasmus",
    description:
      "University Erasmus platform developed as project manager of a team of 8 people.",
    startDate: "2018",
    endDate: "2019",
    committedBy: "University",
    repoUrl: "https://github.com/CiccioTecchio/SharErasmus",
  },
  {
    name: "YASPL",
    description:
      "YASPL stands for Yet Another Simple Programming Language. This project is an implementation of a programming language featuring a lexical analyzer generated with JFlex, a parser generated with JavaCup, semantic analysis handled through the Visitor pattern, and C code generation built on the same visitor-based approach.",
    startDate: "2019",
    endDate: "2020",
    committedBy: "University",
    repoUrl: "https://github.com/CiccioTecchio/YASPL3",
  },
  {
    name: "N-body Simulation",
    description:
      "University parallel simulation project with AWS cluster configuration and performance testing.",
    startDate: "2018",
    endDate: "2018",
    committedBy: "University",
    repoUrl: "https://github.com/CiccioTecchio/n-Body_MPI",
  },

  {
    name: "SimRank",
    description:
      "Bachelor's thesis project based on the implementation of the SimRank algorithm to estimate how similar two people are starting from their graph of friendships and connections.",
    startDate: "2017",
    endDate: "2017",
    committedBy: "University",
    repoUrl: "https://github.com/CiccioTecchio/simrankJava",
  },
];

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectSlice.reducer;
