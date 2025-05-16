import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Header from "./components/header";
import Nav from "./components/nav";
import Projects from "./components/projects";
import ScrollDots from "./components/scroll-dots";

export const metadata = {
	title: "Momen Elkhalifa | Fullstack Developer",
	description:
		"A fullstack developer skilled in React, Next.js, TypeScript, and modern web technologies. View projects, experience, and contact information.",
	keywords: [
		"Momen Abdelwadoud",
		"Momen Elkhalifa",
		"Momen Abdelwadoud Elkhalifa",
		"Fullstack Developer",
		"Momen Portfolio",
		"Momen Elkhalifa Portfolio",
	],
	authors: [{name: "Momen Abdelwadoud Elkhalifa"}],
	openGraph: {
		title: "Momen Elkhalifa | Fullstack Developer",
		description:
			"A fullstack developer skilled in React, Next.js, TypeScript, and modern web technologies.",
		url: "https://momen.netlify.app",
		siteName: "Momen Elkhalifa Portfolio",
		type: "website",
	},
};

const Home = () => {
	return (
		<div className="text-white">
			<Nav></Nav>
			<ScrollDots></ScrollDots>
			<Header></Header>
			<About></About>
			<Experience></Experience>
			<Projects></Projects>
			<Contact></Contact>
		</div>
	);
};

export default Home;
