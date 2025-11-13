import { Sparkles } from "lucide-react";
import type { LessonPopupProps } from "../types/game";

export const LessonPopup: React.FC<LessonPopupProps> = ({
  isOpen,
  lesson,
  onClose,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="max-w-lg bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 shadow-lg relative">
        <button className="absolute top-4 right-4 text-xl" onClick={onClose}>
          ✕
        </button>

        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl">
            {lesson.icon}
          </div>
          <h2 className="text-center text-blue-900 text-xl font-semibold flex items-center gap-2 justify-center">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            {lesson.title}
          </h2>
          <div className="py-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-slate-700 leading-relaxed text-center">
                {lesson.text}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Продолжить
          </button>
        </div>
      </div>
    </div>
  );
};
