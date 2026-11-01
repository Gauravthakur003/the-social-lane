import {
  ArrowUpRight,
  Target,
  Lightbulb,
  Handshake,
  Compass,
} from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import saurabh from "../assets/images/Saurabh.jpeg";
import sahil from "../assets/images/Sahil.jpeg";
const values = [
  [
    "Think in culture",
    "We pay attention to what people care about, share and show up for.",
    Compass,
  ],
  [
    "Make it meaningful",
    "Every execution should have a clear purpose and a reason to exist.",
    Target,
  ],
  [
    "Stay curious",
    "Fresh thinking keeps our work relevant, responsive and full of possibility.",
    Lightbulb,
  ],
  [
    "Build together",
    "The best outcomes happen when brands, creators and teams work as one.",
    Handshake,
  ],
];
export default function About() {
  return (
    <>
      <PageHero
        kicker="A LITTLE ABOUT US"
        number="01"
        title={
          <>
            We connect the
            <br />
            <span>people behind</span>
            <br />
            the impact.
          </>
        }
        description="The Social Lane works at the intersection of creators, brands and culture — bringing the right people and ideas together."
      />
      <section className="section container about-intro">
        <SectionHeading
          kicker="OUR POINT OF VIEW"
          title={
            <>
              Attention is earned.
              <br />
              <span>Connection is built.</span>
            </>
          }
          description="We believe the strongest campaigns do more than get seen. They create a moment, start a conversation and leave something behind."
        />
        <div className="about-statement">
          <span>OUR APPROACH</span>
          <p>
            From the first brief to the final on-ground detail, we bring
            creative thinking and hands-on execution together. We work across
            influencer marketing, entertainment promotions, digital
            amplification, events and operational support.
          </p>
        </div>
      </section>
      <section className="section values-section">
        <div className="container">
          <SectionHeading kicker="WHAT GUIDES US" title="The way we work." />
          <div className="values-grid">
            {values.map(([t, d, I], i) => (
              <article className="value-card" key={t}>
                <span>0{i + 1}</span>
                <I />
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container founders-section">
        <SectionHeading
          kicker="THE PEOPLE BEHIND THE LANE"
          title={
            <>
              Good work starts
              <br />
              <span>with good people.</span>
            </>
          }
          description="A team built around ideas, relationships and getting things done."
        />
        <div className="founders-grid">
          <article className="founder-card">
            <div className="founder-photo">
              <img src={saurabh} alt="Saurabh Thakur" />
             
            </div>
            <h3>Saurabh Thakur</h3>
            <p>Founder</p>
          </article>
          <article className="founder-card">
            <div className="founder-photo founder-placeholder">
            <img src={sahil} alt="Sahil Trivedi" />
              <div className="initials">ST</div>
              
            </div>
            <h3>Sahil Trivedi</h3>
            <p>Founder</p>
          </article>
        </div>
       
      </section>
    </>
  );
}
