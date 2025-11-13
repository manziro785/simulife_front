import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  Character,
  GameState,
  GameStats,
  Choice,
  GameStore,
} from "../types/game";

const defaultStats: GameStats = { money: 0, energy: 0, mood: 0 };
const initialGameState = (): GameState => ({
  character: null,
  currentDay: 1,
  stats: defaultStats,
  history: [],
  lessons: [],
  achievements: [],
});

export const useGameStore = create<GameStore>()(
  persist(
    (set) => ({
      gameState: initialGameState(),
      selectCharacter: (character: Character) =>
        set((state) => ({
          gameState: {
            ...state.gameState,
            character,
            stats: character?.stats ?? state.gameState.stats,
          },
        })),
      nextDay: () =>
        set((state) => ({
          gameState: {
            ...state.gameState,
            currentDay: state.gameState.currentDay + 1,
          },
        })),
      makeChoice: (choice: Choice, choiceText: string) =>
        set((state) => {
          const prev = state.gameState;
          const newStats: GameStats = {
            money: Math.max(0, prev.stats.money + choice.impact.money),
            energy: Math.max(0, prev.stats.energy + choice.impact.energy),
            mood: Math.max(0, prev.stats.mood + choice.impact.mood),
          };
          return {
            gameState: {
              ...prev,
              stats: newStats,
              history: [
                ...prev.history,
                { day: prev.currentDay, choice: choice.id, choiceText },
              ],
              lessons: [...prev.lessons, choiceText],
            },
          };
        }),

      addLesson: (text: string) =>
        set((state) => ({
          gameState: {
            ...state.gameState,
            lessons: [...state.gameState.lessons, text],
          },
        })),
      resetGame: () => set({ gameState: initialGameState() }),
    }),
    {
      name: "simulife_game_store",
      partialize: (state) => ({ gameState: state.gameState }),
      merge: (persistedState, currentState) => {
        const persisted = persistedState as Partial<GameStore>;
        return {
          ...currentState,
          gameState: {
            ...initialGameState(),
            ...(persisted.gameState || {}),
          },
        };
      },
    }
  )
);
