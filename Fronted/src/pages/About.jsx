import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutStory from "../components/about/AboutStory";
import Values from "../components/about/Values";

function About() {
  return (
    <div className="page">

      <Navbar />

      <main>

        <AboutHero />

        <AboutStory />

        <AboutStats />

        <Values />

      </main>

    </div>
  );
}

export default About;