import API from "../api";
import type { DoctorTypes } from "./doctor.types";

export const getAllDoctors = async (): Promise<DoctorTypes[]> => {
  const res = await API.get("/doctor/doctors/");
  return res.data;
};