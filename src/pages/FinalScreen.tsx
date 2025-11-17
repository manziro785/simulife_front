import { Trophy, RotateCcw, Coins, Zap, Smile } from "lucide-react";
import { StatCard } from "../components/ui/statCard";
import { useFinalScreen } from "../hooks/useFinalScreen";

export const FinalScreen = () => {
  const {
    nickname,
    gameState,
    moneyGrowth,
    energyGrowth,
    moodGrowth,
    handlers,
  } = useFinalScreen();

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
                  {nickname}, ты прожил 7 дней.
                </p>
                <p className="text-slate-600">
                  Каждый твой шаг сделал тебя сильнее.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <StatCard
                  icon={Coins}
                  iconColor="text-amber-600"
                  bgGradient="bg-gradient-to-br from-amber-50 to-yellow-50"
                  borderColor="border-amber-200"
                  textColor="text-amber-700"
                  label="Финансы"
                  current={gameState.stats.money}
                  growth={moneyGrowth}
                />
                <StatCard
                  icon={Zap}
                  iconColor="text-yellow-600"
                  bgGradient="bg-gradient-to-br from-yellow-50 to-orange-50"
                  borderColor="border-yellow-200"
                  textColor="text-yellow-700"
                  label="Энергия"
                  current={gameState.stats.energy}
                  growth={energyGrowth}
                />
                <StatCard
                  icon={Smile}
                  iconColor="text-green-600"
                  bgGradient="bg-gradient-to-br from-green-50 to-emerald-50"
                  borderColor="border-green-200"
                  textColor="text-green-700"
                  label="Настроение"
                  current={gameState.stats.mood}
                  growth={moodGrowth}
                />
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-8 text-center">
                <p className="text-blue-900 italic text-lg">
                  "Маленькие решения, большие перемены."
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
                  onClick={handlers.onProfile}
                  className="h-10 px-6 text-base border border-gray-300 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-gray-800 hover:bg-gray-100"
                >
                  Профиль
                </button>
                <button
                  onClick={handlers.onRestart}
                  className="h-10 px-6 text-base inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-blue-600 hover:bg-blue-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Играть снова
                </button>
                <button
                  onClick={handlers.onRate}
                  className="h-10 px-6 text-base border border-gray-300 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-gray-800 hover:bg-gray-100"
                >
                  Рейтинг
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
