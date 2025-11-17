import { TrendingUp, type LucideIcon } from "lucide-react";
import type { StatsGrowth } from "../../utils/statsCalculations";

interface StatCardProps {
  icon: LucideIcon;
  iconColor: string;
  bgGradient: string;
  borderColor: string;
  textColor: string;
  label: string;
  current: number;
  growth: StatsGrowth;
}

export const StatCard = ({
  icon: Icon,
  iconColor,
  bgGradient,
  borderColor,
  textColor,
  label,
  current,
  growth,
}: StatCardProps) => (
  <div className={`${bgGradient} rounded-lg p-6 border-2 ${borderColor}`}>
    <div className="flex items-center justify-between mb-4">
      <Icon className={`w-8 h-8 ${iconColor}`} />
      <TrendingUp
        className={`w-5 h-5 ${
          growth.growth >= 0 ? "text-green-600" : "text-red-600"
        }`}
      />
    </div>
    <div className={`text-2xl ${textColor} mb-1`}>{current}</div>
    <div className="text-sm text-slate-600 mb-2">{label}</div>
    <div
      className={`text-xs ${
        growth.growth >= 0 ? "text-green-600" : "text-red-600"
      }`}
    >
      {growth.growth >= 0 ? "+" : ""}
      {growth.growth} ({growth.percentage >= 0 ? "+" : ""}
      {growth.percentage}%)
    </div>
  </div>
);
