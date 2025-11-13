import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store (zustand)/useGameStore";
import { usePlayerStore } from "../store (zustand)/usePlayerStore";
import { Trophy, RotateCcw, Coins, Zap, Smile, TrendingUp } from "lucide-react";

export const FinalScreen = () => {
  const playerName = usePlayerStore((state) => state.playerName);
  const navigate = useNavigate();
  const { gameState } = useGameStore();

  const initialStats = gameState.character?.stats || {
    money: 0,
    energy: 0,
    mood: 0,
  };

  const onRestart = () => navigate("/character-select");
  const onProfile = () => navigate("/profile");

  const calculateGrowth = (initial: number, current: number) => {
    const growth = current - initial;
    const percentage = initial ? Math.round((growth / initial) * 100) : 0;
    return { growth, percentage };
  };

  const moneyGrowth = calculateGrowth(
    initialStats.money,
    gameState.stats.money
  );
  const energyGrowth = calculateGrowth(
    initialStats.energy,
    gameState.stats.energy
  );
  const moodGrowth = calculateGrowth(initialStats.mood, gameState.stats.mood);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600"></div>
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-white/95 backdrop-blur-md shadow-2xl">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full mb-6">
                  <Trophy className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-blue-900 mb-4">Путь завершён!</h1>
                <p className="text-slate-700 text-xl mb-2">
                  {playerName}, ты прожил 7 дней.
                </p>
                <p className="text-slate-600">
                  Каждый твой шаг сделал тебя сильнее.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6 border-2 border-amber-200">
                  <div className="flex items-center justify-between mb-4">
                    <Coins className="w-8 h-8 text-amber-600" />
                    <TrendingUp
                      className={`w-5 h-5 ${
                        moneyGrowth.growth >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    />
                  </div>
                  <div className="text-2xl text-amber-700 mb-1">
                    {gameState.stats.money}
                  </div>
                  <div className="text-sm text-slate-600 mb-2">Финансы</div>
                  <div
                    className={`text-xs ${
                      moneyGrowth.growth >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {moneyGrowth.growth >= 0 ? "+" : ""}
                    {moneyGrowth.growth} (
                    {moneyGrowth.percentage >= 0 ? "+" : ""}
                    {moneyGrowth.percentage}%)
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-200">
                  <div className="flex items-center justify-between mb-4">
                    <Zap className="w-8 h-8 text-yellow-600" />
                    <TrendingUp
                      className={`w-5 h-5 ${
                        energyGrowth.growth >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    />
                  </div>
                  <div className="text-2xl text-yellow-700 mb-1">
                    {gameState.stats.energy}
                  </div>
                  <div className="text-sm text-slate-600 mb-2">Энергия</div>
                  <div
                    className={`text-xs ${
                      energyGrowth.growth >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {energyGrowth.growth >= 0 ? "+" : ""}
                    {energyGrowth.growth} (
                    {energyGrowth.percentage >= 0 ? "+" : ""}
                    {energyGrowth.percentage}%)
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200">
                  <div className="flex items-center justify-between mb-4">
                    <Smile className="w-8 h-8 text-green-600" />
                    <TrendingUp
                      className={`w-5 h-5 ${
                        moodGrowth.growth >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    />
                  </div>
                  <div className="text-2xl text-green-700 mb-1">
                    {gameState.stats.mood}
                  </div>
                  <div className="text-sm text-slate-600 mb-2">Настроение</div>
                  <div
                    className={`text-xs ${
                      moodGrowth.growth >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {moodGrowth.growth >= 0 ? "+" : ""}
                    {moodGrowth.growth} ({moodGrowth.percentage >= 0 ? "+" : ""}
                    {moodGrowth.percentage}%)
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-8 text-center">
                <p className="text-blue-900 italic text-lg">
                  "Маленькие решения — большие перемены."
                </p>
              </div>

              {gameState.lessons?.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-blue-900 text-center mb-4">
                    Ключевые уроки
                  </h3>
                  <div className="space-y-2">
                    {gameState.lessons.slice(-3).map((lesson, index) => (
                      <div
                        key={index}
                        className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700"
                      >
                        {lesson}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onRestart}
                  className="h-10 px-6 text-base inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-blue-600 hover:bg-blue-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Играть снова
                </button>
                <button
                  onClick={onProfile}
                  className="h-10 px-6 text-base border border-gray-300 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-gray-800 hover:bg-gray-100"
                >
                  Профиль
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
