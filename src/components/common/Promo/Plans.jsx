import { TickList } from "./TickList";
import { ButtonGreen, ButtonWhite } from "../Button";

const Basic = () => {
  return (
    <div className="bg-neutral-50 rounded-xl p-3 md:p-8 flex flex-col text-black space-y-2 md:w-[60%]">
      <div className="flex flex-col space-y-2 border-b border-neutral-500/50 pb-2 md:pb-5">
        <span className="font-bold border border-black rounded-full flex items-center justify-center w-[45%]">
          BASIC
        </span>
        <p className="font-semibold">A great choice for dating</p>
      </div>
      <ul className="text-sm space-y-1 md:space-y-5 border-b border-neutral-500/50 pb-3 pt-1 md:pt-3 md:pb-6">
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
          Up to <span className="font-semibold">2 accounts online</span> at the sime time
        </TickList>
      </ul>
      <div className="flex md:py-8">
        <div className="w-[150%] md:w-[200%]">
          <span className="font-bold text-xl">9.99$</span> / Month
        </div>
        <ButtonGreen>START NOW</ButtonGreen>
      </div>
    </div>
  );
};

const Platinum = () => {
  return (
    <div className="bg-mainGreen rounded-xl p-3 md:p-8 flex flex-col text-neutral-50 space-y-2 md:w-full">
      <div className="flex flex-col space-y-2 border-b border-neutral-100/50 pb-2 md:pb-5">
        <span className="font-bold border border-neutral-50 rounded-full flex items-center justify-center w-[50%] md:w-[30%]">
          PLATINUM
        </span>
        <p className="font-semibold">The most popular and profitable subscription</p>
      </div>
      <div className="md:flex md:border-b border-neutral-100/50 md:space-x-10 md:pb-3 md:pt-3">
        <ul className="text-sm space-y-1 md:space-y-5 pt-1 ">
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
        <ul className="text-sm space-y-1 md:space-y-5 md:border-0 border-b border-neutral-100/50 pb-3 pt-2 md:pt-0">
          <TickList>
            Up to <span className="font-semibold">5 accounts online</span> at the sime time
          </TickList>
          <TickList>
            Cumulative <span className="font-semibold">bonuses</span> every month
          </TickList>
          <TickList>
            Cumulative <span className="font-semibold">bonuses</span> every month
          </TickList>
          <TickList>
            Cumulative <span className="font-semibold">bonuses</span> every month
          </TickList>
          <TickList>
            Cumulative <span className="font-semibold">bonuses</span> every month
          </TickList>
        </ul>
      </div>
      <div className="flex md:py-8">
        <div className="w-[150%] md:w-[300%]">
          <span className="font-bold text-xl">19.99$</span> / Month
        </div>
        <ButtonWhite>START NOW</ButtonWhite>
      </div>
    </div>
  );
};

export const Plans = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-10 lg:mt-0">
      <Basic />
      <Platinum />
    </div>
  );
};
