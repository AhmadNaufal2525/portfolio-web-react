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

import CV from "../assets/cv/CV.pdf";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    AOS.refresh();
  }, []);

  return (
    <section className="min-h-screen w-full px-5 sm:px-10 lg:px-20 pt-20 pb-24 relative overflow-hidden bg-[#0d1117]">
      <div data-aos="fade-up" className="mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight max-w-2xl">
          About <span className="text-[#5067FF]">Me</span>
        </h1>

        <p className="text-gray-400 mt-4 text-base max-w-lg leading-relaxed">
          Graduate of Software Engineering from Telkom University, passionate
          about mobile development and software quality assurance.
        </p>
        <div className="mt-3 flex gap-3">
          <a
            href={CV}
            download="CV - Ahmad Naufal Diwantara Putra.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 bg-[#5067FF] hover:bg-[#3d4fb3] hover:shadow-[0_0_24px_rgba(80,103,255,0.6)] text-white"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV
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
