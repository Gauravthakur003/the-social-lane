import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Button from "../common/Button";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#06111f] py-24 text-white sm:py-28 lg:py-36">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]"
      />

      {/* Secondary glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-blue-300 backdrop-blur-md">
            <Sparkles size={13} />
            HAVE AN IDEA?
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Let's Create
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Something Impactful.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Tell us what you're building, launching or trying to solve.
            Let's turn the idea into something people remember.
          </p>

          {/* CTA */}
          <Link
            to="/contact"
            className="group mx-auto mt-10 inline-flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#06111f] shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-2xl sm:px-7 sm:py-4"
          >
            Start a Conversation

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#06111f] text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={18} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;