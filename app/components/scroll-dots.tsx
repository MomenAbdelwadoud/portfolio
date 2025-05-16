"use client";
import {useEffect, useState} from "react";

const sections = [
	{id: "home", label: "Home"},
	{id: "about", label: "About"},
	{id: "job", label: "Experience"},
	{id: "projects", label: "Projects"},
	// {id: "contact", label: "Contact"},
];

export default function ScrollDots() {
	const [active, setActive] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			let current = "home";
			for (const section of sections) {
				const el = document.getElementById(section.id);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= window.innerHeight / 2) {
						current = section.id;
					}
				}
			}
			setActive(current);
		};
		window.addEventListener("scroll", handleScroll, {passive: true});
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 md:flex">
			{sections.map(section => (
				<a
					key={section.id}
					href={`#${section.id}`}
					className="group"
					aria-label={section.label}>
					<span
						className={`block h-3 w-3 rounded-full transition-all ${
							active === section.id
								? "scale-125 bg-primary shadow-lg"
								: "bg-gray-600 group-hover:bg-primary"
						}`}
					/>
				</a>
			))}
		</div>
	);
}
