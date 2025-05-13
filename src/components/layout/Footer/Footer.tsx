import Image from "next/image";

import logo from "@assets/logos/logo.svg";
import Link from "next/link";

import phone_icon from "@assets/icons/phone-icon.svg";
import envelope_icon from "@assets/icons/envelope-icon.svg";
import position_icon from "@assets/icons/position-icon.svg";
import linkedin_icon from "@assets/icons/linkedin_icon.svg";
import twitter_icon from "@assets/icons/twitter_icon.svg";
import facebook_icon from "@assets/icons/facebook_icon.svg";

const linkItems = [
  { id: 1, link: "Home", href: "/" },
  { id: 2, link: "Careers", href: "/careers" },
  { id: 3, link: "About", href: "/about" },
  { id: 4, link: "Security", href: "/security" },
];

const contactItems = [
  { id: 1, label: "hello@skillbirdge.com", icon: envelope_icon },
  { id: 2, label: "+91 91813 23 2309", icon: phone_icon },
  { id: 3, label: "Somewhere in the World", icon: position_icon },
];

const Footer = () => {
  return (
    <footer className="bg-custom-grey-11 flex w-full flex-col items-center justify-center gap-4 p-6 md:p-8 lg:gap-8 lg:p-12">
      <Image
        src={logo}
        alt="Logo"
        className="h-auto w-[132px] object-cover lg:w-[155px]"
      />

      <ul className="flex items-center justify-center gap-4 lg:gap-6">
        {linkItems.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="hover:text-custom-green-60 text-sm leading-[150%] text-white lg:text-lg"
          >
            {link.link}
          </Link>
        ))}
      </ul>

      <div className="border-y-custom-grey-15 bg-custom-grey-10 flex w-full flex-wrap items-center justify-center gap-4 border-y-[1px] py-6 lg:py-10">
        {contactItems.map((item) => (
          <div key={item.id} className="flex items-center gap-1 lg:gap-2">
            <Image
              src={item.icon}
              alt="Icon"
              className="h-auto w-[20px] object-cover lg:w-[24px]"
            />

            <span className="text-sm leading-[150%] text-white md:text-base lg:text-lg">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-custom-grey-10 border-custom-grey-15 relative flex w-full flex-col items-center justify-between gap-4 rounded-xl border-[1px] p-5 text-center lg:flex-row lg:gap-0 lg:rounded-full lg:p-6">
        <div className="flex items-center gap-1.5 lg:gap-3.5">
          <Image
            src={facebook_icon}
            alt="Facebook Icon"
            className="h-auto w-[44px] cursor-pointer object-cover lg:w-[52px]"
          />

          <Image
            src={twitter_icon}
            alt="Twitter Icon"
            className="h-auto w-[44px] cursor-pointer object-cover lg:w-[52px]"
          />

          <Image
            src={linkedin_icon}
            alt="Linkedin Icon"
            className="h-auto w-[44px] cursor-pointer object-cover lg:w-[52px]"
          />
        </div>

        <p className="text-custom-green-70 text-sm leading-[150%] font-light md:text-base lg:text-[18px]">
          YourBank All Rights Reserved
        </p>

        <div className="text-custom-green-70 flex items-center gap-1.5 text-sm leading-[150%] font-light md:text-base lg:gap-3.5 lg:text-[18px]">
          <span>Privacy Policy</span>
          <div className="bg-custom-green-70 h-6 w-[1px]"></div>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
