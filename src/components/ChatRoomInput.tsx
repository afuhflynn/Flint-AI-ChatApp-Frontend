import { useEffect, useRef, useState } from "react";
import { FilePicker, InternetSearch, VoiceInput } from "./";
import { maxChatRoomMsgInput } from "../constants/constants";
import { SendIcon } from "lucide-react";

type ResponsiveTextareaProps = {
  maxRows?: number; // Maximum number of rows
  placeholder: string;
  prompt: string;
  startupPrompt: string;
  onChange: (name: string, value: string) => void;
};

const ResponsiveTextarea: React.FC<ResponsiveTextareaProps> = ({
  maxRows = 8,
  placeholder = "Message Flint AI",
  onChange,
  prompt = "",
  startupPrompt,
}) => {
  const [rows, setRows] = useState(1);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleInput = () => {
      // Reset rows to calculate the new height accurately
      setRows(1);

      // Calculate the required number of rows
      if (textareaRef && textareaRef.current) {
        textareaRef.current.style.height = `auto`; // Ensures the height is calculated properly if the text input reduces
        const newHeight = Math.floor(textareaRef.current.scrollHeight);
        // Check if scroll height percent is more than the required number of rows
        const scrollHeightPercent = Math.floor((newHeight / 100) * maxRows);
        if (scrollHeightPercent <= maxRows || scrollHeightPercent === maxRows)
          textareaRef.current.style.height = `${newHeight}px`;
      }
    };
    handleInput();
  }, [prompt, maxRows]);

  useEffect(() => {
    if (startupPrompt.trim() !== "" || prompt.trim() !== "")
      textareaRef?.current?.focus();
  }, [startupPrompt, prompt]);

  return (
    <textarea
      name="prompt"
      value={prompt}
      onChange={(e) => onChange(e.target.name, e.target.value)}
      placeholder={placeholder}
      required
      rows={rows}
      maxLength={maxChatRoomMsgInput}
      className="custom-input !my-2 focus:!ring-0 !border-0 !text-lg !px-2"
      ref={textareaRef}
    />
  );
};

interface chatRoomInputTypes {
  startupPrompt: string;
}
const ChatRoomInput: React.FC<chatRoomInputTypes> = ({ startupPrompt }) => {
  const [formData, setFormData] = useState({ prompt: "" });

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  // Manually update the prompt value and focus on text area
  useEffect(() => {
    if (startupPrompt.trim() !== "")
      setFormData({ ...formData, ["prompt"]: `${startupPrompt} ` });
  }, [startupPrompt]);
  return (
    <form
      className={`flex flex-col items-center justify-between custom-input !border-opacity-10 !px-2 !py-2 !pb-3 !pr-3 !m-0 !rounded-[2rem] !shadow-md ${
        formData.prompt.trim() !== ""
          ? "ring-2 ring-primary-light-blue-light border-transparent"
          : "ring-0"
      }`}
    >
      <ResponsiveTextarea
        placeholder="Message Flint AI"
        onChange={(name, value) => handleInputChange(name, value)}
        prompt={formData.prompt}
        startupPrompt={startupPrompt}
        maxRows={8}
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
            className={`bg-primary-accent-blue-light outline-none rounded-full w-[2rem] h-[2rem] flex flex-row items-center justify-center p-0 ${
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
