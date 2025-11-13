import axios, { AxiosError } from "axios";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchDays = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Нет токена");

  try {
    const res = await axios.get(`${API_BASE_URL}/days`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error: unknown) {
    const err = error as AxiosError<{ message?: string }>;
    console.error("Error days:", err);
    throw new Error(
      err.response?.data?.message || err.message || "Ошибка запроса"
    );
  }
};
