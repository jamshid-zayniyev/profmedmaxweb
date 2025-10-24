import API from "../api";
import type { workTimeTypes } from "./workTime.types";

export const getworkTime = async (): Promise<workTimeTypes[]> => {
  const res = await API.get("/utils/worktime/");
  return res.data;
};