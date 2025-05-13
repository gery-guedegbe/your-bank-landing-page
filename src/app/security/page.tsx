import Image from "next/image";

import security_hero_image from "@assets/images/security-hero-image.png";
import radial_abastack_design from "@assets/images/radial-abstract-design.svg";
import secure_online_icon from "@assets/icons/secure-online-icon.svg";
import multi_factor_icon from "@assets/icons/multi-factor-icon.svg";
import fraud_icon from "@assets/icons/fraud-icon.svg";
import secure_mobile_icon from "@assets/icons/secure-mobile-icon.svg";

const securityItems = [
  {
    id: 1,
    icon: secure_online_icon,
    title: "Secure Online Banking Platform",
    desc: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
  },
  {
    id: 2,
    icon: multi_factor_icon,
    title: "Multi-Factor Authentication",
    desc: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.",
  },
  {
    id: 3,
    icon: fraud_icon,
    title: "Fraud Monitoring",
    desc: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.",
  },
  {
    id: 4,
    icon: secure_mobile_icon,
    title: "Secure Mobile Banking",
    desc: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.",
  },
];

export default function Page() {
  return (
    <section className="mt-2 flex w-full flex-col items-start gap-12 px-4 lg:gap-16 lg:px-16">
      <section className="bg-custom-grey-11 relative w-full rounded-xl p-6 lg:p-8">
        <div className="relative flex w-full flex-col-reverse items-center justify-center lg:flex-row lg:items-end lg:justify-end">
          <div className="bg-custom-grey-10 relative -mt-6 flex w-full flex-col items-start gap-3 rounded-none rounded-t-3xl p-6 text-center lg:absolute lg:top-0 lg:left-0 lg:mt-0 lg:w-[591px] lg:gap-2 lg:rounded-t-none lg:rounded-br-4xl lg:p-8 lg:text-start">
            <h2 className="text-[28px] leading-[130%] font-medium text-white md:text-[48px] lg:text-[52px]">
              Your Security is Our{" "}
              <span className="text-custom-green-60">Top Priority</span>
            </h2>

            <p className="text-custom-grey-70 text-sm leading-[150%] font-light md:text-base lg:text-lg">
              At YourBank, we understand the importance of keeping your
              financial information secure. We employ robust security measures
              and advanced technologies to protect your personal and financial
              data. Rest assured that when you bank with us, your security is
              our utmost priority.
            </p>
          </div>

          <Image
            src={security_hero_image}
            alt="Security Image"
            className="h-auto w-full rounded-3xl object-cover lg:w-2/3"
          />
        </div>

        <Image
          src={radial_abastack_design}
          alt="Radial Abstrack Design"
          className="absolute top-0 right-0 h-auto w-[118px] object-cover lg:w-[224px]"
        />
      </section>

      <section className="mb-4 flex w-full flex-col items-start justify-between gap-12 lg:mb-8 lg:gap-16">
        <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="text-[28px] font-medium text-white md:text-[38px] xl:text-[48px]">
            How We <span className="text-custom-green-60">Protect You</span>
          </h2>

          <p className="text-custom-grey-70 mt-2 text-sm font-light md:text-base lg:mt-3 lg:text-lg">
            At YourBank, we prioritize the security and confidentiality of your
            financial information. Our state-of-the-art encryption technology
            and stringent data protection measures ensure your assets and
            transactions are safeguarded at all times
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-6">
          {securityItems.map((card) => (
            <div
              key={card.id}
              className="border-custom-grey-15 bg-custom-grey-10 flex flex-col items-start gap-4 rounded-3xl border-[1px] p-6 lg:gap-6 lg:p-8"
            >
              <div className="flex items-center gap-3 lg:gap-4">
                <Image
                  src={card.icon}
                  alt="Icon"
                  className="h-auto w-[72px] object-cover md:w-[76px] lg:w-[98px]"
                />

                <h3 className="text-lg leading-[150%] text-white md:text-[20px] lg:text-[24px]">
                  {card.title}
                </h3>
              </div>

              <p className="text-custom-grey-70 text-sm leading-[150%] md:text-base lg:text-lg">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
