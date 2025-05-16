import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Header from "./components/header";
import Nav from "./components/nav";
import Projects from "./components/projects";

const Home = () => {
	return (
		<div className="text-white">
			<Nav></Nav>
			<Header></Header>
			<About></About>
			<Projects></Projects>
			<Experience></Experience>
			<Contact></Contact>
		</div>
	);
};

export default Home;
