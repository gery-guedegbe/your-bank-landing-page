import Image from "next/image";

import about_image from "@assets/images/about.png";
import radial_abastack_design from "@assets/images/radial-abstract-design.svg";
import MissionSection from "@/components/sections/about/missionAndvision/MissionSection";
import PressReleaseSection from "@/components/sections/about/pressReleases/PressReleaseSection";

export default function Page() {
  return (
    <div className="mt-2 flex w-full flex-col items-start gap-12 px-4 lg:gap-16 lg:px-16">
      <section className="bg-custom-grey-11 relative w-full rounded-xl p-6 lg:p-8">
        <div className="relative flex w-full flex-col-reverse items-center justify-center lg:flex-row lg:items-end lg:justify-end">
          <div className="bg-custom-grey-10 relative -mt-6 flex w-full flex-col items-start gap-3 rounded-none rounded-t-3xl p-6 text-center lg:absolute lg:top-0 lg:left-0 lg:mt-0 lg:w-[591px] lg:gap-2 lg:rounded-t-none lg:rounded-br-4xl lg:p-8 lg:text-start">
            <span className="text-sm leading-[150%] text-white md:text-[18px] lg:text-[20px]">
              Welcome to YourBank
            </span>

            <h2 className="text-[28px] leading-[130%] font-medium text-white md:text-[48px] lg:text-[52px]">
              Where Banking Meets{" "}
              <span className="text-custom-green-60">Excellence!</span>
            </h2>

            <p className="text-custom-grey-70 text-sm leading-[150%] font-light md:text-base lg:text-lg">
              At YourBank, we believe that banking should be more than just
              transactions. It should be an experience that empowers individuals
              and businesses to thrive and reach their financial goals. As a
              trusted financial institution, we are committed to delivering
              exceptional banking services that go beyond expectations. With a
              focus on innovation, personalized solutions, and unwavering
              integrity, we strive to provide the best banking experience for
              our valued customers. Join us on this exciting journey and
              discover a new level of banking excellence.
            </p>
          </div>

          <Image
            src={about_image}
            alt="About Image"
            className="h-auto w-full rounded-3xl object-cover lg:w-2/3"
          />
        </div>

        <Image
          src={radial_abastack_design}
          alt="Radial Abstrack Design"
          className="absolute top-0 right-0 h-auto w-[118px] object-cover lg:w-[224px]"
        />
      </section>

      <MissionSection />
      <PressReleaseSection />
    </div>
  );
}
