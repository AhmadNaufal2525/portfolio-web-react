import React from "react";

const skillCard = ({ icon, skills }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={icon} alt="Flutter" className="w-16 h-16" />
      <p className="text-[16px] mt-2 text-white">{skills}</p>
    </div>
  );
};

export default skillCard;
