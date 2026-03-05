import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PhotoCard from "./about/PhotoCard";
import TechStackCard from "./about/TechStackCard";
import ConnectCard from "./about/ConnectCard";
import JourneyCard from "./about/JourneyCard";
import CoreValuesGrid from "./about/CoreValuesGrid";
import ExperienceTimeline from "./about/ExperienceTimeline";
import CertificationList from "./about/CertificationList";

import CVMobile from "../assets/cv/CV-MobileDev.pdf";
import CVQA from "../assets/cv/CV-QA.pdf";
import CVGeneral from "../assets/cv/CV.pdf";
import CVSE from "../assets/cv/CV-SE.pdf";

const About = () => {
  const [selectedCV, setSelectedCV] = useState("mobile");

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    AOS.refresh();
  }, []);

  const cvOptions = {
    se: {
      file: CVSE,
      label: "CV Software Engineer",
    },
    mobile: {
      file: CVMobile,
      label: "CV Flutter Developer ",
    },
    qa: {
      file: CVQA,
      label: "CVQA Engineer ",
    },
    general: {
      file: CVGeneral,
      label: "CV",
    },
  };

  return (
    <section className="min-h-screen w-full px-5 sm:px-10 lg:px-20 pt-20 pb-24 relative overflow-hidden bg-[#0d1117]">
      <div data-aos="fade-up" className="mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight max-w-2xl">
          About <span className="text-[#5067FF]">Me</span>
        </h1>

        <p className="text-gray-400 mt-4 text-base max-w-lg leading-relaxed">
          Graduate in Software Engineering from Telkom University, passionate
          about mobile development and software quality assurance.
        </p>

        {/* CV Selector + Download */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
          {/* Dropdown */}
          <select
            value={selectedCV}
            onChange={(e) => setSelectedCV(e.target.value)}
            className="px-4 py-2 rounded-full bg-[#161b22] text-white border border-gray-700 focus:outline-none focus:border-[#5067FF] transition"
          >
            <option value="mobile">Flutter Developer CV</option>
            <option value="qa">Software Quality Asssurance CV</option>
            <option value="se">Software Engineer CV</option>
            <option value="general">General CV</option>
          </select>

          {/* Download Button */}
          <a
            href={cvOptions[selectedCV].file}
            download="CV - Ahmad Naufal Diwantara Putra.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 group
            bg-[rgba(80,103,255,0.15)] border border-[rgba(80,103,255,0.35)]
            hover:bg-[#5067FF] hover:border-[#5067FF] hover:shadow-[0_0_24px_rgba(80,103,255,0.5)] text-white"
          >
            Download CV
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/15">
              PDF
            </span>
          </a>
        </div>
      </div>

      {/* Two-column layout tetap sama */}
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-start">
        <div className="flex flex-col gap-6">
          <PhotoCard />
          <TechStackCard />
          <ConnectCard />
        </div>

        <div className="flex flex-col gap-8">
          <JourneyCard />
          <CoreValuesGrid />
          <ExperienceTimeline />
          <CertificationList />
        </div>
      </div>
    </section>
  );
};

export default About;
