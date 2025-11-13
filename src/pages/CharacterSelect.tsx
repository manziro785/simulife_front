import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Coins, Zap, Smile } from "lucide-react";
import { Spinner } from "../components/ui/spinner";
import { useCharacter } from "../hooks/useCharacters";
import Error from "../components/ui/error";
import type { Character } from "../types/game";

export const CharacterSelect = () => {
  const {
    characters,
    isLoading,
    error,
    selectedCharacter,
    setSelectedCharacter,
    startGame,
    canStartGame,
    playerName,
    setPlayerName,
  } = useCharacter();

  if (error) return <Error />;

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-50">
          <Spinner />
        </div>
      )}
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-64 h-64 bg-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-blue-900 mb-4">Выбери своего героя</h1>
            <p className="text-slate-600">
              Каждый персонаж обладает уникальными характеристиками
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {characters?.map((character: Character) => (
              <div key={character.id}>
                <div
                  className={`cursor-pointer bg-card text-card-foreground flex flex-col gap-6 rounded-xl border transition-all duration-300 ${
                    selectedCharacter?.id === character.id
                      ? "ring-4 ring-blue-500 bg-blue-50/80 scale-105"
                      : "bg-white/80 hover:bg-white/90 hover:shadow-xl"
                  } backdrop-blur-sm`}
                  onClick={() => setSelectedCharacter(character)}
                >
                  <div className="pt-6 px-6 pb-6">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{character.avatar}</div>
                      <h3 className="text-blue-900 mb-2">{character.name}</h3>
                      <p className="text-slate-600 mb-6">
                        {character.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between bg-amber-50 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <Coins className="w-5 h-5 text-amber-600" />
                            <span className="text-sm text-slate-700">
                              Финансы
                            </span>
                          </div>
                          <span className="text-amber-700">
                            {character.stats.money}
                          </span>
                        </div>
                        <div className="flex items-center justify-between bg-yellow-50 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-yellow-600" />
                            <span className="text-sm text-slate-700">
                              Энергия
                            </span>
                          </div>
                          <span className="text-yellow-700">
                            {character.stats.energy}
                          </span>
                        </div>
                        <div className="flex items-center justify-between bg-green-50 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <Smile className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-slate-700">
                              Настроение
                            </span>
                          </div>
                          <span className="text-green-700">
                            {character.stats.mood}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {selectedCharacter && (
            <div className="max-w-md mx-auto">
              <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border bg-white/90 backdrop-blur-sm">
                <div className="pt-6">
                  <div className="space-y-4 p-3">
                    <div className="space-y-2 ">
                      <Label
                        htmlFor="player-name "
                        className="text-black flex mb-2"
                      >
                        Твоё имя
                      </Label>
                      <Input
                        id="player-name"
                        placeholder="Введи своё имя"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        className="text-gray-700"
                      />
                    </div>
                    <button
                      onClick={startGame}
                      disabled={!canStartGame}
                      className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-10 px-6 text-base w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Начать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
