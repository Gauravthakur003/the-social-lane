import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import { portfolioProjects } from "../../data/portfolio";

function FeaturedWork() {
  const featuredProjects = portfolioProjects.slice(0, 3);

  return (
    <section className="featured-work section">
      <Container>
        <SectionTitle
          eyebrow="Selected Work"
          title="Work That Creates Impact"
          description="A selection of campaigns, digital experiences and brand transformations we've helped bring to life."
        />

        <div className="featured-work-grid">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="portfolio-card"
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className="portfolio-image-wrapper">
                <img
                  src={project.coverImage}
                  alt={`${project.title} project`}
                  className="portfolio-image"
                  loading="lazy"
                />

                <div className="portfolio-image-overlay" />

                <span className="portfolio-category">
                  {project.category}
                </span>

                <Link
                  to={`/portfolio/${project.slug}`}
                  className="portfolio-open"
                  aria-label={`View ${project.title} project`}
                >
                  <ArrowUpRight size={20} />
                </Link>
              </div>

              <div className="portfolio-content">
                <div className="portfolio-meta">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.shortDescription}</p>

                {project.results?.length > 0 && (
                  <div className="portfolio-stats">
                    {project.results
                      .slice(0, 3)
                      .map((result) => (
                        <div
                          className="portfolio-stat"
                          key={result.label}
                        >
                          <strong>
                            {result.value}
                          </strong>

                          <span>
                            {result.label}
                          </span>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="featured-work-action">
          <Link
            to="/portfolio"
            className="featured-work-link"
          >
            View All Work

            <ArrowUpRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedWork;