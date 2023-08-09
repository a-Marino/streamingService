import {
  FacebookIcon,
  FlixTVLogo,
  InstagramIcon,
  TikTokIcon,
  UpArrowIcon,
  UsaFlagIcon,
  YoutubeIcon,
} from "../../common/Icons/Icons";

export const FooterLogoLang = () => {
  return (
    <div className="flex items-center space-x-10 ">
      <FlixTVLogo className="w-56" />
      <button className="w-full bg-lightGray md:bg-neutral-800 py-2 rounded-lg flex items-center space-x-10 md:space-x-5 px-3 ">
        <UsaFlagIcon />
        <span className="text-neutral-400 md:text-sm">English</span>
      </button>
    </div>
  );
};

export const FooterCopyright = ({ className }) => {
  return (
    <div className={className}>
      <p className="text-xs text-neutral-500 mt-5 md:mt-0">
        2023 - All rights reserved, any copying of materials is prohibited.
      </p>
      <div className="flex space-x-10 mt-5 md:mt-0 text-neutral-300">
        <span className="text-xs">Offer Agreement</span>
        <span className="text-xs">User Agreement</span>
      </div>
    </div>
  );
};

export const FooterNews = () => {
  return (
    <div className="flex space-x-2 md:space-x-3">
      <div className="flex flex-col bg-mainGreen w-full rounded-xl p-3 text-black">
        <span className="font-bold text-sm">Recive News</span>
        <p className="mt-2 text-xs">
          All service news, as well as anouncments of discounts in one click
        </p>
        <div className="relative">
          <input
            type="email"
            className="bg-transparent border border-black rounded-full mt-5 placeholder:text-xs placeholder:text-black placeholder:pl-2 md:w-full pl-2"
            placeholder="Email"
          />
          <button className="absolute bg-black text-white text-xs px-7 md:px-14 py-1 border border-black rounded-full bottom-0 right-0 md:hover:scale-105 transition duration-200">
            Send
          </button>
        </div>
      </div>
      <div className="flex flex-col w-[25%] md:w-[20%] border border-neutral-600 rounded-xl p-2 items-center justify-center hover:bg-neutral-600 transition-colors duration-150 ease-in-out [&>*]:hover:text-black [&>*]:hover:fill-black cursor-pointer">
        <span className="text-neutral-600 text-sm font-semibold">UP</span>
        <UpArrowIcon className={"fill-neutral-500 justify-self-end"} />
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="mb-5 md:bg-lightGray md:px-2 md:py-8 md:mx-5 md:rounded-xl">
      <div className="flex flex-col md:flex-row md:space-x-24 mx-5 space-y-5 mb-5 border-b border-neutral-800 pb-5">
        <div className="md:flex flex-col">
          <FooterLogoLang />
          <div className="flex flex-col mt-4">
            <span className="text-sm">+42 542 812 32</span>
            <span className="text-sm text-mainGreen">FLIXTV.COMERC@FLIX.TV</span>
          </div>
          {/* SOCIAL MEDIA */}
          <div className="flex space-x-3 mt-10 mb-3 md:mb-0">
            <YoutubeIcon />
            <InstagramIcon />
            <TikTokIcon />
            <FacebookIcon />
          </div>
        </div>
        {/* MENU NAV */}
        <div className="flex space-x-3 md:w-[40%]">
          <div className="flex flex-col space-y-3 [&>*]:text-sm w-full">
            <span>Home</span>
            <span>Series</span>
            <span>Cinema</span>
            <span>TV Shows</span>
            <span>About</span>
          </div>
          <div className="flex flex-col space-y-3 w-full  [&>*]:text-sm">
            <span>Library</span>
            <span>Subscribe</span>
            <span>Support</span>
            <span>Vacancies</span>
            <span>Team</span>
          </div>
        </div>
        {/* NEWS */}
        <FooterNews />
      </div>
      <FooterCopyright className="px-5 md:flex justify-between" />
    </footer>
  );
};
