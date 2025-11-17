import { useMutation } from "@tanstack/react-query";
import { fetchLogin, fetchRegister } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store (zustand)/useAuthStore";
import type { AuthResponse, LoginUser, RegisterUser } from "../types/auth";
import { usePlayerStore } from "../store (zustand)/usePlayerStore";

export const useAuth = () => {
  const navigate = useNavigate();

  const handleSuccess = (data: AuthResponse) => {
    localStorage.setItem("token", data.token);
    useAuthStore.getState().setToken(data.token);

    if (data.nickname) {
      usePlayerStore.getState().setNickname(data.nickname);
    }
    navigate("/character-select");
  };

  const handleError = (error: unknown) => {
    const msg = error instanceof Error ? error.message : String(error);
    console.log(msg);
  };

  const loginMutation = useMutation({
    mutationFn: (params: LoginUser) => fetchLogin(params),
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const registerMutation = useMutation({
    mutationFn: (params: RegisterUser) => fetchRegister(params),
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const submitAuth = async (
    data: LoginUser | RegisterUser,
    type: "login" | "register"
  ) => {
    if (type === "login") {
      return loginMutation.mutateAsync(data as LoginUser);
    } else {
      return registerMutation.mutateAsync(data as RegisterUser);
    }
  };

  return {
    submitAuth,
    isLoading: loginMutation.isPending || registerMutation.isPending,
  };
};
