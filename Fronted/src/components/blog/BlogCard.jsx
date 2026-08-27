import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../common/Button";5

function BlogCard({ post, index }) {
  return (
    <motion.article
      className="blog-card"
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
        amount: 0.1,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="blog-card-image"
      >
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
        />
      </Link>

      <div className="blog-card-content">
        <div className="blog-meta">
          <span>{post.category}</span>

          <span>•</span>

          <span>{post.readTime}</span>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="blog-card-title"
        >
          {post.title}
        </Link>

        <p>
          {post.excerpt}
        </p>

        <div className="blog-card-footer">
          <span>
            {post.date}
          </span>

          <Link
            to={`/blog/${post.slug}`}
            aria-label={`Read ${post.title}`}
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default BlogCard;