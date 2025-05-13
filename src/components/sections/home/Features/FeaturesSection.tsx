"use client";

import { useState } from "react";
import Image from "next/image";

import {
  onlineBankingItems,
  customerSupportItems,
  financialToolsItems,
} from "@/constants/home";

import arrow_right_top from "@assets/icons/arrow-right-top.svg";

function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<
    "onlineBanking" | "financialTools" | "customerSupport"
  >("onlineBanking");

  const getActiveData = () => {
    switch (activeTab) {
      case "financialTools":
        return financialToolsItems;
      case "customerSupport":
        return customerSupportItems;
      default:
        return onlineBankingItems;
    }
  };

  return (
    <section className="flex w-full flex-col items-start justify-between gap-16">
      <div className="flex w-full flex-col items-center text-center lg:max-w-[60%] lg:items-start lg:text-left">
        <h2 className="text-[28px] font-medium text-white md:text-[38px] xl:text-[48px]">
          Our <span className="text-custom-green-60">Features</span>
        </h2>

        <p className="text-custom-grey-70 mt-2 text-sm font-light md:text-base lg:mt-3 lg:text-lg">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-4 overflow-y-auto lg:flex-row lg:items-start lg:gap-6">
        <div className="bg-custom-grey-11 border-custom-grey-15 grid w-full grid-cols-2 items-center gap-2.5 rounded-xl border-[1px] p-2 lg:w-1/3 lg:grid-cols-1 lg:gap-4 lg:p-6">
          {[
            { id: "onlineBanking", label: "Online Banking" },
            { id: "financialTools", label: "Financial Tools" },
            { id: "customerSupport", label: "Customer Support" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`border-custom-grey-15 bg-custom-grey-10 w-full cursor-pointer rounded-full border-[1px] px-2 py-2.5 text-sm leading-[150%] font-medium transition-all hover:opacity-70 md:px-6 md:text-base lg:w-56 lg:py-4 lg:text-lg ${
                activeTab === tab.id ? "text-custom-green-60" : "text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid w-full max-w-full grid-cols-1 gap-4 lg:max-w-[1258px] lg:grid-cols-2 lg:gap-6">
          {getActiveData().map((item) => (
            <div
              key={item.id}
              className="bg-custom-grey-10 border-custom-grey-15 flex cursor-pointer flex-col items-start rounded-xl border-[1px] p-4 text-start transition-all hover:opacity-80 lg:p-8"
            >
              <div className="flex w-full items-center justify-between">
                <h3 className="text-lg leading-[150%] text-white lg:text-[22px]">
                  {item.title}
                </h3>

                <Image
                  src={arrow_right_top}
                  alt="Arrow right top"
                  className="h-auto w-[24px] object-cover lg:w-[34px]"
                />
              </div>

              <p className="text-custom-grey-70 mt-6 text-sm font-light md:text-base lg:text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
