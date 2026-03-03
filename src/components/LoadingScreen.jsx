import React from "react";
import Lottie from "react-lottie-player";
import loadingAnimation from "../assets/animations/loading.json";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0d1117] z-50">
      <Lottie animationData={loadingAnimation} loop play />
    </div>
  );
};

export default LoadingScreen;
