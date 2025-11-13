import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AuthPage } from "../pages/AuthPage";
import { CharacterSelect } from "../pages/CharacterSelect";
import { IntroScene } from "../pages/IntroScene";
import { GameDayPage } from "../pages/GameDayPage";
import { Profile } from "../pages/Profile";
import { GuestRoute, AuthRoute } from "./ProtectedRoute";
import { FinalScreen } from "../pages/FinalScreen";

const routes = [
  { path: "/", element: <HomePage />, access: "guest" },
  { path: "/auth", element: <AuthPage />, access: "guest" },
  { path: "/character-select", element: <CharacterSelect />, access: "auth" },
  { path: "/intro", element: <IntroScene />, access: "auth" },
  { path: "/day/:id", element: <GameDayPage />, access: "auth" },
  { path: "/final", element: <FinalScreen />, access: "auth" },
  { path: "/profile", element: <Profile />, access: "auth" },
  { path: "/*", element: <HomePage />, access: "guest" },
];

const wrappedRoutes = routes.map((route) => {
  let element = route.element;
  if (route.access === "auth") element = <AuthRoute>{element}</AuthRoute>;
  if (route.access === "guest") element = <GuestRoute>{element}</GuestRoute>;
  return { path: route.path, element };
});

export const routers = createBrowserRouter(wrappedRoutes);
