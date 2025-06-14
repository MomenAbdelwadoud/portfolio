import Head from "next/head";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Header from "./components/header";
import Nav from "./components/nav";
import Projects from "./components/projects";
import ScrollDots from "./components/scroll-dots";

const Home = () => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>Momen Abdelwadoud Elkhalifa | Fullstack Developer Portfolio</title>
				<meta
					name="description"
					content="Portfolio of Momen Abdelwadoud Elkhalifa, a fullstack developer skilled in React, Next.js, TypeScript, and modern web technologies. View projects, experience, and contact information."
				/>
				<meta
					name="keywords"
					content="Momen Abdelwadoud, Momen Elkhalifa, Momen Abdelwadoud Elkhalifa, Fullstack Developer, Portfolio, React Developer, Next.js Developer, TypeScript Developer, Web Developer, Software Engineer"
				/>
				<meta
					name="author"
					content="Momen Abdelwadoud Elkhalifa"
				/>
				<meta
					property="og:title"
					content="Momen Abdelwadoud Elkhalifa | Fullstack Developer Portfolio"
				/>
				<meta
					property="og:description"
					content="Portfolio of Momen Abdelwadoud Elkhalifa, a fullstack developer skilled in React, Next.js, TypeScript, and modern web technologies."
				/>
				<meta
					property="og:url"
					content="https://momen.netlify.app"
				/>
				<meta
					property="og:site_name"
					content="Momen Abdelwadoud Elkhalifa Portfolio"
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<div className="text-white">
				<Nav></Nav>
				<ScrollDots></ScrollDots>
				<Header></Header>
				<About></About>
				<Experience></Experience>
				<Projects></Projects>
				<Contact></Contact>
			</div>
		</>
	);
};

export default Home;
