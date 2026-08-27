import { motion } from "framer-motion";
import Container from "../common/Container";

function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="container">
        <motion.div
          className="contact-hero-content"
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
            LET'S TALK
          </span>

          <h1>
            Have An Idea?
            <br />
            <span>Let's Build It.</span>
          </h1>

          <p>
            Tell us what you're working on,
            what you're trying to achieve and
            where you want to go next.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;