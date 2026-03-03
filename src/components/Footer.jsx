import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="fixed bottom-0 left-0 w-full z-50 py-3 px-6 flex flex-col sm:flex-row items-center justify-between gap-2"
      style={{
        background: "rgba(11, 19, 29, 0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow:
          "0 -4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Left: copyright */}
      <p className="text-[12px] text-gray-400 tracking-wide">
        © {currentYear}{" "}
        <span className="text-[#5067FF] font-semibold">Ahmad Naufal</span>. All
        rights reserved.
      </p>

      {/* Right: social icons */}
      <div className="flex items-center gap-4">
        {[
          {
            href: "https://www.linkedin.com/in/ahmadnaufal25/",
            icon: <FaLinkedin />,
            label: "LinkedIn",
          },
          {
            href: "https://github.com/AhmadNaufal2525",
            icon: <FaGithub />,
            label: "GitHub",
          },
          {
            href: "https://www.instagram.com/ahmadnaufaldp_/",
            icon: <FaInstagram />,
            label: "Instagram",
          },
          {
            href: "mailto:ahmadnaufal588@gmail.com",
            icon: <HiOutlineMail />,
            label: "Email",
          },
        ].map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-400 hover:text-[#5067FF] text-lg transition-all duration-300"
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter =
                "drop-shadow(0 0 6px rgba(80,103,255,0.8))")
            }
            onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
