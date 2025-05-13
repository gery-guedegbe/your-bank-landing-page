import Image from "next/image";

import mission_image from "@assets/images/mission-image.png";
import vision_image from "@assets/images/vision-image.png";

function MissionSection() {
  return (
    <section className="flex w-full flex-col items-start justify-between gap-12 lg:gap-16">
      <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
        <h2 className="text-custom-green-60 text-[28px] font-medium md:text-[38px] xl:text-[48px]">
          Mission & Vision
        </h2>

        <p className="text-custom-grey-70 mt-2 text-sm font-light md:text-base lg:mt-3 lg:text-lg">
          We envision being a leading force in the industry, driven by
          innovation, integrity, and inclusivity, creating a brighter financial
          future for individuals and businesses while maintaining a strong
          commitment to customer satisfaction and community development
        </p>
      </div>

      {/* Mission Block */}
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Image Card */}
        <div className="border-custom-grey-15 bg-custom-grey-10 flex w-full items-center justify-center overflow-hidden rounded-xl lg:w-1/2">
          <Image
            src={mission_image}
            alt="Team working together"
            className="h-auto w-full max-w-md object-cover"
          />
        </div>

        {/* Mission Text */}
        <div className="border-b-custom-green-60 lg:border-l-custom-green-60 -mt-40 border-b-2 border-l-0 lg:mt-0 lg:w-1/2 lg:border-b-0 lg:border-l-2">
          <div className="bg-custom-grey-10 flex h-full flex-col justify-center py-4 pl-0 text-center lg:py-6 lg:pl-8 lg:text-start">
            <h3 className="text-custom-grey-30 mb-4 text-2xl font-medium md:text-3xl lg:mb-6 lg:text-4xl">
              Mission
            </h3>

            <p className="text-custom-grey-70 text-base leading-relaxed font-light lg:text-lg">
              At YourBank, our mission is to empower our customers to achieve
              financial success. We are dedicated to delivering innovative
              banking solutions that cater to their unique needs. Through
              personalized services, expert guidance, and cutting-edge
              technology, we aim to build strong, lasting relationships with our
              customers. Our mission is to be their trusted partner, helping
              them navigate their financial journey and realize their dreams.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Block (identique en structure mais avec l'image de vision) */}
      <div className="mt-12 flex flex-col-reverse gap-8 lg:mt-16 lg:flex-row lg:gap-12">
        {/* Vision Text */}
        <div className="border-b-custom-green-60 lg:border-l-custom-green-60 -mt-40 border-b-2 border-l-0 lg:mt-0 lg:w-1/2 lg:border-b-0 lg:border-l-2">
          <div className="bg-custom-grey-10 flex h-full flex-col items-center justify-center py-4 pl-0 text-center lg:items-start lg:justify-start lg:py-6 lg:pl-8 lg:text-start">
            <h3 className="text-custom-grey-30 mb-4 text-2xl font-medium md:text-3xl lg:mb-6 lg:text-4xl">
              Vision
            </h3>

            <p className="text-custom-grey-70 text-base leading-relaxed font-light lg:text-lg">
              Our vision at YourBank is to redefine banking by creating a
              seamless and personalized experience for our customers. We
              envision a future where banking is accessible, transparent, and
              tailored to individual preferences. Through continuous innovation
              and collaboration, we strive to be at the forefront of the
              industry, setting new standards for customer-centric banking. Our
              vision is to be the preferred financial institution, known for our
              unwavering commitment to excellence, trust, and customer
              satisfaction.
            </p>
          </div>
        </div>

        {/* Image Card */}
        <div className="border-custom-grey-15 bg-custom-grey-10 flex w-full items-center justify-center overflow-hidden rounded-xl lg:w-1/2">
          <Image
            src={vision_image}
            alt="Future vision of banking"
            className="h-auto w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
