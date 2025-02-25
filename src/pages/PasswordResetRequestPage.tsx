import { FormEvent, useEffect, useState } from "react";
import { Button, ErrorPanel, Input, ModalHeading } from "../components";
import globalUserStore from "../store/user.store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PasswordResetRequestPage = () => {
  const [email, setEmail] = useState("");
  const [verify, setVerify] = useState(false); // Just to ensure that the user clicks the button to submit. Because token will always be available
  const { isLoading, error, sendPasswordResetRequest, message, setError } =
    globalUserStore();
  const navigate = useNavigate();

  // Handle request
  const handleSendRequest = async (event: FormEvent) => {
    event.preventDefault();
    sendPasswordResetRequest(email);
    setVerify(true);
  };
  const handleNavigate = async (event: FormEvent) => {
    event.preventDefault();
    navigate("/chat-bot/chats/new-chat");
  };

  useEffect(() => {
    if (!isLoading && email.trim().length > 0 && verify === true) {
      if (error) {
        toast.error(error);
        setVerify(false);
        return;
      } else if (message && message.trim().length > 0) {
        toast.success(message);
      }
    }
  }, [isLoading, error, message, email, verify]);

  useEffect(() => {
    setVerify(false);
  }, [setVerify]);

  useEffect(() => {
    setError("");
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-text">
      {((error.trim().length > 0 || error.trim().length === 0) &&
        message.trim().length === 0) ||
      !verify ? (
        <div className="modal !p-6 !shadow-lg !h-[60%]">
          <ModalHeading text="Forgot Password" className="text-center" />
          <p className="modal-text opacity-80 !my-4 text-center !mb-5">
            Enter your email address below. <br />
            And a password reset link will be sent to your inbox
          </p>
          {error && <ErrorPanel error={error} />}
          <form onSubmit={handleSendRequest}>
            <div className="input-row">
              <label htmlFor="email" className="modal-text">
                Email Address
              </label>
              <div>
                <Input
                  type="email"
                  placeholder="e.g example@example.com"
                  value={email}
                  name="email"
                  onChange={(_, value) => setEmail(value)}
                />
              </div>
            </div>

            <Button
              text="Send Link"
              type="submit"
              disabled={email.trim() === ""}
              isLoading={isLoading}
              className={`text-body-text ${
                email.trim() === "" && "opacity-50"
              }`}
            />
          </form>
        </div>
      ) : (
        <div className="modal !p-6 !shadow-lg !h-[60%]">
          <ModalHeading
            text="Email sent successfully"
            className="text-center"
          />
          <p className="modal-text opacity-80 !my-4 text-center !mb-5">
            Password reset link sent successfully. <br />
            Check your inbox to proceed.
          </p>
          <form onSubmit={handleNavigate}>
            <Button
              text="Back to chats"
              type="submit"
              className={`text-body-text`}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default PasswordResetRequestPage;
