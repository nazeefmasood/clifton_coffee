import React from "react";
import Slider from "../reusable/Slider"; // Your fixed slider component
import Banner from "../../assets/images/banner.jpg";
import Img_1_1 from "../../assets/images/collections/collection_1_1.jpg";
import Img_1_2 from "../../assets/images/collections/collection_1_2.jpg";
import Img_2_1 from "../../assets/images/collections/collection_2_1.jpg";
import Img_2_2 from "../../assets/images/collections/collection_2_2.jpg";
import Img_3_1 from "../../assets/images/collections/collection_3_1.jpg";
import Img_3_2 from "../../assets/images/collections/collection_3_2.jpg";
import ImageWithHoverEffect from "../reusable/ImageWithHoverEffect";

const ExploreSection = () => {
  const images = [Img_1_1, Img_1_2, Img_2_1, Img_2_2, Img_3_1, Img_3_2];

  const items = [
    {
      title: "Clifton Capsules",
      description:
        "The wait is finally over, our capsules are back and better than ever. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Clifton Coffee",
      description:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Clifton Tea",
      description:
        "A timeless classic with rich aroma and deep flavor, Clifton Tea offers the perfect blend for any time of the day.",
    },
    {
      title: "Clifton Chocolate",
      description:
        "Indulge in our handcrafted Clifton Chocolate, made from the finest cocoa beans.",
    },
  ];

  const BannerTopContent = () => {
    return (
      <div className="bg-[rgba(0,0,0,0.4)] text-white flex flex-col w-full h-full justify-center items-start p-8">
        <p className="text-[17px]">Clifton Coffee — Speciality Coffee </p>
        <h2 className="text-[70px]">Shop coffee</h2>
        <p className="text-[20px]">
          Discover your perfect cup of coffee—crafted to match your taste and
          style.
          <br /> Wake up to perfection every day!
        </p>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen">
      {/* Banner Section */}
      <div className="w-full h-[500px] bg-amber-200">
        <ImageWithHoverEffect
          topImage={Banner}
          swapOnHover={false}
          renderTopContent={BannerTopContent}
        />
      </div>

      {/* Slider Section */}
      <div className="bg-[#E0E1DA] h-[500px] overflow-hidden">
        <Slider
          items={items}
          itemsToShow={1}
          translateIn="-y"
          showArrows={false}
          paginationLocation="right"
          showPartialNext={true}
          partialNextPercent={0.9}
          renderItem={(item, i, currentIndex) => {
            // Check if this is the currently active item
            const isActive = i === Math.floor(currentIndex / 1); // Since itemsToShow is 1

            return (
              <div className="w-full h-[500px] flex overflow-hidden ">
                {/* Left side - Content */}
                <div className="flex-1 flex flex-col justify-start items-start p-8 ">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  {isActive && (
                    <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors">
                      Read More
                    </button>
                  )}
                </div>

                {/* Right side - Image (only show for active item) */}
                <div className="flex-1 w-full h-full z-30 flex items-center justify-center p-10 relative">
                  <div className="absolute top-10 left-10 right-10 bottom-30 overflow-hidden rounded-2xl">
                    {isActive && (
                      <img
                        src={images[i]}
                        className="w-full h-full object-contain transition-all duration-500 ease-in-out"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default ExploreSection;
