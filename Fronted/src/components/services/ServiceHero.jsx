import { motion } from "framer-motion";

function ServiceHero() {
  return (
    <section className="services-page-hero">

      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="services-hero-orb services-hero-orb-one"
      />

      <div
        aria-hidden="true"
        className="services-hero-orb services-hero-orb-two"
      />

      <div
        aria-hidden="true"
        className="services-hero-grid"
      />

      <div className="container">
        <div className="services-page-hero-content">

          <motion.div
            className="services-hero-label"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <span />
            WHAT WE DO
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            We make
            <br />
            <span>brands move.</span>
          </motion.h1>

          <motion.div
            className="services-hero-bottom"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
          >
            <p>
              We combine strategy, creativity, creators and
              execution to build brands people notice,
              remember and talk about.
            </p>

            <div className="services-hero-scroll">
              <span>SCROLL TO EXPLORE</span>
              <div className="services-hero-scroll-line" />
            </div>
          </motion.div>

        </div>
      </div>

      <div className="services-hero-number" aria-hidden="true">
        06
      </div>

    </section>
  );
}

export default ServiceHero;