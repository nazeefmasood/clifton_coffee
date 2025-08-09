import React, { useEffect, useState } from "react";

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
  const [showPartialNext, setShowPartialNext] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowPartialNext(false);
      } else {
        setShowPartialNext(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      title: "Clifton Capsules",
      description:
        "The wait is finally over, our capsules are back and better than ever. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Clifton Coffee",
      description:
        "Through the changing tides of history, this practice has maintained its place in both professional and creative worlds. Its influence has reached beyond its origins, shaping how we communicate ideas. What began as a practical solution has become a timeless standard, a foundation for countless innovations that followed.Why does it still matter today?",
    },
    {
      title: "Clifton Tea",
      description:
        "Centuries have passed, yet the structure remains steady, even as technology has shifted the way we share information. It was embraced in printing houses, carried into typewriters, and eventually embedded into modern publishing software. Its survival is a testament to its adaptability and enduring relevance.Why do people continue to trust it?",
    },
    {
      title: "Clifton Chocolate",
      description:
        " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?",
    },
  ];

  const BannerTopContent = () => {
    return (
      <div className="bg-black/40 text-white flex flex-col w-full h-full justify-center items-start p-4 sm:p-6 md:p-8 lg:p-12">
        <p
          className="text-sm sm:text-base md:text-lg font-light mb-2 sm:mb-4"
          style={{
            fontFamily: "Barlow, sans-serif",
            fontSize: "clamp(1rem, 0.5vw + 0.875rem, 1.125rem)",
          }}
        >
          Clifton Coffee — Speciality Coffee
        </p>
        <h2
          className="font-black mb-4 sm:mb-6 leading-none"
          style={{
            fontFamily: "Barlow, sans-serif",
            fontSize: "clamp(3rem, 6vw + 1rem, 4.375rem)",
            fontWeight: 900,
          }}
        >
          Shop coffee
        </h2>
        <p
          className="font-normal leading-relaxed max-w-2xl"
          style={{
            fontFamily: "Barlow, sans-serif",
            fontSize: "clamp(1.25rem, 1vw + 1rem, 1.5625rem)",
            fontWeight: 400,
          }}
        >
          Discover your perfect cup of coffee—crafted to match your taste and
          style.
          <br className="hidden sm:block" />
          Wake up to perfection every day!
        </p>
      </div>
    );
  };

  return (
    <div
      className="w-full min-h-screen"
      style={{ fontFamily: "Barlow, sans-serif" }}
    >
      {/* Banner Section */}
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] ">
        <ImageWithHoverEffect
          topImage={Banner}
          swapOnHover={false}
          renderTopContent={BannerTopContent}
        />
      </div>

      {/* Slider Section */}
      <div className="bg-[#E0E1DA] h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <Slider
          items={items}
          itemsToShow={1}
          translateIn="-y"
          showArrows={false}
          paginationLocation="right"
          showPartialNext={true}
          partialNextPercent={0.8}
          renderItem={(item, i, currentIndex) => {
            const isActive = i === Math.floor(currentIndex / 1);

            return (
              <div className="w-full h-[400px] sm:h-[500px] lg:h-[650px] flex flex-col lg:flex-row overflow-hidden">
                {/* Left side - Content */}
                <div className="flex-1 flex flex-col justify-start items-start p-4 sm:p-6 md:p-8 lg:p-12">
                  <h2
                    className="font-bold mb-4 sm:mb-6 text-gray-800 leading-tight"
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "clamp(1.75rem, 3vw + 1rem, 2.5rem)",
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="text-gray-600 leading-relaxed mb-6 sm:mb-8 font-normal"
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "clamp(1rem, 0.5vw + 0.875rem, 1.125rem)",
                      fontWeight: 400,
                    }}
                  >
                    {item.description}
                  </p>
                  {isActive && (
                    <button
                      className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700  font-medium  transform hover:-translate-y-0.5 transition-all duration-200"
                      style={{
                        fontFamily: "Barlow, sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      Read More
                    </button>
                  )}
                </div>

                {/* Right side - Image */}
                <div className="flex-1 w-full h-full z-30 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 relative">
                  <div className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-10 bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 overflow-hidden rounded-2xl">
                    {isActive && (
                      <img
                        src={images[i]}
                        alt={`${item.title} collection`}
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
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
