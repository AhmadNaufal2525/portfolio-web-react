import { glassStyle } from "../../../utils/glassStyle";
import { skillData } from "../../../data/aboutData";

const TechStackCard = () => (
  <div
    data-aos="fade-right"
    data-aos-delay="100"
    className="rounded-2xl p-5"
    style={glassStyle}
  >
    <div className="flex items-center gap-2 mb-4">
      <span className="text-[#5067FF]">⚙️</span>
      <h3 className="text-white font-bold text-base">Tech Stack</h3>
    </div>
    <div className="grid grid-cols-4 gap-3">
      {skillData.map((s) => (
        <button
          key={s.label}
          className="flex flex-col items-center gap-1.5 p-2 rounded-xl cursor-default transition-all duration-200 bg-transparent border-0"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(80,103,255,0.4)";
            e.currentTarget.style.background = "rgba(80,103,255,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
          }}
        >
          <img src={s.icon} alt={s.label} className="w-7 h-7" />
          <span className="text-gray-400 text-[10px] text-center leading-tight">
            {s.label}
          </span>
        </button>
      ))}
    </div>
  </div>
);

export default TechStackCard;
