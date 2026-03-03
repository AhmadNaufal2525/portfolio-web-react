import { glassStyle, hoverGlass } from "../../../utils/glassStyle";

const JourneyCard = () => (
  <section
    data-aos="fade-left"
    className="rounded-2xl p-7"
    style={glassStyle}
    onMouseEnter={(e) => hoverGlass(e, true)}
    onMouseLeave={(e) => hoverGlass(e, false)}
    role="region"
    aria-label="My Journey"
  >
    <div className="flex items-center gap-3 mb-5">
      <span className="text-xl">📈</span>
    </div>
    <div className="flex flex-col gap-4 text-gray-400 text-sm leading-relaxed">
      <p>
        As a graduate in Software Engineering from Telkom University, my passion
        for mobile development began during my academic years. I honed my
        abilities building robust, user-friendly applications using Flutter
        while simultaneously developing a strong foundation in software quality
        assurance. Starting with internships at Telkom DBT and Bitread Digital
        Publishing, I bridged the gap between testing and development. This
        hybrid background lets me speak both languages — engineering correctness
        and user experience — fluently.
      </p>
    </div>
  </section>
);

export default JourneyCard;
