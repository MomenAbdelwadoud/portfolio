"use client";
import {Poppins} from "@next/font/google";
import {motion} from "framer-motion";
import Image from "next/image";
import ActionButton from "./action-button";
import Line from "./svg/line";

const poppins = Poppins({weight: "400", style: "normal", subsets: ["latin"]});

const fadeIn = {
	hidden: {y: 10, opacity: 0},
	visible: {y: 0, opacity: 1},
};
const staggerDelay = 0.05;

const Header = () => {
	return (
		<header
			className="flex flex-col py-20 md:items-center md:py-36 lg:relative"
			id="home">
			<div>
				<motion.p
					variants={fadeIn}
					initial="hidden"
					animate={"visible"}
					className={`font-semibold text-primary ${poppins.className} mb-5 text-sm opacity-70 md:text-xl`}>
					{"< >"}
				</motion.p>
				<motion.p
					variants={fadeIn}
					initial="hidden"
					animate={"visible"}
					transition={{delay: staggerDelay * 1}}
					className="text-sm text-secondary md:text-xl">
					Hi, my name is
				</motion.p>
				<motion.h1
					variants={fadeIn}
					initial="hidden"
					animate={"visible"}
					transition={{delay: staggerDelay * 2}}
					className="mb-3 text-2xl font-medium tracking-wider md:text-3xl lg:text-[2rem]">
					MOMEN ABDELWADOUD ELKHALIFA
				</motion.h1>
				<motion.h2
					variants={fadeIn}
					initial="hidden"
					animate={"visible"}
					transition={{delay: staggerDelay * 3}}
					className="flex gap-2 text-xl font-light tracking-wider md:text-2xl">
					Iam a{" "}
					<span className="flex flex-col text-white">
						<p className="-mb-1 font-bold">Fullstack Developer</p>
						<Line></Line>
					</span>
				</motion.h2>
				<motion.p
					variants={fadeIn}
					initial="hidden"
					animate={"visible"}
					transition={{delay: staggerDelay * 4}}
					className={`font-semibold text-primary ${poppins.className} mb-5 text-sm opacity-70 md:text-xl`}>
					{"</>"}
				</motion.p>
				<ActionButton></ActionButton>
				<div>
					<Image
						src="./reactjs-icon.svg"
						alt="reactjs-icon"
						width={80}
						height={80}
						className="absolute right-10 bottom-1/2 animate-pulse md:right-0 md:left-10 md:h-[150px] md:w-[150px] lg:left-20 lg:bottom-16"></Image>
				</div>
			</div>
		</header>
	);
};

export default Header;
