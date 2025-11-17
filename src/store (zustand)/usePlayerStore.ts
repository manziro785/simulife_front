import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Character } from "../types/game";
import type { PlayerStore } from "../types/user";

export const usePlayerStore = create<PlayerStore>()(
  persist(
    (set) => ({
      selectedCharacter: null,
      nickname: null,
      setNickname: (nickname: string | null) => set({ nickname }),
      setSelectedCharacter: (char: Character | null) =>
        set({ selectedCharacter: char }),
    }),
    {
      name: "simulife_player_store",
      partialize: (state) => ({
        selectedCharacter: state.selectedCharacter,
        nickname: state.nickname,
      }),
    }
  )
);
