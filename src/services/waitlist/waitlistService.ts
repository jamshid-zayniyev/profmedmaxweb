import API from "../api";
import type { WaitlistTypes } from "./waitlist.types";

export const getWaitlist = async (): Promise<WaitlistTypes[]> => {
  const res = await API.get("/utils/waitlist/");
  return res.data;
};