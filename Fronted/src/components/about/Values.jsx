import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { aboutValues } from "../../data/about";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function Values() {
  return (
    <section className="values-section section">
      <div className="container">

        <motion.div
          className="section-header"
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
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="section-label">
            WHAT DRIVES US
          </span>

          <h2 className="section-title">
            How We
            <br />
            <span className="gradient-text">
              Think.
            </span>
          </h2>
        </motion.div>

        <div className="values-grid">
          {aboutValues.map((value, index) => (
            <motion.article
              className="value-card"
              key={value.id}
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
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="value-top">
                <span>
                  {value.number}
                </span>

                <ArrowUpRight size={18} />
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Values;