import React, { useEffect, useState } from "react";
import { startUpPrompts } from "../constants/constants";
import { AccountLoginNotification, ChatRoomInput } from "./";

const NewConversationPage: React.FC = () => {
  const [greetings, setGreetings] = useState<string>("");
  const userExists = true;

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

  return (
    <section className="flex flex-col items-center justify-between w-full h-full">
      {/*TODO: Display login notification based on user profile */}
      <AccountLoginNotification />
      <div className="flex flex-col items-center justify-center gap-6 w-full h-full">
        <div className="md:w-[55%] w-[88%] h-full flex flex-col items-center justify-center">
          <div className="text-primary-bg-dark dark:text-primary-bg-light text-left w-[94%] md:mb-8 mb-10">
            {userExists ? (
              <>
                {/* Display greetings and user name if the user exist */}
                <h1 className="leading-tight capitalize font-headings text-header">
                  {greetings}!
                </h1>
                {/*TODO: To be replaced by user name */}
                <h2 className="text-2xl mt-2 user-name">Alex Wang</h2>
              </>
            ) : (
              <h1 className="leading-tight font-headings text-header">
                What can I help with?
              </h1>
            )}
          </div>
          <section className="flex md:flex-col flex-col-reverse">
            <div className="text-primary-bg-dark dark:text-primary-bg-light w-full flex flex-row items-center justify-start flex-wrap gap-3 my-4">
              {startUpPrompts.map((item, index) => (
                <button
                  className="cta-btn !shadow-none !rounded-[40px] !h-[3rem] !font-normal"
                  key={`${item.id}-${index}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="w-full h-auto">
              <ChatRoomInput />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default NewConversationPage;
