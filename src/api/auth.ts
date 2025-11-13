import { api } from "./axiosInstance";
import type { User, AuthResponse } from "../types/auth";

export const fetchLogin = async (userData: User): Promise<AuthResponse> => {
  const res = await api.post("/auth/login", userData);
  return res.data;
};

export const fetchRegister = async (userData: User): Promise<AuthResponse> => {
  const res = await api.post("/auth/register", userData);
  return res.data;
};
