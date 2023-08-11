import { CopyIcon } from "../Icons/Icons";

export const PromoCode = () => {
  return (
    <div className="mt-16 flex flex-col gap-2 lg:flex-row">
      <div className="flex flex-col items-center justify-center rounded-xl bg-mainGreen p-4 lg:w-[60%] lg:p-3">
        <p className="text-xs text-neutral-50/80 lg:text-sm">
          Hurry up and pick up your -20% discount
        </p>
        <h3 className="text-4xl font-[500] lg:text-5xl">BONUS CODE</h3>
        <div className="relative mt-5 flex w-full items-center justify-center rounded-lg bg-black p-1 text-lg text-mainGreen">
          FS2SAB5Q1
          <button
            onClick={() => {
              navigator.clipboard.writeText("FS2SAB5Q1");
            }}
            className="absolute right-[2px] top-[2px] rounded-lg bg-lightGray  p-2 transition-colors hover:bg-neutral-800"
          >
            <CopyIcon />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center rounded-xl bg-mainGreen p-4 lg:px-10">
        <p className="mb-3 text-xl font-semibold lg:self-start">
          The perfect chance to try a paid subscription at a hot discount
        </p>
        <div className="flex flex-col items-center lg:flex-row lg:gap-5">
          <p className="text-xs text-neutral-50/70 lg:w-full">
            We are pleased to inform you about our exclusive temporary discount,
            wich is available for a limited time only! This is a unique
            oportunity for you to save money when purchasing or products or
            services.
          </p>
          <div className="mt-4 flex gap-2 lg:mt-0 lg:w-[55%] [&_span]:rounded-lg [&_span]:bg-[#068f3d] [&_span]:px-3 [&_span]:py-1 [&_span]:text-5xl [&_span]:font-semibold lg:[&_span]:text-4xl">
            <span className="text-[#73c293]">0</span>
            <span>2</span>
            <p className="text-5xl font-semibold lg:text-4xl">:</p>
            <span>3</span>
            <span>8</span>
          </div>
        </div>
      </div>
    </div>
  );
};
