import { create } from "zustand";
import { appStoreTypes } from "../TYPES";

const globalAppStore = create<appStoreTypes>((set, get) => ({
  appTheme: "",
  setAppTheme: (value) => {
    set({ appTheme: value });
  },
}));

export default globalAppStore;
