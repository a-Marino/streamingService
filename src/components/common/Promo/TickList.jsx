import { TickIcon } from "../Icons/Icons";

export const TickList = ({ children }) => {
  return (
    <li className="flex space-x-2">
      <div className="bg-white rounded-full h-full">
        <TickIcon />
      </div>
      <p>{children}</p>
    </li>
  );
};
