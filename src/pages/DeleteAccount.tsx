import { Link } from "react-router-dom";
import { Button, ModalHeading } from "../components";
import { useState } from "react";

const DeleteAccount = () => {
  const maxMsgInput = 250;
  const [message, setMessage] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg">
        <ModalHeading text="Account Deletion Reason" className="text-center" />
        <p className="modal-text opacity-80 !my-4 text-center !mb-5">
          Please help us know why you want to delete your account. So we can do
          better next time!
        </p>
        <form>
          <div className="input-row">
            <label htmlFor="message" className="modal-text">
              Message
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message..."
              required
              rows={5}
              maxLength={maxMsgInput}
              className="custom-input"
            />
            <div
              className={`flex flex-row items-center justify-between w-full px-2 -mt-3 mb-4 text-sm ${
                message.length >= maxMsgInput
                  ? "text-primary-purple-light dark:text-primary-purple-dark"
                  : "text-gray-500 dark:text-gray-300"
              }`}
            >
              <span>Max</span>
              <span>
                {message.length} / {maxMsgInput}
              </span>
            </div>
          </div>
          <Button text="Submit Reason" type="submit" onClick={() => {}} />
        </form>
        <footer className="mt-4 text-center modal-text !text-muted-text">
          Changed your mind?{" "}
          <Link
            to="/dashboard"
            className="dark:text-primary-accent-blue-dark text-primary-accent-blue-light hover:underline"
          >
            Go back to Dashboard
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default DeleteAccount;
