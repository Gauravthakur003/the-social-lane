import { Navigate, useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";

import ProjectHero from "../components/portfolio/ProjectHero";
import ProjectOverview from "../components/portfolio/ProjectOverview";
import ProjectChallenge from "../components/portfolio/ProjectChallenge";
import ProjectStrategy from "../components/portfolio/ProjectStrategy";
import ProjectExecution from "../components/portfolio/ProjectExecution";
import ProjectGallery from "../components/portfolio/ProjectGallery";
import ProjectResults from "../components/portfolio/ProjectResults";
import ProjectCTA from "../components/portfolio/ProjectCTA";

import Footer from "../components/layout/Footer";

import { portfolioProjects } from "../data/portfolio";

function ProjectDetail() {
  const { slug } = useParams();

  console.log("Current slug:", slug);
  console.log("Portfolio projects:", portfolioProjects);

  const project = portfolioProjects.find(
    (item) => item.slug === slug
  );

  console.log("Found project:", project);

  // Project does not exist
  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="page">

      <Navbar />

      <main>

        <ProjectHero
          project={project}
        />

        <ProjectOverview
          project={project}
        />

        <ProjectChallenge
          project={project}
        />

        <ProjectStrategy
          project={project}
        />

        <ProjectExecution
          project={project}
        />

        <ProjectResults
          project={project}
        />

        <ProjectGallery
          project={project}
        />

        <ProjectCTA />

      </main>

      <Footer />

    </div>
  );
}

export default ProjectDetail;