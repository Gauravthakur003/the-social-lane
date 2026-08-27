import { motion } from "framer-motion";
import Container from "../common/Container";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container">

        <motion.div
          className="about-hero-content"
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className="section-label">
            WHO WE ARE
          </span>

          <h1>
            We Make Brands
            <br />

            <span>Impossible To Ignore.</span>
          </h1>

          <p>
            The Social Lane is a digital-first
            creative agency helping ambitious
            brands connect with people through
            strategy, creativity, creators and
            technology.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default AboutHero;