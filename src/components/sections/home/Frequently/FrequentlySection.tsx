"use client";

import { frequentlySectionItems } from "@/constants/home";

import bottom_linear from "@assets/images/bottom-linear.png";
import Image from "next/image";

function FrequentlySection() {
  return (
    <section className="flex w-full flex-col items-start justify-between gap-12 lg:gap-16">
      <div className="flex w-full flex-col items-center text-center lg:max-w-[60%] lg:items-start lg:text-left">
        <h2 className="text-custom-green-60 text-[28px] font-medium md:text-[38px] xl:text-[48px]">
          Frequently <span className="text-white">Asked Questions</span>
        </h2>

        <p className="text-custom-grey-70 mt-2 text-sm font-light md:text-base lg:mt-3 lg:text-lg">
          Still you have any questions? Contact our Team via
          support@yourbank.com
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
        {frequentlySectionItems.map((card, index) => (
          <div
            key={card.id}
            className="border-custom-grey-15 relative flex flex-col items-start gap-4 rounded-xl border-[1px] p-4 lg:gap-6 lg:p-8"
          >
            <h3 className="text-lg leading-[150%] text-white lg:text-[20px]">
              {card.title}
            </h3>

            <div className="bg-custom-grey-70 h-[0.3px] w-full"></div>

            <p className="text-custom-grey-70 mt-2 text-sm font-light md:text-base lg:text-lg">
              {card.desc}
            </p>

            {(index === 2 || index === 3) && (
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={bottom_linear}
                  alt="Dégradé inférieur décoratif"
                  className="h-full w-full object-cover"
                  priority={index === 2}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex w-full items-center justify-center">
        <button className="bg-custom-grey-11 hover:bg-custom-grey-11/70 border-custom-grey-15 mt-3 flex cursor-pointer items-center justify-center rounded-full border-[1px] px-4 py-2.5 text-sm text-white outline-none lg:mt-1 lg:text-lg">
          Load All FAQ’s
        </button>
      </div>
    </section>
  );
}

export default FrequentlySection;
