import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function PortfolioCard({ item, index = 0 }) {
  if (!item) return null;

  return (
    <motion.article
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
          src={item.coverImage}
          alt={`${item.title} project`}
          className="portfolio-image"
          loading="lazy"
        />

        <div className="portfolio-image-overlay" />

        <span className="portfolio-category">
          {item.category}
        </span>

        <Link
          to={`/portfolio/${item.slug}`}
          className="portfolio-open"
          aria-label={`View ${item.title} project`}
        >
          <ArrowUpRight size={20} />
        </Link>
      </div>

      <div className="portfolio-content">
        <div className="portfolio-meta">
          <span>{item.client}</span>
          <span>{item.year}</span>
        </div>

        <h3>{item.title}</h3>

        <p>{item.shortDescription}</p>

        {item.results?.length > 0 && (
          <div className="portfolio-stats">
            {item.results.slice(0, 3).map((result) => (
              <div
                className="portfolio-stat"
                key={result.label}
              >
                <strong>{result.value}</strong>

                <span>{result.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default PortfolioCard;