import React from "react";
import { GitHub, Google } from "@mui/icons-material";

const SocialConnections: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto gap-2 my-2">
      <button className="w-full rounded-2xl custom-input !h-[3.3rem]">
        <GitHub className="text-primary-text" />
      </button>
      <button className="w-full rounded-2xl custom-input !h-[3.3rem]">
        <Google className="text-primary-text" />
      </button>
    </div>
  );
};

export default SocialConnections;
