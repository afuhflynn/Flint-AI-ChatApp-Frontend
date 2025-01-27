import { Tooltip } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { FilePicker, InternetSearch, VoiceInput } from "./";
import { maxChatRoomMsgInput } from "../constants/constants";
import { SendIcon } from "lucide-react";

type ResponsiveTextareaProps = {
  maxRows?: number; // Maximum number of rows
  placeholder?: string;
};

const ResponsiveTextarea: React.FC<ResponsiveTextareaProps> = ({
  maxRows = 5,
  placeholder = "Type something...",
}) => {
  const [value, setValue] = useState("");
  const [rows, setRows] = useState(1);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    const lineHeight = parseFloat(
      window.getComputedStyle(textarea).lineHeight || "20px"
    );

    // Reset rows to calculate the new height accurately
    setRows(1);

    // Calculate the required number of rows
    const newRows = Math.min(
      Math.ceil(textarea.scrollHeight / lineHeight),
      maxRows
    );

    setRows(newRows);
    setValue(textarea.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="w-full max-w-md p-4">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleInput}
        rows={rows}
        placeholder={placeholder}
        className="
          w-full
          resize-none
          overflow-hidden
          border
          border-gray-300
          rounded-md
          p-2
          text-base
          focus:outline-none
          sm:text-sm
          sm:p-1
        "
        style={{
          maxHeight: `${maxRows * 1.5}em`, // Assuming line-height is 1.5em
        }}
      ></textarea>
    </div>
  );
};

const ChatRoomInput: React.FC = () => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [formData, setFormData] = useState({ prompt: "" });
  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form
      className={`flex flex-col items-center justify-between shadow-sm border-none custom-input !m-0 !rounded-[2rem] ${
        isInputFocus === true ? "ring-primary-light-blue-light" : "ring-0"
      }`}
    >
      <textarea
        name="prompt"
        value={formData.prompt}
        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        placeholder="Message Flint AI"
        required
        rows={1}
        maxLength={maxChatRoomMsgInput}
        className="custom-input !mb-2 focus:!ring-0 !border-0 !text-lg !px-2"
        onFocus={() => setIsInputFocus(true)}
      />
      {/* <ResponsiveTextarea maxRows={5} placeholder="Message Flint AI" /> */}
      <footer className="w-full flex flex-row items-center justify-between">
        {/* Display file picker, voicerecorder and internetsearch based on user account profile */}
        <div className="flex flex-row items-center justify-between gap-2 pl-2">
          <FilePicker />
          <VoiceInput txtInput={formData.prompt} />
          <InternetSearch />
        </div>
        <div className="flex flex-row items-center justify-between mb-1">
          <button
            type="submit"
            className={`dark:bg-primary-accent-blue-dark bg-primary-accent-blue-light outline-none rounded-full w-[2rem] h-[2rem] flex flex-row items-center justify-center p-0 ${
              formData.prompt.trim() === ""
                ? "bg-opacity-20 text-neutral-mid-grey-light"
                : "hover:bg-CTA-hover-blue-dark dark:hover:bg-primary-accent-blue-light  focus:ring-offset-CTA-hover-blue-dark text-text-primary-dark"
            }`}
            disabled={formData.prompt.trim() === ""}
          >
            <SendIcon
              className={`h-[1.2rem] w-[1.2rem] ${
                formData.prompt.trim() === ""
                  ? "dark:text-text-secondary-dark text-text-secondary-light"
                  : ""
              } `}
            />
          </button>
        </div>
      </footer>
    </form>
  );
};

export default ChatRoomInput;
