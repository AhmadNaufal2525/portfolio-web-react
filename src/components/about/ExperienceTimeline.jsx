import { experienceData } from "../../../data/aboutData";

const ExperienceTimeline = () => (
  <div data-aos="fade-left" data-aos-delay="100">
    <div className="flex items-center gap-3 mb-6">
      <span className="text-xl">🗂️</span>
      <h2 className="text-white font-bold text-xl">Experience</h2>
    </div>
    <div className="relative flex flex-col gap-0">
      <div
        className="absolute left-[7px] top-2 bottom-2 w-px"
        style={{
          background:
            "linear-gradient(to bottom, #5067FF, rgba(80,103,255,0.1))",
        }}
      />
      {experienceData.map((exp, i) => (
        <div
          key={i}
          data-aos="fade-up"
          data-aos-delay={i * 80}
          className="flex gap-5 pb-8 last:pb-0 relative"
        >
          <div
            className="mt-1.5 flex-shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center z-10"
            style={{
              background: exp.current ? "#5067FF" : "#0d1117",
              borderColor: "#5067FF",
              boxShadow: exp.current ? "0 0 10px rgba(80,103,255,0.7)" : "none",
            }}
          >
            {exp.current && (
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            )}
          </div>
          <div>
            <p className="text-[#5067FF] text-xs font-bold tracking-widest uppercase mb-1">
              {exp.period}
            </p>
            <h4 className="text-white font-bold text-base">{exp.title}</h4>
            <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{exp.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceTimeline;
