import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import {
  LucideEdit,
  Menu,
  PanelsLeftBottomIcon,
  ShareIcon,
} from "lucide-react";
import globalAppStore from "../store/app.store";

const ChatRoomNav: React.FC = () => {
  const {
    isSidebarActive,
    setIsSidebarActive,
    isMobileSidebarActive,
    setIsMobileSidebarActive,
  } = globalAppStore();
  const navigate = useNavigate();
  const handleRouteUsers = (url: string) => {
    navigate(url);
  };
  return (
    <nav
      className={`h-[70px] w-full flex flex-row items-center ${
        isSidebarActive ? "md:justify-end justify-between" : "justify-between"
      } paddingX`}
    >
      {!isMobileSidebarActive && (
        <div className="h-auto w-auto flex flex-row items-center gap-3 md:hidden">
          <Tooltip title="Toggle Sidebar" placement="bottom">
            <button
              className={`assets-btn !w-[2rem] !h-[2rem] !p-[0.2rem]`}
              type="button"
              onClick={() => setIsMobileSidebarActive(true)}
            >
              <Menu className="w-full h-full" />
            </button>
          </Tooltip>
          <Tooltip
            title="New Chat"
            placement="right"
            arrow
            className="h-auto w-full"
          >
            <button
              className={`assets-btn !w-[2rem] !h-[2rem] !p-[0.2rem]`}
              onClick={() => handleRouteUsers("/chat-bot/chats/new-chat")}
            >
              <LucideEdit />
            </button>
          </Tooltip>
        </div>
      )}
      {!isSidebarActive && (
        <div className="h-auto w-auto flex-row items-center gap-3 hidden md:flex">
          <Tooltip title="Toggle Menu" placement="bottom">
            <button
              type="button"
              onClick={() => setIsSidebarActive(true)}
              className={`assets-btn !w-[2rem] !h-[2rem] !p-[0.2rem]`}
            >
              <PanelsLeftBottomIcon />
            </button>
          </Tooltip>
          <Tooltip
            title="New Chat"
            placement="right"
            arrow
            className="h-auto w-full"
          >
            <button
              className={`assets-btn !w-[2rem] !h-[2rem] !p-[0.2rem]`}
              onClick={() => handleRouteUsers("/chat-bot/chats/new-chat")}
            >
              <LucideEdit />
            </button>
          </Tooltip>
        </div>
      )}
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
