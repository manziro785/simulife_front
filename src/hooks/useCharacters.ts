import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../api/characters";
import { usePlayerStore } from "../store (zustand)/usePlayerStore";
import { useNavigate } from "react-router-dom";

export const useCharacter = () => {
  const { nickname } = usePlayerStore();
  const { selectedCharacter, setSelectedCharacter } = usePlayerStore();
  const navigate = useNavigate();

  const {
    data: characters,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });

  const canStartGame = (): boolean => {
    return Boolean(nickname?.trim() && selectedCharacter);
  };

  const startGame = () => {
    if (canStartGame()) {
      navigate("/intro");
    } else {
      alert("Выберите персонажа");
    }
  };

  return {
    characters,
    isLoading,
    error,
    selectedCharacter,
    setSelectedCharacter,
    startGame,
    canStartGame,
  };
};
