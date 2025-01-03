import React from "react";

const educationCard = ({ image, title, subtitle, score, time }) => {
  return (
    <div
      data-aos="fade-right"
      className="mt-10 lg:max-w-md lg:w-full sm:w-[600px] md:w-[320px] md:h-[340px] bg-[#0B131D] shadow-lg rounded-lg border border-[#5067FF]  "
    >
      <img
        src={image}
        alt="eduimage"
        className="w-full h-[250px] object-fill rounded-lg md:h-[200px] "
      />
      <div className="flex flex-col p-3">
        <div className="space-y-2">
          <h1 className="text-[20px] font-medium md:text-[18px]">{title}</h1>
          <p className="text-[16px] md:text-[14px]">{subtitle}</p>
          <p className="text-[16px] md:text-[14px]">{score}</p>
          <p className="text-[14px] text-gray-300 font-semibold">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default educationCard;
