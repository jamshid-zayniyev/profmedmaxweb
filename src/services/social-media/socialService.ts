import API from "../api";
import type { MediaTypes } from "./social.types";

export const getSocialMedia = async (): Promise<MediaTypes[]> => {
  const res = await API.get("/utils/social-media/");
  return res.data;
};