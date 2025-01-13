import { Camera, Upload } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { File, PaperclipIcon } from "lucide-react";
import React, { useRef } from "react";

const PopupPicker = () => {
  const imageFileInputRef = useRef<HTMLInputElement | null>(null);
  const docsFileInputRef = useRef<HTMLInputElement | null>(null);
  const cameraFileInputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <Tooltip title="Image" placement="right-end" arrow>
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
      <Tooltip title="Document" placement="right-end" arrow>
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
      <Tooltip title="Photo" placement="right-end" arrow>
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
  );
};

const FilePicker: React.FC = () => {
  return (
    <div>
      <Tooltip title="File" placement="top" arrow>
        <button type="button">
          <PaperclipIcon />
        </button>
      </Tooltip>
    </div>
  );
};

export default FilePicker;
