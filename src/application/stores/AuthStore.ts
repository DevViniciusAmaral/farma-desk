import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { stateStorage } from "./StateStorage";

interface AuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const authStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      isAuthenticated: get()?.isAuthenticated ?? false,
      setIsAuthenticated: (isAuthenticated: boolean) => {
        set({ ...get(), isAuthenticated });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => stateStorage),
    }
  )
);
