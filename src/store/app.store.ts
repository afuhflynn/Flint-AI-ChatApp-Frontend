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
  prevOrigin: "",
  setPrevOrigin: (origin) => {
    set({ prevOrigin: origin });
  },
  isSidebarActive: true,
  setIsSidebarActive: (value) => {
    set({ isSidebarActive: value });
  },
  isMobileSidebarActive: false,
  setIsMobileSidebarActive: (value) => {
    set({ isMobileSidebarActive: value });
  },
  isNewChat: false,
  setIsNewChat: (value) => {
    set({ isNewChat: value });
  },
  isSharePopup: false,
  handleHideSharePopup: (value) => {
    set({ isSharePopup: value });
  },
  isSettingsPopup: true,
  handleHideSettingsPopup: (value) => {
    set({ isSettingsPopup: value });
  },
}));

export default globalAppStore;
