import type { Character } from "./game";

export interface PlayerStore {
  selectedCharacter: Character | null;
  nickname: string | null;
  setSelectedCharacter: (char: Character | null) => void;
  setNickname: (nickname: string | null) => void;
}

export type UserInfo = {
  id: number;
  nickname: string;
  User: {
    nickname: string;
  };
  Character: {
    name: string;
  };
  money: number;
  energy: number;
  mood: number;
};
