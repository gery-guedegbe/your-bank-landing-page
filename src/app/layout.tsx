import type { Metadata } from "next";
import "@styles/globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Image from "next/image";
import abstrack_design from "@assets/images/abstack-design.svg";
import Head from "next/head";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>YourBank | Banking Reimagined for the Digital Age</title>

        <meta
          name="description"
          content="YourBank revolutionizes digital banking with a seamless user experience. Modern landing page built with Next.js, Tailwind CSS and TypeScript for optimal performance."
        />

        {/* Balises Open Graph pour le partage social */}
        <meta
          property="og:title"
          content="YourBank | Modern Digital Banking Experience"
        />
        <meta
          property="og:description"
          content="Discover a new generation banking interface - pixel perfect design, blazing fast performance and intuitive UX."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://your-bank-landing-page.vercel.app/login"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:alt" content="YourBank landing page preview" />

        {/* Balises Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YourBank | Banking Reimagined" />
        <meta
          name="twitter:description"
          content="Next-gen digital banking interface with pixel-perfect design"
        />
        <meta name="twitter:image" content="" />

        {/* Favicon amélioré */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://your-bank-landing-page.vercel.app/login"
        />

        {/* Viewport et charset */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body className="deskop-width:w-[60vw] laptop-width:w-[70vw] relative mx-auto flex min-h-screen w-full max-w-[1920px] flex-col gap-6 pt-2 lg:gap-10 lg:pt-8">
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
