import { useState } from "react";
import { MenuIcon, CloseIcon, FlixTVLogo, FlixTVLogoSm } from "../../common/Icons/Icons";
import { FooterCopyright, FooterLogoLang } from "../Footer/Footer";
import { NavMenu } from "../../common/Nav/NavMenu";
import { ProfileBox } from "../../common/Nav/ProfileBox";
import { ButtonWhite } from "../../common/Button";
import classNames from "classnames";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNagvar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ["Home", "Series", "Cinema", "TV Shows", "News"];

  return (
    <header
      className={classNames("z-[1] md:absolute md:top-0 w-full", !isOpen ? "" : "fixed bg-bgColor")}
    >
      <div className={!isOpen ? "" : "flex flex-col h-screen md:h-auto overflow-auto"}>
        <nav className="flex flex-row justify-between items-center px-5 md:px-10 py-10 md:py-5 bg-transparent ">
          <FlixTVLogo className="hidden md:block" />
          <FlixTVLogoSm className="md:hidden" />
          <div className="hidden md:flex flex-row space-x-5 [&>*]:text-sm items-center [&>*]:cursor-pointer">
            {menuItems.map((item) => {
              return (
                <span
                  className="hover:scale-110 transition duration-200 whitespace-nowrap"
                  key={item}
                >
                  {item}
                </span>
              );
            })}
            <ButtonWhite>LOG IN</ButtonWhite>
          </div>
          <button
            onClick={toggleNagvar}
            className="md:hidden bg-neutral-50 active:bg-neutral-200 transition-colors duration-100 p-2 rounded-full"
          >
            {!isOpen ? <MenuIcon /> : <CloseIcon />}
          </button>
        </nav>
        {isOpen && (
          <div className="w-full bg-bgColor z-[1] flex flex-col items-center px-5 md:hidden ">
            {/* Profile box */}
            <ProfileBox />
            {/* MENU */}
            <NavMenu />
            {/* Nav Footer */}
            <div className="flex flex-col w-full mb-5 ">
              <FooterLogoLang />
              <FooterCopyright />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
