import React from "react";
import HeaderSection from "./HeaderSection.jsx";
import Button from "../reusable/Button.jsx";
import Poster from "../../assets/images/header/coffee_2.jpg";
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
        poster={Poster}
      >
        <source
          src="https://res.cloudinary.com/dqn2ot5wu/video/upload/v1754859954/bg_video_bhlwaw.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] sm:bg-opacity-70 lg:bg-opacity-75 z-10"></div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-50">
        <HeaderSection />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-7xl mx-auto pt-24 sm:pt-28 lg:pt-32 xl:pt-36">
          {/* Main Heading */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <h1 className="font-normal leading-tight text-70 xl:text-91 text-white mb-4 sm:mb-6 lg:mb-8">
              Bold Coffee Moments
            </h1>
          </div>

          <Button
            bg="bg-transparent"
            hoverBg="hover:bg-black"
            border="border-white"
            hoverBorder="hover:border-black"
            textColor="text-white"
            hoverTextColor="hover:text-white"
            paddingX={"px-10"}
            paddingY="py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
