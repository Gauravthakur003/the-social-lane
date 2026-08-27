import { motion } from "framer-motion";
import Container from "../common/Container";

function ProjectResults({ project }) {
  return (
    <section className="project-results section">

      <div className="container">

        <div className="project-results-heading">

          <span className="section-label">
            04 / RESULTS
          </span>

          <h2>
            Numbers that
            <br />
            tell the story.
          </h2>

        </div>

        <div className="project-results-grid">

          {project.results.map(
            (result, index) => (
              <motion.div
                className="result-item"
                key={result.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >

                <strong>
                  {result.value}
                </strong>

                <span>
                  {result.label}
                </span>

              </motion.div>
            )
          )}

        </div>

      </div>

    </section>
  );
}

export default ProjectResults;