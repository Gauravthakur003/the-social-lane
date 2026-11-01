import { ArrowUpRight, Clock3 } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { posts } from "../data/content.js";
export default function Blog() {
  return (
    <>
      <PageHero
        kicker="THINKING OUT LOUD"
        number="04"
        title={
          <>
            Ideas, culture
            <br />& <span>the conversations</span>
            <br />
            in between.
          </>
        }
        description="Perspectives on creators, campaigns, entertainment and the changing world of brand communication."
      />
      <section className="section container">
        <SectionHeading
          kicker="THE SOCIAL LANE JOURNAL"
          title="Notes from the lane."
          description="A space for ideas, observations and things worth sharing."
        />
        <div className="blog-grid">
          {posts.map((p, i) => (
            <article className="blog-card" key={p.title}>
              <div className={`blog-art blog-art-${i + 1}`}>
                <span>THE SOCIAL LANE</span>
                <strong>
                  FIELD
                  <br />
                  NOTES<span>.</span>
                </strong>
                <small>0{i + 1} / JOURNAL</small>
              </div>
              <div className="blog-meta">
                <span>{p.category}</span>
                <span>
                  <Clock3 size={13} />
                  {p.date}
                </span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="coming-soon">
                ARTICLE COMING SOON <ArrowUpRight size={14} />
              </span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
