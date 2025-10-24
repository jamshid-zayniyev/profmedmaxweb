import API from "../api";
import type { HeroTypes } from "./heroData.types";

export const getAllHeroData = async (): Promise<HeroTypes[]> => {
  const res = await API.get("/utils/homepage-stats/");
  return res.data;
};