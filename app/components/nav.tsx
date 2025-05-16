"use client";
import {motion} from "framer-motion";
import {useState} from "react";
import Sidebar from "./sidebar";

export default function Nav() {
	const [open, setOpen] = useState(false);
	const asideHandler = () => setOpen(!open);
	return (
		<nav>
			<div className="md:hidden">
				<button
					className={"fixed top-20 right-12 z-30 flex flex-col gap-1"}
					onClick={asideHandler}>
					<div
						className={
							"h-1 w-6 bg-gray-300 transition-transform " +
							(open ? " -mb-1 rotate-45" : "mb-0 rotate-0")
						}></div>
					<div
						className={
							"h-1 w-6 bg-gray-300 transition-transform " +
							(open ? " -mt-1 -rotate-45" : "mt-0 rotate-0")
						}></div>
				</button>
				<aside
					className={
						"fixed top-0 right-0 z-20 flex min-h-screen w-1/2 flex-col gap-20 bg-black pt-40 pl-10 transition-transform " +
						(open ? " translate-x-0" : " translate-x-full")
					}>
					<Sidebar asideHandler={asideHandler}></Sidebar>
				</aside>
			</div>
			<motion.ul
				initial={{y: -30, opacity: 0}}
				animate={{y: 0, opacity: 1}}
				className="text-md hidden gap-10 font-medium text-gray-400 md:flex">
				<a
					href="#home"
					className="transition-colors hover:text-primary">
					<li>Home</li>
				</a>
				<a
					href="#about"
					className="transition-colors hover:text-primary">
					<li>About</li>
				</a>
				<a
					href="#job"
					className="transition-colors hover:text-primary">
					<li>Job Experience</li>
				</a>
				<a
					href="#projects"
					className="transition-colors hover:text-primary">
					<li>Projects</li>
				</a>
				<a
					href="#contact"
					className="transition-colors hover:text-primary">
					<li>Contact</li>
				</a>
			</motion.ul>
		</nav>
	);
}
