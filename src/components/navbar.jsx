import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed inset-x-4 top-9 flex justify-center items-center z-50">
      <button
        onClick={toggleMenu}
        className="text-white bg-[#0B131D] p-2 ml-auto rounded-md md:hidden"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-[#0B131D] text-white shadow-md rounded-lg px-10 py-5 absolute top-16 inset-x-0 space-y-2 font-semibold md:space-y-0 md:static md:flex md:gap-x-8 md:rounded-full`}
      >
        {navLinks.map((link) => (
          <a
            key={link.path}
            href={link.path}
            className={`block md:inline ${
              location.pathname === link.path
                ? "text-[#5067FF]"
                : "hover:text-[#5067FF]"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
