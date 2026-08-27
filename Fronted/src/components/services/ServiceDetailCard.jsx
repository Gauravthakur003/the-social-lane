import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";

function ServiceDetailCard({ service, index = 0 }) {
  if (!service) {
    return null;
  }

  return (
    <motion.article
      className={`service-detail-card service-card-${index + 1}`}
      initial={{
        opacity: 0,
        y: 60,
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
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      {/* Background visual */}
      <div className="service-card-visual" aria-hidden="true">
        <div className="service-card-visual-circle" />
        <div className="service-card-visual-ring" />
      </div>

      {/* Header */}
      <div className="service-detail-top">

        <span className="service-detail-number">
          {service.number}
        </span>

        <div className="service-detail-icon">
          <ArrowUpRight size={20} strokeWidth={1.7} />
        </div>

      </div>

      {/* Main */}
      <div className="service-detail-main">

        <div className="service-card-index">
          SERVICE / {service.number}
        </div>

        <h2>
          {service.title}
        </h2>

        <p className="service-detail-description">
          {service.description}
        </p>

        <p className="service-detail-long">
          {service.longDescription}
        </p>

      </div>

      {/* Capabilities */}
      <div className="service-capabilities">

        {service.capabilities?.map((capability) => (
          <span key={capability}>
            <Check size={11} />
            {capability}
          </span>
        ))}

      </div>

      {/* Bottom */}
      <div className="service-card-bottom">

        <span>
          EXPLORE CAPABILITY
        </span>

        <div className="service-card-arrow">
          <ArrowUpRight size={18} />
        </div>

      </div>

      {/* Huge number */}
      <span
        className="service-card-background-number"
        aria-hidden="true"
      >
        {service.number}
      </span>

    </motion.article>
  );
}

export default ServiceDetailCard;