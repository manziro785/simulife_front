import type { Character } from "./game";

export type PlayerStore = {
  selectedCharacter: Character | null;
  playerName: string;
  setSelectedCharacter: (char: Character) => void;
  setPlayerName: (name: string) => void;
};
