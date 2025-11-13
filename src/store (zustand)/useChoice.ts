import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ChoiceState } from "../types/game";

export const useChoiceStore = create<ChoiceState>()(
  persist(
    (set) => ({
      selectedChoice: null,
      hoveredChoice: null,
      setSelectedChoice: (choice) => set({ selectedChoice: choice }),
      setHoveredChoice: (choiceId) => set({ hoveredChoice: choiceId }),
      resetChoices: () => set({ selectedChoice: null, hoveredChoice: null }),
    }),
    {
      name: "simulife-choice-storage",
      partialize: (state) => ({
        selectedChoice: state.selectedChoice,
      }),
    }
  )
);

export const useSelectedChoice = () => useChoiceStore((s) => s.selectedChoice);
export const useSetSelectedChoice = () =>
  useChoiceStore((s) => s.setSelectedChoice);
export const useHoveredChoice = () => useChoiceStore((s) => s.hoveredChoice);
export const useSetHoveredChoice = () =>
  useChoiceStore((s) => s.setHoveredChoice);
export const useResetChoices = () => useChoiceStore((s) => s.resetChoices);
