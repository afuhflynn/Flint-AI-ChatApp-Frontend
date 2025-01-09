import React, { useEffect, useState } from "react";

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
      <nav>Nav</nav>
      <div className="flex flex-row items-center justify-center w-full h-full text-gray-900 dark:text-white bg-primary-bg-light dark:bg-primary-bg-dark">
        <div className="w-[60%] h-full flex flex-col items-center justify-center">
          <div>
            <h1 className="text-4xl leading-tight sm:text-5xl font-headings md:text-7xl capitalize">
              {greetings}!
            </h1>
            <h2 className="text-sub-header">Alex Wang</h2>
          </div>
          <div>Start up prompts</div>
          <div>Input section</div>
        </div>
      </div>
    </section>
  );
};

export default NewConversationPage;
