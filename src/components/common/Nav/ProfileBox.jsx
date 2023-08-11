export const ProfileBox = () => {
  return (
    <div className="flex w-[100%] space-x-2 rounded-lg bg-lightGray p-3">
      {/* Profile IMG */}
      <div className="flex w-16 items-center justify-center rounded-lg bg-yellow-200 text-2xl font-semibold text-black">
        A
      </div>
      <div className="flex flex-col">
        <span className="text-sm">Andres Marino</span>
        <span className="text-xs">andresmarinolaiolo@hotmail.com</span>
        <span className="mt-2 w-24 rounded-full border border-white text-center text-sm">
          BASIC
        </span>
      </div>
    </div>
  );
};
