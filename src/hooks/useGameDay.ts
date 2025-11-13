import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useGameStore } from "../store (zustand)/useGameStore";
import { fetchDays } from "../api/days";
import type { Choice, Lesson } from "../types/game";

export const useGameDay = () => {
  const { gameState, makeChoice, addLesson, nextDay } = useGameStore();
  const navigate = useNavigate();
  const [showLessonPopup, setShowLessonPopup] = useState(false);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const { id } = useParams<{ id: string }>();

  const currentDayFromUrl = parseInt(id || "1", 10);

  const {
    data: dayStories = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["story"],
    queryFn: fetchDays,
  });

  const currentStory = dayStories[currentDayFromUrl - 1];

  const onChoice = (choice: Choice, choiceText: string) => {
    if (!currentStory) return;

    makeChoice(choice, choiceText);

    if (
      currentStory.lesson &&
      !gameState.lessons.includes(currentStory.lesson.text)
    ) {
      setCurrentLesson(currentStory.lesson);
      addLesson(currentStory.lesson.text);
      setShowLessonPopup(true);
    } else {
      nextDay();
      const nextDayNumber = currentDayFromUrl + 1;

      if (nextDayNumber > dayStories.length) {
        navigate("/final");
      } else {
        navigate(`/day/${nextDayNumber}`);
      }
    }
  };

  const onCloseLesson = () => {
    setShowLessonPopup(false);
    nextDay();
    const nextDayNumber = currentDayFromUrl + 1;
    if (nextDayNumber > dayStories.length) {
      navigate("/final");
    } else {
      navigate(`/day/${nextDayNumber}`);
    }
  };

  return {
    currentStory,
    dayStories,
    isLoading,
    error,
    showLessonPopup,
    currentLesson,
    onChoice,
    onCloseLesson,
    gameState: {
      ...gameState,
      currentDay: currentDayFromUrl,
    },
  };
};
