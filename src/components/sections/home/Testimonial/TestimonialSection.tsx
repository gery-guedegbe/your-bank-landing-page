/* eslint-disable react/no-unescaped-entities */
"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { testimonialItems } from "@/constants/home";
import double_quote_icon from "@assets/icons/double-quote-icon.svg";
import fade_out_left from "@assets/images/fade-out-left.png";
import fade_out_right from "@assets/images/fade-out-right.png";
import green_arrow_left from "@assets/icons/green-arrow-left.svg";
import green_arrow_right from "@assets/icons/green-arrow-right..svg";
import radial_abastack_design from "@assets/images/radial-abstract-design.svg";
import { useRouter } from "next/navigation";

function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const router = useRouter();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="flex w-full flex-col items-start justify-between gap-12 lg:gap-16">
      <div className="flex w-full flex-col items-center justify-between gap-6 lg:flex-row lg:items-end">
        <div className="flex flex-col items-center text-center lg:max-w-[60%] lg:items-start lg:text-left">
          <h2 className="text-custom-green-60 text-[28px] font-medium md:text-[38px] xl:text-[48px]">
            Our <span className="text-white">Testimonials</span>
          </h2>

          <p className="text-custom-grey-70 mt-2 text-sm font-light md:text-base lg:mt-3 lg:text-lg">
            Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey
          </p>
        </div>

        {/* Boutons */}
        <div className="bg-custom-grey-11 border-custom-grey-15 flex w-full max-w-md items-center justify-between rounded-full border p-1.5 sm:w-fit lg:p-2">
          <button className="bg-custom-green-60 text-custom-grey-11 hover:bg-custom-green-70 flex-1 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all sm:flex-none sm:px-6 sm:py-3 md:text-base">
            For Individuals
          </button>

          <button className="flex-1 cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-white transition-all sm:flex-none sm:px-6 sm:py-3 md:text-base">
            For Businesses
          </button>
        </div>
      </div>

      {/* Carrousel */}
      <div
        className="relative flex w-full flex-col items-start gap-6 overflow-hidden lg:gap-0"
        ref={emblaRef}
      >
        <div className="flex w-full">
          {testimonialItems.map((card) => (
            <div
              key={card.id}
              className="z-10 flex flex-[0_0_100%] cursor-grab flex-col items-center justify-center gap-2 px-4 text-center select-none sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] lg:gap-4"
            >
              <div className="">
                <Image
                  src={double_quote_icon}
                  alt="Double Quote Icon"
                  className="h-auto w-[44px] object-cover lg:w-[60px]"
                />
              </div>

              <p className="text-sm leading-[150%] text-white md:text-base lg:text-lg">
                {card.message}
              </p>

              <span className="text-custom-green-60 text-base font-medium lg:text-lg">
                {card.name}
              </span>
            </div>
          ))}
        </div>

        {/* Effets de dégradé */}
        <Image
          src={fade_out_left}
          alt="Fade Out Left"
          className="absolute top-0 -left-40 object-cover select-none"
        />

        <Image
          src={fade_out_right}
          alt="Fade Out Right"
          className="absolute top-0 -right-40 object-cover select-none"
        />

        <div className="flex w-full items-center justify-center gap-4 lg:gap-6">
          <button
            onClick={scrollPrev}
            className="border-custom-grey-15 bg-custom-grey-11 relative z-20 flex cursor-pointer items-center justify-center rounded-full border-[1px] p-1.5 outline-none hover:opacity-70 lg:absolute lg:top-1/2 lg:left-8 lg:p-2"
            aria-label="Previous testimonial"
          >
            <Image
              src={green_arrow_left}
              alt=""
              className="h-auto w-[28px] object-cover lg:w-[34px]"
            />
          </button>

          <button
            onClick={scrollNext}
            className="border-custom-grey-15 bg-custom-grey-11 relative z-20 flex cursor-pointer items-center justify-center rounded-full border-[1px] p-1.5 outline-none hover:opacity-70 lg:absolute lg:top-1/2 lg:right-8 lg:p-2"
            aria-label="Next testimonial"
          >
            <Image
              src={green_arrow_right}
              alt=""
              className="h-auto w-[28px] object-cover lg:w-[34px]"
            />
          </button>
        </div>
      </div>

      <div className="bg-custom-grey-11 relative flex w-full flex-col items-center justify-between overflow-hidden rounded-xl p-5 text-center lg:flex-row lg:p-8 lg:text-start">
        <div className="flex max-w-full flex-1/2 flex-col items-center gap-4 lg:max-w-[60vw] lg:items-start">
          <h3 className="text-[24px] leading-[150%] text-white md:text-[30px] lg:text-[40px]">
            Start your financial journey with{" "}
            <span className="text-custom-green-60">YourBank today!</span>
          </h3>

          <p className="text-custom-grey-70 text-sm leading-[150%] font-light md:text-base lg:text-lg">
            Ready to take control of your finances? Join YourBank now, and let
            us help you achieve your financial goals with our tailored solutions
            and exceptional customer service
          </p>
        </div>

        <button
          onClick={() => router.push("/signup")}
          className="hover:bg-custom-green-60/90 bg-custom-green-60 text-custom-grey-11 mt-4 max-w-md cursor-pointer rounded-full px-4 py-3 text-sm leading-[150%] outline-none lg:mt-0 lg:text-lg"
        >
          Open Account
        </button>

        <Image
          src={radial_abastack_design}
          alt="Radial Abstrack Design"
          className="absolute top-0 left-0 h-auto w-auto object-cover"
        />
      </div>
    </section>
  );
}

export default TestimonialSection;
