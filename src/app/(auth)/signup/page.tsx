"use client";

import { useState } from "react";
import Image from "next/image";
import google_auth_icon from "@assets/icons/google-auth-icon.svg";
import facebook_auth_icon from "@assets/icons/facebook-auth-icon.svg";
import apple_auth_icon from "@assets/icons/apple-auth-icon.svg";
import TestimonialSection from "@/components/sections/home/Testimonial/TestimonialSection";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement de la soumission du formulaire
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="md:x-14 mt-2 flex w-full flex-col items-start gap-12 px-4 lg:gap-16 lg:px-32">
      <form
        onSubmit={handleSubmit}
        className="bg-custom-grey-10 border-custom-grey-15 relative flex w-full flex-col items-center rounded-xl border-[1px] p-6 text-center lg:p-8"
      >
        <div className="">
          <h3 className="text-custom-green-60 text-[28px] font-medium md:text-[38px] lg:text-[48px]">
            Login
          </h3>

          <p className="text-custom-grey-70 text-sm font-light md:text-base lg:text-lg">
            Welcome back! Please log in to access your account.
          </p>
        </div>

        <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 lg:mt-8 lg:flex-row">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            className="bg-custom-grey-10 border-custom-grey-15 text-custom-grey-35 w-full rounded-full border-[1px] px-4 py-4 text-sm font-light outline-none lg:text-base"
          />

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            className="bg-custom-grey-10 border-custom-grey-15 text-custom-grey-35 w-full rounded-full border-[1px] px-4 py-4 text-sm font-light outline-none lg:text-base"
          />
        </div>

        <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 lg:mt-8 lg:flex-row">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="bg-custom-grey-10 border-custom-grey-15 text-custom-grey-35 w-full rounded-full border-[1px] px-4 py-4 text-sm font-light outline-none lg:text-base"
          />

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              className="bg-custom-grey-10 border-custom-grey-15 text-custom-grey-35 w-full rounded-full border-[1px] px-4 py-4 pr-10 text-sm font-light outline-none lg:text-base"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-5 -translate-y-1/2 transform cursor-pointer text-gray-400 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <a
          href="#"
          className="mt-3 text-sm leading-[150%] text-white underline lg:mt-5 lg:text-base"
        >
          Forgot Password?
        </a>

        <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 lg:mt-6">
          <button
            type="submit"
            className="hover:bg-custom-green-60/90 bg-custom-green-60 text-custom-grey-11 w-full max-w-lg cursor-pointer rounded-full px-4 py-3 text-sm leading-[150%] outline-none lg:text-lg"
          >
            Login
          </button>

          <button
            type="button"
            className="bg-custom-grey-15 border-custom-grey-20 w-full max-w-lg cursor-pointer rounded-full border-[1px] px-4 py-3 text-sm leading-[150%] text-white outline-none lg:text-lg"
          >
            Sign Up
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3 lg:mt-6">
          <span className="bg-custom-grey-70 h-[1px] w-16 lg:w-24"></span>
          <span className="text-custom-grey-70 text-sm leading-[150%] lg:text-base">
            Or Continue with
          </span>
          <span className="bg-custom-grey-70 h-[1px] w-16 lg:w-24"></span>
        </div>

        <div className="mt-4 flex items-center gap-1.5 lg:mt-6 lg:gap-3.5">
          <button type="button">
            <Image
              src={google_auth_icon}
              alt="Google Icon"
              className="h-auto w-[68px] cursor-pointer object-cover lg:w-[94px]"
            />
          </button>

          <button type="button">
            <Image
              src={facebook_auth_icon}
              alt="Facebook Icon"
              className="h-auto w-[68px] cursor-pointer object-cover lg:w-[94px]"
            />
          </button>

          <button type="button">
            <Image
              src={apple_auth_icon}
              alt="Apple Icon"
              className="h-auto w-[68px] cursor-pointer object-cover lg:w-[94px]"
            />
          </button>
        </div>
      </form>

      <TestimonialSection />
    </div>
  );
}
