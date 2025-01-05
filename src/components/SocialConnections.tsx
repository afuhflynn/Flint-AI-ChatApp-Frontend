import React from "react";
import { GitHub, Google } from "@mui/icons-material";

const SocialConnections: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto">
      <button
        type="button"
        className="w-full rounded-2xl custom-input !h-[2.8rem] flex flex-row items-center justify-center gap-2"
      >
        <GitHub className="text-primary-text" />{" "}
        <span className="modal-text">GitHub</span>
      </button>
      <button
        type="button"
        className="w-full rounded-2xl custom-input !h-[2.8rem] flex flex-row items-center justify-center gap-2"
      >
        <Google className="text-primary-text" />{" "}
        <span className="modal-text">Google</span>
      </button>
    </div>
  );
};

export default SocialConnections;
