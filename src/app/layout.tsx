import type { Metadata } from "next";
import "@styles/globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Image from "next/image";
import abstrack_design from "@assets/images/abstack-design.svg";

export const metadata: Metadata = {
  title: "YourBank",
  description: "Banking reimagined for the digital age.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="deskop-width:w-[60vw] laptop-width:w-[70vw] relative mx-auto flex min-h-screen w-full max-w-[1920px] flex-col gap-6 px-4 pt-2 lg:gap-10 lg:px-16 lg:pt-8">
        <Image
          src={abstrack_design}
          alt="Abstrack Design Vector"
          className="absolute top-0 left-0 h-auto w-[382px] object-cover md:w-[546px] xl:w-[759px]"
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
