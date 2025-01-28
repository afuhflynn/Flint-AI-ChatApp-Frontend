import React from "react";
import { SidebarNav } from "./";
import { Edit, Settings } from "@mui/icons-material";

const SideBar: React.FC = () => {
  return (
    <section className="h-full md:w-[18rem] md:min-w-[20rem] hidden md:flex flex-col custom-input !border-opacity-10 !py-0 !m-0 !rounded-[0px] !border-y-0 !border-l-0  !px-4 !bg-primary-bg-light dark:!bg-primary-bg-dark">
      <SidebarNav />
      <div className="h-[100%]">
        <button>
          <Edit />
        </button>
        <button>
          <Settings />
        </button>
      </div>
    </section>
  );
};

export default SideBar;
