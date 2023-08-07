export const ProfileBox = () => {
  return (
    <div className="flex space-x-2 bg-lightGray p-3 rounded-lg w-[100%]">
      {/* Profile IMG */}
      <div className="bg-yellow-200 flex justify-center w-16 items-center rounded-lg text-black font-semibold text-2xl">
        A
      </div>
      <div className="flex flex-col">
        <span className="text-sm">Andres Marino</span>
        <span className="text-xs">andresmarinolaiolo@hotmail.com</span>
        <span className="text-sm border border-white rounded-full text-center w-24 mt-2">
          BASIC
        </span>
      </div>
    </div>
  );
};
