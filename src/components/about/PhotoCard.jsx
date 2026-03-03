import React from "react";
import { glassStyle } from "../../../utils/glassStyle";
import SelfPhoto from "../../assets/images/myself.jpeg";

const PhotoCard = () => (
  <div
    data-aos="fade-right"
    className="rounded-2xl overflow-hidden"
    style={glassStyle}
  >
    <img
      src={SelfPhoto}
      alt="Ahmad Naufal"
      className="w-full h-[280px] object-cover object-top"
    />
    <div className="p-4">
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 21s-8-5.5-8-11a8 8 0 0116 0c0 5.5-8 11-8 11z" />
          <circle cx="12" cy="10" r="2" />
        </svg>
        Bandung, Indonesia
      </div>
    </div>
  </div>
);

export default PhotoCard;
