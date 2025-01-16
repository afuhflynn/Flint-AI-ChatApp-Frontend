import { useState } from "react";
import { Button, Input, ModalHeading } from "../components";

const PasswordResetRequestPage = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg !h-[60%]">
        <ModalHeading text="Forgot Password" className="text-center" />
        <p className="modal-text opacity-80 !my-4 text-center !mb-5">
          Enter your email address below. <br />
          And a password reset link will be sent to your inbox
        </p>
        <form>
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
            onClick={() => {}}
            disabled={email.trim() === ""}
            className={`text-body-text ${email.trim() === "" && "opacity-50"}`}
          />
        </form>
      </div>
    </div>
  );
};

export default PasswordResetRequestPage;
