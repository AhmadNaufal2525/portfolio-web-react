import React from "react";
import PropTypes from "prop-types";
import { categories } from "../../../data/projectsData";

const ProjectFilterBar = ({ activeFilter, onFilter }) => (
  <div
    data-aos="fade-up"
    className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
  >
    <div>
      <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight">
        My <span style={{ color: "#5067FF" }}>Projects</span>
      </h1>
      <p className="text-gray-400 mt-2 text-sm max-w-xs leading-relaxed">
        A selection of digital creations where design meets thoughtful execution
        and experimentation.
      </p>
    </div>

    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
          style={{
            background:
              activeFilter === cat ? "#5067FF" : "rgba(255,255,255,0.06)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border:
              activeFilter === cat
                ? "1px solid #5067FF"
                : "1px solid rgba(255,255,255,0.1)",
            color: activeFilter === cat ? "#fff" : "#9ca3af",
            boxShadow:
              activeFilter === cat ? "0 0 16px rgba(80,103,255,0.4)" : "none",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  </div>
);

ProjectFilterBar.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default ProjectFilterBar;
