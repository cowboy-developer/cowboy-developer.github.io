import SobreMi from "./sections/SobreMi";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Tecnologias from "./sections/Tecnologias";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => (
    <>
            {/*<ShowcaseSection />*/}
        <Navbar />
        <Hero />
        <Tecnologias />
        <LogoShowcase />
        <Experience />
        <FeatureCards />
        <SobreMi />
        <Contact />
        <Footer />
    </>
);

export default App;
