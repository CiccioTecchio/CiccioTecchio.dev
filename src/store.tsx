import { configureStore } from "@reduxjs/toolkit";
import Projects from "./features/projects/Projects";
import Skills from "./features/skills/Skills";
import Jobs from "./features/jobs/Jobs";
import PersonalInfo from "./features/personal-info/PersonalInfo";

const store = configureStore({
  reducer: {
    projects: Projects,
    skills: Skills,
    jobs: Jobs,
    personalInfo: PersonalInfo,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
