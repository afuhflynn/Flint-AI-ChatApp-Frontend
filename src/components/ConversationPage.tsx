import React, { useEffect, useRef, useState } from "react";
import { ChatRoomInput } from "./";
import globalAppStore from "../store/app.store";
import { Tooltip } from "@mui/material";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { mockUpData } from "../constants/constants";
import { flintaiLogo } from "../assets/images";

interface scrollButtonTypes {
  handleClick: () => void;
}
const ScrollButton: React.FC<scrollButtonTypes> = ({ handleClick }) => {
  return (
    <Tooltip title="Go to bottom" placement="top" className="absolute bottom-0">
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
        animate={{ scale: 1, opacity: 1 }}
        className={`cta-btn !p-2 !text-xs !shadow-lg !rounded-full !flex !flex-row !items-center !justify-center !w-[2.2rem] !h-[2.2rem] !gap-1 !font-extralight`}
        type="button"
        onClick={() => handleClick()}
      >
        <ArrowDown className="w-[1.8rem] h-[1.8rem]" />
      </motion.button>
    </Tooltip>
  );
};

const ConversationPage: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState<number | null>(null);
  const { prompt, chatbot } = globalAppStore();
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  //TODO: Add a scroll to bottom effect based on bottomRef and hide the button based on scroll height
  const bottomRef = useRef<null | HTMLSpanElement>(null);

  // const handleScrollButtonClick = () =>{
  //   setIsAtBottom()
  // }

  const handleScrollToBottom = () => {
    if (bottomRef && bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    handleScrollToBottom();
  }, [prompt, chatbot]);

  useEffect(() => {
    if (chatContainerRef && chatContainerRef.current) {
      chatContainerRef.current.addEventListener("scroll", () => {
        if (chatContainerRef && chatContainerRef.current) {
          const scrollAmount = chatContainerRef.current.scrollTop;
          const scrollHeight =
            chatContainerRef.current.scrollHeight -
            chatContainerRef.current.clientHeight;
          const percent = (scrollAmount / scrollHeight) * 100;
          setScrollPercent(percent);
        }
      });
    }
  }, []);
  return (
    <section className="relative flex flex-col items-center w-full h-full overflow-hidden">
      <div
        ref={chatContainerRef}
        className="overflow-x-hidden overflow-y-scroll h-[90%] flex flex-col items-center mb-1"
      >
        Conversation view
        <div className="md:w-[68%] w-[96%]">
          {mockUpData.map((item, index) => {
            return (
              <div key={`item-${index}-${item.role}`} className="custom-input">
                {item.role === "model" && (
                  <img
                    src={flintaiLogo}
                    alt="Flint AI logo"
                    className="w-[2.2rem] h-[2.2rem] object-contain"
                  />
                )}
                {item.parts[0].text}
              </div>
            );
          })}
          <span ref={bottomRef} />
        </div>
      </div>
      {scrollPercent !== 100 && (
        <div className="relative flex flex-row items-center justify-center w-full h-auto mb-2">
          <ScrollButton handleClick={handleScrollToBottom} />
        </div>
      )}
      <div className="flex flex-row items-center justify-center w-full h-auto mb-2 shadow-sm bg-neutral-dark-grey-light dark:bg-neutral-dark-grey-dark">
        <div className="md:w-[68%] w-[96%] h-auto shadow-md rounded-[2rem]">
          <ChatRoomInput startupPrompt="" />
        </div>
      </div>
    </section>
  );
};

export default ConversationPage;
