export const SliderMovies = () => {
  return (
    <div className="flex flex-row space-x-3 w-screen md:justify-center">
      {/* MAIN MOVIE */}
      <div className="h-60 md:h-96 w-36 md:w-64 rounded-2xl relative">
        <img
          src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1691513151/Streaming%20Service/JokerPoster_fohrlf.webp"
          alt="Poster of the Joker Movie"
          className="object-cover h-60 md:h-96 rounded-2xl"
        />
        <div className="absolute top-0 rounded-2xl h-full w-full bg-neutral-900/70 flex flex-col justify-end md:space-y-2">
          <div className="flex px-2">
            <span className="text-sm md:text-lg font-semibold">Joker</span>
          </div>
          <p className="text-xs text-neutral-300 px-2 md:px-0 md:pl-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex space-x-1 mt-2 overflow-hidden font-semibold pb-3 pl-2">
            <span className="text-[0.5rem] md:text-xs text-black bg-white  px-2 md:py-1 md:px-4 rounded-full">
              Crime
            </span>
            <span className="text-[0.5rem] md:text-xs text-black bg-white  px-2 md:py-1 md:px-4 rounded-full">
              Thriller
            </span>
            <span className="text-[0.5rem] md:text-xs text-black bg-white  px-2 md:py-1 md:px-4 rounded-full">
              Drama
            </span>
          </div>
        </div>
      </div>
      {/* /OTHER MOVIES/ */}
      <div className="h-60 md:h-96 w-20 md:w-32 rounded-2xl relative md:order-first md:pr-2">
        <img
          src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1691514608/Streaming%20Service/4975722_zvbwnv.webp"
          alt="Poster of a Movie"
          className="object-cover h-60 md:h-96 rounded-2xl opacity-60"
        />
      </div>
      <div className="h-60 md:h-96 w-20 md:w-32 rounded-2xl relative">
        <img
          src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1691514850/Streaming%20Service/71Ws7SxbmKL_mutnto.webp"
          alt="Poster of Dunkirk"
          className="object-cover h-60 md:h-96 rounded-2xl opacity-60"
        />
      </div>
      <div className="h-60 md:h-96 w-20 md:w-32 rounded-2xl relative">
        <img
          src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1691514975/Streaming%20Service/The_Last_of_Us_serie_poster_xyapkn.webp"
          alt="Poster of The Last of Us"
          className="object-cover h-60 md:h-96 rounded-2xl opacity-60"
        />
      </div>
    </div>
  );
};
