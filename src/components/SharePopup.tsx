import { useState } from "react";
import { Copy, X } from "lucide-react";
import ModalHeading from "./ModalHeading";
import { toast } from "react-toastify";
import { CheckCircleOutline } from "@mui/icons-material";
import globalAppStore from "../store/app.store";

const SharePopup: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.pathname;
  const { handleHideSharePopup, isSharePopup } = globalAppStore();

  const username = "AfuhFlynn"; // NOTE: To be replaced by the actual user name
  const handleCopyUrl = () => {
    try {
      navigator.clipboard.writeText(
        `${window.location.origin}/${username}${currentUrl as string}`
      );
      setCopied(true);
      toast.success("Link copied successfully.");
      setTimeout(() => {
        setCopied(false);
      }, 6000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("An unexpected error occurred copying link!");
      console.log(error.message);
    }
  };

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-opacity-80 bg-black text-text ${
        isSharePopup === true ? "visible" : "hidden"
      }`}
    >
      <div className="modal !bg-primary-bg-light dark:!bg-neutral-dark-grey-dark !p-2 md:!w-[36%] !py-4 !pb-6">
        <div className="w-full h-auto flex flex-row items-center justify-end">
          <button
            onClick={() => handleHideSharePopup(false)}
            className="assets-btn !w-[2rem] !h-[2rem] !p-[0.2rem] dark:text-text-primary-dark text-text-primary-light"
          >
            <X />
          </button>
        </div>
        <div className="w-full h-auto flex flex-row items-center justify-start px-6">
          <ModalHeading
            text="Share chat with your friends!"
            className="!my-0 !mt-1 !text-left"
          />
        </div>
        <p className="modal-text opacity-80 !my-5 text-center !px-4">
          Your privacy is our priority. Visitors onl see the conversation and
          nothing related to you!!
        </p>
        <div className="flex flex-row items-center justify-between w-full h-auto px-4 gap-2">
          <input
            value={`/${username}${currentUrl as string}`}
            name="url"
            readOnly
            className="cta-btn !text-body-text focus:outline-none focus:!ring-none !shadow-none !font-normal !h-[2.8rem] hover:!cursor-default !flex-grow hover:!bg-transparent !rounded-[15px]"
          />
          {!copied ? (
            <button
              className={`cta-btn !text-sm !px-3 !shadow-none !rounded-[20px] !flex !flex-row !items-center !justify-center !font-normal !w-[6.2rem] !h-[2.6rem] !gap-1`}
              onClick={handleCopyUrl}
            >
              <Copy className="w-[1.2rem] h-[1.2rem]" />
              <span>Copy</span>
            </button>
          ) : (
            <button
              className="cta-btn !text-sm !px-3 !shadow-none !rounded-[20px] !flex !flex-row !items-center !justify-center !font-normal !w-[6.2rem] !h-[2.6rem] !gap-1 !text-green-500 !border-green-500 hover:!bg-transparent hover:!cursor-default"
              onClick={handleCopyUrl}
            >
              <CheckCircleOutline className="w-[1.2rem] h-[1.2rem]" />
              <span>Copied</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
