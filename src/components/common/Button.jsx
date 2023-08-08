export const ButtonWhite = ({ children }) => {
  return (
    <button className="text-[0.6rem] md:text-sm font-semibold bg-neutral-50 text-black rounded-full py-1 px-8 w-full border-2 border-neutral-50 hover:bg-transparent hover:text-neutral-50 transition-colors duration-100 ease-in-out">
      {children}
    </button>
  );
};

export const ButtonGreen = ({ children }) => {
  return (
    <button className="text-[0.6rem] md:text-sm font-semibold bg-mainGreen text-neutral-50 rounded-full py-1 px-8 w-full border-2 border-mainGreen hover:bg-transparent hover:text-mainGreen transition-colors duration-100 ease-in-out">
      {children}
    </button>
  );
};
