import React from "react";
import { tagColors } from "../../../data/projectsData";

const ProjectCard = ({ project, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 80}
    className="group relative rounded-2xl overflow-hidden cursor-pointer"
    style={{
      background: "rgba(255,255,255,0.04)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      transition:
        "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 16px 48px rgba(80,103,255,0.2)";
      e.currentTarget.style.borderColor = "rgba(80,103,255,0.4)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
    }}
  >
    {/* Image */}
    <div className="relative w-full h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(80,103,255,0.12)" }}
      />
      <button
        onClick={() => window.open(project.link, "_blank")}
        className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#5067FF";
          e.currentTarget.style.boxShadow = "0 0 12px rgba(80,103,255,0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.12)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2 12L12 2M12 2H5M12 2V9"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              background: `${tagColors[tag] || tagColors.default}18`,
              color: tagColors[tag] || tagColors.default,
              border: `1px solid ${tagColors[tag] || tagColors.default}33`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
