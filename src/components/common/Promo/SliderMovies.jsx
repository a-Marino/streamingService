import { ChipWhite } from "../Chip";

export const SliderMovies = () => {
  return (
    <div className="flex w-screen flex-row space-x-3 md:justify-center">
      {/* MAIN MOVIE */}
      <div className="relative h-60 w-36 rounded-2xl shadow-md md:h-96 md:w-64">
        <img
          src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1691513151/Streaming%20Service/JokerPoster_fohrlf.webp"
          alt="Poster of the Joker Movie"
          className="h-60 rounded-2xl object-cover md:h-96"
        />
        <div className="absolute top-0 flex h-full w-full flex-col justify-end rounded-2xl bg-neutral-900/70 md:space-y-2">
          <div className="flex px-2">
            <span className="text-sm font-semibold md:text-lg">Joker</span>
          </div>
          <p className="px-2 text-xs text-neutral-300 md:px-0 md:pl-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="mt-2 flex space-x-1 overflow-hidden pb-3 pl-2 font-semibold">
            <ChipWhite className="rounded-full bg-white px-2 text-[0.5rem]  text-black md:px-4 md:py-1 md:text-xs">
              Crime
            </ChipWhite>
            <ChipWhite className="rounded-full bg-white px-2 text-[0.5rem]  text-black md:px-4 md:py-1 md:text-xs">
              Thriller
            </ChipWhite>
            <ChipWhite className="rounded-full bg-white px-2 text-[0.5rem]  text-black md:px-4 md:py-1 md:text-xs">
              Drama
            </ChipWhite>
          </div>
        </div>
      </div>
      {/* /OTHER MOVIES/ */}
      <div className="relative h-60 w-20 rounded-2xl shadow-md md:h-96 md:w-32 md:pr-2 lg:order-first">
        <img
          src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1691514608/Streaming%20Service/4975722_zvbwnv.webp"
          alt="Poster of a Movie"
          className="h-60 rounded-2xl object-cover opacity-60 md:h-96"
        />
      </div>
      <div className="relative h-60 w-20 rounded-2xl shadow-md md:h-96 md:w-32">
        <img
          src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1691514850/Streaming%20Service/71Ws7SxbmKL_mutnto.webp"
          alt="Poster of Dunkirk"
          className="h-60 rounded-2xl object-cover opacity-60 md:h-96"
        />
      </div>
      <div className="relative h-60 w-20 rounded-2xl shadow-md md:h-96 md:w-32">
        <img
          src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1691514975/Streaming%20Service/The_Last_of_Us_serie_poster_xyapkn.webp"
          alt="Poster of The Last of Us"
          className="h-60 rounded-2xl object-cover opacity-60 md:h-96"
        />
      </div>
    </div>
  );
};
