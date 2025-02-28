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
import globalUserStore from "../store/user.store";
import { UserAvatar } from "./";
import { DashboardPage } from "../pages";

const ChatRoomNav: React.FC = () => {
  const {
    isSidebarActive,
    setIsSidebarActive,
    isMobileSidebarActive,
    setIsMobileSidebarActive,
  } = globalAppStore();
  const { user } = globalUserStore();
  const {
    isNewChat,
    handleHideSharePopup,
    isUserProfilePopup,
    handleHideUserProfilePopup,
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
              className={`assets-btn !w-[2rem] !h-[2rem] !p-[0.2rem] dark:text-text-primary-dark text-text-primary-light`}
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
              className={`assets-btn !w-[2rem] !h-[2rem] !p-[0.2rem] dark:text-text-primary-dark text-text-primary-light`}
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
              className={`assets-btn !w-[2rem] !h-[2rem] !p-[0.2rem] dark:text-text-primary-dark text-text-primary-light`}
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
              className={`assets-btn !w-[2rem] !h-[2rem] !p-[0.2rem] dark:text-text-primary-dark text-text-primary-light`}
              onClick={() => handleRouteUsers("/chat-bot/chats/new-chat")}
            >
              <LucideEdit />
            </button>
          </Tooltip>
        </div>
      )}
      {user && user.username && (
        <div className="h-auto w-auto flex flex-row items-center gap-3">
          {!isNewChat && (
            <Tooltip title="Share Chat" placement="bottom">
              <button
                className={`cta-btn !text-sm !px-3 !shadow-none !rounded-[40px] !flex !flex-row !items-center !justify-center !font-normal !w-[6.2rem] !h-[2.6rem] !gap-1`}
                type="button"
                onClick={() => handleHideSharePopup(true)}
              >
                <ShareIcon className="w-[1.2rem] h-[1.2rem]" />
                <span className="text-muted-text">Share</span>
              </button>
            </Tooltip>
          )}
          <button
            onClick={() =>
              handleHideUserProfilePopup(
                isUserProfilePopup === true ? false : true
              )
            }
          >
            <UserAvatar />
          </button>
          <div className="relative w-auto h-auto">
            {user && isUserProfilePopup && <DashboardPage />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ChatRoomNav;
