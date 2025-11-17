import { ArrowLeft, Coins, LogOut, Smile, Zap } from "lucide-react";
import { Spinner } from "../components/ui/spinner";
import Error from "../components/ui/error";
import { useRatePage } from "../hooks/useRatePage";
import { getTopColor, getTopTextColor } from "../utils/liderBoard";

export default function RatePage() {
  const {
    users,
    currentUserNickname,
    isLoading,
    error,
    sortBy,
    handleSortChange,
    goBack,
    logOut,
  } = useRatePage();

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={goBack}
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-transparent text-gray-800 hover:bg-gray-100"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад
            </button>
            <h1 className="text-blue-900">Рейтинг игроков</h1>
            <button
              onClick={logOut}
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-transparent text-gray-800 hover:bg-gray-100"
            >
              <LogOut className="w-4 h-4 mr-2 " />
              Выйти
            </button>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 mt-10">
            <div className="lg:col-span-1">
              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-white/90 backdrop-blur-sm">
                <div className="pt-6">
                  <div className="text-center mb-6"></div>

                  <div className="space-y-4 px-4">
                    <button
                      onClick={() => handleSortChange("money")}
                      className={`w-full rounded-lg p-4 transition-all ${
                        sortBy === "money"
                          ? "bg-amber-100 shadow-md"
                          : "bg-amber-50 hover:bg-amber-75"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Coins className="w-5 h-5 text-amber-600" />
                          <span className="text-sm text-slate-700 font-medium">
                            Топ по финансам
                          </span>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleSortChange("energy")}
                      className={`w-full rounded-lg p-4 transition-all ${
                        sortBy === "energy"
                          ? "bg-yellow-100 shadow-md"
                          : "bg-yellow-50 hover:bg-yellow-75"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-yellow-600" />
                          <span className="text-sm text-slate-700 font-medium">
                            Топ по энергии
                          </span>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleSortChange("mood")}
                      className={`w-full mb-10 rounded-lg p-4 transition-all ${
                        sortBy === "mood"
                          ? "bg-green-100 shadow-md"
                          : "bg-green-50 hover:bg-green-75"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Smile className="w-5 h-5 text-green-600" />
                          <span className="text-sm text-slate-700 font-medium">
                            Топ по настроению
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-col gap-6 backdrop-blur-sm">
                <div>
                  {users.map((user, index) => {
                    const isCurrentUser =
                      user.User.nickname === currentUserNickname;
                    const position = index + 1;
                    console.log(users);

                    return (
                      <div
                        key={user.id}
                        className="rounded-xl mb-2 space-y-3 flex justify-between transition-all bg-white/90 border border-gray-200 hover:shadow-md"
                      >
                        <div className="flex items-center gap-3 p-3 mb-0 rounded-lg">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getTopColor(
                              position
                            )}`}
                          >
                            <span
                              className={`text-sm ${getTopTextColor(position)}`}
                            >
                              {position}
                            </span>
                          </div>
                          <div className="flex-1 ml-3">
                            <div className="text-[20px] font-semibold text-blue-900 flex items-center gap-2">
                              {user.User.nickname}
                              {isCurrentUser && (
                                <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                                  Вы
                                </span>
                              )}
                            </div>
                            <p className="text-gray-400">
                              Персонаж: {user.Character.name}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-x-5 mr-10 items-center">
                          <div className="flex items-center gap-2">
                            <Coins className="w-5 h-5 text-amber-600" />
                            <span className="text-sm text-slate-700 font-semibold">
                              {user.money}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-yellow-600" />
                            <span className="text-sm text-slate-700 font-semibold">
                              {user.energy}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Smile className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-slate-700 font-semibold">
                              {user.mood}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
