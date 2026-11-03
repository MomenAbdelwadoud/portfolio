"use client";
import {motion} from "framer-motion";
import {useState} from "react";
import Sidebar from "./sidebar";

const links = [
	{href: "#home", label: "Home"},
	{href: "#about", label: "About"},
	{href: "#job", label: "Job Experience"},
	{href: "#projects", label: "Projects"},
	{href: "#contact", label: "Contact"},
];

export default function Nav() {
	const [open, setOpen] = useState(false);
	const asideHandler = () => setOpen(!open);
	return (
		<nav aria-label="Main">
			<div className="md:hidden">
				<button
					type="button"
					className={"fixed top-20 right-12 z-30 flex flex-col gap-1 p-2"}
					onClick={asideHandler}
					aria-label={open ? "Close menu" : "Open menu"}
					aria-expanded={open}
					aria-controls="mobile-menu">
					<span
						className={
							"block h-1 w-6 bg-gray-300 transition-transform " +
							(open ? " -mb-1 rotate-45" : "mb-0 rotate-0")
						}></span>
					<span
						className={
							"block h-1 w-6 bg-gray-300 transition-transform " +
							(open ? " -mt-1 -rotate-45" : "mt-0 rotate-0")
						}></span>
				</button>
				<aside
					id="mobile-menu"
					aria-label="Mobile navigation"
					className={
						"fixed top-0 right-0 z-20 flex min-h-screen w-1/2 flex-col gap-20 bg-black pt-40 pl-10 transition-transform " +
						(open ? " translate-x-0 visible" : " translate-x-full invisible")
					}>
					<Sidebar asideHandler={asideHandler}></Sidebar>
				</aside>
			</div>
			<motion.ul
				initial={{y: -30, opacity: 0}}
				animate={{y: 0, opacity: 1}}
				className="text-md hidden gap-10 font-medium text-gray-400 md:flex">
				{links.map(link => (
					<li key={link.href}>
						<a
							href={link.href}
							className="transition-colors hover:text-primary">
							{link.label}
						</a>
					</li>
				))}
			</motion.ul>
		</nav>
	);
}
