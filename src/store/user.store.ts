import { create } from "zustand";
import { newAuthResponseTypes, userStoreTypes } from "../TYPES";
import { authBackendBaseUrl } from "../constants/constants";
import axios from "axios";
import { privateAxios } from "../config/axios.config";

const errorText = "An unexpected error occurred. Try again later";

const globalUserStore = create<userStoreTypes>((set) => ({
  prefersTheme: "",
  isLoading: false,
  message: "",
  error: "",
  email: "",
  setIsLoading: (value) => {
    set({ isLoading: value });
  },
  user: null,
  setUser: (value) => {
    set({ user: value });
  },
  setprefersTheme: async (value) => {
    //TODO: Call user setTheme end point
    set({ prefersTheme: value });
  },
  signUp: async (username, password, email) => {
    set({ isLoading: true, error: "", message: "", email: "" });
    try {
      const res = await axios.post<newAuthResponseTypes>(
        `${authBackendBaseUrl}/sign-up`,
        {
          username,
          password,
          email,
        }
      );
      set({ isLoading: false, message: res.data.message, email: email });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        set({
          error:
            error.response.data?.message?.length === 0
              ? errorText
              : error.response.data.message,
          isLoading: false,
        });
      } else {
        set({ error: errorText, isLoading: false });
      }
    } finally {
      set({ isLoading: false });
    }
  },

  verifyEmailWithCode: async (code) => {
    // Use try catch instead
    set({ isLoading: true, error: "", message: "" });
    try {
      const res = await axios.post<newAuthResponseTypes>(
        `${authBackendBaseUrl}/verify-account-code`,
        {
          code,
        }
      );
      set({ isLoading: false, message: res.data.message });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        set({
          error:
            error.response.data?.message?.length === 0
              ? errorText
              : error.response.data.message,
          isLoading: false,
        });
      } else {
        set({ error: errorText, isLoading: false });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  verifyEmailWithLink: async (token) => {
    // Use trycatch instead
    set({ isLoading: true, error: "", message: "" });
    try {
      const res = await axios.post<newAuthResponseTypes>(
        `${authBackendBaseUrl}/verify-account-token/${token}`
      );
      set({ isLoading: false, message: res.data.message });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        set({
          error:
            error.response.data?.message?.length === 0
              ? errorText
              : error.response.data.message,
          isLoading: false,
        });
      } else {
        set({ error: errorText, isLoading: false });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  resendVerificationCode: async (email) => {
    // Use trycatch instead
    set({ isLoading: true, error: "", message: "" });
    try {
      const res = await axios.post<newAuthResponseTypes>(
        `${authBackendBaseUrl}/resend-verification-code`,
        { email: email }
      );
      set({ message: res.data.message, isLoading: false });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        set({
          error:
            error.response.data?.message?.length === 0
              ? errorText
              : error.response.data.message,
        });
      } else {
        set({ isLoading: false, error: errorText });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  logIn: async (username, password) => {
    // Use trycatch instead
    set({ isLoading: true, error: "", message: "" });
    try {
      const res = await privateAxios.post<newAuthResponseTypes>(
        `${authBackendBaseUrl}/sign-in`,
        { password: password, username: username }
      );
      set({ message: res.data.message, isLoading: false });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        set({
          error:
            error.response.data?.message?.length === 0
              ? errorText
              : "Unauthorized. User not found!",
        });
      } else {
        set({ isLoading: false, error: errorText });
      }
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default globalUserStore;
