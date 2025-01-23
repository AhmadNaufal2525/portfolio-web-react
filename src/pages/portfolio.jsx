import React, { useEffect } from "react";
import AOS from "aos";
import Tabs from "../components/tabs";
import CardPorto from "../components/portofolioCard";
import KulinerWeb from "../assets/portofolio/kuliner-web.png";
import PortoWeb from "../assets/portofolio/porto-web.png";
import EdspertMob from "../assets/portofolio/edspert-mob.png";
import KulinerMob from "../assets/portofolio/kuliner-mob.png";
import AdmaMob from "../assets/portofolio/adma-mob.png";
import BitreadMob from "../assets/portofolio/bitread-mob.png";
import AntriaMob from "../assets/portofolio/antria-mob.png";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  const portfolioData = [
    {
      image: KulinerWeb,
      title: "Kuliner.Go Website",
      description: "A platform for food delivery.",
      tools: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      ],
      type: "website",
      github: "https://github.com/AhmadNaufal2525/kuliner-go-web.git",
    },
    {
      image: PortoWeb,
      title: "Personal Website",
      description: "A portfolio showcasing my work.",
      tools: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://vite.dev/logo.svg",
      ],
      type: "website",
      github: "https://personalwebsite.com",
      link: "https://portfolio-web-react-umber.vercel.app/",
    },
    {
      image: KulinerMob,
      title: "Kuliner.Go Mobile",
      description: "Mobile app for food ordering.",
      tools: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      ],
      type: "mobile",
      github: "https://github.com/AhmadNaufal2525/kuliner.go-mobile.git",
    },
    {
      image: AntriaMob,
      title: "Antria Mitra Mobile",
      description: "Queue management for partners.",
      tools: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      ],
      type: "mobile",
      github: "https://github.com/Antria-id/antria-mitra-mobile.git",
    },
    {
      image: AdmaMob,
      title: "ADMA Mobile",
      description: "Inventory management",
      tools: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      ],
      type: "mobile",
      github: "https://github.com/AhmadNaufal2525/ADMA-APP.git",
    },
    {
      image: BitreadMob,
      title: "Bitread Mobile",
      description: "E-book platform for readers.",
      tools: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      ],
      type: "mobile",
      github: "https://github.com/AhmadNaufal2525/bitread-app.git",
    },
    {
      image: EdspertMob,
      title: "Edspert Mobile",
      description: "Edspert Course Quiz",
      tools: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      ],
      type: "mobile",
      github: "https://github.com/AhmadNaufal2525/final-project-edspert.id.git",
    },
  ];

  const tabsPortfolio = [
    {
      title: "Web Development",
      content: (
        <div className="w-full md:grid md:grid-cols-2 grid grid-row md:justify-center justify-center items-center md:items-start md:gap-8 gap-2 gap-y-14 mt-8 md:mb-0 mb-[6rem]">
          {portfolioData
            .filter((item) => item.type === "website")
            .map((item, index) => (
              <CardPorto
                key={index}
                image={item.image}
                title={item.title}
                desc={item.description}
                tools={item.tools}
                link={item.link}
                github={item.github}
                type={item.type}
              />
            ))}
        </div>
      ),
    },
    {
      title: "Mobile Development",
      content: (
        <div className="w-full md:grid md:grid-cols-2 grid grid-row md:justify-center justify-center items-center md:items-start md:gap-8 gap-2 gap-y-14 mt-8 md:mb-0 mb-[6rem]">
          {portfolioData
            .filter((item) => item.type === "mobile")
            .map((item, index) => (
              <CardPorto
                key={index}
                image={item.image}
                title={item.title}
                desc={item.description}
                tools={item.tools}
                link={item.link}
                github={item.github}
                type={item.type}
              />
            ))}
        </div>
      ),
    },
  ];

  return (
    <div className="h-full px-10 pt-20 md:pt-32 lg:pt-40 lg:flex lg:items-center lg:justify-center">
      <div className="flex flex-col items-center">
        <h1
          data-aos="fade-right"
          className="text-[28px] font-semibold mb-5 lg:text-[42px]"
        >
          Port<span className="text-[#5067FF]">folio</span>
        </h1>
        <Tabs tabs={tabsPortfolio} />
        <div className="lg:mb-10"></div>
      </div>
    </div>
  );
};

export default Portfolio;
