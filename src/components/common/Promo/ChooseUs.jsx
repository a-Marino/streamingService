import { ButtonWhite } from "../Button";

const Card = ({ number, text }) => {
  return (
    <div className="flex">
      <div className="z-[20] rounded-lg bg-mainGreen px-5 py-3 font-bold text-lightGray">
        {number}
      </div>
      <div className="z-[10] -ml-4 flex w-[65%] items-center rounded-lg bg-lightGray py-3 pl-7 text-sm text-mainGreen">
        {text}
      </div>
    </div>
  );
};

export const ChooseUs = () => {
  return (
    <div className="mt-5 flex w-full flex-col py-8 lg:w-[50%]">
      <div className="mb-5">
        <h3 className="mb-2 text-xl">Why choose us</h3>
        <p className="mb-5 text-sm text-neutral-50/70">
          It&apos;s hard to argue with our adventages
        </p>
        <div className="flex w-full flex-col gap-2">
          <Card number="9,2k" text="Films on the set" />
          <Card number="1,2M" text="Users registered" />
          <Card number="10M" text="Views each month" />
        </div>
      </div>
      <h3 className="mb-2 mt-3 text-xl font-[500]">Start diving now</h3>
      <p className="mb-5 text-sm text-neutral-50/70">
        We garantee a comfortable mobile viewing experience and an unforgettable
        cinematic experience
      </p>
      <div className="w-[40%] ">
        <ButtonWhite>START NOW</ButtonWhite>
      </div>
    </div>
  );
};
