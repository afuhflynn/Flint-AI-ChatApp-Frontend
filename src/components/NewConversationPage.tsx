import React, { useEffect, useState } from "react";
import { startUpPrompts } from "../constants/constants";
import { ChatRoomInput } from "./";

const NewConversationPage: React.FC = () => {
  const [greetings, setGreetings] = useState<string>("");

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
      <div className="flex flex-row items-center justify-center w-full h-full">
        <div className="w-[60%] h-full flex flex-col items-center justify-center">
          <div className="text-primary-bg-dark dark:text-primary-bg-light">
            <h1 className="leading-tight font-headings text-header capitalize">
              {greetings}!
            </h1>
            {/*TODO: To be replaced by user name */}
            <h2 className="text-2xl">Alex Wang</h2>
          </div>
          <div className="text-primary-bg-dark dark:text-primary-bg-light">
            <h1 className="text-body-text">
              Don't have anything in mind? Try:
            </h1>
            {startUpPrompts.map((item, index) => (
              <button
                className="cta-btn !shadow-none !rounded-[40px]"
                key={`${item.id}-${index}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div>
            <ChatRoomInput />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewConversationPage;
