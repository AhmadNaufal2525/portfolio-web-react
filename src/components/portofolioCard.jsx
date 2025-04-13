import React from "react";
import { FaGithub } from "react-icons/fa";

const CardPorto = ({ image, title, tools, desc, github, type, link }) => {
  const renderIcon = () => {
    if (type === "website") {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 cursor-pointer"
        ></a>
      );
    }
    if (type === "mobile") {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 cursor-pointer"
        ></a>
      );
    }
    return null;
  };

  return (
    <div
      className="bg-[#0B131D] shadow-lg rounded-lg border w-full h-[370px] lg:w-[450px] lg:h-[440px] border-[#5067FF]"
      data-aos="fade-right"
    >
      <img
        src={image}
        alt="porto_img"
        className="w-full h-[190px] object-fill rounded-lg md:h-[200px] lg:h-[250px]"
      />
      <div className="p-4">
        <h2 className="text-[20px] font-medium text-[#5067FF] mb-2">{title}</h2>
        <p className="text-[16px] text-gray-300 mb-3">{desc}</p>
        <div className="flex gap-2 mb-2">
          {tools.map((tool, index) => (
            <img
              key={index}
              src={tool}
              alt={`tool-${index}`}
              className="w-7 h-7"
            />
          ))}
        </div>
        <div className="flex items-center gap-4 mt-4 justify-end">
          {renderIcon()}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5067FF]"
          >
            <FaGithub className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPorto;
