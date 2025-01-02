import { useState } from "react";
import { Button, Input, ModalHeading } from "../components";

const PasswordResetPage = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
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
          <Button text="Update Password" type="submit" onClick={() => {}} />
        </form>
      </div>
    </div>
  );
};

export default PasswordResetPage;
