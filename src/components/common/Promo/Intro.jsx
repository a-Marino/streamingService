import { PlayIcon } from "../Icons/Icons";
import { SliderMovies } from "./SliderMovies";
import { ButtonWhite } from "../Button";

export const Intro = () => {
  return (
    <div className="flex flex-col md:mt-10 md:min-h-screen md:items-center md:justify-center lg:mt-0 lg:flex-row">
      <SliderMovies />
      <div className="mt-5 flex flex-col space-y-3 py-5 md:w-[75%] md:space-y-5 lg:order-first">
        <h1 className="text-xl md:text-2xl">
          Escape
          <span className="relative -top-3 mx-2 rounded-full border border-neutral-50 px-3 py-1">
            reality
          </span>
          with our exclusive{" "}
          <span className="font-semibold text-mainGreen">movie collection</span>
        </h1>
        <p className="text-xs text-neutral-400 md:text-sm">
          Watch full seasons of exclusively streaming series, current-season
          episodes, hit movies, TV Shows, kids shows, and more.
        </p>
        <div className="flex w-[80%] space-x-2">
          <ButtonWhite>START NOW</ButtonWhite>
          <button className="flex w-full items-center justify-center rounded-full border border-mainGreen px-4 py-1">
            <PlayIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
