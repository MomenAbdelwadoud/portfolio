"use client";

const links = [
	{href: "#home", label: "Home"},
	{href: "#about", label: "About"},
	{href: "#job", label: "Job Experience"},
	{href: "#projects", label: "Projects"},
	{href: "#contact", label: "Contact"},
];

const Sidebar = ({asideHandler}: {asideHandler: () => void}) => {
	return (
		<ul className="flex flex-col gap-10 text-lg font-medium text-gray-300">
			{links.map(link => (
				<li key={link.href}>
					<a href={link.href} onClick={asideHandler}>
						{link.label}
					</a>
				</li>
			))}
		</ul>
	);
};

export default Sidebar;
