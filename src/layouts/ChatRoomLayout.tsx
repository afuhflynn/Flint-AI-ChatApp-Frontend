import globalUserStore from "@/store/user.store";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ChatRoomLayout: React.FC = () => {
  const { user } = globalUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Chatroom | Flint AI";
    if (!user) navigate("/c/new-chat");
  }, [user, navigate]);
  return <Outlet />;
};

export default ChatRoomLayout;
