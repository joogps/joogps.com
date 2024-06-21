"use client"

import Image from "next/image";
import Link from 'next/link'
import RoundedLink from "@/components/RoundedLink";

import { Gradient } from "whatamesh";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, [])

  return (
    <main>
      <canvas id="gradient-canvas" data-transition-in />

      <div className="p-12 md:p-24 z-10 h-96 w-full flex flex-col items-start justify-between text-sm lg:flex">
        <h1 className="mb-3 text-4xl font-semibold text-white">
          my name is joão pozzobon <span className="text-white text-opacity-50">— i'm a software engineer and computer science student.</span>
        </h1>

        <div className="flex items-center space-x-10">
        <Image src="/apple.svg" style={{ filter: 'invert(100%)' }} className="hover:scale-95" alt="apple" width={75} height={75} />
        <Image src="/seal.svg" style={{ filter: 'brightness(0%) invert(100%)' }} className="hover:scale-95" alt="push" width={75} height={75} />
        </div>
      </div>

      <div className="w-full flex flex-col space-y-5 items-center justify-center p-8">
      <div className="w-full flex lg:flex-row flex-col lg:justify-between items-center bg-gradient-to-t to-neutral-950 from-neutral-900 rounded-2xl border border-neutral-100 border-opacity-10">
        <div className="flex flex-col items-start space-y-5 m-16">
        <Image className="ml-2" src="/push.png" alt="push" width={300} height={300} />
        <p className="text-xl font-medium ml-2"> your new favorite workout companion. </p>

        <div className="flex items-center space-x-2">
        <RoundedLink href="">
          learn more
        </RoundedLink>

        <RoundedLink href="">
          download
        </RoundedLink>
        </div>
        </div>

        <Image src="/push mockup.png" alt="push" width={400} height={400} />
      </div>

      <div className="w-full flex lg:flex-row flex-col lg:justify-between items-center bg-gradient-to-t to-purple-950 from-purple-900 rounded-2xl border border-neutral-100 border-opacity-10">
        <div className="flex flex-col items-start space-y-5 m-16">
        <h1 className="text-6xl"> Magic </h1>
        <p className="text-xl font-medium ml-2"> An amazing drawing app. An incredible interface. And an astonishing AI assistant. </p>

        <div className="flex flex-col items-start space-y-2">
        <RoundedLink href="">
          learn more
        </RoundedLink>

        <RoundedLink href="">
          download
        </RoundedLink>
        </div>
        </div>

      </div>
      </div>
    </main>
  );
}
