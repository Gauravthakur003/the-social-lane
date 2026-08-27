import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";

function Newsletter() {
  const [email, setEmail] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
  }

  return (
    <section className="newsletter-section">
      <div className="container">

        <motion.div
          className="newsletter-box"
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
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="newsletter-icon">
            <Mail size={20} />
          </div>

          <div className="newsletter-content">
            <span className="section-label">
              STAY IN THE LOOP
            </span>

            <h2>
              Get Better
              <br />
              <span>Ideas.</span>
            </h2>

            <p>
              Get occasional insights on
              marketing, creators, culture and
              digital strategy.
            </p>
          </div>

          {!submitted ? (
            <form
              className="newsletter-form"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(
                    event.target.value
                  )
                }
                placeholder="Your email address"
                required
                aria-label="Email address"
              />

              <button type="submit">
                Subscribe

                <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <div className="newsletter-success">
              You're on the list.
            </div>
          )}

        </motion.div>

      </div>
    </section>
  );
}

export default Newsletter;