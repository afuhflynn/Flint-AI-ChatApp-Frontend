import React, { FormEvent, useEffect, useState } from "react";
import { Button, ErrorPanel, ModalHeading } from "../components";
import globalUserStore from "../store/user.store";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const ConfirmEmailWithLink: React.FC = () => {
  const { isLoading, error, verifyEmailWithLink, message, setError } =
    globalUserStore();
  const [verify, setVerify] = useState(false); // Just to ensure that the user clicks the button to submit. Because token will always be available
  const navigate = useNavigate();
  const { token } = useParams();
  // Handle verfication
  const handleVerify = async (event: FormEvent) => {
    event.preventDefault();
    verifyEmailWithLink(token as string);
    setVerify(true);
  };
  useEffect(() => {
    if (!isLoading && (token as string).trim().length > 0 && verify === true) {
      if (error) {
        toast.error(error);
        return;
      } else {
        toast.success(message);
        navigate("/auth/email-verified");
      }
    }
  }, [isLoading, error, message, navigate, token, verify]);
  useEffect(() => {
    setError("");
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg !h-[60%]">
        <ModalHeading text="Confirm Email Address" className="text-center" />
        <p className="modal-text opacity-80 !my-4 text-center !mb-5">
          Click the button below to continue
        </p>
        {error && <ErrorPanel error={error} />}
        <form onSubmit={handleVerify}>
          <Button
            text="Confirm Email"
            type="submit"
            className={`text-body-text`}
            isLoading={isLoading}
          />
        </form>
      </div>
    </div>
  );
};

export default ConfirmEmailWithLink;
