import React from "react";
import { ChatRoomInput } from "./";

const ConversationPage: React.FC = () => {
  return (
    <section className="w-full h-full">
      <div>Conversation view</div>
      <div className="w-full h-auto">
        <ChatRoomInput startupPrompt="" />
      </div>
    </section>
  );
};

export default ConversationPage;
