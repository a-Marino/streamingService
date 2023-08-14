import { InfoCards } from "../common/Promo/InfoCards";
import { Intro } from "../common/Promo/Intro";
import { Plans } from "../common/Promo/Plans";
import { PromoCode } from "../common/Promo/PromoCode";
import { ChooseUs } from "../common/Promo/ChooseUs";
import { MobileApp } from "../common/Promo/MobileApp";
import { Brands } from "../common/Promo/Brands";
import { Accordion } from "../common/Promo/Accordion";

export const Promo = () => {
  return (
    <div className="overflow-x-hidden p-5 md:px-10">
      <Intro />
      <Plans />
      <InfoCards />
      <PromoCode />
      <ChooseUs />
      <MobileApp />
      <Brands />
      <Accordion />
    </div>
  );
};
