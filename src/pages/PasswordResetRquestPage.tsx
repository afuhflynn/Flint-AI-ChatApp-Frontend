import { useState } from "react";
import { Button, Input, ModalHeading } from "../components";

const PasswordResetRquestPage = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg !h-[60%]">
        <ModalHeading text="Forgot Password" className="text-center" />
        <p className="modal-text opacity-80 !my-4 text-center !mb-5">
          Enter your email address below. <br />
          And a reset link will be sent to your email
        </p>
        <form>
          <div className="input-row">
            <label htmlFor="email" className="modal-text">
              Email Address
            </label>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                name="email"
                onChange={(_, value) => setEmail(value)}
              />
            </div>
          </div>
          <Button text="Reset Password" type="submit" onClick={() => {}} />
        </form>
      </div>
    </div>
  );
};

export default PasswordResetRquestPage;
