import { Tooltip } from "@mui/material";
import { Globe } from "lucide-react";
import React from "react";

const InternetSearch: React.FC = () => {
  return (
    <>
      <Tooltip title="Internet search" placement="right" arrow>
        <button type="button" className="assets-btn">
          <Globe className="icons" />
        </button>
      </Tooltip>
    </>
  );
};

export default InternetSearch;
