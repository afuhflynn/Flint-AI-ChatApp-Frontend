import {
  ArrowRightCircleIcon,
  BookAIcon,
  Code2,
  CombineIcon,
  DotIcon,
  Github,
  HandHelping,
  Linkedin,
  StarIcon,
} from "lucide-react";
import React from "react";
import CopyRight from "./CopyRight";

const Footer: React.FC = () => {
  return (
    <footer className="w-screen py-12 bg-gray-100 dark:bg-gray-900 paddingX">
      <div className="flex flex-col items-center max-w-full px-6 mx-auto text-center paddingX">
        {/* Support and more */}
        <ul className="flex flex-col items-start w-full h-auto gap-2 mb-6 text-sm text-gray-600 md:text-lg dark:text-gray-400">
          <li className="ul-row">
            <DotIcon />
            <span>Give a Star</span>
            <StarIcon className="ul-icon" />
          </li>
          <li className="ul-row">
            <DotIcon />
            <span>Follow</span>
            <CombineIcon className="ul-icon" />
          </li>
          <li className="ul-row">
            <DotIcon />
            <span>Support</span> <HandHelping className="ul-icon" />
          </li>
          <li className="ul-row">
            <DotIcon />
            <span>And Hire</span> <BookAIcon className="ul-icon" />
          </li>{" "}
          <li className="ul-row">
            <DotIcon />
            <span>Me on</span> <ArrowRightCircleIcon className="ul-icon" />
          </li>
        </ul>
        {/* Social Links */}
        <div className="flex flex-row items-center justify-center w-full gap-2 mb-6 space-x-6 md:gap-6 ">
          <a
            href="https://github.com/AfuhFlynns"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="footer-text fab fa-github">
              <Github />
              Github
            </i>
          </a>

          <a
            href="https://www.linkedin.com/in/afuh-flynn-s-74289a268"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="footer-text fab fa-linkedin">
              <Linkedin />
              Linkedin
            </i>
          </a>

          <a
            href="https://www.frontendmentor.io/profile/AfuhFlynns"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="footer-text fab fa-free-code-camp">
              <Code2 />
              Frontend Mentor
            </i>
          </a>

          <a
            href="https://www.upwork.com/freelancers/~01d602cb081a55ce51?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="footer-text fab fa-upwork">
              <Code2 />
              Upwork
            </i>
          </a>
        </div>

        {/* Copyright */}
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
