"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import check_icon from "@assets/icons/check-icon.svg";
import hero_image from "@assets/images/hero-image.png";

function HeroSection() {
  const router = useRouter();

  return (
    <section className="flex w-full flex-col items-start justify-between gap-8 text-center lg:flex-row lg:text-start">
      <div className="flex w-full flex-col items-center gap-6 lg:w-1/2 lg:items-start">
        <div className="bg-custom-grey-15 flex items-center gap-1 rounded-full px-4 py-2 lg:gap-1.5">
          <Image
            src={check_icon}
            alt="Check Icon"
            className="h-auto w-[20px] object-cover"
          />

          <p className="text-xs leading-[24px] font-light text-white uppercase md:text-sm lg:text-lg">
            No LLC Required, No Credit Check.
          </p>
        </div>

        <h1 className="text-[28px] leading-[150%] font-medium md:text-[38px] lg:text-[48px]">
          Welcome to YourBank Empowering Your{" "}
          <span className="text-custom-green-60">Financial Journey</span>
        </h1>

        <p className="text-custom-white-90 text-sm leading-[150%] md:text-base lg:text-lg">
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers needs.
        </p>

        <button
          onClick={() => router.push("/signup")}
          className="hover:bg-custom-green-60/90 bg-custom-green-60 text-custom-grey-11 cursor-pointer rounded-full px-4 py-3 text-sm leading-[150%] outline-none lg:text-lg"
        >
          Open Account
        </button>
      </div>

      <div className="w-full lg:w-1/2">
        <Image
          src={hero_image}
          alt="Hero Image"
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}

export default HeroSection;
