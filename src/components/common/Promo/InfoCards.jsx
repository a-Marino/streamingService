import classNames from "classnames";

const Card = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "flex h-[12rem] flex-col justify-center gap-3 rounded-2xl bg-lightGray p-5 lg:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const InfoCards = () => {
  return (
    <div className="mt-16  flex flex-col gap-3 lg:mt-10 [&_h3]:text-xl [&_h3]:font-semibold [&_p]:text-xs [&_p]:text-neutral-50/75">
      <div className="flex flex-col gap-3 lg:flex-row">
        <Card className="lg:w-[50%]">
          <h3>Lots of content</h3>
        </Card>
        <Card className="bg-mainGreen lg:order-first lg:w-[50%]">
          <h3>Amenities</h3>
          <p>We make your satisfaction and comfort a priority.</p>
          <p>
            You won&apos;t have to spend a lot of time seraching for the
            information or products you want. We&apos;ve created an intuitive
            site structure and improved search functionality so you can quickli
            find what your looking for.
          </p>
        </Card>
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
        <Card className="lg:w-[50%]">
          <h3>Best price</h3>
        </Card>
        <Card className="lg:w-[50%]">
          <h3>Accesibility</h3>
        </Card>
      </div>
    </div>
  );
};
