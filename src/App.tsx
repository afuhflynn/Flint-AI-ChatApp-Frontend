import React, { useEffect } from "react";
import {
  AboutusPage,
  ChatRoom,
  ContactusPage,
  ErrorPage,
  HomePage,
  LoginPage,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import { useLocalTheme } from "./hooks";

const App: React.FC = () => {
  const [theme, setTheme] = useLocalTheme("light");

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);
  console.log(theme);

  return (
    <main className="w-screen h-screen overflow-x-hidden bg-primary-bg-light dark:bg-primary-bg-dark">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about-us" element={<AboutusPage />} />
        <Route path="/contact-us" element={<ContactusPage />} />
        <Route path="/chat-bot" element={<ChatRoom />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};

export default App;
