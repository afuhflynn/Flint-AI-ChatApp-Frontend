import { X } from "lucide-react";
import globalAppStore from "../store/app.store";
import { settingsTabs } from "../constants/constants";
import {
  GeneralSettings,
  ModalHeading,
  PersonalizedSettings,
  SecuritySettings,
} from "../components";
import { Person2, Security, Settings } from "@mui/icons-material";
import { useState } from "react";

const SettingsPage = () => {
  const [selectedItem, setSelectedItem] = useState<number>(1);
  const { handleHideSettingsPopup, isSettingsPopup } = globalAppStore();

  const getSelectedItem = (value: number) => {
    setSelectedItem(value);
  };

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-opacity-80 bg-black text-text ${
        isSettingsPopup === true ? "visible" : "hidden"
      }`}
    >
      <main className="modal !flex !flex-col !items-start !justify-between !bg-primary-bg-light dark:!bg-neutral-dark-grey-dark !p-2 md:!w-[44rem] md:!h-[80%] !h-[80%] !w-[96%] !py-4">
        <header className="custom-input !flex !flex-row !items-center !w-full !h-auto !justify-between  !border-x-0 !border-t-0 md:!px-2 !px-1 !py-0 !pb-6 !pt-1 !my-0 !rounded-[0px] !border-opacity-10">
          <ModalHeading text="Settings" className="!m-0 !text-left !text-md" />
          <button
            onClick={() => handleHideSettingsPopup(false)}
            className="assets-btn !w-[2rem] !h-[2rem] !p-[0.2rem] dark:text-text-primary-dark text-text-primary-light"
          >
            <X />
          </button>
        </header>
        <div className="flex flex-col items-start w-full h-full gap-6 px-1 md:pt-2 md:flex-row md:px-2">
          {/* Tabs */}
          <div className="md:w-[22rem] w-full grid grid-cols-3 grid-rows-1 items-center justify-center sm:flex md:flex-col sm:items-center gap-2 md:gap-3 border border-neutral-light-grey-light dark:border-slate-600 md:border-0 border-x-0 border-t-0 py-5 border-opacity-10">
            {settingsTabs.map((item, index) => (
              <button
                key={`item-${index}-${item.id}-${item.label}`}
                onClick={() => getSelectedItem(index + 1)}
                className={`cta-btn md:!text-sm !text-xs !px-3 !shadow-none !flex !flex-row !items-center !justify-center md:!justify-start !font-normal md:!w-full !w-auto !h-[2.6rem] !gap-1 ${
                  selectedItem === index + 1
                    ? "!bg-blue-100 dark:!bg-gray-700"
                    : "!bg-white dark:!bg-neutral-dark-grey-dark"
                }`}
              >
                {item.label.toLowerCase() === "general" ? (
                  <Settings />
                ) : item.label.toLowerCase() === "personalized" ? (
                  <Person2 />
                ) : (
                  <Security />
                )}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Settings */}
          <div className="w-full h-full -mt-5 md:mt-2">
            {selectedItem === 1 ? (
              <GeneralSettings />
            ) : selectedItem === 2 ? (
              <PersonalizedSettings />
            ) : (
              <SecuritySettings />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
