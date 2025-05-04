import React, { useEffect, useLayoutEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { toggleLocalTheme } from "./hooks";
import { LoadingOverlay } from "./components";
import globalUserStore from "./store/user.store";
import globalAppStore from "./store/app.store";

const App: React.FC = () => {
  const { isCheckingAuth, getUserProfile, user, setprefersTheme, error } =
    globalUserStore();
  const { appTheme, setAppTheme } = globalAppStore();

  // Get authenticated user profile from db

  // NOTE: This ensures that the user data is fetched before the painting process
  useLayoutEffect(() => {
    const handleGetUserProfile = async () => {
      getUserProfile();
    };
    handleGetUserProfile();
  }, [getUserProfile]);

  // Modify app theme based on user theme if the user exists
  useEffect(() => {
    const newTheme =
      user && user.preferences?.theme
        ? (user?.preferences.theme as string)
        : "light";
    setprefersTheme(newTheme);
    toggleLocalTheme(newTheme);
    setAppTheme(newTheme);
  }, [setAppTheme, setprefersTheme, user]);

  useEffect(() => {
    if (!isCheckingAuth) {
      if (error) {
        toast.warning(error, {
          className: "text-yellow-500 w-auto max-sm:max-w-[90%]",
        });
      }
    }
  }, [isCheckingAuth, error]);

  return (
    <main className="w-screen h-screen overflow-x-hidden bg-primary-bg-light dark:bg-primary-bg-dark">
      {/* toast container */}
      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        theme={appTheme}
        closeButton={false}
        newestOnTop={true}
        toastClassName={`w-[90%] sm:w-auto text-text-primary-light dark:text-text-primary-dark shadow-md mt-4`}
        toastStyle={{
          backgroundColor: appTheme === "dark" ? "#2B2F4C" : "#F7FAFC",
        }}
      />
      {/* Loading overlay when checking user auth state */}
      {isCheckingAuth ? <LoadingOverlay /> : <Outlet />}
    </main>
  );
};

export default App;
