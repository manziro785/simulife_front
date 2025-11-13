import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store (zustand)/useAuthStore";
import type { JSX } from "react";

export function GuestRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return !isAuthenticated ? (
    children
  ) : (
    <Navigate to="/character-select" replace />
  );
}

export function AuthRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" replace />;
}
