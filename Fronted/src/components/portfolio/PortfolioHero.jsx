import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectHero({ project }) {
  // Safety check
  if (!project) {
    return (
      <section className="project-hero">
        <div className="container">
          <div className="project-hero-content">
            <h1>Project Not Found</h1>

            <Link
              to="/portfolio"
              className="project-back-link"
            >
              <ArrowLeft size={15} />
              Back to work
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="project-hero">

      {/* Background */}
      <div className="project-hero-background">
        <img
          src={project.coverImage}
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* Overlay */}
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
          }}
        >

          {/* Back */}
          <Link
            to="/portfolio"
            className="project-back-link"
          >
            <ArrowLeft size={15} />
            Back to work
          </Link>

          {/* Meta */}
          <div className="project-hero-meta">

            <span>
              {project.category}
            </span>

            <span>•</span>

            <span>
              {project.year}
            </span>

          </div>

          {/* Title */}
          <h1>
            {project.title}
          </h1>

          {/* Description */}
          <p>
            {project.shortDescription}
          </p>

          {/* Client */}
          <div className="project-hero-client">

            <span>
              CLIENT
            </span>

            <strong>
              {project.client}
            </strong>

            <ArrowUpRight size={16} />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default ProjectHero;