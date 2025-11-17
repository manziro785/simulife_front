import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { usePlayerStore } from "../store (zustand)/usePlayerStore";
import { useGameStore } from "../store (zustand)/useGameStore";
import { useGameResult } from "../hooks/useGameResult";
import { calculateAllStatsGrowth } from "../utils/statsCalculations";

export const useFinalScreen = () => {
  const { nickname } = usePlayerStore();
  const navigate = useNavigate();
  const { gameState } = useGameStore();
  const { saveResult, isLoading } = useGameResult();
  const hasExecuted = useRef(false);

  const initialStats = gameState.character?.stats || {
    money: 0,
    energy: 0,
    mood: 0,
  };

  const {
    money: moneyGrowth,
    energy: energyGrowth,
    mood: moodGrowth,
  } = calculateAllStatsGrowth(initialStats, gameState.stats);

  useEffect(() => {
    if (hasExecuted.current) return;
    if (!gameState.character?.id) return;

    hasExecuted.current = true;

    saveResult({
      characterId: gameState.character.id,
      mood: gameState.stats.mood,
      money: gameState.stats.money,
      energy: gameState.stats.energy,
    });
  }, []);

  const handleRestart = () => navigate("/character-select");
  const handleProfile = () => navigate("/profile");
  const handleRate = () => navigate("/rate");

  return {
    nickname,
    isLoading,
    gameState,
    moneyGrowth,
    energyGrowth,
    moodGrowth,
    handlers: {
      onRestart: handleRestart,
      onProfile: handleProfile,
      onRate: handleRate,
    },
  };
};
