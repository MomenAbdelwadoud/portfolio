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
        <h2 className="animate-fade-in-up flex gap-2 text-xl font-light tracking-wider delay-300 md:text-2xl">
          Iam a{" "}
          <span className="flex flex-col text-white">
            <p className="-mb-1 font-bold">Fullstack Developer</p>
            <Line></Line>
          </span>
        </h2>
        <p
          className={`animate-fade-in-up delay-400 font-semibold text-primary ${poppins.className} mb-5 text-sm opacity-70 md:text-xl`}
        >
          {"</>"}
        </p>
        <ActionButton></ActionButton>
        <div>
          <Image
            src="./reactjs-icon.svg"
            alt="reactjs-icon"
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
