import API from "../api";
import type { PhoneTypes } from "./phone.types";

export const getPhone = async (): Promise<PhoneTypes[]> => {
  const res = await API.get("/utils/phonenumber/");
  return res.data;
};