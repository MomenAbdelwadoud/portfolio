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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-black"
      >
        Skip to main content
      </a>
      <Nav></Nav>
      <ScrollDots></ScrollDots>
      <main id="main">
        <Header></Header>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </div>
  );
};

export default Home;
