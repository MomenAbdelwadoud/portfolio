export interface IExperience {
	company: string;
	role: string;
	period: string;
	description: string;
	technologies?: string[];
	image: string;
	highlights: string[];
	link?: string;
}

export const experiences: IExperience[] = [
	{
		company: "Suhub Healthcare",
		role: "Fullstack Developer",
		period: "2024 - Present",
		description:
			"Fullstack development for the Gulf's leading healthcare platform, focusing on advanced admin tools and automation.",
		image: "/experience/Suhub.jpeg",
		highlights: [
			"Leveraged LLMs for profile autofill from CVs or LinkedIn profiles, automating signup process and enhance the user experience.",
			"Developed an in-house solution, replacing the use of an AWS paid service for recommendation and personalizing content for users.",
			"Built an algorithm to segment jobs from multiple platforms, tailored to healthcare professionals' profiles and experience and cutting the cost to use AI models.",
			"Implemented AI-powered post guidelines and rule detection for communities violations.",
			"Designed and developed a fully comprehensive admin dashboard.",
		],
		link: "https://suhub.healthcare",
	},
	{
		company: "Bloom (YC W22)",
		role: "Intern",
		period: "2022",
		description:
			"Joined a fast-growing fin-tech startup as a fullstack intern, contributing to rapid product development and impactful solutions.",
		image: "/experience/Bloom.jpg",
		highlights: [
			"Developed in-house admin dashboards/tools that uses different APIs to improve efficiency of customer support team by ~25%.",
			"Designed and built the company's Help Center to improve user navigation and support.",
			"Worked on customer support self-help strategies to improve user satisfaction.",
		],
		link: "https://www.elevatepay.co/",
	},
];
