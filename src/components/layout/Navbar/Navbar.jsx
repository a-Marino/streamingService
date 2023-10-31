import { useState } from "react";
import {
  MenuIcon,
  CloseIcon,
  FlixTVLogo,
  FlixTVLogoSm,
} from "../../common/Icons/Icons";
import { FooterCopyright, FooterLogoLang } from "../Footer/Footer";
import { NavMenu } from "../../common/Nav/NavMenu";
import { ProfileBox } from "../../common/Nav/ProfileBox";
import { ButtonWhite } from "../../common/Button";
import classNames from "classnames";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNagvar = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const menuItems = ["Home", "Series", "Cinema", "TV Shows", "News"];

  return (
    <header
      className={classNames(
        "z-[1] w-full md:absolute md:top-0",
        !isOpen ? "" : "fixed bg-bgColor",
      )}
    >
      <div
        className={
          !isOpen ? "w-full" : "flex h-screen flex-col overflow-auto md:h-auto"
        }
      >
        <nav className="flex flex-row items-center justify-between bg-transparent px-5 py-10 md:px-10 md:py-5 ">
          <FlixTVLogo className="hidden md:block" />
          <FlixTVLogoSm className="md:hidden" />
          <div className="hidden flex-row items-center space-x-5 md:flex [&>*]:cursor-pointer [&>*]:text-sm">
            {menuItems.map((item) => {
              return (
                <NavLink
                  className="whitespace-nowrap transition duration-200 hover:scale-110"
                  key={item}
                >
                  {item}
                </NavLink>
              );
            })}
            <ButtonWhite>LOG IN</ButtonWhite>
          </div>
          <button
            onClick={toggleNagvar}
            className="rounded-full bg-neutral-50 p-2 transition-colors duration-100 active:bg-neutral-200 md:hidden"
          >
            {!isOpen ? <MenuIcon /> : <CloseIcon />}
          </button>
        </nav>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="z-[1] flex w-full flex-col items-center bg-bgColor px-5 md:hidden "
          >
            {/* Profile box */}
            <ProfileBox />
            {/* MENU */}
            <NavMenu />
            {/* Nav Footer */}
            <div className="mb-5 flex w-full flex-col ">
              <FooterLogoLang />
              <FooterCopyright />
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};
