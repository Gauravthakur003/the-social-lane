
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -8,
  },
};

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              }
            />

            <Route
              path="/about"
              element={
                <AnimatedPage>
                  <About />
                </AnimatedPage>
              }
            />

            <Route
              path="/services"
              element={
                <AnimatedPage>
                  <Services />
                </AnimatedPage>
              }
            />

            <Route
              path="/portfolio"
              element={
                <AnimatedPage>
                  <Portfolio />
                </AnimatedPage>
              }
            />

            <Route
              path="/blog"
              element={
                <AnimatedPage>
                  <Blog />
                </AnimatedPage>
              }
            />

            <Route
              path="/contact"
              element={
                <AnimatedPage>
                  <Contact />
                </AnimatedPage>
              }
            />

            <Route
              path="*"
              element={
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
