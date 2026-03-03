import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project, i) => (
      <ProjectCard key={project.id} project={project} index={i} />
    ))}
  </div>
);

export default ProjectGrid;
