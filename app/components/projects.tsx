"use client";
import {useState} from "react";
import {Project, projects} from "../../lists/projects-list";
// import ArrowRight from "./svg/arrow-right"
import {useMediaQuery} from "@mui/material";
import {motion} from "framer-motion";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import Github from "./svg/github";
import Live from "./svg/live";

const ProjectComponent = ({title, tools, description, imgs, github, live}: Project) => {
	return (
		<div className={"min-h-fit px-1"}>
			<div className="flex flex-col justify-between md:flex-row md:items-start">
				<div className=" md:z-30 md:-mr-20 md:w-[60%]">
					<h4 className="text-lg font-medium uppercase text-white lg:text-xl xl:text-2xl">
						{title}
					</h4>
					<p className="text-sm text-secondary lg:text-lg">
						{tools.join(" + ")}
					</p>
					<p className="mt-3 mb-4 w-full rounded-xl bg-secondary py-4 px-3 text-xs tracking-widest text-black md:px-5 md:py-6 lg:text-base">
						{description}
					</p>
				</div>

				<div className="relative h-44 md:min-w-[50%] lg:h-52 lg:scale-x-110">
					<div className="absolute top-0 left-0 z-10">
						<Image
							src={`/projects/${imgs[0]}`}
							width={200}
							height={150}
							alt="project screenshot"
							className="rounded-xl border-[1px] border-gray-400 object-cover opacity-90"></Image>
					</div>
					<div className="absolute top-1/3 left-1/4 lg:left-1/3 ">
						<Image
							src={`/projects/${imgs[1]}`}
							width={200}
							height={150}
							alt="project screenshot"
							className=" rounded-xl border-[1px] border-gray-400 object-cover opacity-90"></Image>
					</div>
				</div>
			</div>
			<div className="mt-5 mr-14 flex justify-end gap-4 text-gray-400 sm:mr-0 sm:justify-start md:-mt-2 lg:mt-2">
				<a
					href={github}
					target="_blank"
					rel="noreferrer">
					{github?.length !== undefined && (
						<Github viewBox="0 0 50 50"></Github>
					)}
				</a>
				{live?.length !== undefined && (
					<a
						href={live}
						target="_blank"
						rel="noreferrer">
						<Live></Live>
					</a>
				)}
			</div>
		</div>
	);
};

const Projects = () => {
	const notPc = useMediaQuery("(max-width: 640px)");
	const [index, setIndex] = useState("100px");
	return (
		<motion.section
			initial={{y: 30, opacity: 0}}
			whileInView={{y: 0, opacity: 1}}
			viewport={!notPc ? {margin: "-250px"} : {margin: "-100px"}}
			transition={{delay: 0.1}}
			id="projects"
			className="mt-16 flex scroll-mt-56 flex-col justify-center py-10 md:mt-24 md:min-h-[60vh] md:scroll-mt-40 lg:mt-20">
			<h6 className="mb-6 text-[22px] font-medium uppercase text-secondary lg:mb-8">
				Side Projects
			</h6>
			<div className="flex items-center gap-1 md:justify-between lg:gap-3 lg:px-4">
				{/* <ArrowRight transform="rotate(180,0,-10)" color="#777"></ArrowRight> */}
				<Carousel
					indicators={false}
					navButtonsAlwaysVisible
					interval={10000}
					className={`min-w-full sm:px-12 lg:px-20`}>
					{Object.keys(projects).map(key => {
						const cur_project = projects[key];
						return (
							<ProjectComponent
								{...cur_project}
								key={cur_project.title}
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
