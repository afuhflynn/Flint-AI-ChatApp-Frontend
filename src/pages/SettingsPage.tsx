
import { X } from "lucide-react";
import globalAppStore from "../store/app.store";
import { settingsTabs } from "../constants/constants";
import { GeneralSettings, ModalHeading, PersonalizedSettings, SecuritySettings } from "../components";
import { Person2, Security, Settings } from "@mui/icons-material";

const SettingsPage = () => {
  const { handleHideSettingsPopup, isSettingsPopup } = globalAppStore();

  return (
    <div className={`fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-opacity-80 bg-black text-text ${
        isSettingsPopup === true ? "visible" : "hidden"
      }`}>
      <main className="modal !flex !flex-col !items-start !justify-between !bg-primary-bg-light dark:!bg-neutral-dark-grey-dark !p-2 md:!w-[42rem] md:!h-[80%] !h-[80%] !w-[96%] !py-4">
          <header className="custom-input !flex !flex-row !items-center !w-full !h-auto !justify-between  !border-x-0 !border-t-0 md:!px-2 !px-1 !py-0 !pb-6 !pt-1 !my-0 !rounded-[0px] !border-opacity-10">
            <ModalHeading
              text="Settings"
              className="!m-0 !text-left !text-md"
            />
            <button
              onClick={() => handleHideSettingsPopup(false)}
              className="assets-btn !w-[2rem] !h-[2rem] !p-[0.2rem] dark:text-text-primary-dark text-text-primary-light"
            >
              <X />
            </button>
          </header>
        <div className="flex md:flex-row flex-col items-start gap-6 md:px-2 px-1 pt-4 h-full w-full">
          {/* Tabs */}
          <div className="md:w-[22rem] w-full grid grid-cols-3 grid-rows-1 sm:flex md:flex-col sm:items-center gap-2">
          {
            settingsTabs.map((item, index) =>(<button key={`item-${index}-${item.id}-${item.label}`} className={`cta-btn md:!text-sm !text-xs !px-3 !shadow-none !flex !flex-row !items-center !justify-center md:!justify-start !font-normal !w-full !h-[2.6rem] !gap-1`}>
              {
                item.label.toLowerCase() === "general" ? <Settings /> : item.label.toLowerCase() === "personalized" ? <Person2 /> : <Security />
              }
              <span>
              {item.label}
              </span>
            </button>))
          }
          </div>
          {/* Settings */}
          <div className="w-full h-auto">
            <GeneralSettings />
            <PersonalizedSettings />
            <SecuritySettings />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
