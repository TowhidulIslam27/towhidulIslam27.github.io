import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ResearchInterests from "./components/ResearchInterests";
import Projects from "./components/Projects";
import ResearchProjects from "./components/ResearchProjects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ResearchInterests />
        <Projects />
        <ResearchProjects />
        <Experience />
        <Education />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
