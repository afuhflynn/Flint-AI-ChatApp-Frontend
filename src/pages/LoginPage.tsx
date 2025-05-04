import { Link, redirect, useNavigate } from "react-router-dom";
import {
  Button,
  ErrorPanel,
  Input,
  ModalHeading,
  SocialConnections,
} from "../components";
import { FormEvent, useEffect, useState } from "react";
import globalUserStore from "../store/user.store";
import { toast } from "react-toastify";
import globalAppStore from "../store/app.store";

const LoginPage = () => {
  const [login, setLogin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { isLoading, error, logIn, message, setError } = globalUserStore();
  const { prevOrigin } = globalAppStore();
  const navigate = useNavigate();

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  // Handle sign in
  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault();
    logIn(formData.username.trim(), formData.password);
    setLogin(true);
  };

  useEffect(() => {
    if (!isLoading && login === true) {
      if (error) {
        toast.error(error);
      } else if (message) {
        toast.success(message);
        if (prevOrigin) navigate(prevOrigin);
        else redirect("/c/new-chat");
      }
    }
  }, [isLoading, error, message, login, prevOrigin, navigate]);
  useEffect(() => {
    setError("");
    console.log(
      window.location.pathname,
      window.history,
      window.location.ancestorOrigins
    );
  }, [setError]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-text">
      <div className="modal">
        <ModalHeading text="Sign in to Flint AI" className="text-center" />
        {error && <ErrorPanel error={error} />}
        <form onSubmit={handleSignIn}>
          <div className="input-row">
            <label htmlFor="username" className="modal-text">
              Username or Email
            </label>
            <div>
              <Input
                type="text"
                placeholder="e.g JohnDoe or example@example.com"
                value={formData.username}
                name="username"
                onChange={(name, value) => handleInputChange(name, value)}
              />
            </div>
          </div>
          <div className="input-row">
            <label htmlFor="password" className="modal-text">
              Password
            </label>
            <div>
              <Input
                type="password"
                placeholder="e.g PA5$W08D"
                value={formData.password}
                name="password"
                onChange={(name, value) => handleInputChange(name, value)}
              />
            </div>
            <div className="flex flex-row items-center justify-end w-full h-auto mb-4 text-end text-primary-accent-blue-light dark:text-primary-accent-blue-dark hover:underline text-muted-text">
              <Link to="/auth/forgot-password">Forgot your password?</Link>
            </div>
          </div>

          <Button
            text="Login Securely"
            type="submit"
            className={`text-body-text ${
              (formData.password.trim() === "" ||
                formData.username.trim() === "") &&
              "opacity-50"
            }`}
            isLoading={isLoading}
            disabled={
              formData.password.trim() === "" || formData.username.trim() === ""
            }
          />
          <div className="flex flex-row items-center justify-center my-4 h-[3rem] md:h-[2.6rem] w-full relative">
            <div className="absolute flex flex-row items-center justify-center w-auto h-full px-2 text-md bg-primary-bg-light dark:bg-neutral-dark-grey-dark">
              <span className="modal-text !text-muted-text">
                Or continue with
              </span>
            </div>
            <hr className="w-full border-solid border-neutral-light-grey-light dark:border-neutral-light-grey-dark border-opacity-30 h-[3.5px] dark:border-opacity-50" />
          </div>
          <SocialConnections />
        </form>
        <footer className="mt-4 text-center modal-text !text-muted-text">
          Don't have an account?{" "}
          <Link
            to="/auth/sign-up"
            className="dark:text-primary-accent-blue-dark text-primary-accent-blue-light hover:underline"
          >
            Sign Up
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
