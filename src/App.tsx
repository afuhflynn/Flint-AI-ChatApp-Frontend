import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { useLocalTheme } from "./hooks";
import { LoadingOverlay } from "./components";

const App: React.FC = () => {
  const [theme, setTheme] = useLocalTheme("light");

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);
  const loading = false;
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
      {loading ? <LoadingOverlay /> : <Outlet />}
    </main>
  );
};

export default App;
