import React, { useEffect } from "react";
import Lottie from "react-lottie-player";
import animationData from "../assets/animations/hello.json";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="w-full h-screen flex flex-col md:flex-row md:items-center justify-center items-start px-4 sm:px-12 lg:px-40 md:px-8">
      {/* Glassmorphic background blobs */}
      <div
        className="absolute top-[-80px] left-[-80px] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(80,103,255,0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-[-60px] right-[100px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(80,103,255,0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        data-aos="fade-right"
        className="flex flex-col sm:gap-y-2 gap-y-2 md:gap-y-2 sm:text-left w-full max-w-[800px] rounded-2xl p-6"
      >
        <h1 className="text-[16px] font-bold sm:text-[16px] md:text-[20px] lg:text-[30px]">
          Hello, I'am
        </h1>
        <h2 className="text-[16px] font-bold sm:text-[18px] md:text-[20px] lg:text-[30px]">
          Ahmad Naufal Diwantara Putra
        </h2>
        <h2 className="text-[16px] font-bold sm:text-[18px] md:text-[20px] lg:text-[30px]">
          And I'm a{" "}
          <span>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Software Quality Assurance",
                1000,
                "Flutter Developer",
                1000,
                "Frontend Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[16px] font-bold text-[#5067FF] sm:text-[20px] md:text-[20px] lg:text-[30px]"
            />
          </span>
        </h2>
      </div>

      <Lottie
        data-aos="fade-left"
        loop
        animationData={animationData}
        play
        className="w-[300px] h-[300px] mx-auto sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] lg:mr-1"
      />
      <div
        data-aos="fade-up"
        style={{
          background: "rgba(255, 255, 255, 0.07)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
        className="absolute top-[258px] w-[40px] h-[140px] p-2 bg-[#0B131D] rounded-lg right-4 flex flex-col items-center gap-4 transform -translate-y-1/2 lg:top-[400px] md:top-[400px] sm:top-[400px]"
      >
        <a
          href="https://www.linkedin.com/in/ahmadnaufal25/"
          rel="noopener noreferrer"
          className="text-white hover:text-[#2f4bff] text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AhmadNaufal2525"
          rel="noopener noreferrer"
          className="text-white hover:text-[#2f4bff] text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/ahmadnaufaldp_/"
          rel="noopener noreferrer"
          className="text-white hover:text-[#2f4bff] text-3xl"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Home;
