import { useState } from "react";
import { MenuIcon, CloseIcon } from "../../common/Icons/Icons";
import { FooterCopyright, FooterLogoLang } from "../Footer/Footer";
import { NavMenu } from "../../common/Nav/NavMenu";
import { ProfileBox } from "../../common/Nav/ProfileBox";

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
    <>
      <header>
        <nav className="flex flex-row justify-between items-center px-5 py-10 md:py-5 bg-transparent">
          <span className="text-mainGreen font-bold text-xl">LOGO</span>
          <div className="hidden md:flex flex-row space-x-5 [&>*]:text-sm items-center [&>*]:cursor-pointer">
            {menuItems.map((item) => {
              return (
                <span className="hover:scale-110 transition duration-200" key={item}>
                  {item}
                </span>
              );
            })}
            <button>
              <span className="bg-neutral-50 px-8 py-1 text-black font-semibold rounded-full hover:bg-black hover:text-neutral-50 border-2 border-neutral-50 transition-colors duration-150 ease-in-out">
                LOG IN
              </span>
            </button>
          </div>
          <button
            onClick={toggleNagvar}
            className="md:hidden bg-neutral-50 active:bg-neutral-200 transition-colors duration-100 p-2 rounded-full"
          >
            {!isOpen ? <MenuIcon /> : <CloseIcon />}
          </button>
        </nav>
      </header>
      {isOpen && (
        <div className="min-h-screen flex flex-col items-center px-5">
          {/* Profile box */}
          <ProfileBox />
          {/* MENU */}
          <NavMenu />
          {/* Nav Footer */}
          <div className="flex flex-col w-full">
            <FooterLogoLang />
            <FooterCopyright />
          </div>
        </div>
      )}
    </>
  );
};
