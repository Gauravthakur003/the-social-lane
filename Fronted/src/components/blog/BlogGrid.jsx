import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  blogCategories,
  blogPosts,
} from "../../data/blog";

import BlogCard from "./BlogCard";

function BlogGrid() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] =
    useState("");

  const filteredPosts = useMemo(() => {
    const normalizedSearch =
      search.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const categoryMatches =
        activeCategory === "All" ||
        post.category === activeCategory;

      if (!normalizedSearch) {
        return categoryMatches;
      }

      const searchableText = `
        ${post.title}
        ${post.excerpt}
        ${post.category}
      `.toLowerCase();

      return (
        categoryMatches &&
        searchableText.includes(
          normalizedSearch
        )
      );
    });
  }, [activeCategory, search]);

  return (
    <section className="blog-grid-section section">
      <div className="container">

        <div className="blog-toolbar">

          <div className="blog-filters">
            {blogCategories.map(
              (category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    activeCategory === category
                      ? "blog-filter active"
                      : "blog-filter"
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>
              )
            )}
          </div>

          <label
            className="blog-search"
          >
            <Search size={15} />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
              placeholder="Search insights..."
              aria-label="Search insights"
            />
          </label>

        </div>

        <div className="blog-results">
          {filteredPosts.length}{" "}
          {filteredPosts.length === 1
            ? "article"
            : "articles"}
        </div>

        {filteredPosts.length > 0 ? (
          <motion.div
            layout
            className="blog-grid"
          >
            {filteredPosts.map(
              (post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  index={index}
                />
              )
            )}
          </motion.div>
        ) : (
          <div className="blog-empty">
            <h3>
              Nothing found.
            </h3>

            <p>
              Try another keyword or category.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default BlogGrid;