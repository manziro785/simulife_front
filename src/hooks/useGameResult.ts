import { useMutation } from "@tanstack/react-query";
import { saveGameResult } from "../api/gameResult";

export const useGameResult = () => {
  const saveResultMutation = useMutation({
    mutationFn: saveGameResult,
    onSuccess: (data) => {
      console.log("Результаты сохранены", data);
    },
    onError: (error) => {
      console.error("Ошибка сохранения", error);
    },
  });

  return {
    saveResult: saveResultMutation.mutate,
    saveResultAsync: saveResultMutation.mutateAsync,
    isLoading: saveResultMutation.isPending,
    isError: saveResultMutation.isError,
    error: saveResultMutation.error,
  };
};
