export const ChipWhite = ({ children }) => {
  return (
    <span className="rounded-full bg-white px-2 text-[0.5rem]  text-black md:px-4 md:py-1 md:text-xs">
      {children}
    </span>
  );
};

export const ChipBlack = ({ children }) => {
  return (
    <span className="rounded-full bg-black px-2 text-[0.8rem]  text-white md:px-4 md:py-1 md:text-xs">
      {children}
    </span>
  );
};
