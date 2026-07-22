import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "../globals.css";
import MeshGradient from "@/components/MeshGradient";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/pushr/logo.png";

const inter = Inter({ subsets: ["latin"] });

import Preview from "../../../public/pushr/preview.png";
import Favicon from "../../../public/pushr/favicon.ico";

export const metadata: Metadata = {
  title: "push-up tracker — download the pushr app",
  description: "count your push-ups with your iPhone camera",
  other: {
    "apple-itunes-app": "app-id=1587610077",
    "apple-mobile-web-app-title": "pushr",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black",
    "theme-color": "#000000",
    "og:image": "https://pushr.joogps.com" + Preview.src,
  },
  icons: {
    icon: "https://pushr.joogps.com" + Favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <Analytics />
        <main className={`text-white ${inter.className}`}>
          <MeshGradient />
          <div className="fixed w-dvw h-dvh bg-black -z-20"></div>

          <div className="pt-8 w-full min-h-dvh justify-between flex flex-col">
            <Link href="https://pushr.joogps.com">
              <Image src={Logo} className="mx-8" alt="apple" height={30} />
            </Link>

            <div className="justify-between h-full flex flex-col items-end">
              {children}

              <div className="w-full text-nowrap bg-neutral-950 px-12 min-h-[96px] flex font-semibold items-center justify-between">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <Link href="https://pushr.joogps.com/privacy">
                    {" "}
                    privacy policy{" "}
                  </Link>
                  <Link href="mailto:push@joogps.com"> contact us </Link>
                </div>

                {/* <p> <span className="opacity-50">© {year}</span> <Link href="https://joogps.com" className="underline opacity-50 hover:opacity-100"> João Pozzobon</Link> </p> */}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
