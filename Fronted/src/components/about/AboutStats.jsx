import { motion } from "framer-motion";
import Container from "../common/Container";

import { aboutStats } from "../../data/about";

function AboutStats() {
  return (
    <section className="about-stats-section">
      <div className="container">

        <div className="about-stats-grid">
          {aboutStats.map((stat, index) => (
            <motion.div
              className="about-stat"
              key={stat.label}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <strong>{stat.value}</strong>

              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutStats;