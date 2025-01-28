import { Mic } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const VoiceInput = ({ txtInput }: { txtInput: string }) => {
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    const handleTextInput = () => {
      setIsTyping(txtInput.trim() !== "" ? true : false);
    };
    handleTextInput();
  }, [txtInput]);
  return (
    <>
      <Tooltip title="Voice Note" placement="top" arrow>
        <button
          type="button"
          disabled={isTyping}
          className="assets-btn"
          onClick={() => toast.info("Feature not available at the moment")}
        >
          <Mic
            className={`icons ${
              isTyping
                ? "dark:text-text-secondary-dark text-text-secondary-light"
                : ""
            }`}
          />
        </button>
      </Tooltip>
    </>
  );
};

export default VoiceInput;
