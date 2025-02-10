import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { navbarItems } from "../constants/constants";
import { flintaiLogo } from "../assets/images";
import { Menu, X } from "lucide-react"; // Importing Menu and X icons from lucide-react
import AuthButtons from "./AuthButtons";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to handle mobile menu toggle
  // Mobile menu ref
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // handle outsite click based on mobile menu ref
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <header className="w-full h-[80px] py-[1.5rem] flex flex-row items-center justify-between bg-primary-bg-light dark:bg-primary-bg-dark bg-opacity-90 top-0 left-0 paddingX right-0 z-50 sticky">
      <Link
        to="/"
        className="flex flex-row items-center justify-center gap-[0.5rem] dark:text-text-primary-dark text-text-primary-light"
      >
        <img
          src={flintaiLogo}
          alt="Flint AI logo"
          className="h-[2.6rem] w-[2.6rem] object-contain"
        />
        <h2 className="text-[18px]">Flint AI</h2>
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="flex items-center md:hidden">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <X className="text-2xl text-text-primary-light dark:text-text-primary-dark" />
          ) : (
            <Menu className="text-2xl text-text-primary-light dark:text-text-primary-dark" />
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block text-[14px] uppercase font-[540] dark:text-text-primary-dark text-text-primary-light">
        <ul className="flex flex-row items-center justify-center gap-[3rem]">
          {navbarItems.map((item, index) => (
            <Link to={item.url} key={`${index}-${item.id}-${item.label}`}>
              <li className="hover:text-black dark:hover:text-white">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Desktop Auth Buttons */}
      <AuthButtons
        className={
          "hidden md:visible md:flex flex-row items-center justify-center gap-[1.5rem] "
        }
      />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-[80px] left-0 right-0 bg-primary-bg-light dark:bg-primary-bg-dark bg-opacity-90 paddingX paddingY"
        >
          <ul className="flex flex-col items-center justify-center gap-[1rem] py-[1rem]">
            {navbarItems.map((item, index) => (
              <Link
                to={item.url}
                key={`${index}-${item.id}-${item.label}`}
                onClick={toggleMobileMenu}
              >
                <li className="text-lg text-text-primary-light dark:text-text-primary-dark hover:text-black dark:hover:text-white">
                  {item.label}
                </li>
              </Link>
            ))}
            {/* Mobile Auth Buttons */}
            <AuthButtons 
                    className={"gap-[1rem] md:visible my-4 flex flex-col items-center w-full"}
                    btnClassName={"w-full h-[3.4rem] md:h-[3rem]"} 
                />
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
