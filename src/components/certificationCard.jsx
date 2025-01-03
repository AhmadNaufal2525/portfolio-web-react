import React from "react";

const certificationCard = ({ image, title, publisher, time, skill, link }) => {
  return (
    <div
      data-aos="fade-right"
      className="mt-10 lg:max-w-md w-full lg:w-[360px] lg:h-[460px] sm:w-[600px] md:w-[320px] md:h-[340px] bg-[#0B131D] shadow-lg rounded-lg border border-[#5067FF]"
    >
      <img
        src={image}
        alt="certifimg"
        className="w-full h-[250px] object-fill rounded-lg md:h-[250px] "
      />
      <div className="flex flex-col p-3">
        <div className="space-y-2">
          <h1 className="text-[20px] font-medium md:text-[18px]">{title}</h1>
          <p className="text-[16px] md:text-[14px]">{publisher}</p>
          <p className="text-[16px] md:text-[14px]">{skill}</p>
          <p className="text-[14px] text-gray-300 font-semibold pb-2">{time}</p>
          <a href={link} className="flex items-center justify-center">
            <button className="rounded-full w-[120px] h-[32px] hover:bg-[#2f4bff] bg-[#5067FF] font-semibold text-white text-[12px] cursor-pointer sm:w-[130px] sm:h-[40px] sm:text-[14px] md:w-[150px] md:h-[46px] md:text-[16px] lg:w-[140px] lg:h-[50px] lg:text-[14px]">
              Show Credential
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default certificationCard;
