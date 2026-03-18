import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onOpenModal={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 w-[90%] max-w-2xl relative max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            {/* Project Image */}
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}

            <h2 className="text-2xl font-bold mb-2 text-white">
              {selectedProject.title}
            </h2>
            <p className="text-gray-100 mb-4 text-justify">
              {selectedProject.detailedDescription}
            </p>

            {/* Project Screenshot */}
            {selectedProject.screenshot && (
              <img
                src={selectedProject.screenshot}
                alt={`${selectedProject.title} screenshot`}
                className="w-full h-65 object-cover rounded-lg mb-4"
              />
            )}

            {/* Tech Stack */}
            {selectedProject.tags && (
              <div className="mb-4">
                <h3 className="font-semibold text-sm mb-2 text-white">
                  Tech Stack:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => window.open(selectedProject.link, "_blank")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex-1 border border-blue-600 transition duration-300"
              >
                Visit Project
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGrid;
