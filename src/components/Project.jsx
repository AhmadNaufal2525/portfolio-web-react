import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projects, ITEMS_PER_PAGE } from "../../data/projectsData";
import ProjectFilterBar from "./projects/ProjectFilterBar";
import ProjectGrid from "./projects/ProjectGrid";
import ProjectPagination from "./projects/ProjectPagination";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleFilter = (cat) => {
    setActiveFilter(cat);
    setCurrentPage(1);
  };

  return (
    <section className="min-h-screen w-full px-6 mb-5 sm:px-12 lg:px-16 py-16 relative overflow-hidden">
      {/* Ambient glows */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(80,103,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(80,103,255,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <ProjectFilterBar activeFilter={activeFilter} onFilter={handleFilter} />
      <ProjectGrid projects={paginated} />
      <ProjectPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default Projects;
