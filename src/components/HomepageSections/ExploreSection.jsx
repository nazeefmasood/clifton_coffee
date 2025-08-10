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
import Button from "../reusable/Button";

const ExploreSection = () => {
  const images = [Img_1_1, Img_1_2, Img_2_1, Img_2_2, Img_3_1, Img_3_2];
  const [showPartialNext, setShowPartialNext] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Set showPartialNext to false for screens smaller than laptop size (1024px)
      if (window.innerWidth < 1280) {
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
        " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?",
    },
  ];

  const BannerTopContent = () => {
    return (
      <div className="bg-black/40 text-white flex flex-col w-full h-full justify-center items-start p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
        {/* Subtitle using custom text-18 variable */}
        <p className="font-barlow font-light text-16 mb-2 sm:mb-4 tracking-wide">
          Clifton Coffee — Speciality Coffee
        </p>

        {/* Main heading using custom text-70 variable */}
        <h2 className="font-barlow font-normal text-70 mb-4 sm:mb-6 lg:mb-8 leading-none tracking-tight">
          Shop coffee
        </h2>

        {/* Description using custom text-25 variable */}
        <p className="font-barlow font-normal text-18 leading-relaxed max-w-2xl">
          Discover your perfect cup of coffee—crafted to match your taste and
          style.
          <br className="hidden sm:block" />
          Wake up to perfection every day!
        </p>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen font-barlow">
      {/* Banner Section - Fully responsive heights */}
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] min-h-[400px] max-h-[800px]">
        <ImageWithHoverEffect
          topImage={Banner}
          swapOnHover={false}
          renderTopContent={BannerTopContent}
        />
      </div>

      <div className="bg-[#E0E1DA] h-max  lg:h-[750px] xl:h-[900px] min-2xl:h-[800px] overflow-hidden">
        <Slider
          items={items}
          itemsToShow={1}
          itemsToShowMobile={1}
          itemsToShowTablet={1}
          translateIn={showPartialNext ? "-y" : "-x"}
          showArrows={false}
          paginationLocation={showPartialNext ? "right" : "bottom"}
          showPartialNext={showPartialNext}
          partialNextPercent={0.8}
          renderItem={(item, i, currentIndex) => {
            const isActive = i === Math.floor(currentIndex / 1);

            return (
              <div className="w-full h-[650px] sm:h-[900px] lg:h-[700px] xl:h-[800px] min-2xl:h-[800px] flex flex-col-reverse  lg:flex-row overflow-hidden sm:flex-col-reverse">
                {/* Left side - Content */}
                <div className="flex lg:flex-1 flex-col  justify-center items-center xl:items-start lg:justify-start p-4 sm:p-6 md:p-8 lg:p-4 mt-8 sm:mt-10 md:mt-12 lg:mt-14">
                  <h2 className="font-barlow font-normal mb-4 text-36 sm:text-48 md:text-56 xl:text-70 sm:mb-6 text-gray-800 leading-tight lg:leading-tighter tracking-tight lg:tracking-tighter ">
                    {item.title}
                  </h2>
                  <p className="font-barlow text-center  text-gray-600 text-14 sm:text-16 lg:text-18 leading-relaxed mb-6 sm:mb-8 font-normal max-w-full lg:max-w-2xl">
                    {item.description}
                  </p>
                  {isActive && (
                    <Button
                      bg="bg-transparent"
                      hoverBg="hover:bg-black"
                      border="border-black"
                      hoverBorder="hover:border-black"
                      textColor="text-black"
                      hoverTextColor="hover:text-white"
                      paddingX={"px-8 sm:px-10"}
                      paddingY="py-2 sm:py-3"
                    />
                  )}
                </div>

                {/* Right side - Image */}
                <div className="flex-1 w-full h-full z-30 flex items-center justify-center p-0  lg:p-4 relative mt-6 sm:mt-8 md:mt-10 bg-amber-100">
                  <div className="absolute inset-0    xl:bottom-20 overflow-hidden p-6">
                    {isActive && (
                      <img
                        src={images[i]}
                        alt={`${item.title} collection`}
                        className="w-full h-full object-cover aspect-square lg:aspect-3/4 xl:aspect-3/3 min-2xl:aspect-video transition-all duration-500 ease-in-out hover:scale-105 rounded-3xl"
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
