"use client";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Github from "./svg/github";
import Linkedin from "./svg/linkedin";

const Contact = () => {
  const notPc = useMediaQuery("(max-width: 640px)");
  const year = new Date().getFullYear();

  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      // viewport={!notPc ? {margin: "-300px"} : {margin: "-100px"}}
      transition={{ delay: 0.1 }}
      className="mt-24 flex min-h-[30vh] flex-col items-center justify-center"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="mb-2 text-2xl font-medium tracking-wide lg:text-3xl"
      >
        MOMEN A. ELKHALIFA
      </h2>

      <a
        href="mailto:me@momen.codes"
        className="rounded text-lg font-medium text-secondary underline decoration-gray-600 underline-offset-4 transition-colors hover:text-white hover:decoration-primary lg:text-xl"
      >
        me@momen.codes
      </a>

      <p className="mt-3 text-sm text-gray-300">
        Open to full-time and contract roles · Sudan (UTC+3) · remote-friendly
      </p>

      <p className="py-8 font-light">Find me on</p>
      <div className="flex items-center gap-8">
        <a
          href="https://github.com/MomenAbdelwadoud"
          target="_blank"
          rel="noreferrer"
          aria-label="Momen Abdelwadoud on GitHub"
          className="rounded"
        >
          <Github color="rgba(255,255,255,0.7)" aria-hidden="true"></Github>
        </a>
        <a
          href="https://www.linkedin.com/in/momen-abdelwadoud/"
          target="_blank"
          rel="noreferrer"
          aria-label="Momen Abdelwadoud on LinkedIn"
          className="rounded"
        >
          <Linkedin aria-hidden="true"></Linkedin>
        </a>
      </div>

      <p className="mt-16 text-xs text-gray-500">
        © {year} Momen Abdelwadoud Elkhalifa
      </p>
    </motion.section>
  );
};

export default Contact;
