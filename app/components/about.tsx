"use client";
import {useMediaQuery} from "@mui/material";
import {motion} from "framer-motion";
import Image from "next/image";

const About = () => {
	const notPc = useMediaQuery("(max-width: 640px)");
	return (
		<motion.section
			initial={{y: 30, opacity: 0}}
			whileInView={{y: 0, opacity: 1}}
			viewport={!notPc ? {margin: "-350px"} : {margin: "-100px"}}
			// transition={{delay:0.3}}
			id="about"
			className="md:min-h-40vh mt-14 flex scroll-mt-40 flex-wrap items-center justify-center gap-4 py-10 font-light md:mt-24 md:justify-between">
			<div>
				<h6 className="-mb-1 text-sm text-secondary lg:text-base">ABOUT</h6>
				<h3 className="mb-2 text-2xl font-medium tracking-wide lg:text-3xl">
					MOMEN ABD-ELWADOUD
				</h3>
				<p className="max-w-xs py-2 text-sm lg:max-w-md lg:text-base">
					I am a fullstack developer and undergraduate student, skilled in
					coding, debugging, and testing to deliver high-quality software. I
					collaborate with cross-functional teams to design and deploy
					innovative applications, and actively contribute to code reviews and
					system improvements.
				</p>
				<p className="py-2 text-primary">{"{"}</p>
				<p className="text-sm">
					<b className="font-medium">Languages: </b>[TypeScript, JavaScript,
					Python, Kotlin],
				</p>
				<p className="text-sm">
					<b className="font-medium">Frameworks: </b>[ReactJS, NextJS, Node.js,
					Express],
				</p>
				<p className="text-sm">
					<b className="font-medium">Other Tools: </b>[TailwindCSS, Framer
					Motion, Git, Figma],
				</p>
				<p className="py-2 text-primary">{"}"}</p>
			</div>

			<div className="profile relative -ml-8 mt-4 rounded-lg lg:scale-105">
				<Image
					src="/profile.jpg"
					alt="Profile Image"
					width={200}
					height={220}
					className="relative z-10 h-[220px] rounded-xl object-cover grayscale transition-all duration-500 hover:grayscale-0"></Image>
				<div className="absolute left-9 top-7 h-full w-full rounded-lg border-[1px] border-secondary opacity-50"></div>
			</div>
		</motion.section>
	);
};

export default About;
