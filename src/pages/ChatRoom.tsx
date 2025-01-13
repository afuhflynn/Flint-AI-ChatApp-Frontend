import React from "react";
import {
  ChatRoomFooter,
  ChatRoomNav,
  ConversationPage,
  NewConversationPage,
  SideBar,
} from "../components";
// TODO: Remember to add a user tour of the chatroom if it's a new user

const ChatRoom: React.FC = () => {
  const isNewConversation = true;
  return (
    <main className="flex flex-row items-center justify-between w-full h-full text-primary-bg-dark dark:text-primary-bg-light">
      <SideBar />
      <section className="w-full h-full bg-neutral-dark-grey-light dark:bg-neutral-dark-grey-dark text-text-primary-light dark:text-text-primary-light flex flex-col items-center justify-between">
        <ChatRoomNav />
        {isNewConversation ? <NewConversationPage /> : <ConversationPage />}
        <ChatRoomFooter />
      </section>
    </main>
  );
};

export default ChatRoom;
