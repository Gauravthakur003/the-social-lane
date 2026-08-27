import { motion } from "framer-motion";
import Container from "../common/Container";

function ProjectGallery({ project }) {
  return (
    <section className="project-gallery section">

      <div className="container">

        <div className="project-gallery-heading">

          <span className="section-label">
            THE WORK
          </span>

          <h2>
            Inside the
            <br />
            campaign.
          </h2>

        </div>

        <div className="project-gallery-grid">

          {project.gallery.map(
            (image, index) => (
              <motion.figure
                className={
                  index === 0
                    ? "gallery-image gallery-image-large"
                    : "gallery-image"
                }
                key={image}
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
                  duration: 0.6,
                }}
              >

                <img
                  src={image}
                  alt={`${project.title} project visual ${index + 1}`}
                  loading="lazy"
                />

              </motion.figure>
            )
          )}

        </div>

      </div>

    </section>
  );
}

export default ProjectGallery;