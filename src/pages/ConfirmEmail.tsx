import { FormEvent, useEffect, useState } from "react";
import {
  Button,
  ErrorPanel,
  Input,
  ModalHeading,
  ResendVerificationCode,
} from "../components";
import globalUserStore from "../store/user.store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ConfirmEmailAddress = () => {
  const [code, setCode] = useState("");
  const [verify, setVerify] = useState(false); // Just to ensure that the user clicks the button to submit. Because token will always be available
  const { isLoading, error, verifyEmailWithCode, message, setError } =
    globalUserStore();
  const navigate = useNavigate();

  // Handle verfication
  const handleVerify = async (event: FormEvent) => {
    event.preventDefault();
    verifyEmailWithCode(code);
    setVerify(true);
  };

  useEffect(() => {
    if (!isLoading && code.trim().length > 0 && verify === true) {
      if (error) {
        toast.error(error);
        return;
      } else {
        toast.success(message);
        navigate("/auth/email-verified");
      }
    }
  }, [isLoading, error, message, navigate, code, verify]);

  useEffect(() => {
    setError("");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg !h-[60%]">
        <ModalHeading text="Confirm Email Address" className="text-center" />
        <p className="modal-text opacity-80 !my-4 text-center !mb-5">
          Enter the 6 digit verification code sent to your email below
        </p>
        {error && <ErrorPanel error={error} />}
        <form onSubmit={handleVerify}>
          <div className="input-row">
            <label htmlFor="code" className="modal-text">
              Verification Code
            </label>
            <div>
              <Input
                type="number"
                placeholder="e.g 472913"
                value={code}
                name="code"
                onChange={(_, value) => setCode(value)}
              />
            </div>
          </div>
          <Button
            text="Confirm Email"
            type="submit"
            className={`text-body-text ${code.trim() === "" && "opacity-50"}`}
            isLoading={isLoading}
            disabled={code.trim() === ""}
          />
        </form>
      </div>
      <ResendVerificationCode />
    </div>
  );
};

export default ConfirmEmailAddress;
