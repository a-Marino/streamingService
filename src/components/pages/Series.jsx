import { ButtonGreenSquare } from "../common/Button";
import { ChipBlack } from "../common/Chip";

export const Series = () => {
  return (
    <div className="flex flex-col overflow-x-hidden p-5 md:px-10">
      {/* Last Watched */}
      <div className="flex flex-col gap-3 md:mt-20 md:flex-row">
        <div className="relative flex rounded-2xl md:w-[70%] md:rounded-xl md:bg-mainGreen ">
          <img
            src="https://vod.roams.es/images/post/es_ES_vod/series-the-last-of-us.webp"
            alt="The Last of Us Poster"
            className="rounded-2xl opacity-75 md:rounded-xl"
          />
          <div className="absolute bottom-0 hidden gap-3 p-5 md:flex">
            <img
              src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1698790707/Daco_376276_cbhyyc.png"
              alt="TLOU Logo"
              className="w-56"
            />
            <div className="flex items-center justify-center rounded-lg bg-mainGreen px-5 text-xs">
              FTV <span className="ml-2 text-sm font-bold">4.3</span>
            </div>
          </div>
        </div>
        {/* Info */}
        <div className="rounded-2xl bg-white px-3 py-5 text-black md:w-[30%] md:rounded-xl">
          <div className="flex border-b border-neutral-300">
            <h2 className="text-2xl font-medium md:text-xl md:font-semibold">
              The Last of Us
            </h2>
          </div>
          {/* Description */}
          <div className="mt-3">
            <span className="font-semibold">Description</span>
            <p className="mt-1 md:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              quas quae possimus eius aperiam, consequuntur doloremque optio
              deserunt illum sapiente! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quidem, beatae!
            </p>
          </div>
          {/* Genres */}
          <div className="mt-2">
            <span className="font-semibold">Genre</span>
            <div className="mt-1 flex flex-wrap gap-1">
              <ChipBlack>Apocalypse</ChipBlack>
              <ChipBlack>Thriller</ChipBlack>
              <ChipBlack>Drama</ChipBlack>
              <ChipBlack>Drama</ChipBlack>
              <ChipBlack>Thriller</ChipBlack>
            </div>
          </div>
          {/* Dubbing */}
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Dubbing</span>
              <span className="rounded-lg border border-mainGreen px-2 font-semibold text-mainGreen md:text-sm">
                21 More
              </span>
            </div>
            <p className="mt-2 md:text-sm">
              English, Spanish, German, Japanese, Chinese, Ukranian, Kazahistan
            </p>
          </div>
          <div className="mt-5 flex">
            <div className="w-[70%]">
              <ButtonGreenSquare>VIEW</ButtonGreenSquare>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
