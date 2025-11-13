import { api } from "./axiosInstance";

export const fetchDays = async () => {
  const res = await api.get("/days");
  return res.data;
};
