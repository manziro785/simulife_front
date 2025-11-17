export interface StatsGrowth {
  growth: number;
  percentage: number;
}

export const calculateGrowth = (
  initial: number,
  current: number
): StatsGrowth => {
  const growth = current - initial;
  const percentage = initial ? Math.round((growth / initial) * 100) : 0;
  return { growth, percentage };
};

export const calculateAllStatsGrowth = (
  initialStats: { money: number; energy: number; mood: number },
  currentStats: { money: number; energy: number; mood: number }
) => {
  return {
    money: calculateGrowth(initialStats.money, currentStats.money),
    energy: calculateGrowth(initialStats.energy, currentStats.energy),
    mood: calculateGrowth(initialStats.mood, currentStats.mood),
  };
};
