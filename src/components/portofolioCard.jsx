import React from "react";

const CardPorto = ({ image, title, tools, desc, link }) => {
  return (
    <div
      className="bg-[#0B131D] shadow-lg rounded-lg border w-full h-[340px] lg:w-[450px] lg:h-[400px] border-[#5067FF]"
      data-aos="fade-right"
    >
      <img
        src={image}
        alt="porto_img"
        className="w-full h-[190px] object-fill rounded-lg md:h-[200px] lg:h-[250px]"
      />
      <div className="p-4">
        <h2 className="text-[20px] font-medium text-[#5067FF]">{title}</h2>
        <p className="text-[16px] text-gray-300 mb-2">{desc}</p>
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
        <a href={link} className="text-[16px] mt-3 text-[#5067FF]">
          Source Code
        </a>
      </div>
    </div>
  );
};

export default CardPorto;
