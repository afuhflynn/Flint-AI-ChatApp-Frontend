import React from "react";
import { Button, ModalHeading } from "../components";

const EmailVerifiedSuccessfully: React.FC = () => {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg !h-[60%]">
        <ModalHeading
          text="Email Verified Successfully"
          className="text-center"
        />
        <p className="modal-text opacity-80 !my-4 text-center !mb-5 dark:!text-primary-accent-blue-dark !text-primary-accent-blue-light font-sub-headings !text-lg underline">
          Thank you for trying out Flint AI.
        </p>
        <p className="modal-text opacity-80 !my-4 text-center !mb-5">
          Click the button below to start exploring the platform
        </p>
        <form>
          <Button
            text="Proceed to Chat"
            type="submit"
            className={`text-body-text`}
            onClick={() => {}}
          />
        </form>
      </div>
    </div>
  );
};

export default EmailVerifiedSuccessfully;
