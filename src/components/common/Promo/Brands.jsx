import {
  AmazonLogo,
  DiscordLogo,
  NetflixLogo,
  TwitchLogo,
  YoutubeLogo,
} from "../Icons/Icons";

export const Brands = () => {
  return (
    <div className="mt-5 flex w-full flex-col">
      <div className="flex">
        <div className="flex w-full flex-col items-center justify-center rounded-lg bg-mainGreen p-2 text-center text-black ">
          <span className="text-5xl font-semibold">2000</span>
          <p className="text-[0.6rem] font-[500]">BRANDS HAVE CHOSEN US</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center text-3xl font-semibold leading-none">
          <span className="text-neutral-800">BRANDS</span>
          <span className="text-mainGreen">BRANDS</span>
          <span className="text-neutral-800">BRANDS</span>
        </div>
      </div>
      <div className="mt-3 rounded-lg bg-lightGray p-3">
        <p className="text-2xl font-semibold leading-tight">
          We were choosen by the best brands and their customers
        </p>
        <p className="mt-4 text-xs ">
          We are proud to partner with the world&apos;s leading brands! We are
          pleased to offer you a wide range of products from the largest and
          most recognizable brands.
        </p>
      </div>
      <div className="mt-3 flex  flex-wrap gap-3">
        <div className=" flex-1 rounded-lg bg-lightGray p-5">
          <NetflixLogo className="m-auto w-20" />
        </div>
        <div className="flex-1 rounded-lg bg-lightGray p-5">
          <YoutubeLogo className="m-auto  w-20" />
        </div>
        <div className="flex-1 rounded-lg bg-lightGray p-5">
          <DiscordLogo className="m-auto w-20" />
        </div>
        <div className="flex-1 rounded-lg bg-lightGray p-5">
          <AmazonLogo className="m-auto w-20" />
        </div>
        <div className="flex-1 rounded-lg bg-lightGray p-5">
          <TwitchLogo className="m-auto w-20" />
        </div>
        <div className="flex-1 rounded-lg bg-lightGray p-5">
          <NetflixLogo className="m-auto w-20" />
        </div>
      </div>
    </div>
  );
};
