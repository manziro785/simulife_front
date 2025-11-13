import { api } from "./axiosInstance";

export const fetchCharacters = async () => {
  const res = await api.get("/characters");
  return res.data;
};
