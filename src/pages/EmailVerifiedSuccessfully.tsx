import React, { FormEvent } from "react";
import { Button, ModalHeading } from "../components";
import { useNavigate } from "react-router-dom";

const EmailVerifiedSuccessfully: React.FC = () => {
  const navigate = useNavigate();
  const handleRouteUser = (event: FormEvent) => {
    event.preventDefault();
    navigate("/auth/log-in");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg !h-[60%]">
        <ModalHeading
          text="Email Verified Successfully"
          className="text-center"
        />
        <p className="modal-text opacity-80 !my-4 text-center !mb-5 dark:!text-primary-accent-blue-dark !text-primary-accent-blue-light font-sub-headings !text-lg">
          Thank you for trying out Flint AI.
        </p>
        <p className="modal-text opacity-80 !my-4 text-center !mb-5">
          Click the button below to login into your account.
        </p>
        <form onSubmit={handleRouteUser}>
          <Button
            text="Proceed to Login"
            type="submit"
            className={`text-body-text`}
          />
        </form>
      </div>
    </div>
  );
};

export default EmailVerifiedSuccessfully;
