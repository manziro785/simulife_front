import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Character } from "../types/game";
import type { PlayerStore } from "../types/user";

export const usePlayerStore = create<PlayerStore>()(
  persist(
    (set) => ({
      selectedCharacter: null,
      playerName: "",
      setSelectedCharacter: (char: Character) =>
        set({ selectedCharacter: char }),
      setPlayerName: (name: string) => set({ playerName: name }),
    }),
    {
      name: "simulife_player_store",
      partialize: (state) => ({
        selectedCharacter: state.selectedCharacter,
        playerName: state.playerName,
      }),
    }
  )
);
