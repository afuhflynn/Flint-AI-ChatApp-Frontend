import { ChevronDown, ChevronUp, MoonIcon, SunIcon } from "lucide-react";
import globalAppStore from "../store/app.store";
import { useState } from "react";
import { motion } from "framer-motion";
import globalUserStore from "../store/user.store";
import { toggleLocalTheme } from "../hooks";

const themeData = [
  {
    id: 1,
    label: "Light Mode",
    Icon: SunIcon,
    name: "light",
  },
  {
    id: 2,
    label: "Dark Mode",
    Icon: MoonIcon,
    name: "dark",
  },
];

const ThemeToggle = () => {
  const { appTheme, setAppTheme } = globalAppStore();
  const { setprefersTheme } = globalUserStore();
  const [isDropDown, setIsDropDown] = useState(false);

  const handleToggleTheme = (value: string) => {
    setprefersTheme(value);
    toggleLocalTheme(value);
    setAppTheme(value);
  };

  const handleToggleDropDown = (value: boolean) => {
    setIsDropDown(value);
  };
  return (
    <div className="relative flex flex-row items-center justify-between w-full">
      <span>Theme</span>{" "}
      <button
        className="flex flex-row items-center justify-center gap-1"
        onClick={() => handleToggleDropDown(!isDropDown)}
      >
        <span className="text-sm">
          {appTheme === "dark" ? "Dark" : "Light"} Mode
        </span>
        {isDropDown ? <ChevronUp /> : <ChevronDown />}
      </button>{" "}
      {isDropDown && (
        <motion.div
          initial={{ opacity: 0, height: "0px" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          animate={{ opacity: 1, height: "auto" }}
          className="modal !bg-primary-bg-light dark:!bg-neutral-dark-grey-dark !shadow-lg !shadow-black !shadow-opacity-40 !absolute !top-0 !right-0 !rounded-lg !w-[9rem] md:!w-[11rem] !flex !flex-col !items-center !justify-between !p-2 !py-3 !gap-3"
        >
          {themeData.map((item, index) => (
            <button
              key={`item-${index}-${item.name}`}
              className={`cta-btn md:!text-sm !text-xs !px-4 md:!px-3 !shadow-none !flex !flex-row !items-center !justify-between md:!justify-start !font-normal !w-full !h-[2.6rem] !gap-1 ${
                appTheme === item.name
                  ? "!bg-blue-200 dark:!bg-gray-700"
                  : "!bg-transparent dark:!bg-neutral-dark-grey-dark"
              }}`}
              onClick={() => handleToggleTheme(item.name)}
            >
              <item.Icon /> <span>{item.label}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};
const DeleteAllChats = () => {
  return (
    <>
      <span>Delete all chats</span>{" "}
      <button className="text-sm px-3 shadow-none rounded-[40px] flex flex-row items-center justify-center font-normal w-[6.2rem] h-[2.6rem] gap-1 bg-red-600 hover:bg-red-700 text-white">
        Delete all
      </button>
    </>
  );
};
const Logout = () => {
  return (
    <>
      <span>Log out on this device</span>{" "}
      <button className="cta-btn !text-sm md:!text-md !px-3 !shadow-none !rounded-[40px] !flex !flex-row !items-center !justify-center !font-normal !w-[6.2rem] !h-[2.6rem] !gap-1 !border-red-700 !text-red-500 !bg-transparent hover:!bg-red-600 hover:!text-white !bg-opacity-20">
        Logout
      </button>
    </>
  );
};

const GeneralSettings: React.FC = () => {
  const LIST = [ThemeToggle, DeleteAllChats, Logout];

  return (
    <div className="flex flex-col justify-start w-full h-full item-center">
      {LIST.map((Item, index) => (
        <div
          key={`item-${index}-${Item.name}`}
          className="custom-input !flex !flex-row !items-center !w-full !h-auto !justify-between !border-[1px] !border-x-0 first:!border-t-0 !border-b-0 !px-1 !py-3 !m-0 !rounded-[0px] !border-opacity-10"
        >
          {<Item />}
        </div>
      ))}
    </div>
  );
};

export default GeneralSettings;
