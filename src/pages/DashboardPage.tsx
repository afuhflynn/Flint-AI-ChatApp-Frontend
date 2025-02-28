import { Logout, Settings, Share, Update } from "@mui/icons-material";
import { motion } from "framer-motion";
import globalAppStore from "../store/app.store";

const DashboardPage = () => {
  const { isUserProfilePopup } = globalAppStore();
  const handleToggleSettings = () => {};
  const handleCopySiteUrl = () => {};
  const handleLogout = () => {};
  const handleRecentActivities = () => {};
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      animate={{ scale: 1, opacity: 1 }}
      className={`modal !bg-primary-bg-light dark:!bg-neutral-dark-grey-dark !p-4 !w-[16rem] !py-4 !pb-6 absolute right-[0.6rem] -top-[0.5rem] !shadow-md !flex !flex-col !items-center !gap-4 !shadow-black ${
        isUserProfilePopup ? "block" : "hidden"
      }`}
    >
      <button
        className={`cta-btn !text-sm !px-3 !shadow-none !flex !flex-row !items-center !font-normal !w-full !h-[2.6rem] !gap-1`}
        onClick={handleToggleSettings}
      >
        <Settings className="h-[1.2rem] w-[1.2rem]" />
        <span>Settings</span>
      </button>
      <button
        className={`cta-btn !text-sm !px-3 !shadow-none !flex !flex-row !items-center !font-normal !w-full !h-[2.6rem] !gap-1`}
        onClick={handleRecentActivities}
      >
        <Update className="h-[1.2rem] w-[1.2rem]" />
        <span>Recent activities</span>
      </button>
      <button
        className={`cta-btn !text-sm !px-3 !shadow-none !flex !flex-row !items-center !font-normal !w-full !h-[2.6rem] !gap-1`}
        onClick={handleCopySiteUrl}
      >
        <Share className="h-[1.2rem] w-[1.2rem]" />
        <span>Spread the news</span>
      </button>
      <div className="h-auto w-full custom-input !border-x-0 !border-b-0 !px-0 !py-0 !pt-3 !my-0 !rounded-[0px] !border-opacity-10">
        <button
          className={`cta-btn !text-sm !px-3 !shadow-none !flex !flex-row !items-center !font-normal !w-full !h-[2.6rem] !gap-1`}
          onClick={handleLogout}
        >
          <Logout className="h-[1.2rem] w-[1.2rem]" />
          <span>Logout</span>
        </button>
      </div>
    </motion.div>
  );
};

export default DashboardPage;
