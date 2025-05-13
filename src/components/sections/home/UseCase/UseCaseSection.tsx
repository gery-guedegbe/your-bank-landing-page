"use client";

import Image from "next/image";

import { useCaseItems_1, useCaseItems_2 } from "@/constants/home";
import radial_abastack_design from "@assets/images/radial-abstract-design.svg";

function UseCaseSection() {
  return (
    <section className="flex w-full flex-col items-start justify-between gap-16">
      <div className="flex flex-col items-center text-center lg:max-w-[60%] lg:items-start lg:text-left">
        <h2 className="text-[28px] font-medium text-white md:text-[38px] xl:text-[48px]">
          Use <span className="text-custom-green-60">Cases</span>
        </h2>

        <p className="text-custom-grey-70 mt-2 text-sm font-light md:text-base lg:mt-3 lg:text-lg">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </p>
      </div>

      <div className="w-full">
        {useCaseItems_1.map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:gap-8"
          >
            <div className="bg-custom-grey-11 relative grid w-full grid-cols-2 gap-2 rounded-3xl p-3 md:grid-cols-2 lg:w-1/2 lg:gap-4 lg:p-5">
              <>
                {item.useCases.map((useCase) => (
                  <div
                    key={useCase.id}
                    className="border-custom-grey-15 bg-custom-grey-10 z-10 flex flex-col items-center justify-center rounded-xl border-[1px] p-3.5 text-center lg:p-6"
                  >
                    <Image
                      src={useCase.icon}
                      alt={useCase.case}
                      className="mb-3 h-auto w-[64px] object-cover lg:mb-5 lg:w-[78px]"
                    />

                    <p className="text-base leading-[150%] text-white lg:text-[20px]">
                      {useCase.case}
                    </p>
                  </div>
                ))}

                <Image
                  src={radial_abastack_design}
                  alt="Radial Abstrack Design"
                  className="absolute top-0 left-0 h-auto w-[118px] object-cover lg:w-[224px]"
                />
              </>
            </div>

            <div className="mt-6 flex w-full flex-col items-center gap-2 text-center lg:mt-0 lg:w-1/2 lg:items-start lg:gap-4 lg:text-start">
              <div className="w-full space-y-3 lg:space-y-4">
                <div>
                  <h3 className="text-[20px] leading-[150%] font-medium text-white md:text-[26px] lg:text-[30px]">
                    For Individuals
                  </h3>

                  <p className="text-custom-grey-70 mt-2 w-full text-sm leading-[150%] font-light md:text-base lg:mt-3 lg:max-w-[610px] lg:text-lg">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex w-full flex-col items-center gap-3 lg:mt-0 lg:flex-row lg:gap-5">
                  {item.stats.map((stat) => (
                    <div key={stat.id} className="">
                      <h4 className="text-custom-green-60 text-[40px] leading-[150%] font-medium lg:text-[56px]">
                        {stat.perc}
                      </h4>

                      <p className="text-custom-grey-70 text-sm leading-[150%] font-light md:text-base lg:text-lg">
                        {stat.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-custom-grey-11 hover:bg-custom-grey-11/70 border-custom-grey-15 mt-4 mt-6 flex cursor-pointer items-center justify-center rounded-full border-[1px] px-4 py-2.5 text-sm text-white outline-none lg:mt-0 lg:mt-5 lg:text-lg">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full">
        {useCaseItems_2.map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:gap-8"
          >
            <div className="flex w-full flex-col items-center gap-2 text-center lg:w-1/2 lg:items-start lg:gap-4 lg:text-start">
              <div className="w-full space-y-3 lg:space-y-4">
                <div>
                  <h3 className="text-[20px] leading-[150%] font-medium text-white md:text-[26px] lg:text-[30px]">
                    For Business
                  </h3>

                  <p className="text-custom-grey-70 mt-2 w-full text-sm leading-[150%] font-light md:text-base lg:mt-3 lg:max-w-[610px] lg:text-lg">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex w-full flex-col items-center gap-3 lg:mt-0 lg:flex-row lg:gap-5">
                  {item.stats.map((stat) => (
                    <div key={stat.id} className="">
                      <h4 className="text-custom-green-60 text-[40px] leading-[150%] font-medium lg:text-[56px]">
                        {stat.perc}
                      </h4>

                      <p className="text-custom-grey-70 text-sm leading-[150%] font-light md:text-base lg:text-lg">
                        {stat.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-custom-grey-11 hover:bg-custom-grey-11/70 border-custom-grey-15 mt-4 mt-6 flex cursor-pointer items-center justify-center rounded-full border-[1px] px-4 py-2.5 text-sm text-white outline-none lg:mt-0 lg:mt-5 lg:text-lg">
                Learn More
              </button>
            </div>

            <div className="bg-custom-grey-11 relative grid w-full grid-cols-2 gap-2 rounded-3xl p-3 md:grid-cols-2 lg:w-1/2 lg:gap-4 lg:p-5">
              <>
                {item.useCases.map((useCase) => (
                  <div
                    key={useCase.id}
                    className="border-custom-grey-15 bg-custom-grey-10 z-10 flex flex-col items-center justify-center rounded-xl border-[1px] p-3.5 text-center lg:p-6"
                  >
                    <Image
                      src={useCase.icon}
                      alt={useCase.case}
                      className="mb-3 h-auto w-[64px] object-cover lg:mb-5 lg:w-[78px]"
                    />

                    <p className="text-base leading-[150%] text-white lg:text-[20px]">
                      {useCase.case}
                    </p>
                  </div>
                ))}

                <Image
                  src={radial_abastack_design}
                  alt="Radial Abstrack Design"
                  className="absolute top-0 left-0 h-auto w-[118px] object-cover lg:w-[224px]"
                />
              </>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UseCaseSection;
