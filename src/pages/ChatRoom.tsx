import { ChatRoomFooter, ChatRoomNav, SideBar } from "../components";
import { Outlet } from "react-router-dom";
// TODO: Remember to add a user tour of the chatroom if it's a new user with joyride

const ChatRoom: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full h-full bg-primary-bg-light dark:bg-primary-bg-dark text-text-primary-light dark:text-text-primary-light overflow-hidden">
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
