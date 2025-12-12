import Navbar from "./components/Navbar";
import HeroAbout from "./components/Hero";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



export default function App() {
  return (
    <>
      <Navbar />
      <HeroAbout />
      <Skills />
      <Languages />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
