import API from "../api";
import type { EmailTypes } from "./email.types";

export const getEmail = async (): Promise<EmailTypes[]> => {
  const res = await API.get("/utils/email/");
  return res.data;
};