import React from "react";
import HeaderSection from "./HeaderSection.jsx";
import BG_Video from "../../assets/videos/bg_video.mp4";

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ fontFamily: "var(--font-barlow)" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster=""
      >
        <source src={BG_Video} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gray-900"></div>
      </video>

      {/* Dark Overlay with responsive opacity */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] sm:bg-opacity-70 lg:bg-opacity-75 z-10"></div>

      {/* Header Section - Fixed on top */}
      <div className="absolute top-0 left-0 w-full z-50">
        <HeaderSection />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-7xl mx-auto pt-24 sm:pt-28 lg:pt-32 xl:pt-36">
          {/* Main Heading */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <h1
              className="font-bold leading-tight text-white mb-4 sm:mb-6 lg:mb-8"
              style={{ fontSize: "var(--text-70)" }}
            >
              Bold Coffee Moments
            </h1>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
            <button
              className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 font-semibold rounded-none hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontSize: "var(--text-18)" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
