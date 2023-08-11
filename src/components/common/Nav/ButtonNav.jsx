export const ButtonNav = ({ children }) => {
  return (
    <button className="group flex items-start space-x-5 rounded-full px-5 py-2 hover:bg-lightGray">
      {children}
    </button>
  );
};
