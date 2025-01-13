import React from "react";
import { GitHub, Google } from "@mui/icons-material";
import { toast } from "react-toastify";
import { backendBaseUrl } from "../constants/constants";

const SocialConnections: React.FC = () => {
  const handleBtnClick = (btnType: string | "github" | "google") => {
    switch (btnType) {
      case "google":
        toast.info("Sorry service not available at the moment!");
        break;
      case "github":
        window.location.href = `${backendBaseUrl}/api/auth/users/github`;
        break;
      default:
        toast.success("Login with what you want");
        break;
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto">
      <button
        type="button"
        className="w-full rounded-2xl custom-input !h-[2.8rem] flex flex-row items-center justify-center gap-2"
        onClick={() => handleBtnClick("github")}
      >
        <GitHub className="text-primary-text" />{" "}
        <span className="modal-text">Sign in with GitHub</span>
      </button>
      <button
        type="button"
        className="w-full rounded-2xl custom-input !h-[2.8rem] flex flex-row items-center justify-center gap-2"
        onClick={() => handleBtnClick("google")}
      >
        <Google className="text-primary-text" />{" "}
        <span className="modal-text">Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialConnections;
