import React from "react";
import { ConversationPage, NewConversationPage, SideBar } from "../components";

const ChatRoom: React.FC = () => {
  const isNewConversation = true;
  return (
    <main className="flex flex-row items-center justify-between w-full h-full text-primary-bg-dark dark:text-primary-bg-light">
      <SideBar />
      {isNewConversation ? <NewConversationPage /> : <ConversationPage />}
    </main>
  );
};

export default ChatRoom;
