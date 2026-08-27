import { motion } from "framer-motion";
import Container from "../common/Container";


function AboutStory() {
  return (
    <section className="about-story section">
      <div className="container">

        <div className="about-story-grid">

          <motion.div
            className="about-story-heading"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span className="section-label">
              OUR STORY
            </span>

            <h2>
              Built For
              <br />
              The New
              <br />
              <span className="gradient-text">
                Digital World.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="about-story-content"
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="about-lead">
              Brands today don't just compete for
              market share. They compete for
              attention.
            </p>

            <p>
              That's why we built The Social Lane
              around one simple belief: great
              marketing should feel less like
              advertising and more like something
              people genuinely want to engage with.
            </p>

            <p>
              We bring strategy, creativity,
              influencer marketing, social media,
              production and execution together
              under one roof.
            </p>

            <p>
              The result is work that doesn't just
              look good — it creates conversations,
              builds communities and drives
              measurable business outcomes.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default AboutStory;