import React from "react";
import HeaderSection from "./HeaderSection.jsx";
import BG_Video from "../../assets/videos/bg_video.mp4";
const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={BG_Video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#0A0A09B2] opacity-90 z-10"></div>

      {/* Dark Overlay */}

      {/* Header Section - Fixed on top */}
      <div className="absolute top-0 left-0 w-full z-50">
        <HeaderSection />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center pt-32">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Bold Coffee Moments
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
