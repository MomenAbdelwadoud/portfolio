"use client";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import ActionButton from "./action-button";
import Line from "./svg/line";

const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });

const Header = () => {
  return (
    <header
      className="flex flex-col py-20 md:items-center md:py-36 lg:relative"
      id="home"
    >
      <div>
        <p
          aria-hidden="true"
          className={`animate-fade-in-up font-semibold text-primary ${poppins.className} mb-5 text-sm opacity-70 md:text-xl`}
        >
          {"< >"}
        </p>
        <p className="animate-fade-in-up text-sm text-secondary delay-100 md:text-xl">
          Hi, my name is
        </p>
        <h1 className="animate-fade-in-up mb-3 text-2xl font-medium tracking-wider delay-200 md:text-3xl lg:text-[2rem]">
          MOMEN ABDELWADOUD ELKHALIFA
        </h1>
        <p className="animate-fade-in-up mt-0 flex gap-2 text-xl font-light tracking-wider delay-300 md:text-2xl">
          I&apos;m a{" "}
          <span className="flex flex-col text-white">
            <b className="-mb-1 font-bold">Senior Software Developer</b>
            <Line></Line>
          </span>
        </p>
        <p className="animate-fade-in-up delay-300 mt-4 max-w-md text-sm leading-relaxed text-gray-300 md:text-base">
          I build reliable products end to end—from backend systems and
          internal tools to the infrastructure that keeps them running.
        </p>
        <p
          aria-hidden="true"
          className={`animate-fade-in-up delay-400 font-semibold text-primary ${poppins.className} mt-4 mb-5 text-sm opacity-70 md:text-xl`}
        >
          {"</>"}
        </p>
        <div className="flex flex-wrap gap-3">
          <ActionButton
            href="mailto:me@momen.codes"
            label="Email me"
            showIcon={false}
          ></ActionButton>
          <ActionButton
            href="https://github.com/MomenAbdelwadoud/"
            label="View My Github"
            variant="outline"
          ></ActionButton>
        </div>
        <div>
          <Image
            src="./reactjs-icon.svg"
            alt=""
            aria-hidden="true"
            width={80}
            height={80}
            className="absolute right-10 bottom-1/2 animate-pulse md:right-0 md:left-10 md:h-[150px] md:w-[150px] lg:left-20 lg:bottom-16"
          ></Image>
        </div>
      </div>
    </header>
  );
};

export default Header;
