import React from "react";
import { Button, ModalHeading } from "../components";

const ConfirmEmailWithLink: React.FC = () => {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-background text-text">
      <div className="modal !p-6 !shadow-lg !h-[60%]">
        <ModalHeading text="Confirm Email Address" className="text-center" />
        <p className="modal-text opacity-80 !my-4 text-center !mb-5">
          Click the button below to continue
        </p>
        <form>
          <Button
            text="Confirm Email"
            type="submit"
            className={`text-body-text`}
            onClick={() => {}}
          />
        </form>
      </div>
    </div>
  );
};

export default ConfirmEmailWithLink;
