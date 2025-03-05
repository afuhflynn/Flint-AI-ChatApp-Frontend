import React, { useEffect, useRef, useState } from "react";
import {
  ChatRoomInput,
  MarkdownRenderer,
  SharePopup,
  AccountLoginNotification,
} from "./";
import globalAppStore from "../store/app.store";
import { Tooltip } from "@mui/material";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { mockUpData } from "../constants/constants";
import { flintaiLogo } from "../assets/images";
import globalUserStore from "../store/user.store";
import { SettingsPage } from "../pages";
import { useLocation } from "react-router-dom";

interface scrollButtonTypes {
  handleClick: () => void;
}
const ScrollButton: React.FC<scrollButtonTypes> = ({ handleClick }) => {
  const { user } = globalUserStore();
  return (
    <>
      {user && user.username && (
        <Tooltip
          title="Go to bottom"
          placement="top"
          className="absolute bottom-0"
        >
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            animate={{ scale: 1, opacity: 1 }}
            className={`cta-btn !p-2 !text-xs !shadow-lg !rounded-full !flex !flex-row !items-center !justify-center !w-[2.2rem] !h-[2.2rem] !gap-1 !font-extralight`}
            type="button"
            onClick={() => handleClick()}
          >
            <ArrowDown className="w-[1.8rem] h-[1.8rem]" />
          </motion.button>
        </Tooltip>
      )}
    </>
  );
};

const ConversationPage: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState<number | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  //TODO: Add a scroll to bottom effect based on bottomRef and hide the button based on scroll height
  const bottomRef = useRef<null | HTMLSpanElement>(null);
  const location = useLocation();
  const {
    isMobileSidebarActive,
    setIsNewChat,
    prompt,
    chatbot,
    isSharePopup,
    isSettingsPopup,
    setPrevOrigin,
    isSidebarActive,
  } = globalAppStore();
  const { user, isAuthenticated } = globalUserStore();

  const handleScrollToBottom = () => {
    if (bottomRef && bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    handleScrollToBottom();
  }, [chatbot]);

  useEffect(() => {
    if (chatContainerRef && chatContainerRef.current) {
      chatContainerRef.current.addEventListener("scroll", () => {
        if (chatContainerRef && chatContainerRef.current) {
          const scrollAmount = chatContainerRef.current.scrollTop;
          const scrollHeight =
            chatContainerRef.current.scrollHeight -
            chatContainerRef.current.clientHeight;
          const percent = (scrollAmount / scrollHeight) * 100;
          setScrollPercent(percent);
        }
      });
    }
  }, []);

  // Get current url path and modify navbar
  useEffect(() => {
    setIsNewChat(false);
    setPrevOrigin(location.pathname as string);
  }, []);
  return (
    <section className="flex flex-col items-center w-full h-full overflow-hidden">
      {user && <SharePopup />}
      <SettingsPage />
      {!isAuthenticated && !user && <AccountLoginNotification />}
      <div
        ref={chatContainerRef}
        className="overflow-x-hidden overflow-y-scroll h-[90%] flex flex-col items-center mb-1"
      >
        <div
          className={`md:w-[60%] ${
            !isSidebarActive ? "md:w-[55%]" : ""
          } w-[98%] grid grid-cols-1 grid-rows-auto gap-6`}
        >
          {mockUpData.map((item, index) => {
            return (
              <div
                key={`item-${index}-${item.role}`}
                className="flex flex-row items-start gap-1 cursor-default"
              >
                {item.role === "model" && (
                  <button className="cta-btn !w-auto !h-auto !p-[0.3rem] !rounded-full !flex  !flex-row  !items-center !justify-center !cursor-default hover:!bg-transparent">
                    <img
                      src={flintaiLogo}
                      alt="Flint AI logo"
                      className="w-[1.4rem] h-[1.4rem] object-cover"
                    />
                  </button>
                )}
                <span
                  className={`w-full h-auto flex flex-row items-start ${
                    item.role === "model" ? "justify-start" : "justify-end"
                  }`}
                >
                  {item.role === "model" ? (
                    <div
                      className={`custom-input !p-5 !rounded-[40px] !border-opacity-0 !bg-primary-bg-light dark:!bg-primary-bg-dark !h-auto !w-auto !m-0 !mr-6 md:!mr-10`}
                    >
                      <MarkdownRenderer content={item.parts[0].text} />
                    </div>
                  ) : (
                    <div
                      className={`custom-input !bg-neutral-dark-grey-light dark:!bg-neutral-dark-grey-dark !p-4 md:!p-5 !rounded-[40px] !border-opacity-10  !h-auto !w-auto !m-0 !ml-14 md:!ml-20`}
                    >
                      <MarkdownRenderer content={item.parts[0].text} />
                    </div>
                  )}
                </span>
              </div>
            );
          })}

          <span ref={bottomRef} />
        </div>
      </div>
      {Number(scrollPercent) <= 98 && !isSharePopup && !isSettingsPopup && (
        <>
          <div
            className={`relative hidden md:flex flex-row items-center justify-center w-full h-auto mb-2`}
          >
            <ScrollButton handleClick={handleScrollToBottom} />
          </div>
          {!isMobileSidebarActive && (
            <div
              className={`relative flex md:hidden flex-row items-center justify-center w-full h-auto mb-2`}
            >
              <ScrollButton handleClick={handleScrollToBottom} />
            </div>
          )}
        </>
      )}
      <div className="flex flex-row items-center justify-center w-full h-auto mb-2 shadow-sm bg-primary-bg-light dark:bg-primary-bg-dark">
        <div
          className={`md:w-[60%] ${
            !isSidebarActive ? "md:w-[56%]" : ""
          } w-[96%] h-auto shadow-md rounded-[2rem]`}
        >
          <ChatRoomInput startupPrompt="" />
        </div>
      </div>
    </section>
  );
};

export default ConversationPage;
