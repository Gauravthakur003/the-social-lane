import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/services" element={<Services />} />

      <Route path="/portfolio" element={<Portfolio />} />

      <Route
        path="/portfolio/:slug"
        element={<ProjectDetail />}
      />

      <Route path="/blog" element={<Blog />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;