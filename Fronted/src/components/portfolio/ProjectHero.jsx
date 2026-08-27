import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";

function ProjectHero({ project }) {
  if (!project) {
    return null;
  }

  return (
    <section className="project-hero">

      {/* Background Image */}
      <div className="project-hero-background">
        <img
          src={project.coverImage}
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* Dark Overlay */}
      <div className="project-hero-overlay" />

      <div className="container">

        <motion.div
          className="project-hero-content"

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
            ease: "easeOut",
          }}
        >

          {/* Back Button */}
          <Link
            to="/portfolio"
            className="project-back-link"
          >
            <ArrowLeft size={15} />

            <span>
              Back to Work
            </span>
          </Link>


          {/* Project Meta */}
          <div className="project-hero-meta">

            <span>
              {project.category}
            </span>

            <span>
              •
            </span>

            <span>
              {project.year}
            </span>

          </div>


          {/* Project Title */}
          <h1>
            {project.title}
          </h1>


          {/* Project Description */}
          <p>
            {project.shortDescription}
          </p>


          {/* Client Information */}
          <div className="project-hero-client">

            <span>
              CLIENT
            </span>

            <strong>
              {project.client}
            </strong>

            <ArrowUpRight
              size={16}
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default ProjectHero;