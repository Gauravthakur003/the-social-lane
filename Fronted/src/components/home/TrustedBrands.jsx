import { motion } from "framer-motion";

const trustedBrands = [
  {
    name: "NYKAA",
  },
  {
    name: "Myntra",
  },
  {
    name: "PUMA",
  },
  {
    name: "lifestyle",
  },
  {
    name: "AJIO",
  },
  {
    name: "boAt",
  },
  {
    name: "ZEE5",
  },
];

function TrustedBrands() {
  /*
   * Duplicate the brands for the infinite marquee.
   */
  const marqueeBrands = [
    ...trustedBrands,
    ...trustedBrands,
  ];

  return (
    <section
      className="trusted-brands"
      aria-label="Brands we work with"
    >
      <div className="trusted-brands-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="trusted-brands-header"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <span className="trusted-brands-line" />

          <p>
            TRUSTED BY 100+ BRANDS
          </p>

          <span className="trusted-brands-line" />
        </motion.div>


        {/* =================================================
            BRAND MARQUEE
        ================================================= */}

        <div className="trusted-brands-marquee">

          {/* Left fade */}
          <div
            className="trusted-brands-fade trusted-brands-fade-left"
            aria-hidden="true"
          />

          {/* Right fade */}
          <div
            className="trusted-brands-fade trusted-brands-fade-right"
            aria-hidden="true"
          />

          <motion.div
            className="trusted-brands-track"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {marqueeBrands.map(
              (brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`}
                  className="trusted-brand"
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <span className="trusted-brand-name">
                    {brand.name}
                  </span>

                  <span className="trusted-brand-dot" />
                </motion.div>
              )
            )}
          </motion.div>

        </div>


        {/* =================================================
            BOTTOM LINE
        ================================================= */}

        <motion.div
          className="trusted-brands-bottom-line"
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />

      </div>
    </section>
  );
}

export default TrustedBrands;