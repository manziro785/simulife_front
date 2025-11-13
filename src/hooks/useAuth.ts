import { useMutation } from "@tanstack/react-query";
import { fetchLogin, fetchRegister } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store (zustand)/useAuthStore";
import type { AuthResponse } from "../types/auth";

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
    mutationFn: (params: { email: string; password: string }) =>
      fetchLogin(params),
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const registerMutation = useMutation({
    mutationFn: (params: { email: string; password: string }) =>
      fetchRegister(params),
    onSuccess: handleSuccess,
    onError: handleError,
  });

  return {
    login: loginMutation.mutateAsync,
    register: registerMutation.mutateAsync,
    isLoading: loginMutation.isPending || registerMutation.isPending,
  };
};
