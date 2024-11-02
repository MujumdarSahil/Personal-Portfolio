import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Breast-Cancer-Prediction"
          description="Developed a predictive model to assess breast cancer risk using machine learning techniques."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Amazon Prime Video Power-BI"
          description="Created an interactive Power BI dashboard to analyze and visualize Amazon Prime Video streaming data."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Google-Clone"
          description="Built a responsive clone of Google’s search interface, showcasing web development skills and user experience design."
        />
      </div>
    </div>
  );
};

export default Projects;
