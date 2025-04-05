import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { stateStorage } from "./StateStorage";
import { IUser } from "../models/IUser";

interface UserStore {
  user?: IUser;
  setUser: (user: IUser) => void;
}

export const userStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: get()?.user,
      setUser: (user: IUser) => set({ ...get(), user }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => stateStorage),
    }
  )
);
