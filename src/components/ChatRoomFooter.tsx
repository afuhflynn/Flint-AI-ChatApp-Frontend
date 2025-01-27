import React from "react";

const ChatRoomFooter: React.FC = () => {
  return (
    <footer className="text-xs dark:text-text-secondary-dark text-text-secondary-light text-center mb-1">
      <p className="leading-relaxed">
        Flint AI is powered by{" "}
        <a
          href="https://ai.google.dev/gemini-api/docs/models/gemini"
          target="_blank"
          className="hover:underline"
        >
          google's gemini api
        </a>{" "}
        and it can make mistakes. Check important info.
      </p>
    </footer>
  );
};

export default ChatRoomFooter;
