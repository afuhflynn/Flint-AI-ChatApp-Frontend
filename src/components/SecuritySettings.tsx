import { Check } from "lucide-react";
import { useState } from "react";

const ShareChatHistory = ({
  onClick,
  isChecked,
}: {
  onClick: () => void;
  isChecked: boolean | null;
}) => {
  return (
    <>
      <span>Share your chat history with us</span>{" "}
      <button
        className="w-[1.2rem] h-[1.2rem] border-[1.4px] border-gray-500 dark:border-gray-400 rounded-sm flex flex-row items-center justify-center p-[0.1rem]"
        onClick={onClick}
      >
        {isChecked && <Check className="w-full h-full" />}
      </button>
    </>
  );
};
const ShareUsername = ({
  onClick,
  isChecked,
}: {
  onClick: () => void;
  isChecked: boolean | null;
}) => {
  return (
    <>
      <span>Share your username with us</span>{" "}
      <button
        className="w-[1.2rem] h-[1.2rem] border-[1.4px] border-gray-500 dark:border-gray-400 rounded-sm flex flex-row items-center justify-center p-[0.1rem]"
        onClick={onClick}
      >
        {isChecked && <Check className="w-full h-full" />}
      </button>
    </>
  );
};

const SecuritySettings: React.FC = () => {
  const LIST = [ShareUsername, ShareChatHistory];
  const [shareName, setShareName] = useState<null | boolean>(true);
  const [shareChats, setShareChats] = useState<null | boolean>(true);

  const handleSelectShareName = () => {
    setShareName((prev) => !prev);
  };
  const handleSelectShareChats = () => {
    setShareChats((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-start w-full h-full item-center">
      {LIST.map((Item, index) => (
        <div
          key={`item-${index}-${Item.name}`}
          className="custom-input !flex !flex-row !items-center !w-full !h-auto !justify-between !border-[1px] !border-x-0 first:!border-t-0 !border-b-0 !px-1 !py-3 !m-0 !rounded-[0px] !border-opacity-10"
        >
          {
            <Item
              onClick={
                index === 0 ? handleSelectShareName : handleSelectShareChats
              }
              isChecked={index === 0 ? shareName : shareChats}
            />
          }
        </div>
      ))}
    </div>
  );
};

export default SecuritySettings;
