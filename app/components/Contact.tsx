"use client";
import {useMediaQuery} from "@mui/material";
import {motion} from "framer-motion";
import Github from "./svg/github";
import Linkedin from "./svg/linkedin";
import Upwork from "./svg/upwork";

const Contact = () => {
	const notPc = useMediaQuery("(max-width: 640px)");

	return (
		<motion.section
			initial={{y: 30, opacity: 0}}
			whileInView={{y: 0, opacity: 1}}
			viewport={!notPc ? {margin: "-300px"} : {margin: "-100px"}}
			transition={{delay: 0.1}}
			className="mt-24 flex min-h-[50vh] flex-col items-center justify-center"
			id="contact">
			<h3 className="mb-2 text-2xl font-medium tracking-wide lg:text-3xl">
				MOMEN ELKHALIFA
			</h3>
			<p className="mb-4 text-sm text-secondary">
				Reach me at{" "}
				<a
					href="mailto:momenwadoudg@gmail.com"
					className="underline"
					target={"_blank"}
					rel="noreferrer">
					momenwadoudg@gmail.com
				</a>
			</p>
			<p className="py-8 font-light">Find me on</p>
			<div className="flex items-center gap-8">
				<a
					href="https://github.com/MomenAbdelwadoud"
					target={"_blank"}
					rel="noreferrer">
					<Github color="rgba(255,255,255,0.7)"></Github>
				</a>
				<a
					href="https://www.linkedin.com/in/momen-abdelwadoud/"
					target={"_blank"}
					rel="noreferrer">
					<Linkedin></Linkedin>
				</a>
				<a
					href="https://www.upwork.com/freelancers/~01a6e07ef1eaafc331"
					target={"_blank"}
					rel="noreferrer">
					<Upwork></Upwork>
				</a>
			</div>
		</motion.section>
	);
};

export default Contact;
