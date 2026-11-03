"use client";
import { useEffect, useState } from "react";
import { Project, projects } from "../../lists/projects-list";
// import ArrowRight from "./svg/arrow-right"
import { useMediaQuery } from "../hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import Github from "./svg/github";
import Live from "./svg/live";

const ProjectComponent = ({
  title,
  tools,
  description,
  imgs,
  github,
  live,
  onImageClick,
}: Project & { onImageClick: (src: string, title: string) => void }) => {
  return (
    <div className={"min-h-fit px-1"}>
      <div className="flex flex-col justify-between md:flex-row md:items-start">
        <div className=" md:z-30 md:-mr-20 md:w-[60%]">
          <h3 className="text-lg font-medium uppercase text-white lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-secondary px-3 py-1 text-xs text-secondary lg:text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="mt-3 mb-4 w-full rounded-xl bg-secondary py-4 px-3 text-xs tracking-widest text-black md:px-5 md:py-6 lg:text-base">
            {description}
          </p>
        </div>

        <div className="relative h-44 md:min-w-[50%] lg:h-52 lg:scale-x-110">
          <button
            type="button"
            aria-label={`Enlarge the first ${title} screenshot`}
            className="absolute top-0 left-0 z-10 cursor-zoom-in transition-all duration-300 hover:scale-105"
            onClick={() => onImageClick(`/projects/${imgs[0]}`, title)}
          >
            <Image
              src={`/projects/${imgs[0]}`}
              width={200}
              height={150}
              alt={`${title} screenshot 1`}
              className="rounded-xl border-[1px] border-gray-400 object-cover opacity-90 shadow-lg"
            ></Image>
          </button>
          <button
            type="button"
            aria-label={`Enlarge the second ${title} screenshot`}
            className="absolute top-1/2 left-1/4 cursor-zoom-in transition-all duration-300 hover:scale-105 lg:left-1/3"
            onClick={() => onImageClick(`/projects/${imgs[1]}`, title)}
          >
            <Image
              src={`/projects/${imgs[1]}`}
              width={200}
              height={150}
              alt={`${title} screenshot 2`}
              className=" rounded-xl border-[1px] border-gray-400 object-cover opacity-90 shadow-lg"
            ></Image>
          </button>
        </div>
      </div>
      <div className="mt-14 mr-14 flex justify-end gap-4 text-gray-400 sm:mr-0 sm:justify-start md:-mt-2 lg:mt-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${title} source code on GitHub`}
            className="rounded transition-colors hover:text-white"
          >
            <Github viewBox="0 0 50 50" aria-hidden="true"></Github>
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            aria-label={`${title} live site`}
            className="rounded transition-colors hover:text-white"
          >
            <Live aria-hidden="true"></Live>
          </a>
        )}
      </div>
    </div>
  );
};

const ImageModal = ({
  src,
  title,
  onClose,
}: {
  src: string;
  title: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/90 p-4 backdrop-blur-md"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${title} screenshot`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-h-[90vh] max-w-[95vw] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={`${title} screenshot`}
          width={1600}
          height={1000}
          className="h-auto max-h-[90vh] w-auto object-contain"
          priority
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:scale-110 hover:bg-black/80 active:scale-95"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const notPc = useMediaQuery("(max-width: 640px)");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={!notPc ? { margin: "-250px" } : { margin: "-100px" }}
      transition={{ delay: 0.1 }}
      id="projects"
      aria-labelledby="projects-heading"
      className="mt-16 flex scroll-mt-56 flex-col justify-center py-10 md:mt-24 md:min-h-[60vh] md:scroll-mt-40 lg:mt-20"
    >
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            {...selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>

      <h2
        id="projects-heading"
        className="mb-6 text-[22px] font-medium uppercase text-secondary lg:mb-8"
      >
        Side Projects
      </h2>
      <div className="flex items-center gap-1 md:justify-between lg:gap-3 lg:px-4">
        {/* <ArrowRight transform="rotate(180,0,-10)" color="#777"></ArrowRight> */}
        <Carousel
          indicators={false}
          navButtonsAlwaysVisible
          interval={10000}
          className={`min-w-full sm:px-12 lg:px-20`}
        >
          {Object.keys(projects).map((key) => {
            const cur_project = projects[key];
            return (
              <ProjectComponent
                {...cur_project}
                key={cur_project.title}
                onImageClick={(src, title) => setSelectedImage({ src, title })}
              />
            );
          })}
        </Carousel>
        {/* <ArrowRight color="#fff"></ArrowRight> */}
      </div>
    </motion.section>
  );
};

export default Projects;
