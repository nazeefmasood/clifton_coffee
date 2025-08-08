import React from "react";
import Banner from "../../assets/images/banner.jpg";
import ImageWithHoverEffect from "../reusable/ImageWithHoverEffect";
const ExploreSection = () => {
  const BannerTopContent = () => {
    return (
      <div className="bg-[rgba(0,0,0,0.4)] text-white flex flex-col w-full h-full justify-center items-start p-8">
        <p className="text-[17px]">Clifton Coffee — Speciality Coffee </p>
        <h2 className="text-[70px]">Shop coffee</h2>
        <p className="text-[20px]">
          Discover your perfect cup of coffee—crafted to match your taste and
          style.<br/> Wake up to perfection every day!
        </p>
      </div>
    );
  };
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-[500px] bg-amber-200">
        <ImageWithHoverEffect
          topImage={Banner}
          swapOnHover={false}
          renderTopContent={BannerTopContent}
        />
      </div>
    </div>
  );
};

export default ExploreSection;
