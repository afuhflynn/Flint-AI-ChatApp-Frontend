import { useState } from "react";
import { Button, Input, ModalHeading } from "../components";

const ConfirmEmailAddress = () => {
  const [code, setCode] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg !h-[60%]">
        <ModalHeading text="Reset Password" className="text-center" />
        <p className="modal-text opacity-80 !my-4 text-center !mb-5">
          Enter the 6 digit verification code sent to your email below
        </p>
        <form>
          <div className="input-row">
            <label htmlFor="code" className="modal-text">
              Verification Code
            </label>
            <div>
              <Input
                type="number"
                placeholder="Code"
                value={code}
                name="code"
                maxLength={6}
                onChange={(_, value) => setCode(value)}
              />
            </div>
          </div>
          <Button text="Confirm Email" type="submit" onClick={() => {}} />
        </form>
      </div>
    </div>
  );
};

export default ConfirmEmailAddress;
