import Navbar from "../components/layout/Navbar";


import Hero from "../components/home/Hero";
import TrustedBrands from "../components/home/TrustedBrands";
import Services from "../components/home/Services";
import FeaturedWork from "../components/home/FeaturedWork";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";
function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Trusted Brands */}
        <TrustedBrands />

        {/* Services */}
        <Services />
        {/* Process */}
        <Process />
        {/* Selected Work */}
        <FeaturedWork />

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <CTA />
      </main>
    </div>
  );
}

export default Home;