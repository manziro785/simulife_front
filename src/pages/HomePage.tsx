import { useNavigate } from "react-router-dom";
import { ChartBar, CodeXml, Coins } from "lucide-react";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100 relative overflow-hidden">
      <div>
        <header className="flex justify-between items-center mb-16 mx-10 mt-5">
          <div className="flex items-center gap-2">
            <span className="text-blue-900">SimuLife</span>
          </div>
          <button
            onClick={() => navigate("/auth")}
            className="px-4 py-2 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-offset-2 border border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
          >
            Войти
          </button>
        </header>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 mb-4">
              <h1 className="text-blue-700">SimuLife</h1>
            </div>
            <p className="text-slate-600 text-xl mb-8">
              Каждый выбор формирует твою жизнь.
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate("/auth")}
              className="h-10 px-6 text-base inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Начать игру
            </button>
            <button
              onClick={() => navigate("/auth")}
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white/80 border h-10 px-6 text-base border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
            >
              Войти
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <div>
            <div className="bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-shadow rounded-xl">
              <div className="py-6">
                <div className="flex flex-col items-center text-center gap-3 ">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    {" "}
                    <Coins className="w-6 h-6 text-amber-600 text-blue-500" />
                  </div>
                  <h3 className="text-blue-900">Учись на историях жизни</h3>
                  <p className="text-slate-600 text-sm">
                    Каждая сцена рассказывает что-то важное о деньгах, энергии и
                    привычках.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-shadow rounded-xl">
              <div className="py-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <ChartBar className="w-6 h-6 text-amber-600 text-blue-500" />
                  </div>
                  <h3 className="text-blue-900">Играй и развивайся</h3>
                  <p className="text-slate-600 text-sm">
                    Простые выборы, большие последствия.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-lg transition-shadow rounded-xl">
              <div className="py-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CodeXml className="w-6 h-6 text-amber-600 text-blue-500" />
                  </div>
                  <h3 className="text-blue-900">Построй свой путь</h3>
                  <p className="text-slate-600 text-sm">
                    Стань тем, кем хочешь — через 7 виртуальных дней.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center text-slate-500 text-sm pt-12 border-t border-blue-200/50">
          <p>2025 SimuLife</p>
        </footer>
      </div>
    </div>
  );
};
