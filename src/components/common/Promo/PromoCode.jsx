import { CopyIcon } from "../Icons/Icons";

export const PromoCode = () => {
  return (
    <div className="mt-16 flex flex-col lg:flex-row gap-2">
      <div className="bg-mainGreen flex flex-col justify-center items-center rounded-xl p-4 lg:p-3 lg:w-[60%]">
        <p className="text-xs lg:text-sm text-neutral-50/80">
          Hurry up and pick up your -20% discount
        </p>
        <h3 className="text-4xl lg:text-5xl font-[500]">BONUS CODE</h3>
        <div className="bg-black w-full p-1 text-mainGreen rounded-lg mt-5 text-lg flex justify-center items-center relative">
          FS2SAB5Q1
          <button
            onClick={() => {
              navigator.clipboard.writeText("FS2SAB5Q1");
            }}
            className="absolute bg-lightGray hover:bg-neutral-800 transition-colors rounded-lg  top-[2px] right-[2px] p-2"
          >
            <CopyIcon />
          </button>
        </div>
      </div>
      <div className="bg-mainGreen flex flex-col justify-center items-center rounded-xl p-4 lg:px-10">
        <p className="text-xl font-semibold mb-3 lg:self-start">
          The perfect chance to try a paid subscription at a hot discount
        </p>
        <div className="flex flex-col items-center lg:flex-row lg:gap-5">
          <p className="text-xs text-neutral-50/70 lg:w-full">
            We are pleased to inform you about our exclusive temporary discount, wich is available
            for a limited time only! This is a unique oportunity for you to save money when
            purchasing or products or services.
          </p>
          <div className="flex gap-2 mt-4 [&_span]:bg-[#068f3d] [&_span]:text-5xl lg:[&_span]:text-4xl [&_span]:font-semibold [&_span]:rounded-lg [&_span]:py-1 [&_span]:px-3 lg:w-[55%] lg:mt-0">
            <span className="text-[#73c293]">0</span>
            <span>2</span>
            <p className="text-5xl lg:text-4xl font-semibold">:</p>
            <span>3</span>
            <span>8</span>
          </div>
        </div>
      </div>
    </div>
  );
};
