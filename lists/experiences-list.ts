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
		role: "Full-stack Developer",
		period: "1.5 Years",
		description:
			"Full-stack development for the Gulf's leading healthcare platform, focusing on advanced admin tools and automation.",
		image: "/experience/Suhub.jpeg",
		highlights: [
			"Built a <b>responsive admin dashboard</b> using <b>Next.js and React</b>, featuring advanced concepts like server actions, async-state management and caching.",
			"Used <b>AI</b> for implementing a <b>profile autofill feature</b> using a CV or LinkedIn profile, streamlining the signup process and enhancing UX for <b>+15,000 users</b>.",
			"<b>Cut company costs</b> by building an <b>in-house recommendation system</b>, replacing the AWS paid graph service.",
			"Built an <b>algorithm to segment jobs</b> from multiple platforms, tailored to healthcare professionals' profiles and experience and cutting the cost to use AI models.",
			"Implemented <b>AI-powered post guidelines</b> and rule detection for communities violations.",
			"Created <b>data-rich tables</b> with sorting, pagination and filters.",
		],
		link: "https://suhub.healthcare",
	},
	{
		company: "ECG Team",
		role: "Software Developer - part time",
		period: "6 Months",
		description:
			"Contributed to the development and optimization of CardioDi’s cloud-based ECG management platform for enhanced workflow automation and clinical efficiency.",
		image: "/experience/ECG.png",
		highlights: [
			"Contributed to the development and optimization of CardioDi’s <b>cloud-based ECG management platform</b>, enhancing full-cycle workflow automation from acquisition to reporting.",
			"Collaborated on <b>integrations of ECG systems</b> and platforms using <b>DICOM standards</b>, improving clinical efficiency.",
			"Contributed to <b>open source NPM package</b> (ecg-dicom-web-viewer) for parsing and viewing ECG files, enhancing accessibility for developers.",
			"Created <b>data-rich tables</b> with sorting, pagination and filters.",
		],
		link: "https://www.ecg.team",
	},
	{
		company: "Bloom (YC W22)",
		role: "Intern",
		period: "1 Year",
		description:
			"Joined a fast-growing fin-tech startup as a fullstack intern, contributing to rapid product development and impactful solutions.",
		image: "/experience/Bloom.jpg",
		highlights: [
			"Developed <b>in-house admin dashboards/tools</b> to help manage <b>+10,000 clients</b> for the first Y-combinator backed startup in Sudan.",
			"Designed and built the company's <b>Help Center website</b> to reduce the number of incoming tickets.",
			"Worked on customer support <b>self-help strategies</b> to improve user satisfaction.",
		],
		// link: "https://www.elevatepay.co/",
	},
];
