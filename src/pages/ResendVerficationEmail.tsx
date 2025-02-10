import React, { useState, useEffect, FormEvent } from "react";
import { Button, Input, ModalHeading } from "../components";
import globalUserStore from "../store/user.store";
import { toast } from "react-toastify";
import { routeUsers } from "../utils";

const ResendVerificationEmail: React.FC = () => {
  const [email, setEmail] = useState("");
  const [verify, setVerify] = useState(false); // Just to ensure that the user clicks the button to submit. Because token will always be available
  const { isLoading, error, resendVerificationCode, message, setError } =
    globalUserStore();

  const handleResendEmail = (event: FormEvent) => {
    event.preventDefault();
    resendVerificationCode(email);
    setVerify(true);
  };

  useEffect(() => {
    if (!isLoading && email.trim().length > 0 && verify === true) {
      if (error) {
        toast.error(error);
        return;
      } else {
        toast.success(message);
        setTimeout(() => {
          routeUsers("/auth/confirm-email-code/z2eHDqrspy637kjdwoflintai");
        }, 1500);
      }
    }
  }, [isLoading, error, message, email, verify, routeUsers]);

   useEffect(() =>{
    setError("");
  }, [])

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg !h-[60%]">
        <ModalHeading
          text="Resend verification email"
          className="text-center"
        />
        <p className="modal-text opacity-80 !my-4 text-center !mb-5">
          Didn't receive the verification email? Please enter your email address
          below to request a new one.
        </p>
        <form onSubmit={handleResendEmail}>
          <div className="input-row">
            <label htmlFor="email" className="modal-text">
              Email address
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
          {error && (
            <div className="mb-4 w-full flex flex-row items-center h-auto">
              <p className="text-muted-text text-red-500">{error}</p>
            </div>
          )}
          <Button
            text="Resend Email"
            type="submit"
            className={`text-body-text ${email.trim() === "" && "opacity-50"}`}
            isLoading={isLoading}
            disabled={email.trim() === ""}
          />
        </form>
      </div>
    </div>
  );
};

export default ResendVerificationEmail;
