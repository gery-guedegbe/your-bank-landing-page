import Image from "next/image";

import { pressRealeseItem } from "@/constants/about";

function PressReleaseSection() {
  return (
    <section className="flex w-full flex-col items-start justify-between gap-12 lg:gap-16">
      <div className="flex flex-col items-center text-center lg:max-w-[60%] lg:items-start lg:text-left">
        <h2 className="text-custom-green-60 text-[28px] font-medium md:text-[38px] xl:text-[48px]">
          Press Releases
        </h2>

        <p className="text-custom-grey-70 mt-2 text-sm font-light md:text-base lg:mt-3 lg:text-lg">
          Stay updated with the latest happenings and exciting developments at
          YourBank through our press releases.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
        {pressRealeseItem.map((item) => (
          <div
            key={item.id}
            className="border-custom-grey-15 bg-custom-grey-10 flex flex-col items-start gap-4 rounded-3xl border-[1px] p-6 text-start lg:gap-6 lg:p-8"
          >
            <Image
              src={item.image}
              alt="Image"
              className="h-auto w-full object-cover"
            />

            <h3 className="text-[20px] leading-[150%] font-semibold text-white lg:text-[24px]">
              {item.title}
            </h3>

            <div className="flex items-center justify-end gap-1.5 lg:gap-3">
              <span className="border-custom-grey-15 bg-custom-grey-10 text-custom-grey-70 flex items-center justify-center rounded-full border-[1px] px-3 py-2 text-sm font-light md:text-[16px] lg:text-[18px]">{`Location: ${item.location}`}</span>
              <span className="border-custom-grey-15 bg-custom-grey-10 text-custom-grey-70 flex items-center justify-center rounded-full border-[1px] px-3 py-2 text-sm font-light md:text-[16px] lg:text-[18px]">{`Date: ${item.date}`}</span>
            </div>

            <p className="text-custom-grey-70 text-sm leading-[150%] font-light md:text-base lg:text-lg">
              {item.about}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PressReleaseSection;
