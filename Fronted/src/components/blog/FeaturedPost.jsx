import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Button from "../common/Button";
function FeaturedPost({ post }) {
  return (
    <motion.article
      className="featured-post"
      initial={{
        opacity: 0,
        y: 30,
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
        duration: 0.7,
      }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="featured-post-image"
      >
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
        />

        <span className="featured-post-tag">
          FEATURED
        </span>
      </Link>

      <div className="featured-post-content">
        <div className="blog-meta">
          <span>{post.category}</span>

          <span>•</span>

          <span>{post.readTime}</span>

          <span>•</span>

          <span>{post.date}</span>
        </div>

        <h2>
          {post.title}
        </h2>

        <p>
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="text-link"
        >
          Read Article

          <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}

export default FeaturedPost;