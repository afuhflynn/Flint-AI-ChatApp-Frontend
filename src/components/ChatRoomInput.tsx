import { Send } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { FilePicker } from "./";
import { maxChatRoomMsgInput } from "../constants/constants";

const ChatRoomInput: React.FC = () => {
  const [formData, setFormData] = useState({ prompt: "" });
  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  return (
    <form>
      <textarea
        name="prompt"
        value={formData.prompt}
        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
        placeholder="Message Flint AI"
        required
        rows={5}
        maxLength={maxChatRoomMsgInput}
        className="custom-input"
      />
      <footer>
        <FilePicker />
        <Tooltip title="Send" placement="top" arrow>
          <button
            type="submit"
            className="hover:bg-CTA-hover-blue-dark dark:hover:bg-primary-accent-blue-light  dark:bg-primary-accent-blue-dark bg-primary-accent-blue-light text-text-primary-dark outline-none focus:ring-offset-CTA-hover-blue-dark rounded-full w-[2.6rem] h-[2.6rem] flex flex-row items-center justify-center"
          >
            <Send />
          </button>
        </Tooltip>
      </footer>
    </form>
  );
};

export default ChatRoomInput;
