import { useNavigate } from "react-router-dom";
import { useGameStore } from "../../store (zustand)/useGameStore";
import { FinalScreen } from "../../pages/FinalScreen";

export const FinalScreenWrapper = () => {
  const navigate = useNavigate();
  const { gameState } = useGameStore();

  return (
    <FinalScreen
      gameState={gameState}
      onRestart={() => navigate("/character-select")}
      onProfile={() => navigate("/profile")}
    />
  );
};
