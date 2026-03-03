import React from "react";

const btnBase = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const ProjectPagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div
      data-aos="fade-up"
      className="flex justify-center items-center gap-2 mt-12"
    >
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 transition-all duration-200 disabled:opacity-30"
        style={btnBase}
      >
        ‹
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200"
          style={{
            background:
              currentPage === page ? "#5067FF" : "rgba(255,255,255,0.06)",
            border:
              currentPage === page
                ? "1px solid #5067FF"
                : "1px solid rgba(255,255,255,0.1)",
            color: currentPage === page ? "#fff" : "#9ca3af",
            boxShadow:
              currentPage === page ? "0 0 16px rgba(80,103,255,0.4)" : "none",
          }}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 transition-all duration-200 disabled:opacity-30"
        style={btnBase}
      >
        ›
      </button>
    </div>
  );
};

export default ProjectPagination;
