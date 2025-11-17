import type { UserInfo } from "../types/user";

export const getTopColor = (position: number): string => {
  if (position === 1) return "bg-gradient-to-br from-yellow-400 to-amber-500";
  if (position === 2) return "bg-gradient-to-br from-gray-300 to-gray-400";
  if (position === 3) return "bg-gradient-to-br from-orange-400 to-amber-600";
  return "bg-blue-100";
};

export const getTopTextColor = (position: number): string => {
  if (position <= 3) return "text-white font-bold";
  return "text-blue-900 font-semibold";
};

export const sortUsersByMetric = (
  users: UserInfo[],
  sortBy: keyof Pick<UserInfo, "money" | "energy" | "mood">
): UserInfo[] => {
  if (!users || !Array.isArray(users) || users.length === 0) return [];
  return [...users].sort((a, b) => (b[sortBy] || 0) - (a[sortBy] || 0));
};
