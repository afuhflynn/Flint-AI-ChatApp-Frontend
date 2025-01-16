import React from "react";
import { ChatRoomFooter, ChatRoomNav, SideBar } from "../components";
import { Outlet } from "react-router-dom";
// TODO: Remember to add a user tour of the chatroom if it's a new user

const ChatRoom: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full h-full bg-neutral-dark-grey-light dark:bg-neutral-dark-grey-dark text-text-primary-light dark:text-text-primary-light">
      <SideBar />
      <section className="flex flex-col items-center justify-between w-full h-full">
        <ChatRoomNav />
        <Outlet />
        <ChatRoomFooter />
      </section>
    </div>
  );
};

export default ChatRoom;
