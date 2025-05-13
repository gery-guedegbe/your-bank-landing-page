import { ourBenefitItems } from "@/constants/careers";
import Image from "next/image";

function OurBenefitSection() {
  return (
    <section className="flex w-full flex-col items-start justify-between gap-12 lg:gap-16">
      <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
        <h2 className="text-[28px] font-medium text-white md:text-[38px] xl:text-[48px]">
          Our <span className="text-custom-green-60">Benefits</span>
        </h2>

        <p className="text-custom-grey-70 mt-2 text-sm font-light md:text-base lg:mt-3 lg:text-lg">
          At YourBank, we value our employees and are dedicated to their
          well-being and success. We offer a comprehensive range of benefits
          designed to support their personal and professional growth.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
        {ourBenefitItems.map((card) => (
          <div
            key={card.id}
            className="border-custom-grey-15 bg-custom-grey-10 flex flex-col items-start gap-4 rounded-3xl border-[1px] p-6 lg:gap-6 lg:p-8"
          >
            <div className="flex items-center gap-3 lg:gap-4">
              <Image
                src={card.icon}
                alt="Icon"
                className="h-auto w-[72px] object-cover md:w-[76px] lg:w-[98px]"
              />

              <h3 className="text-lg leading-[150%] text-white md:text-[20px] lg:text-[24px]">
                {card.title}
              </h3>
            </div>

            <p className="text-custom-grey-70 text-sm leading-[150%] md:text-base lg:text-lg">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurBenefitSection;
