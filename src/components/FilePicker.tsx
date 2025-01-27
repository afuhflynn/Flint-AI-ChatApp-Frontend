import { Camera, Upload } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { File, PaperclipIcon } from "lucide-react";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import ModalHeading from "./ModalHeading";
import { useOutSideClick } from "../hooks";

const PopupPicker = ({
  togglePopup,
}: {
  togglePopup: Dispatch<SetStateAction<boolean>>;
}) => {
  const imageFileInputRef = useRef<HTMLInputElement | null>(null);
  const docsFileInputRef = useRef<HTMLInputElement | null>(null);
  const cameraFileInputRef = useRef<HTMLInputElement | null>(null);
  const filePickerRef = useRef<HTMLDivElement | null>(null);
  const hidePopup = useOutSideClick(filePickerRef); // Read the click event state

  useEffect(() => {
    togglePopup(hidePopup);
  }, [togglePopup, hidePopup]);

  // Handle manual mousedown event
  const handleBtnClick = (btn_type: string) => {
    switch (btn_type) {
      case "image":
        if (imageFileInputRef && imageFileInputRef.current)
          imageFileInputRef.current.click();
        break;
      case "docs":
        if (docsFileInputRef && docsFileInputRef.current)
          docsFileInputRef.current.click();
        break;
      case "camera":
        if (cameraFileInputRef && cameraFileInputRef.current)
          cameraFileInputRef.current.click();
        break;
      default:
        return;
    }
    togglePopup(false);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-opacity-80 bg-black text-text">
      <div
        ref={filePickerRef}
        className="modal !bg-primary-bg-light dark:!bg-neutral-dark-grey-dark md:gap-2 gap-4 flex flex-col items-start"
      >
        <ModalHeading text="Choose a file type" className="text-center" />
        <Tooltip
          title="Image"
          placement="right-end"
          arrow
          onClick={() => handleBtnClick("image")}
        >
          <button type="button" className="upload-btns">
            <span className="custom-icon">
              <Upload className="icon" />
            </span>
            <input
              type="file"
              className="image-input"
              name="image"
              accept="image/*"
              ref={imageFileInputRef}
              multiple
            />
            Upload an Image
          </button>
        </Tooltip>
        <Tooltip
          title="Document"
          placement="right-end"
          arrow
          onClick={() => handleBtnClick("docs")}
        >
          <button type="button" className="upload-btns">
            <span className="custom-icon">
              <File className="icon" />
            </span>
            <input
              type="file"
              className="docs-input"
              name="docs-text"
              accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              ref={docsFileInputRef}
              multiple
            />
            Upload a document
          </button>
        </Tooltip>
        <Tooltip
          title="Photo"
          placement="right-end"
          arrow
          onClick={() => handleBtnClick("camera")}
        >
          <button type="button" className="upload-btns">
            <span className="custom-icon">
              <Camera className="icon" />
            </span>
            <input
              type="file"
              className="camera-input"
              name="camera-image"
              accept="image/*"
              multiple
              capture="user"
              ref={cameraFileInputRef}
            />
            Take a photo
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

const FilePicker: React.FC = () => {
  const [isFilePickerPopup, setIsFilePickerPopup] = useState<boolean>(false);

  return (
    <div>
      {isFilePickerPopup && <PopupPicker togglePopup={setIsFilePickerPopup} />}
      <Tooltip
        title="Attach a file"
        placement="top"
        arrow
        onClick={() => setIsFilePickerPopup(!isFilePickerPopup)}
      >
        <button type="button">
          <PaperclipIcon className="icons" />
        </button>
      </Tooltip>
    </div>
  );
};

export default FilePicker;
