import {
  AppStoreIcon,
  FlixTVLogoSm,
  PlayStoreIcon,
  StarIcon,
} from "../Icons/Icons";

export const MobileApp = () => {
  return (
    <div className="mt-5 flex w-full flex-col rounded-lg bg-mainGreen px-3 py-4 lg:py-10">
      <div className="lg:w-[50%]">
        <h3 className="text-[2.9rem] font-bold text-[#00a040] lg:text-6xl ">
          MOBILE APP
        </h3>
        <h4 className="text-2xl font-semibold ">FLIXTV Always with You</h4>
        <p className="mt-3 text-sm text-neutral-50/70">
          We have great news for you! You can now improve your experience on our
          website by dowloading our mobile app to your smartphone. We developed
          this app specifically for the convenience of our costumers so that you
          can access our products/services directly from your mobile device.
        </p>
        <p className="mt-5 text-sm text-neutral-50/70">
          Thenk you for your interest in our site, and we hope you&apos;ll be
          able to appreciate all the benefits of our mobile app.
        </p>
      </div>
      <div className="mt-10 flex gap-20">
        <PlayStoreIcon />
        <AppStoreIcon />
        <div className="hidden lg:flex">
          <div className="z-[20] flex items-center justify-center rounded-lg bg-lightGray px-2 shadow-inner">
            <FlixTVLogoSm />
          </div>
          <div className=" z-[10] -ml-3 flex  items-center justify-center  rounded-lg bg-[#0a9c45] px-10 text-sm font-semibold">
            <span className="mr-2">FLIXTV</span>
            <StarIcon />
            <span className="ml-1">4,7</span>
          </div>
        </div>
      </div>
    </div>
  );
};
