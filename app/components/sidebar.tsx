"use client";

const Sidebar = ({asideHandler}: {asideHandler: any}) => {
	return (
		<>
			<ul className="flex flex-col gap-10 text-lg font-medium text-gray-300">
				<a
					href="#home"
					onClick={asideHandler}>
					<li>Home</li>
				</a>
				<a
					href="#about"
					onClick={asideHandler}>
					<li>About</li>
				</a>
				<a
					href="#job"
					onClick={asideHandler}>
					<li>Job Experience</li>
				</a>
				<a
					href="#projects"
					onClick={asideHandler}>
					<li>Projects</li>
				</a>
			</ul>
		</>
	);
};

export default Sidebar;
