import { useMutation } from "@tanstack/react-query";
import { fetchLogin, fetchRegister } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store (zustand)/useAuthStore";
import type { AuthResponse, TabType, User } from "../types/auth";

export const useAuth = () => {
  const navigate = useNavigate();

  const handleSuccess = (data: AuthResponse) => {
    localStorage.setItem("token", data.token);
    useAuthStore.getState().setToken(data.token);
    navigate("/character-select");
  };

  const handleError = (error: unknown) => {
    const msg = error instanceof Error ? error.message : String(error);
    console.log(msg);
  };

  const loginMutation = useMutation({
    mutationFn: (params: User) => fetchLogin(params),
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const registerMutation = useMutation({
    mutationFn: (params: User) => fetchRegister(params),
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const submitAuth = async (data: User, type: TabType) => {
    if (type === "login") {
      return loginMutation.mutateAsync(data);
    } else {
      return registerMutation.mutateAsync(data);
    }
  };

  return {
    submitAuth,
    isLoading: loginMutation.isPending || registerMutation.isPending,
  };
};
