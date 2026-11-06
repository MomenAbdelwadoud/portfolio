"use client";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const notPc = useMediaQuery("(max-width: 640px)");
  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.6 }}
      id="about"
      aria-labelledby="about-heading"
      className=" mt-14 flex scroll-mt-40 flex-wrap items-center justify-center gap-4 py-10 font-light md:mt-24 md:justify-between"
    >
      <div>
        <h2
          id="about-heading"
          className="-mb-1 text-sm text-secondary lg:text-base"
        >
          ABOUT
        </h2>
        <h3 className="mb-2 text-2xl font-medium tracking-wide lg:text-3xl">
          MOMEN ABD-ELWADOUD
        </h3>
        <p className="max-w-xs py-2 text-sm lg:max-w-md lg:text-base">
          I&apos;m a senior software developer who builds products across the
          stack, from backend systems and internal tools to user-facing
          applications. I&apos;ve worked across e-commerce, healthcare, and
          fintech, with a focus on solving practical problems and building
          software that is reliable, maintainable, and useful.
        </p>
        <p aria-hidden="true" className="py-2 text-primary">{"{"}</p>
        <p className="text-sm">
          <b className="font-medium">Languages: </b>[TypeScript, SQL, Python],
        </p>
        <p className="text-sm">
          <b className="font-medium">Backend: </b>[NestJS, PostgreSQL, Redis,
          BullMQ],
        </p>
        <p className="text-sm">
          <b className="font-medium">Frontend: </b>[React, TanStack Start,
          Tailwind],
        </p>
        <p className="text-sm">
          <b className="font-medium">Platform: </b>[Docker, GitHub Actions,
          Dokploy, Sentry],
        </p>
        <p aria-hidden="true" className="py-2 text-primary">{"}"}</p>
      </div>

      <div className="profile relative -ml-8 mt-4 rounded-lg lg:scale-105">
        <Image
          src="/profile.webp"
          alt="Portrait of Momen Abdelwadoud"
          width={200}
          height={220}
          className="relative z-10 h-[220px] rounded-xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
        ></Image>
        <div
          aria-hidden="true"
          className="absolute left-9 top-7 h-full w-full rounded-lg border-[1px] border-secondary opacity-50"
        ></div>
      </div>
    </motion.section>
  );
};

export default About;
