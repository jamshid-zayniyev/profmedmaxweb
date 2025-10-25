import API from "../api";
import type { WaitlistTypes } from "./waitlist.types";

export const getWaitlist = async (): Promise<WaitlistTypes[]> => {
  const res = await API.get("/waitlist/waitlist/");
  return res.data;
};

export const postWaitlist = async (data: WaitlistTypes): Promise<WaitlistTypes> => {
  const res = await API.post("/waitlist/waitlist/", data);
  return res.data;
};