
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Megaphone,
  Radio,
  CalendarDays,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

import SectionHeading from "../components/SectionHeading.jsx";
import { services, projects } from "../data/content.js";
import logo from "../assets/images/logo-top.png";

const capabilities = [
  ["Creator networks", "01", Users],
  ["Brand storytelling", "02", Megaphone],
  ["Digital amplification", "03", Radio],
  ["On-ground experiences", "04", CalendarDays],
];

const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const floatingTransition = {
  duration: 5,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

function Reveal({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={revealUp}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="container hero-grid">

          {/* HERO CONTENT */}
          <motion.div
            className="hero-copy"
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={stagger}
          >
            <motion.span className="eyebrow" variants={revealUp}>
              <i className="eyebrow-dot" />
              INFLUENCE. CULTURE. IMPACT.
            </motion.span>

            <motion.h1 variants={revealUp}>
              Make your brand
              <br />
              part of the
              <br />
              <span>conversation.</span>
            </motion.h1>

            <motion.p variants={revealUp}>
              We bring brands, creators and communities together to create
              campaigns that connect, engage and move people.
            </motion.p>

            <motion.div className="hero-actions" variants={revealUp}>
              <Link className="primary-btn" to="/contact">
                Start a project
                <ArrowUpRight size={18} />
              </Link>

              <Link className="text-btn" to="/portfolio">
                Explore our work
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div className="hero-proof" variants={revealUp}>
              <span className="hero-proof-line" />
              <p>
                <strong>Ideas meet execution.</strong>
                <br />
                Across digital and on-ground.
              </p>
            </motion.div>
          </motion.div>

          {/* REFINED HERO VISUAL */}
          <motion.div
            className="hero-art"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scale: 0.94, x: 25 }
            }
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="hero-art-glow" />

            {/* ORBIT */}
            <motion.div
              className="art-orbit orbit-one"
              animate={shouldReduceMotion ? {} : { rotate: 360 }}
              transition={{
                duration: 65,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="art-orbit orbit-two"
              animate={shouldReduceMotion ? {} : { rotate: -360 }}
              transition={{
                duration: 90,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* CENTRAL BRAND ELEMENT */}
            <motion.div
              className="art-core"
              animate={
                shouldReduceMotion ? {} : { y: [0, -9, 0] }
              }
              transition={floatingTransition}
            >
              <div className="hero-core-inner">
                <img
                  src={logo}
                  alt="The Social Lane"
                  className="hero-logo"
                />

                <span className="core-label">
                  THE SOCIAL LANE
                </span>

                <strong>
                  CONNECT
                  <br />
                  CREATE
                  <br />
                  <em>GROW.</em>
                </strong>

                <span className="core-arrow">
                  <ArrowUpRight />
                </span>
              </div>
            </motion.div>

            {/* CREATOR ELEMENT */}
            <motion.div
              className="floating-card float-top"
              animate={
                shouldReduceMotion ? {} : { y: [0, -8, 0] }
              }
              transition={floatingTransition}
            >
              <span className="float-icon">
                <Users />
              </span>

              <div>
                <b>Creators</b>
                <small>Community first</small>
              </div>
            </motion.div>

            {/* CAMPAIGN ELEMENT */}
            <motion.div
              className="floating-card float-bottom"
              animate={
                shouldReduceMotion ? {} : { y: [0, 8, 0] }
              }
              transition={{
                ...floatingTransition,
                duration: 5.5,
                delay: 0.5,
              }}
            >
              <span className="float-icon blue">
                <Megaphone />
              </span>

              <div>
                <b>Campaigns</b>
                <small>Built to travel</small>
              </div>
            </motion.div>

            {/* SMALL VISUAL DETAIL */}
            <motion.div
              className="hero-art-accent"
              animate={
                shouldReduceMotion ? {} : { rotate: [0, 12, 0] }
              }
              transition={floatingTransition}
            >
              <Sparkles />
            </motion.div>

            <div className="art-index">01 / THE SOCIAL LANE</div>
          </motion.div>
        </div>
      </section>

      {/* ================= BRAND STRIP ================= */}
      <section className="brand-strip">
        <div className="container strip-inner">
          <span className="strip-label">OUR WORLD</span>

          <div className="strip-items">
            <span>BRANDS</span>
            <i />
            <span>CREATORS</span>
            <i />
            <span>COMMUNITIES</span>
            <i />
            <span>EXPERIENCES</span>
            <i />
            <span>INFLUENCE</span>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="section container">
        <Reveal>
          <div className="intro-grid">
            <SectionHeading
              kicker="WHO WE ARE"
              title={
                <>
                  Good stories deserve
                  <br />
                  <span>to travel further.</span>
                </>
              }
            />

            <div className="intro-copy">
              <p>
                The Social Lane is a creative marketing and execution
                partner helping brands show up where culture happens.
                From creator collaborations to large-scale activations,
                we turn ideas into coordinated action.
              </p>

              <Link className="under-link" to="/about">
                Get to know us
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>

        <motion.div
          className="capability-grid"
          variants={stagger}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {capabilities.map(([name, number, Icon]) => (
            <motion.div
              className="capability"
              key={number}
              variants={revealUp}
              whileHover={
                shouldReduceMotion ? {} : { y: -5 }
              }
              transition={{ duration: 0.25 }}
            >
              <div className="capability-top">
                <span>{number}</span>
                <Icon />
              </div>

              <h3>{name}</h3>
              <span className="capability-line" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section services-preview">
        <div className="container">
          <Reveal>
            <div className="section-head-row">
              <SectionHeading
                kicker="WHAT WE DO"
                title={
                  <>
                    One lane. Many ways
                    <br />
                    <span>to make an impact.</span>
                  </>
                }
                description="Strategy, creators and execution — connected under one roof."
              />

              <Link className="outline-btn" to="/services">
                All services
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>

          <motion.div
            className="service-list"
            variants={stagger}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.slice(0, 4).map((service) => (
              <motion.div key={service.n} variants={revealUp}>
                <Link className="service-row" to="/services">
                  <span className="service-number">
                    {service.n}
                  </span>

                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <ArrowUpRight className="service-arrow" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SELECTED WORK ================= */}
      <section className="section container">
        <Reveal>
          <div className="section-head-row">
            <SectionHeading
              kicker="SELECTED WORK"
              title={
                <>
                  Work that gets
                  <br />
                  <span>people talking.</span>
                </>
              }
              description="A snapshot of campaigns, collaborations and experiences."
            />

            <Link className="outline-btn" to="/portfolio">
              View portfolio
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <motion.div
          className="project-grid home-projects"
          variants={stagger}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.title}
              variants={revealUp}
              whileHover={
                shouldReduceMotion ? {} : { y: -7 }
              }
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/portfolio"
                className={`project-card ${project.tone}`}
              >
                <div className="project-visual">
                  <span className="project-index">
                    0{index + 1}
                  </span>

                  <span className="visual-word">
                    {project.title.split(" ")[0]}
                  </span>

                  <span className="visual-stamp">
                    {project.tag}
                  </span>
                </div>

                <div className="project-info">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <ArrowUpRight />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="home-cta">
        <motion.div
          className="container cta-inner"
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 25 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <span className="eyebrow light">
              YOUR NEXT BIG IDEA STARTS HERE
            </span>

            <h2>
              Let's create a little
              <br />
              <em>noise that matters.</em>
            </h2>
          </div>

          <Link className="circle-link" to="/contact">
            <span>LET'S TALK</span>
            <ArrowUpRight />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
