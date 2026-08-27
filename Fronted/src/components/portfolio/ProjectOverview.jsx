import { motion } from "framer-motion";

function ProjectOverview({ project }) {
  if (!project) {
    return null;
  }

  return (
    <section className="project-overview section">
      <div className="container">
        <div className="project-overview-grid">
          <motion.div
            className="project-overview-intro"
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
            <span className="section-label">
              OVERVIEW
            </span>

            <h2>
              Turning a challenge
              <br />
              into an opportunity.
            </h2>
          </motion.div>

          <motion.div
            className="project-overview-description"
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
              delay: 0.1,
            }}
          >
            <p>
              {project.description}
            </p>

            <div className="project-services">
              <span>
                SERVICES
              </span>

              <div>
                {project.services?.map((service) => (
                  <span
                    className="project-service-tag"
                    key={service}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-location">
              <span>
                LOCATION
              </span>

              <strong>
                {project.location}
              </strong>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProjectOverview;