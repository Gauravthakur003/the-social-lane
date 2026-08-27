import { motion } from "framer-motion";
import Container from "../common/Container";

function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="container">
        <motion.div
          className="blog-hero-content"
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
          <span className="section-label">
            INSIGHTS & IDEAS
          </span>

          <h1>
            Things Worth
            <br />
            <span>Talking About.</span>
          </h1>

          <p>
            Ideas, observations and perspectives
            on brands, culture, creators and the
            constantly changing digital world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default BlogHero;