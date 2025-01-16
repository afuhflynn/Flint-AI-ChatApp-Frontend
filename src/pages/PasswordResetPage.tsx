import { useState } from "react";
import {
  Button,
  Input,
  ModalHeading,
  PasswordStrengthCriteria,
  PasswordStrengthMeter,
} from "../components";
import globalAppStore from "../store/app.store";

const PasswordResetPage = () => {
  const { isPasswordValid } = globalAppStore();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [passwordType, setPasswordType] = useState("password");

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleShowPassword = () => {
    setPasswordType(passwordType === "password" ? "string" : "password");
    setTimeout(() => {
      setPasswordType("password");
    }, 10000); // Toggle back after 10s
  };
  console.log(isPasswordValid);
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg !h-[60%]">
        <ModalHeading text="Reset Password" className="text-center" />
        <form>
          <div className="input-row">
            <label
              htmlFor="password"
              className="modal-text flex flex-row items-center justify-between w-full h-auto"
            >
              <span>New Password</span>
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
          {formData.password !== "" && (
            <PasswordStrengthMeter password={formData.password} />
          )}
          {/* Password strength criteria */}
          {formData.password !== "" && (
            <>
              <p className="modal-text">Must contain: </p>
              <PasswordStrengthCriteria password={formData.password} />
            </>
          )}
          <Button
            text="Reset Password"
            type="submit"
            className={`text-body-text ${
              (formData.confirmPassword.trim() === "" ||
                formData.password.trim() === "" ||
                !isPasswordValid ||
                formData.confirmPassword !== formData.password) &&
              "opacity-50"
            }`}
            onClick={() => {}}
            disabled={
              formData.confirmPassword.trim() === "" ||
              formData.password.trim() === "" ||
              !isPasswordValid ||
              formData.confirmPassword !== formData.password
            }
          />
        </form>
      </div>
    </div>
  );
};

export default PasswordResetPage;
