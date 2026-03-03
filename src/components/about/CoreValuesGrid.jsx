import React from "react";
import { glassStyle, hoverGlass } from "../../../utils/glassStyle";
import { coreValues } from "../../../data/aboutData";

const CoreValuesGrid = () => (
  <div data-aos="fade-left" data-aos-delay="80">
    <div className="flex items-center gap-3 mb-5">
      <span className="text-xl">💎</span>
      <h2 className="text-white font-bold text-xl">Core Values</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {coreValues.map((v) => (
        <button
          key={v.title}
          data-aos="fade-up"
          data-aos-delay={coreValues.indexOf(v) * 70}
          className="rounded-xl p-5 transition-all duration-300 cursor-default text-left bg-none border-none"
          style={glassStyle}
          onMouseEnter={(e) => hoverGlass(e, true)}
          onMouseLeave={(e) => hoverGlass(e, false)}
        >
          <div
            className="text-2xl mb-3"
            style={{ filter: `drop-shadow(0 0 8px ${v.color}66)` }}
          >
            {v.icon}
          </div>
          <h4 className="text-white font-bold text-sm mb-2">{v.title}</h4>
          <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
        </button>
      ))}
    </div>
  </div>
);

export default CoreValuesGrid;
