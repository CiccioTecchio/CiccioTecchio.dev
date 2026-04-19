import { createSlice } from "@reduxjs/toolkit";

type JobState = {
  companyName: string;
  description: string;
  startDate: string;
  endDate: string;
};

const initialState: JobState[] = [
  {
    companyName: "Engineering",
    description:
      "Software Development Specialist focused on cybersecurity applications, Angular front-end architecture, RxJS, NgRx, CI/CD pipelines, Docker deployments, and international research projects.",
    startDate: "07-2023",
    endDate: "Present",
  },
  {
    companyName: "NTT Data",
    description:
      "Software Engineer working on Angular applications for the Italian Public Administration, scalable front-end architectures, legacy improvements, and Agile delivery.",
    startDate: "06-2020",
    endDate: "07-2023",
  },
];

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
});

export default jobSlice.reducer;
