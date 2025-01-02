import React, { useEffect } from "react";
import {
  AboutusPage,
  ChatRoom,
  ConfirmEmailAddress,
  ContactusPage,
  DeleteAccount,
  ErrorPage,
  FAQPage,
  HomePage,
  LoginPage,
  PasswordResetPage,
  PasswordResetRquestPage,
  SettingsPage,
  SignupPage,
  Terms_ConditionsPage,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import { useLocalTheme } from "./hooks";
import { LoadingOverlay } from "./components";

const App: React.FC = () => {
  const [theme, setTheme] = useLocalTheme("light");

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);
  console.log(theme);
  const loading = false;
  return (
    <main className="w-screen h-screen overflow-x-hidden bg-primary-bg-light dark:bg-primary-bg-dark">
      {loading ? (
        <LoadingOverlay />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutusPage />} />
          <Route path="/contact-us" element={<ContactusPage />} />
          <Route path="/chat-bot" element={<ChatRoom />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/confirm-email" element={<ConfirmEmailAddress />} />
          <Route
            path="/forgot-password"
            element={<PasswordResetRquestPage />}
          />
          <Route
            path="/reset-password/:token"
            element={<PasswordResetPage />}
          />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/user-settings" element={<SettingsPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/terms-conditions" element={<Terms_ConditionsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      )}
    </main>
  );
};

export default App;
