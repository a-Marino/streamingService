import { ButtonNav } from "./ButtonNav";
import {
  AboutIcon,
  CinemaIcon,
  HomeIcon,
  SeriesIcon,
  TvIcon,
  LogOutIcon,
} from "../Icons/Icons";

export const NavMenu = () => {
  return (
    <div className="my-5 flex w-full flex-col space-y-3 border-y-2 border-lightGray py-3">
      <ButtonNav>
        <HomeIcon className={"fill-neutral-50 group-hover:fill-mainGreen"} />
        <span>Home</span>
      </ButtonNav>
      {/*  */}
      <ButtonNav>
        <CinemaIcon className={"fill-neutral-50 group-hover:fill-mainGreen"} />
        <span>Cinema</span>
      </ButtonNav>
      <ButtonNav>
        <SeriesIcon className={"fill-neutral-50 group-hover:fill-mainGreen"} />
        <span>Series</span>
      </ButtonNav>
      <ButtonNav>
        <TvIcon className={"fill-neutral-50 group-hover:fill-mainGreen"} />
        <span>TV Shows</span>
      </ButtonNav>
      <ButtonNav>
        <AboutIcon className={"fill-neutral-50 group-hover:fill-mainGreen"} />
        <span>About</span>
      </ButtonNav>
      <ButtonNav>
        <LogOutIcon className={"fill-neutral-50 group-hover:fill-mainGreen"} />
        <span>Log out</span>
      </ButtonNav>
    </div>
  );
};
