import type { Metadata } from "next";
import "@styles/globals.css";

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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
