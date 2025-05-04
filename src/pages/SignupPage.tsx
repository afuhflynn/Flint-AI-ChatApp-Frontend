import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  ErrorPanel,
  Input,
  ModalHeading,
  PasswordStrengthCriteria,
  PasswordStrengthMeter,
  SocialConnections,
} from "../components";
import { FormEvent, useEffect, useState } from "react";
import globalAppStore from "../store/app.store";
import globalUserStore from "../store/user.store";
import { toast } from "react-toastify";

const SignupPage = () => {
  const { isPasswordValid } = globalAppStore();
  const { isLoading, error, signUp, message, setError } = globalUserStore();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setPasswordType(passwordType === "password" ? "string" : "password");
    setTimeout(() => {
      setPasswordType("password");
    }, 10000); // Toggle back after 10s
  };

  // Handle sign up
  const handleSignUp = async (event: FormEvent) => {
    event.preventDefault();
    signUp(formData.username.trim(), formData.password, formData.email);
  };

  useEffect(() => {
    if (!isLoading) {
      if (error) {
        toast.error(error);
      } else if (message) {
        toast.success(message);
        navigate("/auth/confirm-email-code/z2eHDqrspy637kjdwoflintai");
      }
    }
  }, [isLoading, error, message, navigate]);

  useEffect(() => {
    setError("");
  }, [setError]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-text">
      <div className="modal">
        <ModalHeading text="Sign up for Flint AI" className="text-center" />
        {error && <ErrorPanel error={error} />}
        <form onSubmit={handleSignUp}>
          <div className="input-row">
            <label htmlFor="username" className="modal-text">
              Username
            </label>
            <div>
              <Input
                type="text"
                placeholder="e.g JohnDoe"
                value={formData.username}
                name="username"
                onChange={(name, value) => handleInputChange(name, value)}
              />
            </div>
          </div>
          <div className="input-row">
            <label htmlFor="email" className="modal-text">
              Email Address
            </label>
            <div>
              <Input
                type="email"
                placeholder="e.g example@example.com"
                value={formData.email}
                name="email"
                onChange={(name, value) => handleInputChange(name, value)}
              />
            </div>
          </div>
          <div className="input-row">
            <label
              htmlFor="password"
              className="flex flex-row items-center justify-between w-full h-auto modal-text"
            >
              <span>Password</span>
              <button
                type="button"
                className="text-sm cta-btn !h-[1.8rem] !w-[3.3rem] !p-0 !shadow-none !flex !flex-row !items-center !justify-center !font-medium"
                onClick={handleShowPassword}
                disabled={
                  formData.password.trim().length < 1 &&
                  formData.confirmPassword.trim().length < 1
                }
              >
                {passwordType === "password" ? "Show" : "Hide"}
              </button>
            </label>
            <div>
              <Input
                type={passwordType}
                placeholder="e.g PA5$W08D"
                value={formData.password}
                name="password"
                onChange={(name, value) => handleInputChange(name, value)}
              />
            </div>
          </div>
          <div className="input-row">
            <label htmlFor="confirmPassword" className="modal-text">
              Confirm Password
            </label>
            <div>
              <Input
                type={passwordType}
                placeholder="e.g PA5$W08D"
                value={formData.confirmPassword}
                name="confirmPassword"
                onChange={(name, value) => handleInputChange(name, value)}
              />
            </div>
          </div>
          {/* Password confirm validation */}
          {formData.confirmPassword !== "" &&
            formData.password !== formData.confirmPassword && (
              <p className={`text-muted-text text-red-500 mb-4`}>
                Passwords don't match
              </p>
            )}
          {/* Password strength meter */}
          {formData.password !== "" &&
            formData.password !== formData.confirmPassword && (
              <PasswordStrengthMeter password={formData.password} />
            )}

          {/* Password strength criteria */}
          {formData.password !== "" &&
            formData.password !== formData.confirmPassword && (
              <>
                <p className="modal-text">Must contain: </p>
                <PasswordStrengthCriteria password={formData.password} />
              </>
            )}
          <Button
            text="Sign Up"
            type="submit"
            className={`text-body-text ${
              (formData.password.trim() === "" ||
                formData.username.trim() === "" ||
                formData.email.trim() === "" ||
                formData.confirmPassword === "" ||
                !isPasswordValid ||
                formData.confirmPassword !== formData.password) &&
              "opacity-50"
            }`}
            isLoading={isLoading}
            disabled={
              formData.password.trim() === "" ||
              formData.username.trim() === "" ||
              formData.email.trim() === "" ||
              formData.confirmPassword === "" ||
              !isPasswordValid ||
              formData.confirmPassword !== formData.password
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
          Already have an account?{" "}
          <Link
            to="/auth/log-in"
            className="dark:text-primary-accent-blue-dark text-primary-accent-blue-light hover:underline"
          >
            Login
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default SignupPage;
