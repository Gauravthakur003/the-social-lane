import Navbar from "../components/layout/Navbar";
import ServiceHero from "../components/services/ServiceHero";
import ServiceDetailCard from "../components/services/ServiceDetailCard";
import Footer from "../components/layout/Footer";
import { servicePageItems } from "../data/servicesPage";

function Services() {
  return (
    <div className="page services-page">
      <Navbar />

      <main>
        <ServiceHero />

        <section className="services-detail-section section">
          <div className="container">

            <div className="services-intro">
              <div className="services-intro-label">
                <span className="services-intro-dot" />
                OUR CAPABILITIES
              </div>

              <h2>
                Built for brands
                <br />
                <span>that want more.</span>
              </h2>

              <p>
                Strategy, creativity, creators and execution —
                everything comes together to move your brand forward.
              </p>
            </div>

            <div className="services-detail-grid">
              {servicePageItems.map((service, index) => (
                <ServiceDetailCard
                  key={service.id}
                  service={service}
                  index={index}
                />
              ))}
            </div>

          </div>
        </section>

        <section className="services-closing">
          <div className="container">
            <div className="services-closing-inner">

              <span className="section-label">
                LET'S BUILD SOMETHING
              </span>

              <h2>
                Your next
                <br />
                <span>big move.</span>
              </h2>

              <p>
                Have a challenge, campaign or idea?
                Let's turn it into something people remember.
              </p>

              <a href="/contact" className="services-closing-button">
                START A CONVERSATION
                <span>↗</span>
              </a>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Services;