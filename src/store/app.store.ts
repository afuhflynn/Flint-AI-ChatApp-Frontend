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
  prompt: "",
  setPrompt: (value) => {
    set({ prompt: value });
  },
  chatbot: "",
  setChatbot: (value) => {
    set({ chatbot: value });
  },
}));

export default globalAppStore;
