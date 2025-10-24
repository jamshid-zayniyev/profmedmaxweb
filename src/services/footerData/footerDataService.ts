import API from "../api";
import type { FooterTypes } from "./footerData.types";

export const getAllFooterdata = async (): Promise<FooterTypes[]> => {
  const res = await API.get("/utils/footer-stats/");
  return res.data;
};