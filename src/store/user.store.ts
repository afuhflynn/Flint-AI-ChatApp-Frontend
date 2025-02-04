import { create } from "zustand";
import {
  newAuthResponseTypes,
  userStoreTypes,
  responseWithUserTypes,
} from "../TYPES";
import { authBackendBaseUrl } from "../constants/constants";
import axios from "axios";
import { privateAxios } from "../config/axios.config";

const globalUserStore = create<userStoreTypes>((set) => ({
  prefersTheme: "",
  isLoading: false,
  message: "",
  error: "",
  email: "",
  isAuthenticated: false,
  isCheckingAuth: false,
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
          error: "An unexpected error occurred. Try again later",
          isLoading: false,
        });
      } else {
        set({
          error: error.response.data?.message,
          isLoading: false,
        });
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
          error: "An unexpected error occurred. Try again later",
          isLoading: false,
        });
      } else {
        set({
          error: error.response.data?.message,
          isLoading: false,
        });
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
          error: "An unexpected error occurred. Try again later",
          isLoading: false,
        });
      } else {
        set({
          error: error.response.data?.message,
          isLoading: false,
        });
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
          error: "An unexpected error occurred. Try again later",
          isLoading: false,
        });
      } else {
        set({
          error: error.response.data?.message,
          isLoading: false,
        });
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
          error: "An unexpected error occurred. Try again later",
          isLoading: false,
        });
      } else {
        set({
          error: error.response.data?.message,
          isLoading: false,
        });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  getUserProfile: async () => {
    // Use trycatch instead
    // NOTE: Run this function two times if the user accessToken expired and end if there is no way to refresh it
    let tries = 2;
    for (let i = 0; i <= tries; i++) {
      set({
        isCheckingAuth: true,
        error: "",
        isAuthenticated: false,
      });
      try {
        const res = await privateAxios.get<responseWithUserTypes>(
          `${authBackendBaseUrl}/profile`
        );
        set({
          user: res.data.user,
          isCheckingAuth: false,
          isAuthenticated: true,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
          set({
            isLoading: false,
          });
          console.log(error);
        } else {
          set({
            isLoading: false,
          });
          console.log(error);
        }
        await privateAxios.post<responseWithUserTypes>(
          `${authBackendBaseUrl}/refresh-token`
        );
        tries--;
      } finally {
        set({ isCheckingAuth: false });
      }
    }
  },
  sendPasswordResetRequest: async (email) => {
    // Use trycatch instead
    set({ isLoading: true, error: "", message: "" });
    try {
      const res = await axios.post<newAuthResponseTypes>(
        `${authBackendBaseUrl}/reset-password-request`,
        { email: email }
      );
      set({ message: res.data.message, isLoading: false });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        set({
          error: "An unexpected error occurred. Try again later",
          isLoading: false,
        });
      } else {
        set({
          error: error.response.data?.message,
          isLoading: false,
        });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  resetPassword: async (password, token) => {
    // Use trycatch instead
    set({ isLoading: true, error: "", message: "" });
    try {
      const res = await axios.put<newAuthResponseTypes>(
        `${authBackendBaseUrl}/reset-password/${token}`,
        { password: password }
      );
      set({ message: res.data.message, isLoading: false });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        set({
          error: "An unexpected error occurred. Try again later",
          isLoading: false,
        });
      } else {
        set({
          error: error.response.data?.message,
          isLoading: false,
        });
      }
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default globalUserStore;
