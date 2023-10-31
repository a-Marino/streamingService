export const ButtonWhite = ({ children }) => {
  return (
    <button className="w-full rounded-full border-2 border-neutral-50 bg-neutral-50 px-8 py-1 text-[0.6rem] font-semibold text-black transition-colors duration-100 ease-in-out hover:bg-transparent hover:text-neutral-50 md:text-sm">
      {children}
    </button>
  );
};

export const ButtonGreen = ({ children }) => {
  return (
    <button className="w-full rounded-full border-2 border-mainGreen bg-mainGreen px-8 py-1 text-[0.6rem] font-semibold text-neutral-50 transition-colors duration-100 ease-in-out hover:bg-transparent hover:text-mainGreen md:text-sm">
      {children}
    </button>
  );
};

export const ButtonGreenSquare = ({ children }) => {
  return (
    <button className="w-full rounded-md border-2 border-mainGreen bg-mainGreen px-8 py-1 text-[0.6rem] font-semibold text-neutral-50 transition-colors duration-100 ease-in-out hover:bg-transparent hover:text-mainGreen md:text-sm">
      {children}
    </button>
  );
};
