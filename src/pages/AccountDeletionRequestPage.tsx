import React from "react";
import { ModalHeading } from "../components";
import { Link } from "react-router-dom";

const AccountDeletionRequestPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg">
        <ModalHeading
          text="Account flagged for delete"
          className="text-center !text-red-500"
        />
        <p className="modal-text opacity-80 !my-4 text-center !mb-5">
          An email has been sent to your inbox that will guide you through the
          account delete process. Check your mail inbox to proceed.
          <br />
          <span className="dark:text-primary-accent-blue-dark underline text-primary-accent-blue-light font-sub-headings">
            See you next time!
          </span>
        </p>
        <div className="flex flex-row items-center justify-center my-4 h-[3rem] md:h-[2.6rem] w-full relative">
          <div className="absolute flex flex-row items-center justify-center w-auto h-full px-2 text-md bg-primary-bg-light dark:bg-neutral-dark-grey-dark">
            <span className="modal-text !text-muted-text">Or</span>
          </div>
          <hr className="w-full border-solid border-neutral-light-grey-light dark:border-neutral-light-grey-dark border-opacity-30 h-[3.5px] dark:border-opacity-50" />
        </div>
        <footer className="mt-2 text-center modal-text !text-muted-text flex flex-col items-center gap-2">
          <span className="italic text-body-text">Changed your mind?</span>{" "}
          <Link
            to="/"
            className="dark:text-primary-accent-blue-dark text-primary-accent-blue-light hover:underline text-md custom-input !w-[60%] !mb-0"
          >
            Back to home
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AccountDeletionRequestPage;
