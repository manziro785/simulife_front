import { Progress } from "../components/ui/progress";
import {
  Coins,
  Zap,
  Smile,
  Trophy,
  BookOpen,
  Calendar,
  ArrowLeft,
  LogOut,
} from "lucide-react";
import { usePlayerStore } from "../store (zustand)/usePlayerStore";
import { useGameStore } from "../store (zustand)/useGameStore";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../lib/queryClient";
import { useAuthStore } from "../store (zustand)/useAuthStore";
import { Spinner } from "../components/ui/spinner";
import { useAchievements } from "../config/achievments";

export const Profile = () => {
  const navigate = useNavigate();
  const { nickname } = usePlayerStore();
  const gameState = useGameStore((state) => state.gameState);
  const resetGame = useGameStore((state) => state.resetGame);
  const achievements = useAchievements();

  if (!gameState) {
    <Spinner />;
  }

  function Back() {
    navigate(-1);
  }

  function logOut() {
    useAuthStore.getState().setToken(null);
    resetGame?.();
    localStorage.removeItem("token");
    sessionStorage.clear();
    queryClient.clear();
    navigate("/", { replace: true });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={Back}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-transparent text-gray-800 hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </button>
          <h1 className="text-blue-900">Профиль игрока</h1>
          <button
            onClick={logOut}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-transparent text-gray-800 hover:bg-gray-100"
          >
            <LogOut className="w-4 h-4 mr-2 mt-1" />
            Выйти
          </button>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 mt-10">
          <div className="lg:col-span-1">
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-white/90 backdrop-blur-sm">
              <div className="pt-6">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">
                    {gameState.character?.avatar}
                  </div>
                  <h2 className="text-blue-900 mb-2">{nickname}</h2>
                  <p className="text-slate-600">{gameState.character?.name}</p>
                  <div className="mt-2 border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden">
                    День {gameState.currentDay - 1} / 7
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="mx-3 bg-amber-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Coins className="w-5 h-5 text-amber-600" />
                        <span className="text-sm text-slate-700">Финансы</span>
                      </div>
                      <span className="text-amber-700">
                        {gameState.stats.money}
                      </span>
                    </div>
                    <Progress
                      value={gameState.stats.money / 10}
                      className="h-2"
                    />
                  </div>

                  <div className="mx-3 bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-600" />
                        <span className="text-sm text-slate-700">Энергия</span>
                      </div>
                      <span className="text-yellow-700">
                        {gameState.stats.energy}
                      </span>
                    </div>
                    <Progress
                      value={gameState.stats.energy / 2}
                      className="h-2"
                    />
                  </div>

                  <div className="mx-3 mb-10 bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Smile className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-slate-700">
                          Настроение
                        </span>
                      </div>
                      <span className="text-green-700">
                        {gameState.stats.mood}
                      </span>
                    </div>
                    <Progress
                      value={gameState.stats.mood / 2}
                      className="h-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-white/90 backdrop-blur-sm">
              <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="flex items-center gap-2 text-blue-900">
                  <Calendar className="w-5 h-5" />
                  История выборов
                </div>
              </div>
              <div>
                <div className="space-y-3">
                  {gameState.history.length > 0 ? (
                    gameState.history.map((entry, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg"
                      >
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-700">{entry.day}</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-slate-500">
                            День {entry.day}
                          </div>
                          <div className="text-slate-700">
                            {entry.choiceText}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-slate-500">
                      Твоя история пока пуста. Начни игру!
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-white/90 backdrop-blur-sm">
              <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="flex items-center gap-2 text-blue-900">
                  <BookOpen className="w-5 h-5" />
                  Выученные уроки
                </div>
              </div>
              <div>
                <div className="space-y-3 m-3">
                  {gameState.lessons.length > 0 ? (
                    gameState.lessons.map((lesson, index) => (
                      <div key={index} className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-slate-700 italic">"{lesson}"</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-slate-500">
                      Уроки появятся по мере прохождения игры
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-white/90 backdrop-blur-sm">
              <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                <div className="flex items-center gap-2 text-blue-900">
                  <Trophy className="w-5 h-5" />
                  Достижения
                </div>
              </div>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-3">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg text-center ${
                        achievement.unlocked
                          ? "bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200"
                          : "bg-slate-100 opacity-50"
                      }`}
                    >
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <div className="text-sm text-slate-700">
                        {achievement.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
