import React from "react";
import { Button, ModalHeading } from "../components";
import { useNavigate } from "react-router-dom";

const AccountDeletionRequestPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg">
        <ModalHeading
          text="Account Flagged for delete"
          className="text-center text-red-500"
        />
        <p className="modal-text opacity-80 !my-4 text-center !mb-5">
          An email has been sent to your inbox that will guide you through the
          account delete process. Check your mail inbox to proceed.
          <br />
          <span className="dark:text-primary-accent-blue-dark text-primary-accent-blue-light font-sub-headings">
            See you nex time!
          </span>
        </p>
        <footer className="mt-2 text-center modal-text !text-muted-text flex flex-col gap-2">
          <span className="italic underline text-body-text">
            Changed your mind?
          </span>{" "}
          <Button
            text="Back to home"
            type="button"
            onClick={() => {
              navigate("/");
            }}
            className="mt-4"
          />
        </footer>
      </div>
    </div>
  );
};

export default AccountDeletionRequestPage;
