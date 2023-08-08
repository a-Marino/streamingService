import { Intro } from "../common/Promo/Intro";
import { Plans } from "../common/Promo/Plans";

export const Promo = () => {
  return (
    <div className="p-5 md:px-10 overflow-x-hidden">
      <Intro />
      <Plans />
    </div>
  );
};
