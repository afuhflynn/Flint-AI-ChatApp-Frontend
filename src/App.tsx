import React, { useEffect, useLayoutEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { toggleLocalTheme } from "./hooks";
import { LoadingOverlay } from "./components";
import globalUserStore from "./store/user.store";
import globalAppStore from "./store/app.store";

const App: React.FC = () => {
  const {
    isCheckingAuth,
    getUserProfile,
    user,
    setprefersTheme,
    prefersTheme,
  } = globalUserStore();
  const { appTheme, setAppTheme } = globalAppStore();

  // Get authenticated user profile from db

  // NOTE: This ensures that the user data is fetched before the painting process
  useLayoutEffect(() => {
    const handleGetUserProfile = async () => {
      getUserProfile();
    };
    handleGetUserProfile();
  }, []);

  // Modify app theme based on user theme if the user exists
  useEffect(() => {
    const newTheme =
      user && user.preferences?.theme
        ? (user?.preferences.theme as string)
        : "light";
    setprefersTheme(newTheme);
    toggleLocalTheme(prefersTheme);
    setAppTheme(prefersTheme);
  }, []);

  return (
    <main className="w-screen h-screen overflow-x-hidden bg-primary-bg-light dark:bg-primary-bg-dark">
      {/* toast container */}
      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        theme={appTheme}
        closeButton={false}
      />
      {/* Loading overlay when checking user auth state */}
      {isCheckingAuth ? <LoadingOverlay /> : <Outlet />}
    </main>
  );
};

export default App;
