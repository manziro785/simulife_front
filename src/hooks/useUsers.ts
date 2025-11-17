import { getUsers } from "./../api/users";
import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return {
    users,
    isLoading,
    error,
  };
};
