import API from "../api";
import type { CategoryTypes } from "./category.types";

export const getAllCategories = async (): Promise<CategoryTypes[]> => {
  const res = await API.get("/category/category/");
  return res.data;
};