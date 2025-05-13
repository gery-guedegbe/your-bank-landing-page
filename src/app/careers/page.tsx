"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

import radial_abastack_design from "@assets/images/radial-abstract-design.svg";
import career_hero_image from "@assets/images/career-hero-image.png";
import OurValuesSection from "@/components/sections/careers/values/OurValuesSection";
import OurBenefitSection from "@/components/sections/careers/benefits/OurBenefitSection";
import JobOpeningSection from "@/components/sections/careers/job Openings/JobOpeningSection";
import FrequentlySection from "@/components/sections/home/Frequently/FrequentlySection";

export default function Page() {
  const router = useRouter();

  return (
    <div className="mt-2 flex w-full flex-col items-start gap-12 px-4 lg:gap-16 lg:px-16">
      <section className="bg-custom-grey-11 relative w-full rounded-xl p-6 lg:p-8">
        <div className="relative flex w-full flex-col-reverse items-center justify-center lg:flex-row lg:items-end lg:justify-end">
          <div className="bg-custom-grey-10 relative -mt-6 flex w-full flex-col items-start gap-3 rounded-none rounded-t-3xl p-6 text-center lg:absolute lg:top-0 lg:left-0 lg:mt-0 lg:w-[591px] lg:gap-2 lg:rounded-t-none lg:rounded-br-4xl lg:p-8 lg:text-start">
            <h2 className="text-[28px] leading-[130%] font-medium text-white md:text-[48px] lg:text-[52px]">
              Welcome to <span className="text-custom-green-60">YourBank</span>{" "}
              Careers!
            </h2>

            <p className="text-custom-grey-70 text-sm leading-[150%] font-light md:text-base lg:text-lg">
              Join our team and embark on a rewarding journey in the banking
              industry. At YourBank, we are committed to fostering a culture of
              excellence and providing opportunities for professional growth.
              With a focus on innovation, customer service, and integrity, we
              strive to make a positive impact in the lives of our customers and
              communities. Join us today and be a part of our mission to shape
              the future of banking.
            </p>
          </div>

          <Image
            src={career_hero_image}
            alt="Career Hero Image"
            className="h-auto w-full rounded-3xl object-cover lg:w-2/3"
          />
        </div>

        <Image
          src={radial_abastack_design}
          alt="Radial Abstrack Design"
          className="absolute top-0 right-0 h-auto w-[118px] object-cover lg:w-[224px]"
        />
      </section>

      <OurValuesSection />
      <OurBenefitSection />
      <JobOpeningSection />
      <FrequentlySection />

      <div className="bg-custom-grey-11 relative mb-6 flex w-full flex-col items-center justify-between overflow-hidden rounded-xl p-5 text-center lg:mb-10 lg:flex-row lg:p-8 lg:text-start">
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
    </div>
  );
}
