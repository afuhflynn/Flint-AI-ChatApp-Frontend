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
          error: "User not found!",
          isLoading: false,
        });
      } else {
        set({
          error: "An unexpected error occurred. Try again later",
          isLoading: false,
        });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  getUserProfile: async () => {
    const maxAttempts = 2;
    let attempt = 0;
    set({ isCheckingAuth: true, error: "", isAuthenticated: false });

    while (attempt < maxAttempts) {
      try {
        // Attempt to fetch the profile
        const res = await privateAxios.get<responseWithUserTypes>(
          `${authBackendBaseUrl}/profile`
        );
        set({
          user: res.data.user,
          isCheckingAuth: false,
          isAuthenticated: true,
        });
        // If successful, exit the function
        return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        // Optionally, you could check if the error is due to an expired access token
        const shouldRefreshToken =
          /* logic to decide if refresh is needed, e.g.: */
          axios.isAxiosError(error) && error.response?.status === 403;

        if (!shouldRefreshToken) {
          // For non-refreshable errors, exit immediately.
          set({
            isCheckingAuth: false,
            error: "",
          });
          return;
        }

        // Try to refresh the token
        try {
          set({ isLoading: true });
          await privateAxios.post<responseWithUserTypes>(
            `${authBackendBaseUrl}/refresh-token`
          );
          // Wait for 2 seconds after refreshing the token
          await sleep(2000);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (refreshError: any) {
          console.error("Token refresh failed:", refreshError);
          set({
            isLoading: false,
            isCheckingAuth: false,
            error: "Token refresh failed.",
          });
          return;
        }

        // Increment the attempt counter after a failed try-and-refresh cycle
        attempt++;
      } finally {
        // Reset any flags if necessary; here we keep isCheckingAuth true until we exit the loop successfully or after max attempts.
        set({ isCheckingAuth: false });
      }
    }

    // If we exit the loop without success, set an error message.
    set({
      isAuthenticated: false,
      error: "Could not fetch user profile after refreshing the token.",
      isLoading: false,
      isCheckingAuth: false,
    });
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
