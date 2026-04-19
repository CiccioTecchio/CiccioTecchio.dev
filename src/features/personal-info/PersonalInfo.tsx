import { createSlice } from "@reduxjs/toolkit";

type PersonaInfoState = {
  name: string;
  surname: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  urls: { url: string; name: string }[]; //per esempio url: https://cicciotecchio.dev name:'Personal website'
  degrees: {
    degreeName: string;
    type: "Bachelor" | "Master";
    vote: number | "110L";
    universityName: string;
  }[];
};

const initialState: PersonaInfoState = {
  name: "Francesco",
  surname: "Vicidomini",
  dateOfBirth: "",
  phone: "+39 327 5684733",
  email: "fr.vicidomini94@gmail.com",
  urls: [
    { url: "https://cicciotecchio.dev/", name: "Personal website" },
    { url: "https://github.com/CiccioTecchio", name: "GitHub" },
    {
      url: "https://www.linkedin.com/in/francesco-vicidomini/",
      name: "LinkedIn",
    },
  ],
  degrees: [
    {
      degreeName: "Computer Science",
      type: "Master",
      vote: "110L",
      universityName: "Università degli Studi di Salerno",
    },
    {
      degreeName: "Computer Science",
      type: "Bachelor",
      vote: 94,
      universityName: "Università degli Studi di Salerno",
    },
  ],
};

export const skillSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {},
});

export default skillSlice.reducer;
