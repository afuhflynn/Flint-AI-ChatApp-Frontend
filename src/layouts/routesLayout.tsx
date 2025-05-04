import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RootLayout from "./RootLayout";
import {
  AboutusPage,
  AccountDeletionRequestPage,
  ChatRoom,
  ConfirmEmailAddress,
  ConfirmEmailWithLink,
  ContactusPage,
  DeleteAccount,
  EmailVerifiedSuccessfully,
  ErrorPage,
  FAQPage,
  HomePage,
  LoginPage,
  PasswordResetPage,
  PasswordResetRequestPage,
  ResendVerificationEmail,
  SignupPage,
  Terms_ConditionsPage,
} from "../pages";
import { ConversationPage, NewConversationPage } from "../components";
import { AuthLayout, ChatRoomLayout } from "./";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/home",
            element: <HomePage />,
          },
          {
            path: "/about-us",
            element: <AboutusPage />,
          },
          {
            path: "/contact-us",
            element: <ContactusPage />,
          },
          {
            path: "/faqs",
            element: <FAQPage />,
          },
          {
            path: "/terms-conditions",
            element: <Terms_ConditionsPage />,
          },
        ],
      },
      {
        path: "/auth/log-in",
        element: <LoginPage />,
      },
      {
        path: "/auth/sign-up",
        element: <SignupPage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/auth/confirm-email-code/:token",
            element: <ConfirmEmailAddress />,
          },
          {
            path: "/auth/confirm-email-link/:token",
            element: <ConfirmEmailWithLink />,
          },
          {
            path: "/auth/resend-verification-email",
            element: <ResendVerificationEmail />,
          },
          {
            path: "/auth/email-verified",
            element: <EmailVerifiedSuccessfully />,
          },
          {
            path: "/auth/forgot-password",
            element: <PasswordResetRequestPage />,
          },
          {
            path: "/auth/reset-password/:token",
            element: <PasswordResetPage />,
          },
          {
            path: "/auth/delete-account/:userID/:token",
            element: <DeleteAccount />,
          },
          {
            path: "/auth/account-delete-notice",
            element: <AccountDeletionRequestPage />,
          },
        ],
      },
      {
        element: <ChatRoomLayout />,
        children: [
          {
            element: <ChatRoom />,
            children: [
              {
                path: "/c/new-chat",
                element: <NewConversationPage />,
              },
              {
                path: "/c/:chatID",
                element: <ConversationPage />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
