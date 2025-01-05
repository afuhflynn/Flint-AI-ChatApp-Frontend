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

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  console.log(isPasswordValid);
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg !h-[60%]">
        <ModalHeading text="Reset Password" className="text-center" />
        <form>
          <div className="input-row">
            <label htmlFor="password" className="modal-text">
              New Password
            </label>
            <div>
              <Input
                type="password"
                placeholder="New Password"
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
                type="password"
                placeholder="Confirm Password"
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
            text="Update Password"
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
