import { PlayIcon } from "../Icons/Icons";
import { SliderMovies } from "./SliderMovies";
import { ButtonWhite } from "../Button";

export const Intro = () => {
  return (
    <div className="md:min-h-screen flex flex-col md:flex-row md:justify-center md:items-center">
      <SliderMovies />
      <div className="flex flex-col space-y-3 md:space-y-5 py-5 mt-5 md:order-first md:w-[75%]">
        <h1 className="text-xl md:text-2xl">
          Escape
          <span className="border border-neutral-50 rounded-full py-1 px-3 mx-2 relative -top-3">
            reality
          </span>
          with our exclusive <span className="text-mainGreen font-semibold">movie collection</span>
        </h1>
        <p className="text-xs md:text-sm text-neutral-400">
          Watch full seasons of exclusively streaming series, current-season episodes, hit movies,
          TV Shows, kids shows, and more.
        </p>
        <div className="flex space-x-2 w-[80%]">
          <ButtonWhite>START NOW</ButtonWhite>
          <button className="w-full border border-mainGreen py-1 px-4 rounded-full flex justify-center items-center">
            <PlayIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
