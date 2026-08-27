import { motion } from "framer-motion";
import Container from "../common/Container";

function ProjectStrategy({ project }) {
  return (
    <section className="project-strategy section">

      <div className="container">

        <div className="project-story-grid">

          <motion.div
            className="project-story-label"
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <span className="section-label">
              02 / STRATEGY
            </span>
          </motion.div>

          <motion.div
            className="project-story-content"
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
          >

            <h2>
              The strategy.
            </h2>

            <p>
              {project.strategy}
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default ProjectStrategy;