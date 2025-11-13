import { GameDay } from "../components/common/GameDay";
import Error from "../components/ui/error";
import { Spinner } from "../components/ui/spinner";
import { useGameDay } from "../hooks/useGameDay";
import { LessonPopup } from "./LessonPopup";

export const GameDayPage = () => {
  const {
    currentStory,
    isLoading,
    error,
    showLessonPopup,
    currentLesson,
    onChoice,
    onCloseLesson,
    gameState,
  } = useGameDay();

  if (isLoading || !currentStory || !gameState.character) return <Spinner />;
  if (error) return <Error />;
  return (
    <>
      <GameDay
        story={currentStory}
        stats={gameState.stats}
        character={gameState.character}
        onChoice={onChoice}
      />
      {currentLesson && (
        <LessonPopup
          isOpen={showLessonPopup}
          lesson={currentLesson}
          onClose={onCloseLesson}
        />
      )}
    </>
  );
};
