import { motion } from "framer-motion";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import TestimonialCard from "./TestimonialCard";

import { testimonials } from "../../data/testimonials";

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            CLIENT LOVE
          </span>

          <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#06111f] sm:text-5xl lg:text-6xl">
            Don't Take
            <br />
            Our Word For It.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500">
            The best proof of our work is what our partners say after
            working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;