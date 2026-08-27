import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Button from "../common/Button";

function ProjectCTA() {
  return (
    <section className="project-cta section">

      <div className="container">

        <div className="project-cta-box">

          <span className="section-label">
            HAVE A PROJECT?
          </span>

          <h2>
            Let's make
            <br />
            something matter.
          </h2>

          <p>
            Have a brand, campaign or idea
            that needs to move forward?
          </p>

          <Link
            to="/contact"
            className="project-cta-button"
          >
            Start a Conversation

            <ArrowUpRight size={17} />
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ProjectCTA;