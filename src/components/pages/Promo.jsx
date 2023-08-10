import { InfoCards } from "../common/Promo/InfoCards";
import { Intro } from "../common/Promo/Intro";
import { Plans } from "../common/Promo/Plans";
import { PromoCode } from "../common/Promo/PromoCode";

export const Promo = () => {
  return (
    <div className="p-5 md:px-10 overflow-x-hidden">
      <Intro />
      <Plans />
      <InfoCards />
      <PromoCode />
    </div>
  );
};
