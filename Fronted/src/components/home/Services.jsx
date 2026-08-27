import { motion } from "framer-motion";

import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
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
          className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1fr_0.7fr] lg:items-end"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              WHAT WE DO
            </span>

            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.04em] text-[#06111f] sm:text-5xl lg:text-6xl">
              Everything Your
              <br />
              Brand Needs.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-500 lg:justify-self-end">
            From strategy to execution, we bring together creativity,
            technology and people to create meaningful brand experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <ServiceCard
                service={service}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;