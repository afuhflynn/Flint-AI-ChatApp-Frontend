import React from "react";
import CopyRight from "./CopyRight";
import { footerData, footerDataNotice } from "../constants/constants";
import { DotIcon } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 bg-gray-100 dark:bg-gray-900 paddingX">
      <div className="flex flex-col items-center justify-between max-w-full px-6 mx-auto text-center">
        {/* Support and more */}
        <ul className="flex flex-col items-start w-full h-auto gap-2 mb-6 text-sm text-gray-600 md:text-lg dark:text-gray-400">
          {footerDataNotice.map((item, index) => (
            <li className="ul-row" key={`item-${index}-${item.text}`}>
              <DotIcon />
              <span>{item.text}</span>
              <item.Icon className="ul-icon" />
            </li>
          ))}
        </ul>
        {/* Social Links */}
        <div className="flex flex-row items-center justify-center w-full gap-2 mb-6 space-x-6 md:gap-6 ">
          {footerData.map((item, index) => (
            <a
              key={`item-${index}-${item.text}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="capitalize footer-text fab fa-github">
                <item.Icon />
                {item.text}
              </i>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
