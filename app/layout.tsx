import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./custom-components/Navbar";
import Wrapper from "./custom-components/Wrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gigsta",
  description: "Connecting people who need help with skilled professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-accent-bg text-white min-h-screen w-full antialiased`}
      >
        <Wrapper className="flex-col gap-6">
          <Navbar />
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
