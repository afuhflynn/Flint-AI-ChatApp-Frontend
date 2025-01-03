import React from "react";

const NewConversationPage: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-between w-full h-full">
      <nav>Nav</nav>
      <div className="flex flex-row items-center justify-center w-full h-full text-gray-900 dark:text-white bg-primary-bg-light dark:bg-primary-bg-dark">
        <div className="w-[60%] h-full flex flex-col items-center justify-center">
          <div>
            <h1 className="text-4xl leading-tight sm:text-5xl font-headings md:text-7xl">
              Good Morning!
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
