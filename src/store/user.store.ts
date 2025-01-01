import { create } from "zustand";
import { userStoreTypes } from "../TYPES";

const globalUserStore = create<userStoreTypes>((set, get) => ({
  prefersTheme: "",
  user: null,
  setprefersTheme: async (value) => {
    //TODO: Call user setTheme end point
    set({ prefersTheme: value });
  },
}));

export default globalUserStore;
