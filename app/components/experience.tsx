"use client";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { experiences } from "../../lists/experiences-list";
import Open from "./svg/new-window";
import { CustomTabs, CustomTabPanel } from "./custom-tabs";

const Experience = () => {
  const isPc = useMediaQuery("(min-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 640px)");
  const [value, setValue] = React.useState(0);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const tabItems = [
    ...experiences.map((exp) => ({ label: exp.company })),
    { label: "Your Company...?", disabled: true },
  ];

  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={isPc ? { margin: "0px 0px 0px -300px" } : { margin: "-100px" }}
      transition={{ delay: 0.3 }}
      className="md:min-h-60vh mb-10 mt-20 scroll-mt-56 md:mt-10"
      id="job"
    >
      <h6 className="mb-6 text-[22px] font-medium uppercase text-secondary lg:mb-10">
        Job Experience
      </h6>
      <div className="lg:flex ">
        <div className="border-b border-gray-700/50 lg:border-b-0">
          <CustomTabs
            value={value}
            onChange={handleChange}
            tabs={tabItems}
            orientation={isPc ? "vertical" : "horizontal"}
            className="md:flex-col"
          />
        </div>
        {experiences.map((exp, idx) => (
          <CustomTabPanel value={value} index={idx} key={exp.company}>
            <div className="flex items-center justify-between pr-4 lg:-mt-8 lg:ml-8">
              <div>
                <h2 className="flex items-center text-lg font-semibold tracking-widest text-white md:text-2xl lg:text-3xl">
                  {exp.company}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-xs text-gray-400 md:text-sm lg:text-base"
                    >
                      <Open></Open>
                    </a>
                  )}
                </h2>
                <p className="text-xs tracking-widest text-gray-300 md:text-base lg:text-lg">
                  {exp.role}{" "}
                  <span className="ml-2 text-[10px] text-gray-400 md:text-xs lg:text-sm">
                    {exp.period}
                  </span>
                </p>
                <p className="mt-2 pr-8 text-xs text-gray-300 md:text-sm lg:text-base">
                  {exp.description}
                </p>
              </div>
              <Image
                src={exp.image}
                height={isTablet ? "60" : isPc ? "80" : "40"}
                width={isTablet ? "60" : isPc ? "80" : "40"}
                alt={exp.company}
                className="rounded-lg opacity-90"
              />
            </div>
            <ul className="space-y-2 py-8 px-4 text-xs md:max-w-[80%] md:space-y-6 md:text-base lg:ml-8 lg:py-10">
              {exp.highlights.map((item, i) => (
                <li
                  key={i}
                  className="list-disc leading-5 tracking-wider"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </CustomTabPanel>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
