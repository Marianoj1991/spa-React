
import { AuthContextProvider } from "./auth/context/AuthContextProvider";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
};
