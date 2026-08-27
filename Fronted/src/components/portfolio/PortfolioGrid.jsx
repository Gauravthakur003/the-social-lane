import { useMemo, useState } from "react";
import Container from "../common/Container";
import PortfolioCard from "../home/PortfolioCard";

import {
  portfolioCategories,
  portfolioProjects,
} from "../../data/portfolio";

function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioProjects;
    }

    return portfolioProjects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section className="portfolio-grid-section">
      <Container>
        {/* Category Filters */}
        <div className="portfolio-filters">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "portfolio-filter active"
                  : "portfolio-filter"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              item={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PortfolioGrid;