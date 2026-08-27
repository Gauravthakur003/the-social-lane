import { motion } from "framer-motion";
import Container from "../common/Container";

function ProjectExecution({ project }) {
  return (
    <section className="project-execution section">

      <div className="container">

        <div className="project-execution-heading">

          <span className="section-label">
            03 / EXECUTION
          </span>

          <h2>
            From strategy
            <br />
            to reality.
          </h2>

        </div>

        <div className="execution-grid">

          {project.execution.map(
            (item, index) => (
              <motion.div
                className="execution-item"
                key={item}
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
                  delay: index * 0.05,
                }}
              >

                <span>
                  0{index + 1}
                </span>

                <p>
                  {item}
                </p>

              </motion.div>
            )
          )}

        </div>

      </div>

    </section>
  );
}

export default ProjectExecution;