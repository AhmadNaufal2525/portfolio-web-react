import { glassStyle, hoverGlass } from "../../../utils/glassStyle";
import { certificationData } from "../../../data/aboutData";
import SertifDBT from "../../assets/sertif/dbt.png";
import SertifEdspert from "../../assets/sertif/edspert.png";
import SertifDigistar from "../../assets/sertif/digistar.png";

const images = [SertifDBT, SertifEdspert, SertifDigistar];

const CertificationList = () => (
  <div data-aos="fade-left" data-aos-delay="120">
    <div className="flex items-center gap-3 mb-5">
      <span className="text-xl">🏆</span>
      <h2 className="text-white font-bold text-xl">Certifications</h2>
    </div>
    <div className="flex flex-col gap-4">
      {certificationData.map((c, i) => (
        <a
          key={i}
          href={c.link}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-delay={i * 70}
          className="flex items-center gap-4 rounded-xl p-4 transition-all duration-300 group"
          style={glassStyle}
          onMouseEnter={(e) => hoverGlass(e, true)}
          onMouseLeave={(e) => hoverGlass(e, false)}
        >
          <img
            src={images[i]}
            alt={c.title}
            className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          />
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-semibold text-sm truncate">
              {c.title}
            </h4>
            <p className="text-[#5067FF] text-xs mt-0.5">{c.publisher}</p>
            <p className="text-gray-500 text-xs mt-0.5">
              {c.skill} · {c.time}
            </p>
          </div>
          <svg
            className="text-gray-500 group-hover:text-[#5067FF] transition-colors flex-shrink-0"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      ))}
    </div>
  </div>
);

export default CertificationList;
