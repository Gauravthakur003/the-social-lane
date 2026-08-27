import Navbar from "../components/layout/Navbar";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import Footer from "../components/layout/Footer";

function Portfolio() {
  return (
    <>
      <Navbar />

      <main>
        <PortfolioHero />

        <PortfolioGrid />
      </main>

      <Footer />
    </>
  );
}

export default Portfolio;