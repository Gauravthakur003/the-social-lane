import { Quote } from "lucide-react";
import { motion } from "framer-motion";

function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.article
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
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/10 sm:p-8"
    >
      {/* Decorative element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl transition-all duration-500 group-hover:bg-blue-500/10"
      />

      {/* Quote Icon */}
      <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Quote size={20} strokeWidth={1.8} />
      </div>

      {/* Quote */}
      <blockquote className="relative z-10 mt-7 flex-1 text-lg font-medium leading-8 tracking-tight text-[#06111f]">
        "{testimonial.quote}"
      </blockquote>

      {/* Person */}
      <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
        {/* Avatar */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#06111f] text-sm font-bold text-white transition-all duration-300 group-hover:bg-blue-600">
          {testimonial.initials}
        </div>

        {/* Details */}
        <div className="min-w-0">
          <strong className="block truncate text-sm font-bold text-[#06111f]">
            {testimonial.name}
          </strong>

          <span className="mt-1 block text-xs leading-5 text-slate-400">
            {testimonial.role} · {testimonial.company}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default TestimonialCard;