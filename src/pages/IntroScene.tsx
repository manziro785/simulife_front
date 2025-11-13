import { useNavigate } from "react-router-dom";
import { usePlayerStore } from "../store (zustand)/usePlayerStore";
import { useGameStore } from "../store (zustand)/useGameStore";

export const IntroScene = () => {
  const playerName = usePlayerStore((state) => state.playerName);
  const selectedCharacter = usePlayerStore((state) => state.selectedCharacter);
  const { resetGame, selectCharacter } = useGameStore();
  const navigate = useNavigate();

  const handleStartGame = () => {
    resetGame();
    if (selectedCharacter) selectCharacter(selectedCharacter);
    navigate("/day/1");
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/60 to-blue-900/80"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md shadow-2xl">
            <div className="p-8 md:p-12">
              <div className="space-y-6 text-center">
                <div>
                  <h1 className="text-blue-900 mb-8">Привет, {playerName}!</h1>
                </div>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Добро пожаловать в{" "}
                    <span className="text-blue-600">SimuLife</span> где каждое
                    решение имеет последствия.
                  </p>
                  <p>
                    Твоя цель пройти{" "}
                    <span className="text-blue-600">7 дней</span> и понять, что
                    формирует твоё будущее.
                  </p>
                  <div className="bg-blue-100 rounded-lg p-6 space-y-2">
                    <p className="text-blue-900">
                      В этой игре ты будешь управлять тремя ключевыми
                      параметрами:
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl">💰</span>
                        <span className="text-sm">Финансы</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl">⚡</span>
                        <span className="text-sm">Энергия</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl">😊</span>
                        <span className="text-sm">Настроение</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 italic">
                    Каждый выбор повлияет на твою жизнь. Будь мудрым!
                  </p>
                </div>

                <div>
                  <button
                    onClick={handleStartGame}
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-10 px-6 text-base bg-blue-600 hover:bg-blue-700 px-12"
                  >
                    Начать день 1
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
