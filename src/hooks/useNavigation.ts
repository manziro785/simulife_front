import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store (zustand)/useAuthStore";
import { usePlayerStore } from "../store (zustand)/usePlayerStore";
import { useQueryClient } from "@tanstack/react-query";

export const useNavigation = (resetGame?: () => void) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const goBack = () => {
    navigate(-1);
  };

  const logOut = () => {
    useAuthStore.getState().setToken(null);
    usePlayerStore.getState().setNickname("");
    usePlayerStore.getState().setSelectedCharacter(null);
    resetGame?.();
    localStorage.removeItem("token");
    sessionStorage.clear();
    queryClient.clear();
    navigate("/", { replace: true });
  };

  return { goBack, logOut };
};
