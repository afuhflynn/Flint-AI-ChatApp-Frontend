import React from "react";
import { SidebarNav, UserAvatar } from "./";
import { Settings } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { LucideEdit } from "lucide-react";
import globalAppStore from "../store/app.store";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import globalUserStore from "../store/user.store";

const SideBar: React.FC = () => {
  const { user } = globalUserStore();
  const {
    isSidebarActive,
    isMobileSidebarActive,
    setIsMobileSidebarActive,
    handleHideSettingsPopup,
  } = globalAppStore();
  const navigate = useNavigate();

  const handleRouteUsers = (url: string) => {
    navigate(url);
  };
  const handleToggleMobileSidebar = () => {
    setIsMobileSidebarActive(false);
  };
  const animateVariance = {
    initial: { opacity: 0, width: 0 },
    animate: { opacity: 1, width: 100 },
    exit: { opacity: 0, width: 0 },
  };
  return (
    <>
      {isSidebarActive && (
        <motion.section
          className={`h-full hidden md:flex flex-col custom-input !border-opacity-10 !py-0 !m-0 !rounded-[0px] !border-y-0 !border-l-0  !px-4 !bg-neutral-dark-grey-light dark:!bg-neutral-dark-grey-dark !w-[16rem] !min-w-[18rem]`}
          variants={animateVariance}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SidebarNav />
          <div className="h-[100%] flex flex-col items-center justify-between w-full">
            <section></section>
            <section className="flex flex-col items-center w-full h-auto gap-6 pb-8">
              <div className="h-auto w-full custom-input !border-x-0 !border-b-0 !px-0 !py-0 !pt-4 !my-0 !rounded-[0px] !border-opacity-10">
                <Tooltip
                  title="New Chat"
                  placement="right"
                  arrow
                  className="w-full h-auto"
                >
                  <button
                    className="w-full cta-btn !flex !flex-row !items-center !justify-center !gap-2 !h-[3rem] !rounded-3xl !shadow-md"
                    onClick={() => handleRouteUsers("/c/new-chat")}
                  >
                    <LucideEdit />
                    <span>New Chat</span>
                  </button>
                </Tooltip>
              </div>
              {user && user.username && (
                <div className="h-auto w-full custom-input !border-x-0 !border-b-0 !px-0 !py-0 !pt-3 !my-0 !rounded-[0px] !border-opacity-10">
                  <Tooltip
                    title="Settings"
                    placement="right"
                    arrow
                    className="w-full h-auto"
                  >
                    <button
                      className="w-full user-btn bg-opacity-20 !justify-between !px-3 !h-[4rem]"
                      onClick={() => handleHideSettingsPopup(true)}
                    >
                      <span className="flex flex-row items-center justify-center w-auto h-auto gap-2">
                        <UserAvatar />
                        <span className="text-lg">Settings</span>
                      </span>
                      <Settings className="h-[3rem] w-[3rem]" />
                    </button>
                  </Tooltip>
                </div>
              )}
            </section>
          </div>
        </motion.section>
      )}
      {isMobileSidebarActive && (
        <motion.div
          className="fixed flex flex-row items-center justify-start w-screen h-full bg-black md:hidden bg-opacity-80"
          variants={animateVariance}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className={`h-full flex flex-col custom-input !border-opacity-10 !py-0 !m-0 !rounded-[0px] !border-y-0 !border-l-0  !px-4 !bg-primary-bg-light dark:!bg-primary-bg-dark max-w-[90%]`}
          >
            <SidebarNav />
            <div className="h-[100%] flex flex-col items-center justify-between w-full">
              <section></section>
              <section className="flex flex-col items-center w-full h-auto gap-6 pb-8">
                <div className="h-auto w-full custom-input !border-x-0 !border-b-0 !px-0 !py-0 !pt-4 !my-0 !rounded-[0px] !border-opacity-10">
                  <Tooltip
                    title="New Chat"
                    placement="right"
                    arrow
                    className="w-full h-auto"
                  >
                    <button
                      className="w-full cta-btn !flex !flex-row !items-center !justify-center !gap-2 !h-[3rem] !rounded-3xl !shadow-md"
                      onClick={() => {
                        handleRouteUsers("/c/new-chat");
                        handleToggleMobileSidebar();
                      }}
                    >
                      <LucideEdit />
                      <span>New Chat</span>
                    </button>
                  </Tooltip>
                </div>
                {user && user.username && (
                  <div className="h-auto w-full custom-input !border-x-0 !border-b-0 !px-0 !py-0 !pt-3 !my-0 !rounded-[0px] !border-opacity-10">
                    <Tooltip
                      title="Settings"
                      placement="right"
                      arrow
                      className="w-full h-auto"
                    >
                      <button
                        className="w-full user-btn bg-opacity-20 !justify-between !px-3 !h-[4rem]"
                        onClick={() => {
                          handleToggleMobileSidebar();
                          handleHideSettingsPopup(true);
                        }}
                      >
                        <span className="flex flex-row items-center justify-center w-auto h-auto gap-2">
                          <UserAvatar />
                          <span className="text-lg">Settings</span>
                        </span>
                        <Settings className="h-[3rem] w-[3rem]" />
                      </button>
                    </Tooltip>
                  </div>
                )}
              </section>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SideBar;
