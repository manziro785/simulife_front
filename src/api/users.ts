import { api } from "./axiosInstance";

export const getUsers = async () => {
  const res = await api.get("/game-results/all");
  return res.data;
};
