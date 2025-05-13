import { jobOpeningItems } from "@/constants/careers";
import grey_bag_icon from "@assets/icons/grey-bag-icon.svg";
import Image from "next/image";

function JobOpeningSection() {
  return (
    <section className="flex w-full flex-col items-start justify-between gap-12 lg:gap-16">
      <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
        <h2 className="text-custom-green-60 text-[28px] font-medium md:text-[38px] xl:text-[48px]">
          Job Openings
        </h2>

        <p className="text-custom-grey-70 mt-2 text-sm font-light md:text-base lg:mt-3 lg:text-lg">
          Explore exciting job openings at YourBank, where we value talent,
          innovation, and a passion for customer service. Join our team and be
          part of shaping a brighter future in the banking industry
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
        {jobOpeningItems.map((card) => (
          <div
            key={card.id}
            className="border-custom-grey-15 bg-custom-grey-10 flex flex-col items-start gap-4 rounded-3xl border-[1px] p-6 text-start lg:gap-6 lg:p-8"
          >
            <h2 className="text-[20px] leading-[150%] font-semibold text-white md:text-[24px] lg:text-[30px]">
              {card.title}
            </h2>

            <div className="flex items-center justify-end gap-1.5 lg:gap-3">
              <span className="border-custom-grey-15 bg-custom-grey-10 text-custom-grey-70 flex items-center justify-center rounded-full border-[1px] px-3 py-2 text-sm font-light md:text-[16px] lg:text-[18px]">{`Location: ${card.location}`}</span>
              <span className="border-custom-grey-15 bg-custom-grey-10 text-custom-grey-70 flex items-center justify-center rounded-full border-[1px] px-3 py-2 text-sm font-light md:text-[16px] lg:text-[18px]">{`Departement: ${card.department}`}</span>
            </div>

            <div className="space-y-2 lg:space-y-3">
              <h3 className="text-[20px] leading-[150%] font-semibold text-white lg:text-[24px]">
                About This Job
              </h3>

              <p className="text-custom-grey-70 text-sm leading-[150%] font-light md:text-base lg:text-lg">
                {card.about}
              </p>
            </div>

            <div className="space-y-2 lg:space-y-3">
              <h3 className="text-[20px] leading-[150%] font-semibold text-white lg:text-[24px]">
                Requirements & Qualifications
              </h3>

              <ul className="space-y-1 lg:space-y-2">
                {card.requirements.map((requirement, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-1.5 lg:gap-3"
                  >
                    <Image
                      src={grey_bag_icon}
                      alt="Grey Bag Icon"
                      className="h-auto w-[18px] object-cover md:w-[20px] lg:w-[24px]"
                    />

                    <p className="text-custom-grey-70 text-sm leading-[150%] font-light md:text-base lg:text-lg">
                      {requirement}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <button className="hover:bg-custom-green-60/90 bg-custom-green-60 text-custom-grey-11 mt-4 cursor-pointer rounded-full px-4 py-3 text-sm leading-[150%] outline-none lg:text-lg">
              Appli Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JobOpeningSection;
