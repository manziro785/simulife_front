import axios, { AxiosError } from "axios";
import type { User, AuthResponse } from "../types/auth";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchLogin = async (userData: User): Promise<AuthResponse> => {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/login`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error: unknown) {
    const err = error as AxiosError<{ message?: string }>;
    console.error("Error login:", err);
    throw new Error(
      err.response?.data?.message || err.message || "Ошибка входа"
    );
  }
};

export const fetchRegister = async (userData: User): Promise<AuthResponse> => {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/register`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error: unknown) {
    const err = error as AxiosError<{ message?: string }>;
    console.error("Error register:", err);
    throw new Error(
      err.response?.data?.message || err.message || "Ошибка регистрации"
    );
  }
};
