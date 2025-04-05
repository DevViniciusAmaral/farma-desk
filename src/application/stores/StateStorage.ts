import { StateStorage } from "zustand/middleware";
import { storage } from "../../insfrastructure/storage";

export const stateStorage: StateStorage = {
  getItem: (key) => storage.getString(key),
  setItem: (key, value) => storage.set(key, value),
  removeItem: (key) => storage.delete(key),
};
