import Image from "next/image";
import ArrowLink from "@/components/ArrowLink";

import DuskLogo from "../../../public/Dusk.png";
import GeorgiaTechLogo from "../../../public/Georgia Tech.png";
import MagicLogo from "@/components/MagicLogo";

export default function Home() {
  return (
    <div className="flex flex-col space-y-8 items-start">
      <p>
        <span className="">
          hey. my name is{" "}
          <span className="whitespace-nowrap">joão pozzobon</span>
        </span>{" "}
        — i'm a software engineer from southern Brazil and computer science
        major at{" "}
        <span className="whitespace-nowrap">
          <Image
            className="inline-block mb-1"
            src={GeorgiaTechLogo}
            alt="Dusk"
            height="22"
          ></Image>{" "}
          <ArrowLink
            href="https://gatech.edu"
            className="text-[rgb(106,94,52)] dark:text-[rgb(206,194,152)]"
          >
            Georgia Tech
          </ArrowLink>
        </span>
        .
      </p>

      <p>
        over the years i've launched successful projects such as{" "}
        <span className="opacity-85">
          <ArrowLink href="https://pushr.joogps.com" className="expanded-font">
            pushr
          </ArrowLink>
          , a smart push-up tracking and social workout app
        </span>
        ,{" "}
        <span className="text-purple-900 dark:text-purple-300">
          <span className="whitespace-nowrap">
            <MagicLogo
              className="inline-block fill-purple-800 dark:fill-purple-400 mb-1"
              size="22px"
            />{" "}
            <ArrowLink href="https://magic.joogps.com"> Magic</ArrowLink>
          </span>
          , an innovative drawing app for macOS
        </span>
        ,{" "}
        <span className="text-sky-800 dark:text-sky-200">
          <span className="whitespace-nowrap">
            <Image
              className="inline-block mb-1"
              src={DuskLogo}
              alt="Dusk"
              height="22"
            ></Image>
            {"\u00A0"}
            <ArrowLink href="https://apps.apple.com/app/dusk-for-twitter/id6478421686">
              Dusk
            </ArrowLink>
          </span>
          , an unofficial Twitter client for the Vision Pro
        </span>
        , and many more.
      </p>

      <p>
        i was also awarded the{" "}
        <span className="whitespace-nowrap">
           <span className="expanded-font">WWDC</span>
        </span>{" "}
        Swift Student Challenge award in{" "}
        <ArrowLink
          href="https://www.youtube.com/watch?v=cf-_kp-4W48"
          className=""
        >
          2020
        </ArrowLink>{" "}
        and{" "}
        <ArrowLink
          href="https://apps.apple.com/br/app/readyset-a-math-playground/id6461308322?mt=12"
          className=""
        >
          2021
        </ArrowLink>
        .
      </p>

      <p>
        you can find me on{" "}
        <ArrowLink href="https://twitter.com/joogps">Twitter</ArrowLink>,{" "}
        <ArrowLink href="https://instagram.com/joogps"> Instagram </ArrowLink>,{" "}
        <ArrowLink href="https://github.com/joogps"> GitHub </ArrowLink>,{" "}
        <ArrowLink href="https://linkedin.com/in/joogps/"> LinkedIn </ArrowLink>{" "}
        and{" "}
        <ArrowLink href="https://youtube.com/channel/UCoI_nPpWO2sY8wVViyOmAIA">
          {" "}
          YouTube{" "}
        </ArrowLink>
        , or email me at{" "}
        <ArrowLink href="mailto:hi@joogps.com">hi@joogps.com</ArrowLink>
      </p>
    </div>
  );
}
