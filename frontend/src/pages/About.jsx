
import {
  ArrowUpRight,
  Target,
  Lightbulb,
  Handshake,
  Compass,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import saurabh from "../assets/images/Saurabh.jpeg";
import sahil from "../assets/images/Sahil.jpeg";

const values = [
  {
    title: "Think in culture",
    description:
      "We pay attention to what people care about, share and show up for.",
    icon: Compass,
    number: "01",
  },
  {
    title: "Make it meaningful",
    description:
      "Every execution should have a clear purpose and a reason to exist.",
    icon: Target,
    number: "02",
  },
  {
    title: "Stay curious",
    description:
      "Fresh thinking keeps our work relevant, responsive and full of possibility.",
    icon: Lightbulb,
    number: "03",
  },
  {
    title: "Build together",
    description:
      "The best outcomes happen when brands, creators and teams work as one.",
    icon: Handshake,
    number: "04",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

export default function About() {
  return (
    <main className="about-page">
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

      {/* INTRO */}
      <section className="section container about-intro">
        <motion.div
          className="about-intro-heading"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
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
        </motion.div>

        <motion.div
          className="about-statement"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="statement-top">
            <span className="statement-label">
              <Sparkles size={15} />
              OUR APPROACH
            </span>
            <span className="statement-index">01 / 04</span>
          </div>

          <p>
            From the first brief to the final on-ground detail, we bring
            <span> creative thinking </span>
            and hands-on execution together. We work across influencer
            marketing, entertainment promotions, digital amplification,
            events and operational support.
          </p>

          <div className="statement-bottom">
            <span>Ideas with purpose. Execution with impact.</span>
            <ArrowUpRight size={22} />
          </div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="section values-section">
        <div className="container">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionHeading
              kicker="WHAT GUIDES US"
              title={
                <>
                  The way <span>we work.</span>
                </>
              }
              description="A few principles that shape every relationship, idea and experience we create."
            />
          </motion.div>

          <motion.div
            className="values-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {values.map(({ title, description, icon: Icon, number }) => (
              <motion.article
                className="value-card"
                key={title}
                variants={reveal}
                whileHover={{ y: -9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="value-card-top">
                  <span>{number}</span>
                  <ArrowUpRight size={19} />
                </div>

                <div className="value-icon">
                  <Icon size={25} strokeWidth={1.7} />
                </div>

                <h3>{title}</h3>
                <p>{description}</p>

                <div className="value-line" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="section container founders-section">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div
          className="founders-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article
            className="founder-card"
            variants={reveal}
            whileHover={{ y: -8 }}
          >
            <div className="founder-photo">
              <img src={saurabh} alt="Saurabh Thakur" />
              <div className="founder-photo-overlay">
                <span>THE PEOPLE BEHIND THE IDEAS</span>
                <ArrowUpRight size={23} />
              </div>
            </div>
            <div className="founder-info">
              <div>
                <h3>Saurabh Thakur</h3>
                <p>Founder</p>
              </div>
              <span className="founder-number">01</span>
            </div>
          </motion.article>

          <motion.article
            className="founder-card"
            variants={reveal}
            whileHover={{ y: -8 }}
          >
            <div className="founder-photo">
              <img src={sahil} alt="Sahil Trivedi" />
              <div className="founder-photo-overlay">
                <span>THE PEOPLE BEHIND THE IDEAS</span>
                <ArrowUpRight size={23} />
              </div>
            </div>
            <div className="founder-info">
              <div>
                <h3>Sahil Trivedi</h3>
                <p>Founder</p>
              </div>
              <span className="founder-number">02</span>
            </div>
          </motion.article>
        </motion.div>
      </section>

      {/* CLOSING STRIP */}
      <section className="about-closing">
        <div className="container about-closing-inner">
          <span>THE SOCIAL LANE · CONNECT. CREATE. GROW.</span>
          <h2>
            Let's make
            <br />
            <span>something matter.</span>
          </h2>
        </div>
      </section>
    </main>
  );
}
