import React from "react";
import NotFound from "../assets/animations/notfound.json";
import Lottie from "react-lottie-player";

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#ffffff] text-white">
      <Lottie
        loop
        animationData={NotFound}
        play
        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] lg:mr-1"
      />
      <p className="text-[#5067FF] text-4xl font-bold">404 Page Not Found</p>
      <a
        href="/"
        className="mt-8 px-4 py-2 bg-[#5067FF] text-white rounded-lg hover:bg-[#4056cc] transition-colors"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default notFound;
