import { create } from "zustand";
import { appStoreTypes } from "../TYPES";

const globalAppStore = create<appStoreTypes>((set) => ({
  appTheme: "",
  isPasswordValid: false,
  setAppTheme: (value) => {
    set({ appTheme: value });
  },
  setIsPasswordValid: (value) => {
    set({ isPasswordValid: value });
  },
}));

export default globalAppStore;
