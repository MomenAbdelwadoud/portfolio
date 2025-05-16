import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Header from "./components/header";
import Nav from "./components/nav";
import Projects from "./components/projects";
import ScrollDots from "./components/scroll-dots";

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
