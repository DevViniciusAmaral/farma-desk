import { authStore } from "../stores/AuthStore";
import { userStore } from "../stores/UserStore";

export const useAuth = () => {
  const { user, setUser } = userStore();
  const { isAuthenticated, setIsAuthenticated } = authStore();

  const signIn = async (email: string, password: string) => {
    setUser({ email });
    setIsAuthenticated(true);
  };

  const signOut = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return { user, isAuthenticated, signIn, signOut };
};
