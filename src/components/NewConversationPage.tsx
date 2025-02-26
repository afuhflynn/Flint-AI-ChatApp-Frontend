import React, { useEffect, useState } from "react";
import { startUpPrompts } from "../constants/constants";
import { AccountLoginNotification, ChatRoomInput } from "./";
import globalUserStore from "../store/user.store";
import globalAppStore from "../store/app.store";
import { useLocation } from "react-router-dom";

const NewConversationPage: React.FC = () => {
  const [greetings, setGreetings] = useState<string>("");
  const [startupPrompt, setStartupPrompt] = useState("");
  const location = useLocation();
  const { isAuthenticated, user } = globalUserStore();
  const { setIsNewChat, setPrevOrigin, isSidebarActive } = globalAppStore();

  const handleSetGreetings = (time: number) => {
    if (time < 12 && time >= 0) {
      setGreetings("good morning");
    } else if (time >= 12 && time < 17) {
      setGreetings("good afternoon");
    } else if (time >= 17 && time < 21) {
      setGreetings("good evening");
    } else {
      setGreetings("good night");
    }
  };
  // NOTE: Get current time as in hours
  useEffect(() => {
    const handleCurrentTime = (): number => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      return currentHour;
    };

    const time = handleCurrentTime();
    handleSetGreetings(time);
  });

  // Get current url path and modify navbar
  useEffect(() => {
    const urlPath: string = window.location.pathname as string;
    if (urlPath.split("/").includes("new-chat")) setIsNewChat(true);
    setPrevOrigin(location.pathname as string);
  }, []);

  return (
    <section className="flex flex-col items-center justify-between w-full h-full">
      {!isAuthenticated && !user && <AccountLoginNotification />}
      <div className="flex flex-col items-center justify-center w-full h-full gap-6">
        <div className="md:w-[68%] w-[96%] h-full flex flex-col items-center justify-end md:justify-center gap-1">
          <div className="text-primary-bg-dark dark:text-primary-bg-light text-left w-[90%] md:w-[94%]">
            {user ? (
              <div className="mb-10 md:mb-8">
                {/* Display greetings and user name if the user exist */}
                <h1 className="leading-tight capitalize font-headings text-header">
                  {greetings}!
                </h1>
                {/*TODO: To be replaced by user name */}
                <h2 className="mt-1 text-2xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                  {user && user.username && user.username}
                </h2>
              </div>
            ) : (
              <h1 className="leading-tight font-headings text-[30px] text-center md:mb-5 mb-6">
                What can I help with?
              </h1>
            )}
          </div>
          <section className="flex w-full flex-col items-center justify-between md:justify-center gap-[8rem] md:gap-0 md:flex-col-reverse">
            <div className="flex flex-row flex-wrap items-center justify-center w-full gap-3 text-primary-bg-dark dark:text-primary-bg-light md:mt-6">
              {startUpPrompts.map((item, index) => (
                <button
                  className="cta-btn !text-sm !px-3 !shadow-none !rounded-[40px] !h-[2.6rem] !font-normal"
                  key={`${item.id}-${index}`}
                  onClick={() => setStartupPrompt(item.label)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div
              className={`w-full h-auto mb-2 ${
                !isSidebarActive ? "md:w-[78%]" : ""
              }`}
            >
              <ChatRoomInput startupPrompt={startupPrompt} />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default NewConversationPage;
