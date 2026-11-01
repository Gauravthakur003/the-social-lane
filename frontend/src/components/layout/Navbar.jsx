
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import logo from "../../assets/images/logo-top.png";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Blog", "/blog"],
];

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.22,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.055,
      delayChildren: 0.05,
    },
  },
};

const linkVariants = {
  closed: {
    opacity: 0,
    x: -12,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.25 },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the menu with the Escape key.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <motion.header
      className="navbar-wrap"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <nav
        className="navbar container"
        aria-label="Main navigation"
      >
        {/* Brand logo */}
        <Link
          className="brand"
          to="/"
          onClick={close}
          aria-label="The Social Lane home"
        >
          <motion.img
            src={logo}
            alt="The Social Lane"
            className="brand-logo"
            whileHover={{ scale: 1.035 }}
            transition={{ duration: 0.2 }}
          />
        </Link>

        {/* Desktop navigation */}
        <div className="nav-links">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={close}
              className={({ isActive }) =>
                isActive ? "nav-item nav-item-active" : "nav-item"
              }
            >
              {({ isActive }) => (
                <>
                  <span>{label}</span>

                  {isActive && (
                    <motion.span
                      className="nav-active-indicator"
                      layoutId="nav-active-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link className="nav-cta" to="/contact">
          <span>Let's Talk</span>

          <motion.span
            className="nav-cta-icon"
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={17} />
          </motion.span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((previous) => !previous)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
              transition={{ duration: 0.18 }}
              className="menu-icon"
            >
              {open ? <X size={23} /> : <Menu size={23} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {open && (
          <>
            <motion.button
              type="button"
              className="mobile-menu-backdrop"
              aria-label="Close navigation menu"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              id="mobile-navigation"
              className="mobile-nav-panel"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mobile-nav-heading">
                <span>EXPLORE THE SOCIAL LANE</span>
                <span className="mobile-nav-dot" />
              </div>

              <div className="mobile-nav-links">
                {links.map(([label, path], index) => (
                  <motion.div
                    key={path}
                    variants={linkVariants}
                  >
                    <NavLink
                      to={path}
                      end={path === "/"}
                      onClick={close}
                      className={({ isActive }) =>
                        isActive
                          ? "mobile-nav-link active"
                          : "mobile-nav-link"
                      }
                    >
                      <span className="mobile-nav-number">
                        0{index + 1}
                      </span>

                      <span className="mobile-nav-label">
                        {label}
                      </span>

                      <ArrowUpRight size={19} />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mobile-nav-bottom"
                variants={linkVariants}
              >
                <p>Have a project in mind?</p>

                <Link
                  to="/contact"
                  className="mobile-nav-cta"
                  onClick={close}
                >
                  Let's Talk
                  <ArrowUpRight size={19} />
                </Link>

                <span className="mobile-nav-caption">
                  IDEAS INTO IMPACT.
                </span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
