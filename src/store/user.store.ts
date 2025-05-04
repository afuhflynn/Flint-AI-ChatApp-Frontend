import { create } from "zustand";
import {
  newAuthResponseTypes,
  userStoreTypes,
  responseWithUserTypes,
} from "../TYPES";
import { authBackendBaseUrl } from "../constants/constants";
import axios from "axios";
import { privateAxios } from "../config/axios.config";

// A helper function to pause execution for a given number of milliseconds
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const globalUserStore = create<userStoreTypes>((set, get) => ({
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
  setError: (value) => {
    set({ error: value });
  },
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
        // error.message will be used if there are other errors not coming from the server.
        set({
          error: error.message
            ? `${error.message}. Please check your internet connection!`
            : error.response.data?.message,
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
        // error.message will be used if there are other errors not coming from the server.
        set({
          error: error.message
            ? `${error.message}. Please check your internet connection!`
            : error.response.data?.message,
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
        // error.message will be used if there are other errors not coming from the server.
        set({
          error: error.message
            ? `${error.message}. Please check your internet connection!`
            : error.response.data?.message,
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
        // error.message will be used if there are other errors not coming from the server.
        set({
          error: error.message
            ? `${error.message}. Please check your internet connection!`
            : error.response.data?.message,
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
        // error.message will be used if there are other errors not coming from the server.
        set({
          error: error.message
            ? `${error.message}. Please check your internet connection!`
            : error.response.data?.message || "User not found!",
          isLoading: false,
        });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  getUserProfile: async () => {
    // Reduce the number of calls made to the api end point if there is user object
    const user = get().user;
    if (user) return;
    const maxAttempts = 2;
    let attempt = 0;
    set({ isCheckingAuth: true, error: "", isAuthenticated: false });

    // Re-attempt the get user profile for <maxAttempts> times
    while (attempt < maxAttempts) {
      try {
        // Attempt to fetch the profile
        const res = await privateAxios.get<responseWithUserTypes>(
          `${authBackendBaseUrl}/profile`
        );
        set({
          user: res.data.user,
          isAuthenticated: true,
        });
        // If successful, exit the function
        return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("Error fetching user profile:", error);
        // Re-attempt request
        if (attempt < maxAttempts) {
          set({ isLoading: true });
        } else {
          set({ isLoading: true });
        }
        // Wait for 2 seconds after refreshing the token
        await sleep(2000);

        // Increment the attempt counter after a failed try-and-refresh cycle
        attempt++;
      } finally {
        // Reset any flags if necessary; here we keep isCheckingAuth true until we exit the loop successfully or after max attempts.
        set({ isCheckingAuth: false, isLoading: false });
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
        // error.message will be used if there are other errors not coming from the server.
        set({
          error: error.message
            ? `${error.message}. Please check your internet connection!`
            : error.response.data?.message,
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
        // error.message will be used if there are other errors not coming from the server.
        set({
          error: error.message
            ? `${error.message}. Please check your internet connection!`
            : error.response.data?.message,
          isLoading: false,
        });
      }
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default globalUserStore;
