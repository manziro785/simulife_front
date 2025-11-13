export interface User {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export type TabType = "login" | "register";

export type AuthFormProps = {
  tab: TabType;
};

export type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string | null) => void;
  logout: () => void;
};

export type AuthFormInputs = {
  email: string;
  password: string;
};
