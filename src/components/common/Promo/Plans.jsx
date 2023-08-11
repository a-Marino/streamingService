import { TickList } from "./TickList";
import { ButtonGreen, ButtonWhite } from "../Button";

const Basic = () => {
  return (
    <div className="flex flex-col space-y-2 rounded-xl bg-neutral-50 p-3 text-black md:w-[60%] md:p-8">
      <div className="flex flex-col space-y-2 border-b border-neutral-500/50 pb-2 md:pb-5">
        <span className="flex w-[45%] items-center justify-center rounded-full border border-black font-bold">
          BASIC
        </span>
        <p className="font-semibold">A great choice for dating</p>
      </div>
      <ul className="space-y-1 border-b border-neutral-500/50 pb-3 pt-1 text-sm md:space-y-5 md:pb-6 md:pt-3">
        <TickList>
          Access to <span className="font-semibold">movies</span> and series
        </TickList>
        <TickList>
          Create up to <span className="font-semibold">3 accounts</span>
        </TickList>
        <TickList>Watch content in your own language</TickList>
        <TickList>
          Video quality <span className="font-semibold">1080p</span>
        </TickList>
        <TickList>
          Up to <span className="font-semibold">2 accounts online</span> at the
          sime time
        </TickList>
      </ul>
      <div className="flex md:py-8">
        <div className="w-[150%] md:w-[200%]">
          <span className="text-xl font-bold">9.99$</span> / Month
        </div>
        <ButtonGreen>START NOW</ButtonGreen>
      </div>
    </div>
  );
};

const Platinum = () => {
  return (
    <div className="flex flex-col space-y-2 rounded-xl bg-mainGreen p-3 text-neutral-50 md:w-full md:p-8">
      <div className="flex flex-col space-y-2 border-b border-neutral-100/50 pb-2 md:pb-5">
        <span className="flex w-[50%] items-center justify-center rounded-full border border-neutral-50 font-bold md:w-[30%]">
          PLATINUM
        </span>
        <p className="font-semibold">
          The most popular and profitable subscription
        </p>
      </div>
      <div className="border-neutral-100/50 md:flex md:space-x-10 md:border-b md:pb-3 md:pt-3">
        <ul className="space-y-1 pt-1 text-sm md:space-y-5 ">
          <TickList>
            Access to <span className="font-semibold">movies</span> and series
          </TickList>
          <TickList>
            Access to <span className="font-semibold">TV Shows</span>
          </TickList>
          <TickList>
            Create up to <span className="font-semibold">5 accounts</span>
          </TickList>
          <TickList>Watch content in your own language</TickList>
          <TickList>
            Video quality <span className="font-semibold">Ultra HD 4k</span>
          </TickList>
        </ul>
        <ul className="space-y-1 border-b border-neutral-100/50 pb-3 pt-2 text-sm md:space-y-5 md:border-0 md:pt-0">
          <TickList>
            Up to <span className="font-semibold">5 accounts online</span> at
            the sime time
          </TickList>
          <TickList>
            Cumulative <span className="font-semibold">bonuses</span> every
            month
          </TickList>
          <TickList>
            Cumulative <span className="font-semibold">bonuses</span> every
            month
          </TickList>
          <TickList>
            Cumulative <span className="font-semibold">bonuses</span> every
            month
          </TickList>
          <TickList>
            Cumulative <span className="font-semibold">bonuses</span> every
            month
          </TickList>
        </ul>
      </div>
      <div className="flex md:py-8">
        <div className="w-[150%] md:w-[300%]">
          <span className="text-xl font-bold">19.99$</span> / Month
        </div>
        <ButtonWhite>START NOW</ButtonWhite>
      </div>
    </div>
  );
};

export const Plans = () => {
  return (
    <div className="mt-10 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 lg:mt-0">
      <Basic />
      <Platinum />
    </div>
  );
};
