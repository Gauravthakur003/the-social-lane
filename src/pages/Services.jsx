import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { services } from "../data/content.js";
export default function Services() {
  return (
    <>
      <PageHero
        kicker="OUR CAPABILITIES"
        number="02"
        title={
          <>
            From big idea
            <br />
            to <span>real-world impact.</span>
          </>
        }
        description="A connected set of creative, digital and on-ground services designed to help brands move with culture."
      />
      <section className="section container">
        <div className="section-head-row">
          <SectionHeading
            kicker="WHAT WE BRING TO THE TABLE"
            title="One partner. End-to-end execution."
            description="Pick a capability or bring us a challenge. We'll help connect the dots."
          />
          <span className="side-note">STRATEGY / CREATORS / EXECUTION</span>
        </div>
        <div className="services-full">
          {services.map((s) => (
            <article className="service-detail" key={s.n}>
              <span className="service-number">{s.n}</span>
              <div>
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <div className="tag-list">
                  {s.tags.map((t) => (
                    <span key={t}>
                      <Check size={13} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Link to="/contact" aria-label={`Enquire about ${s.title}`}>
                <ArrowUpRight />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="home-cta">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow light">HAVE A BRIEF?</span>
            <h2>
              Let's find the right
              <br />
              <em>way to make it happen.</em>
            </h2>
          </div>
          <Link className="circle-link" to="/contact">
            <span>LET'S TALK</span>
            <ArrowUpRight />
          </Link>
        </div>
      </section>
    </>
  );
}
