import { api } from "./axiosInstance";
import type { AuthResponse, LoginUser, RegisterUser } from "../types/auth";

export const fetchLogin = async (
  userData: LoginUser
): Promise<AuthResponse> => {
  const res = await api.post("/auth/login", userData);
  return res.data;
};

export const fetchRegister = async (
  userData: RegisterUser
): Promise<AuthResponse> => {
  const res = await api.post("/auth/register", userData);
  return res.data;
};
