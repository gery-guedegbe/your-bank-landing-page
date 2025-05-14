"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import logo from "@assets/logos/logo.svg";
import menu_icon from "@assets/icons/menu-icon.svg";
import close_icon from "@assets/icons/close-icon.svg";

const linkItems = [
  { id: 1, link: "Home", href: "/" },
  { id: 2, link: "Careers", href: "/careers" },
  { id: 3, link: "About", href: "/about" },
  { id: 4, link: "Security", href: "/security" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [toggled, setToggled] = useState(false);

  const router = useRouter();

  const activeItem = linkItems.find(
    (item) =>
      pathname === item.href ||
      (item.href !== "/" && pathname?.startsWith(item.href)),
  );

  const handleToggled = () => {
    setToggled((prev) => !prev);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="sticky top-4 z-50 w-full px-4 lg:top-8 lg:px-16">
      <nav
        className={`bg-custom-grey-11 border-custom-grey-15 flex w-full flex-col items-center justify-between backdrop:backdrop-blur-2xl ${toggled ? "rounded-2xl" : "rounded-full"} border-[1px] px-[12px] py-[10px] md:px-[20px] md:py-[12px] lg:px-[20px] lg:py-[16px]`}
      >
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="relative z-10" prefetch={true}>
            <Image
              src={logo}
              alt="logo"
              className="h-auto w-[100px] object-cover md:w-[116px] xl:w-[155px]"
            />
          </Link>

          <div className="relative hidden items-center gap-2 lg:flex">
            {linkItems.map((item) => (
              <div key={item.id} className="relative">
                {activeItem?.id === item.id && (
                  <motion.div
                    layoutId="activeNavItem"
                    className="bg-custom-grey-15 absolute inset-0 rounded-full"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                <Link
                  href={item.href}
                  prefetch={true}
                  className={`text relative z-10 flex items-center justify-center px-4 py-2.5 text-sm leading-[150%] text-white lg:text-lg`}
                >
                  {item.link}
                </Link>
              </div>
            ))}
          </div>

          <div className="relative hidden items-center gap-4 lg:flex lg:gap-6">
            <button
              onClick={() => router.push("/signup")}
              className="cursor-pointer text-sm leading-[150%] text-white outline-none md:text-[18px]"
            >
              Sign Up
            </button>

            <button
              onClick={() => router.push("/login")}
              className="bg-custom-green-60 text-custom-grey-11 cursor-pointer rounded-full px-4 py-2.5 text-sm leading-[150%] outline-none md:text-[18px]"
            >
              Login
            </button>
          </div>

          <button
            onClick={handleToggled}
            className="bg-custom-green-60 relative flex cursor-pointer items-center justify-center rounded-full px-3.5 py-2 lg:hidden"
          >
            <Image
              src={toggled ? close_icon : menu_icon}
              alt="Menu Icon"
              className="h-auto w-[28px] object-cover"
            />
          </button>
        </div>

        {toggled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative w-full"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
              className="mt-1.5 flex w-full flex-col items-start gap-4"
            >
              {linkItems.map((link, index) => (
                <motion.li
                  key={index}
                  className="flex w-full items-start justify-between text-sm text-white"
                  variants={menuVariants}
                  transition={{ duration: 0.3 }}
                  onClick={() => setToggled(false)}
                >
                  <Link href={link.href} prefetch={true}>
                    {link.link}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
