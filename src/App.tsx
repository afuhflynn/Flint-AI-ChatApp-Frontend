import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Outlet } from "react-router-dom";
import { useLocalTheme } from "./hooks";
import { LoadingOverlay } from "./components";
import globalUserStore from "./store/user.store";

const App: React.FC = () => {
  const [theme, setTheme] = useLocalTheme("light");
  const { isCheckingAuth, error, getUserProfile, user } = globalUserStore();

  // Get authenticated user profile from db
  useEffect(() => {
    const handleGetUserProfile = async () => {
      await getUserProfile();
      if (error && error.trim().length > 0) toast.info(error);
    };
    handleGetUserProfile();
  }, [getUserProfile, error]);

  // Modify app theme based on user theme if the user exists
  useEffect(() => {
    setTheme(
      user && user.preferences?.theme ? (user?.preferences.theme as string) : "light"
    );
  }, [setTheme, user]);
  console.log(user)
  return (
    <main className="w-screen h-screen overflow-x-hidden bg-primary-bg-light dark:bg-primary-bg-dark">
      {/* toast container */}
      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        theme={theme}
        closeButton={false}
      />
      {/* Loading overlay when checking user auth state */}
      {isCheckingAuth ? <LoadingOverlay /> : <Outlet />}
    </main>
  );
};

export default App;
