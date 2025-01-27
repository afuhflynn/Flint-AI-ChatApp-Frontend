import React, { useRef, useState } from "react";
import ModalHeading from "./ModalHeading";
import { AuthButtons } from "./";

const AccountLoginNotification: React.FC = () => {
  const popUpRef = useRef<HTMLDivElement | null>(null);
  const [isPopup, setIsPopup] = useState(true); // Read the click event state

  const handleHidePopup = (value: boolean) => {
    setIsPopup(value);
  };

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-opacity-80 bg-black text-text ${
        isPopup === true ? "visible" : "hidden"
      }`}
    >
      <div
        ref={popUpRef}
        className="modal !bg-primary-bg-light dark:!bg-neutral-dark-grey-dark"
      >
        <ModalHeading text="Welcome back" className="text-center" />
        <p className="modal-text opacity-80 !my-4 text-center !mb-5">
          Log in or sign up to get tailored responses, upload files and images,
          and more.
        </p>
        <AuthButtons
          className={"gap-[1.4rem] md:visible my-4 flex flex-col items-center "}
          btnClassName={"w-full h-[3.4rem] md:h-[3rem]"}
        />
        <div className=" flex flex-row items-center justify-center w-full">
          <button
            className="modal-text underline"
            onClick={() => handleHidePopup(false)}
          >
            Stay logged out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountLoginNotification;
