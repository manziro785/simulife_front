import { useGameStore } from "../store (zustand)/useGameStore";

export const useAchievements = () => {
  const gameState = useGameStore((state) => state.gameState);
  return [
    {
      id: "first-day",
      name: "Первый день",
      icon: "🌅",
      unlocked: gameState.currentDay >= 2,
    },
    {
      id: "half-way",
      name: "На полпути",
      icon: "🚀",
      unlocked: gameState.currentDay >= 4,
    },
    {
      id: "wise-choice",
      name: "Мудрый выбор",
      icon: "🧠",
      unlocked: gameState.lessons.length >= 3,
    },
    {
      id: "completed",
      name: "Путь пройден",
      icon: "🎉",
      unlocked: gameState.currentDay > 7,
    },
    {
      id: "balanced",
      name: "Баланс",
      icon: "⚖️",
      unlocked: gameState.stats.mood > 80 && gameState.stats.energy > 80,
    },
    {
      id: "wealthy",
      name: "Богатство",
      icon: "💎",
      unlocked: gameState.stats.money > 800,
    },
  ];
};
