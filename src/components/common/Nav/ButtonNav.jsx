export const ButtonNav = ({ children }) => {
  return (
    <button className="hover:bg-lightGray rounded-full py-2 px-5 flex items-start space-x-5 group">
      {children}
    </button>
  );
};
