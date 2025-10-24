import API from "../api";
import type { LocationTypes } from "./location.types";

export const getLocation = async (): Promise<LocationTypes[]> => {
  const res = await API.get("/utils/location/");
  return res.data;
};