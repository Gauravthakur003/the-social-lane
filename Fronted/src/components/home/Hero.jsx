import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  MousePointer2,
} from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#06111f] text-white">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Glow 1 */}
        <motion.div
          className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glow 2 */}
        <motion.div
          className="absolute right-[-120px] top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px]"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#06111f] to-transparent" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* =========================================
              LEFT CONTENT
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative z-20 max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-white/70 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              DIGITAL EXPERIENCE AGENCY
            </motion.div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              We Connect Brands
              <br />
              With People That
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Create Impact.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              Influencer marketing, digital solutions, creative excellence and
              operational support — all in one lane.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#06111f] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/20"
              >
                Let's Work Together

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/portfolio"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
              >
                View Our Work

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-white/20">
                  <Play size={10} fill="currentColor" />
                </span>
              </Link>
            </div>

            {/* Trust indicator */}
            <div className="mt-9 flex items-center gap-3 text-sm text-white/40">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <Sparkles size={14} className="text-cyan-300" />
              </span>

              <span>Creative ideas. Digital execution.</span>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT VISUAL
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative mx-auto h-[480px] w-full max-w-[560px] sm:h-[560px]"
          >
            {/* Central Orb */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-violet-500/20 blur-2xl sm:h-80 sm:w-80"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10 sm:h-72 sm:w-72" />

            <motion.div
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-96 sm:w-96"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Center */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.06] shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl sm:h-44 sm:w-44"
            >
              <div className="text-center">
                <div className="text-[10px] font-semibold tracking-[0.3em] text-cyan-300">
                  THE
                </div>

                <div className="mt-1 text-2xl font-black tracking-tight">
                  SOCIAL
                </div>

                <div className="text-sm font-semibold tracking-[0.3em] text-white/60">
                  LANE
                </div>
              </div>
            </motion.div>

            {/* Creative Card */}
            <motion.div
              animate={{
                y: [0, -18, 0],
                rotate: [-5, -2, -5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-16 z-20 w-44 rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl sm:left-2 sm:w-48"
            >
              <div className="text-[10px] font-bold tracking-[0.2em] text-cyan-300">
                CREATIVE
              </div>

              <div className="mt-2 text-4xl font-black">+</div>

              <p className="mt-2 text-xs leading-5 text-white/45">
                Ideas that move brands.
              </p>
            </motion.div>

            {/* Brand Card */}
            <motion.div
              animate={{
                y: [0, -14, 0],
                rotate: [5, 2, 5],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-16 right-0 z-20 w-48 rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl sm:right-2"
            >
              <div className="text-[10px] font-bold tracking-[0.2em] text-violet-300">
                BRANDS
              </div>

              <div className="mt-2 text-4xl font-black">∞</div>

              <p className="mt-2 text-xs leading-5 text-white/45">
                Unlimited possibilities.
              </p>
            </motion.div>

            {/* Floating cursor card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [8, 5, 8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-3 top-28 z-20 hidden w-36 rounded-2xl border border-white/10 bg-black/30 p-4 shadow-xl backdrop-blur-xl sm:block"
            >
              <MousePointer2
                size={20}
                className="text-cyan-300"
              />

              <div className="mt-3 text-[10px] font-bold tracking-widest text-white/60">
                DIGITAL
              </div>

              <div className="mt-1 text-xs text-white/40">
                Experience
              </div>
            </motion.div>

            {/* Floating dots */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-16 bottom-24 h-2 w-2 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50"
            />

            <motion.div
              animate={{
                y: [0, 12, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-20 top-20 h-1.5 w-1.5 rounded-full bg-violet-300 shadow-lg shadow-violet-300/50"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-semibold tracking-[0.25em] text-white/30 sm:flex"
      >
        <span className="h-px w-8 bg-white/20" />
        SCROLL TO EXPLORE
        <span className="h-px w-8 bg-white/20" />
      </motion.div>
    </section>
  );
}

export default Hero;