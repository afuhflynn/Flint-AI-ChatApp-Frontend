import React from "react";
import { Tooltip } from "@mui/material";
import { ShareIcon } from "lucide-react";

const ChatRoomNav: React.FC = () => {
  return (
    <nav className="h-[70px] flex flex-row items-center justify-end w-full paddingX">
      <Tooltip title="Share Chat" placement="bottom">
        <button
          className={`cta-btn !text-sm !px-3 !shadow-none !rounded-[40px] !flex !flex-row !items-center !justify-center !font-normal !w-[6.2rem] !h-[2.6rem] !gap-1`}
          type="button"
        >
          <ShareIcon className="w-[1.2rem] h-[1.2rem]" />
          <span className="text-muted-text">Share</span>
        </button>
      </Tooltip>
    </nav>
  );
};

export default ChatRoomNav;
