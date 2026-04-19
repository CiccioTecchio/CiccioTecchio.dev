import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SkillState = {
  name: string;
  description: string;
  rating: number; // valore da 0 a 5 che indica quanto sia bravo con quella skill
};

const initialState: SkillState[] = [
  {
    name: "Angular",
    description: "Primary front-end framework used in enterprise and research projects.",
    rating: 5,
  },
  {
    name: "TypeScript",
    description: "Core language for scalable front-end applications and architectures.",
    rating: 5,
  },
  {
    name: "RxJS",
    description: "Advanced reactive programming for complex state and data flows.",
    rating: 5,
  },
  {
    name: "NgRx",
    description: "State management for reactive Angular applications.",
    rating: 4,
  },
  {
    name: "React",
    description: "Secondary front-end framework used alongside Angular expertise.",
    rating: 3,
  },
  {
    name: "Node.js",
    description: "Backend and tooling experience for full-stack and platform work.",
    rating: 3,
  },
  {
    name: "Java",
    description: "Backend development experience in enterprise environments.",
    rating: 3,
  },
  {
    name: "Git",
    description: "Daily version control and collaborative development workflows.",
    rating: 5,
  },
  {
    name: "Docker",
    description: "Containerized development and deployment in CI/CD contexts.",
    rating: 4,
  },
  {
    name: "Kubernetes",
    description: "Experience supporting cloud-native deployments and environments.",
    rating: 3,
  },
  {
    name: "Cybersecurity",
    description: "Domain experience from security-focused research and product projects.",
    rating: 4,
  },
  {
    name: "Machine Learning",
    description: "General knowledge and supporting technical interest.",
    rating: 2,
  },
];

export const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
});

export default skillSlice.reducer;
