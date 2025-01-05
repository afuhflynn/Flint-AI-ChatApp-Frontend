import { useEffect, useState } from "react";
import { Button, Input, ModalHeading } from "../components";

const ConfirmEmailAddress = () => {
  const [code, setCode] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(60);

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

  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg !h-[60%]">
        <ModalHeading text="Confirm Email" className="text-center" />
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
          <Button
            text="Confirm Email"
            type="submit"
            className={`text-body-text ${code.trim() === "" && "opacity-50"}`}
            onClick={() => {}}
            disabled={code.trim() === ""}
          />
        </form>
      </div>
      <footer className="mt-4 text-center modal-text !text-muted-text">
        Didn't receive the code?{" "}
        <button
          className={`dark:text-primary-accent-blue-dark text-primary-accent-blue-light text-body-text capitalize ${
            seconds > 0 || minutes > 0 ? "opacity-50" : "hover:underline"
          }`}
          onClick={() => {
            alert("Code sent successfully");
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
    </div>
  );
};

export default ConfirmEmailAddress;
