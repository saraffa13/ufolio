import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Project";
import Skills from "../components/Skills";

const Home = () => {
    return <div>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
    </div>
}

export default Home;