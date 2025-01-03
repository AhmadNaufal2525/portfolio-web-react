import React, { useEffect } from "react";
import SelfPhoto from "../assets/images/myself.jpeg";
import Univ from "../assets/images/telkom.jpg";
import SMA from "../assets/images/margahayu.jpg";
import SertifEdspert from "../assets/sertif/edspert.png";
import SertifDBT from "../assets/sertif/dbt.png";
import SertifDigistar from "../assets/sertif/digistar.png";
import CardEdu from "../components/educationCard";
import CardSkills from "../components/skillCard";
import CardExperience from "../components/experienceCard";
import CardCertif from "../components/certificationCard";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  const skillData = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      skills: "Flutter",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      skills: "Dart",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      skills: "React",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      skills: "JavaScript",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      skills: "NodeJs",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      skills: "Firebase",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      skills: "MongoDB",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      skills: "Git",
    },
  ];

  const educationData = [
    {
      image: Univ,
      title: "Telkom University",
      subtitle: "Bachelor's Degree, Software Engineering",
      score: "GPA: 3.68 / 4.00",
      time: "2020 - 2024",
    },
    {
      image: SMA,
      title: "SMAN 1 Margahayu",
      subtitle: "Science",
      score: "Average Score: 85.00",
      time: "2017 - 2020",
    },
  ];

  const experienceData = [
    {
      title: "Quality Assurance",
      company: "Telkom DBT",
      duration: "March 2023 - August 2023",
      description:
        "Learn test plans, test cases, test reports, manual and automation testing, Learn testing tools and implement them in the capstone project",
    },
    {
      title: "Flutter Mobile Developer",
      company: "Bitread Digital Publishing",
      duration: "July 2023 - August 2023",
      description:
        "Developed a mobile application using Flutter for a reading books that published by bitread digital Publishing",
    },
    {
      title: "Flutter Mobile Developer",
      company: "Sucofindo",
      duration: "September 2023 - December 2023",
      description:
        "Developed a mobile app using Flutter for a local business, enabling employees from different divisions to borrow and return items",
    },
    {
      title: "Flutter Mobile Developer",
      company: "Bandung Techno Park",
      duration: "January 2024 - December 2024",
      description:
        "Developed a mobile application using Flutter for a food and beverage business, enabling sellers to maintaining orders and queue",
    },
  ];

  const certificationData = [
    {
      image: SertifDBT,
      title: "Sustainable Nurturing Program",
      publisher: "Edspert.Id",
      skill: "Flutter Mobile Development",
      time: "Mar - Aug 2023",
      link: "https://drive.google.com/file/d/1IfEt2wol5uLy7ss4TL8iYj1G2fb_Z0Dj/view",
    },
    {
      image: SertifEdspert,
      title: "Bootcamp Flutter Batch 19",
      publisher: "Edspert.Id",
      skill: "Flutter Mobile Development",
      time: "Nov 2023",
      link: "https://drive.google.com/file/d/1Vmz5TTbnFacw3eIytcROUkZpVsl93Xi2/view",
    },
    {
      image: SertifDigistar,
      title: "Cyber Security Bootcamp",
      publisher: "Digistar Club",
      skill: "Cyber Security",
      time: "Dec 2024",
      link: "https://drive.google.com/file/d/1zm2F65T57LVV3kOMYYUrOIutQjZ-0EkE/view",
    },
  ];

  return (
    <div className="h-full px-10 pt-20 md:pt-32 lg:pt-40 lg:flex lg:items-center lg:justify-center">
      <div className="flex flex-col items-center lg:items-start">
        <h1
          data-aos="fade-right"
          className="text-[28px] font-semibold mb-5 lg:text-[42px]"
        >
          About <span className="text-[#5067FF]">Me</span>
        </h1>
        <div className="flex flex-col justify-center items-center lg:flex lg:flex-row-reverse lg:gap-x-40">
          <img
            data-aos="fade-left"
            src={SelfPhoto}
            alt=""
            className="w-[300px] h-[300px] rounded-full border-4 border-[#5067FF] mb-10 lg:w-[450px] lg:h-[450px]"
          />
          <p
            data-aos="fade-right"
            className="text-[16px] text-justify lg:w-[800px] lg:text-[20px]"
          >
            As a fresh graduate in Software Engineering from Telkom University,
            I am passionate about leveraging my knowledge and skills in mobile
            development and software quality assurance. Throughout my academic
            journey, I honed my abilities in building robust and user-friendly
            mobile applications, particularly using Flutter, and developed a
            strong foundation in ensuring software reliability through
            meticulous testing and QA processes. My enthusiasm for creating
            seamless digital experiences and delivering high-quality software
            drives me to continuously learn and adapt to emerging technologies.
            I am eager to contribute to innovative projects that make a
            meaningful impact while growing as a professional in the tech
            industry.
          </p>
        </div>
        <div className="mt-10 lg:mt-10">
          <h1
            data-aos="fade-right"
            className="text-[28px] font-semibold mb-10 lg:mb-10 sm:mb-9 lg:text-[42px]"
          >
            Ski<span className="text-[#5067FF]">lls</span>
          </h1>
          <div
            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6"
            data-aos="fade-up"
          >
            {skillData.map((item, index) => (
              <CardSkills key={index} icon={item.icon} skills={item.skills} />
            ))}
          </div>
        </div>
        <div className="mt-10 lg:mt-16">
          <h1
            data-aos="fade-right"
            className="text-[28px] font-semibold lg:mb-2 lg:text-[42px]"
          >
            Educ<span className="text-[#5067FF]">ation</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[40px] lg:mb-10 md:gap-8">
            {educationData.map((item, index) => (
              <CardEdu
                key={index}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                score={item.score}
                time={item.time}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 lg:mt-16">
          <h1
            data-aos="fade-right"
            className="text-[28px] font-semibold lg:mb-2 lg:text-[42px]"
          >
            Certifi<span className="text-[#5067FF]">cation</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[40px] lg:mb-10 md:gap-8">
            {certificationData.map((item, index) => (
              <CardCertif
                key={index}
                image={item.image}
                title={item.title}
                publisher={item.publisher}
                skill={item.skill}
                time={item.time}
                link={item.link}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 lg:mt-10 md:mt-0">
          <h1
            data-aos="fade-right"
            className="text-[28px] font-semibold mb-10 lg:mb-10 lg:text-[42px]"
          >
            Exper<span className="text-[#5067FF]">ience</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[100px]">
            {experienceData.map((item, index) => (
              <CardExperience
                key={index}
                role={item.title}
                company={item.company}
                duration={item.duration}
                jobdesk={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
