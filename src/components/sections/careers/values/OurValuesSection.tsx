import { ourValuesItems } from "@/constants/careers";

function OurValuesSection() {
  return (
    <section className="flex w-full flex-col items-start justify-between gap-12 lg:gap-16">
      <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
        <h2 className="text-[28px] font-medium text-white md:text-[38px] xl:text-[48px]">
          Our <span className="text-custom-green-60">Values</span>
        </h2>

        <p className="text-custom-grey-70 mt-2 text-sm font-light md:text-base lg:mt-3 lg:text-lg">
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        {ourValuesItems.map((item) => (
          <div
            key={item.id}
            className="border-l-custom-green-60 hover:bg-custom-green-05 flex min-h-[200px] flex-col items-start justify-between gap-3 border-l-4 p-4 text-start transition-colors duration-200 lg:min-h-[250px] lg:gap-4 lg:p-6"
          >
            <h3 className="text-custom-grey-30 text-[24px] leading-[130%] font-medium md:text-[32px] lg:text-[40px]">
              {item.title}
            </h3>

            <p className="text-custom-grey-70 text-sm leading-[160%] font-light md:text-base lg:text-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurValuesSection;
