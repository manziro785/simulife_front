import { useState, useMemo } from "react";
import { useNavigation } from "./useNavigation";
import { useUsers } from "./useUsers";
import { usePlayerStore } from "../store (zustand)/usePlayerStore";
import { sortUsersByMetric } from "../utils/liderBoard";

type SortOption = "money" | "energy" | "mood";

export const useRatePage = () => {
  const { goBack, logOut } = useNavigation();
  const { users, isLoading, error } = useUsers();
  const { nickname: currentUserNickname } = usePlayerStore();
  const [sortBy, setSortBy] = useState<SortOption>("money");

  const sortedUsers = useMemo(() => {
    return sortUsersByMetric(users || [], sortBy);
  }, [users, sortBy]);

  const handleSortChange = (metric: SortOption) => {
    setSortBy(metric);
  };

  return {
    users: sortedUsers,
    currentUserNickname,
    isLoading,
    error,
    sortBy,
    handleSortChange,
    goBack,
    logOut,
  };
};
