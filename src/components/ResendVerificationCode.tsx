import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ResendVerificationCode: React.FC = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(60);
  const navigate = useNavigate();
  const handleTimeUpdate = () => {
    setSeconds(seconds - 1);
    if (seconds === 0 && minutes > 0) {
      setSeconds(60);
      setMinutes(0);
    }
    if (seconds === 0 && minutes === 0) {
      setSeconds(0);
      setMinutes(0);
    }
  };

  useEffect(() => {
    if (seconds === 0 && minutes === 0) return;
    else
      setTimeout(() => {
        handleTimeUpdate();
      }, 1000);
  });

  // Handle Navigate
  const handleSendCode = () => {
    navigate("/auth/resend-verification-email");
  };

  return (
    <footer className="mt-4 text-center modal-text !text-muted-text">
      Didn't receive the code?{" "}
      <button
        className={`dark:text-primary-accent-blue-dark text-primary-accent-blue-light text-body-text capitalize ${
          seconds > 0 || minutes > 0 ? "opacity-50" : "hover:underline"
        }`}
        onClick={() => {
          handleSendCode();
          setMinutes(1);
          setSeconds(60);
        }}
        type="button"
        disabled={seconds > 0 || minutes > 0 ? true : false}
      >
        Send again
      </button>{" "}
      <span
        className={`text-body-text ${
          seconds === 0 && minutes === 0 && "hidden"
        }`}
      >
        in 0{minutes}:{seconds < 10 && 0}
        {seconds}s
      </span>
    </footer>
  );
};

export default ResendVerificationCode;
