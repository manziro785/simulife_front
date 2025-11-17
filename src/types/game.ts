export interface Character {
  id: string;
  name: string;
  description: string;
  avatar: string;
  stats: GameStats;
}

export interface GameStats {
  money: number;
  energy: number;
  mood: number;
}

export interface ChoiceState {
  selectedChoice: Choice | null;
  hoveredChoice: string | null;
  setSelectedChoice: (choice: Choice | null) => void;
  setHoveredChoice: (choiceId: string | null) => void;
  resetChoices: () => void;
}

export type GameStore = {
  gameState: GameState;
  selectCharacter: (character: Character) => void;
  nextDay: () => void;
  makeChoice: (choice: Choice, choiceText: string) => void;
  addLesson: (text: string) => void;
  resetGame: () => void;
};

export interface Choice {
  id: string;
  text: string;
  impact: {
    money: number;
    energy: number;
    mood: number;
  };
}

export interface DayStory {
  day: number;
  title: string;
  description: string;
  context: string;
  choices: Choice[];
  lesson: {
    title: string;
    text: string;
    icon: string;
  };
}

export interface GameState {
  character: Character | null;
  currentDay: number;
  stats: GameStats;
  history: Array<{
    day: number;
    choice: string;
    choiceText: string;
  }>;
  lessons: string[];
  achievements: string[];
}

export type Props = {
  story: DayStory;
  stats: GameStats;
  character: Character;
  onChoice: (choice: Choice, choiceText: string) => void;
};

export type Lesson = {
  id?: string;
  text: string;
  title?: string;
  icon?: string;
};

export type LessonPopupProps = {
  isOpen: boolean;
  lesson: Lesson;
  onClose: () => void;
};

export type GameResult = {
  characterId: string;
  mood: number;
  money: number;
  energy: number;
};
