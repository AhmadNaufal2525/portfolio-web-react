import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Project", path: "project" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5 transition-all duration-300">
      {/* Desktop pill */}
      <div
        className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500"
        style={{
          background: scrolled ? "rgba(13,17,23,0.75)" : "rgba(13,17,23,0.4)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 4px 16px rgba(0,0,0,0.2)",
        }}
      >
        {navLinks.map((link) => (
          <ScrollLink
            key={link.name}
            to={link.path}
            smooth={true}
            duration={500}
            spy={true}
            onSetActive={() => setActive(link.path)}
            className="relative px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 select-none"
            style={{
              color: active === link.path ? "#fff" : "#9ca3af",
              background:
                active === link.path ? "rgba(80,103,255,0.2)" : "transparent",
              border:
                active === link.path
                  ? "1px solid rgba(80,103,255,0.4)"
                  : "1px solid transparent",
              boxShadow:
                active === link.path ? "0 0 12px rgba(80,103,255,0.3)" : "none",
            }}
            onMouseEnter={(e) => {
              if (active !== link.path) {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }
            }}
            onMouseLeave={(e) => {
              if (active !== link.path) {
                e.currentTarget.style.color = "#9ca3af";
                e.currentTarget.style.background = "transparent";
              }
            }}
          >
            {link.name}
          </ScrollLink>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden w-full flex flex-col items-end gap-2">
        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200"
          style={{
            background: "rgba(13,17,23,0.8)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
            color: "#fff",
          }}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile dropdown */}
        <div
          className="w-full overflow-hidden transition-all duration-300 rounded-2xl"
          style={{
            maxHeight: isOpen ? "300px" : "0px",
            opacity: isOpen ? 1 : 0,
            background: "rgba(13,17,23,0.9)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: isOpen
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid transparent",
            boxShadow: isOpen ? "0 12px 40px rgba(0,0,0,0.4)" : "none",
          }}
        >
          <div className="flex flex-col p-3 gap-1">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.path}
                smooth={true}
                duration={500}
                spy={true}
                onSetActive={() => setActive(link.path)}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 select-none"
                style={{
                  color: active === link.path ? "#fff" : "#9ca3af",
                  background:
                    active === link.path
                      ? "rgba(80,103,255,0.18)"
                      : "transparent",
                  border:
                    active === link.path
                      ? "1px solid rgba(80,103,255,0.35)"
                      : "1px solid transparent",
                }}
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
