import { Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { flintaiLogo } from "../assets/images";
import { PanelsLeftBottomIcon, SearchIcon } from "lucide-react";
import globalAppStore from "../store/app.store";

const SidebarNav: React.FC = () => {
  const { setIsSidebarActive, setIsMobileSidebarActive } = globalAppStore();
  return (
    <nav className="h-[70px] w-full flex flex-row items-center justify-between custom-input !border-x-0 !border-t-0 !px-0 !py-0 !rounded-[0px] !border-opacity-10">
      <Link
        to="/"
        className="flex flex-row items-center justify-center gap-[0.5rem] dark:text-text-primary-dark text-text-primary-light"
      >
        <img
          src={flintaiLogo}
          alt="Flint AI logo"
          className="w-[2.2rem] h-[2.2rem] object-contain"
        />
        <h2 className="text-[18px]">Flint AI</h2>
      </Link>
      <div className="flex flex-row items-center gap-2 w-auto h-auto">
        <Tooltip
          title="Search a chat"
          placement="bottom"
          className={`assets-btn !w-[2rem] !h-[2rem] !p-[0.2rem]`}
        >
          <button type="button">
            <SearchIcon />
          </button>
        </Tooltip>
        <Tooltip
          title="Toggle Menu"
          placement="right"
          className={`assets-btn !w-[2rem] !h-[2rem] !p-[0.2rem]`}
        >
          <button
            type="button"
            onClick={() => {
              setIsSidebarActive(false);
              setIsMobileSidebarActive(false);
            }}
          >
            <PanelsLeftBottomIcon />
          </button>
        </Tooltip>
      </div>
    </nav>
  );
};

export default SidebarNav;
