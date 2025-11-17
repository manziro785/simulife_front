import type { GameResult } from "../types/game";
import { api } from "./axiosInstance";

export const saveGameResult = async (userData: GameResult) => {
  const res = await api.post("/game-results/save", userData);
  return res.data;
};
