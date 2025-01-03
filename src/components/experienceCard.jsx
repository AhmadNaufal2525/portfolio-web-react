import React from "react";

const experienceCard = ({ role, company, duration, jobdesk }) => {
  return (
    <div
      data-aos="fade-right"
      className="bg-[#0B131D] shadow-lg rounded-lg border lg:w-[450px] lg:h-[200px] border-[#5067FF] p-5"
    >
      <h2 className="text-[20px] font-medium text-[#5067FF]">{role}</h2>
      <p className="text-[16px] text-gray-300">{company}</p>
      <p className="text-[14px] text-gray-500">{duration}</p>
      <p className="text-[16px] mt-3 text-gray-200">{jobdesk}</p>
    </div>
  );
};

export default experienceCard;
