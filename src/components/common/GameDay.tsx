import React from "react";
import type { Props } from "../../types/game";

export const GameDay: React.FC<Props> = ({
  story,
  stats,
  character,
  onChoice,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-amber-50 flex flex-col items-center px-6 md:px-20 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30 w-full gap-6">
        <div className="text-center md:text-left">
          <div className="text-sm text-slate-600 uppercase tracking-wide">
            День
          </div>
          <div className="text-2xl font-bold text-blue-900">
            {story.day} / 7
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-5xl">{character.avatar}</span>
          <div className="text-center md:text-left">
            <div className="text-sm text-slate-600 uppercase tracking-wide">
              Персонаж
            </div>
            <div className="text-blue-900 font-semibold text-lg">
              {character.name}
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl text-orange-500">💰</span>
            <span className="text-sm font-semibold text-amber-700">
              {stats.money}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl text-yellow-500">⚡</span>
            <span className="text-sm font-semibold text-yellow-700">
              {stats.energy}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl text-green-500">😊</span>
            <span className="text-sm font-semibold text-green-700">
              {stats.mood}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl w-full space-y-6 mt-12">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/30">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
            {story.title}
          </h2>
          <p className="text-slate-700 mb-6 text-center">{story.description}</p>

          <div className="bg-blue-50/60 rounded-xl p-5 mb-6 border border-blue-100">
            <p className="text-blue-900 font-semibold mb-1">Контекст:</p>
            <p className="text-slate-700">{story.context}</p>
          </div>

          <div className="space-y-4">
            {story.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => onChoice(choice, choice.text)}
                className="cursor-pointer w-full py-3 px-5 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                {choice.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
