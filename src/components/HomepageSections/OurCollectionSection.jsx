import React from "react";
import Img_1_1 from "../../assets/images/collections/collection_1_1.jpg";
import Img_1_2 from "../../assets/images/collections/collection_1_2.jpg";
import Img_2_1 from "../../assets/images/collections/collection_2_1.jpg";
import Img_2_2 from "../../assets/images/collections/collection_2_2.jpg";
import Img_3_1 from "../../assets/images/collections/collection_3_1.jpg";
import Img_3_2 from "../../assets/images/collections/collection_3_2.jpg";
import Slider from "../reusable/Slider";
import ImageWithHoverEffect from "../reusable/ImageWithHoverEffect";

const OurCollectionSection = () => {
  const collections = [
    {
      title: "All Coffee",
      images: [Img_1_1, Img_1_2],
    },
    {
      title: "Clifton Tea",
      images: [Img_2_1, Img_2_2],
    },
    {
      title: "Clifton Merchandise",
      images: [Img_3_1, Img_3_2],
    },
    {
      title: "Clifton Hot Chocolate",
      images: [Img_2_2, Img_3_2],
    },
  ];

  const TopContent = (item) => {
    return (
      <div className="absolute inset-0">
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Content positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
          <div className="text-white flex flex-col justify-center items-center gap-3">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mb-2 sm:mb-3 text-center text-white">
              {item.title}
            </h3>
            <button className="text-sm sm:text-base lg:text-lg text-white/90 hover:text-white transition-colors duration-300 font-light tracking-wide ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex font-barlow flex-col py-4 sm:py-6 lg:py-8 xl:py-10   gap-6 sm:gap-4 lg:gap-6 xl:gap-5 ">
      <h2 className="text-center text-primary font-normal tracking-tighter text-70 ">
        Our Collections
      </h2>

      <div className="w-full min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[800px] xl:min-h-[750px] overflow-hidden ">
        <Slider
          items={collections}
          itemsToShow={3}
          itemsToShowTablet={2}
          itemsToShowMobile={1}
          showArrows={true}
          translateIn="-x"
          showPagination={true}
          paginationLocation="bottom"
          showPartialNext={true}
          partialNextPercent={0}
          renderItem={(item) => (
            <div className="w-full h-full max-w-full">
              {/* Card container with hover effects */}
              <div className="group relative w-full h-[420px] sm:h-[470px] md:h-[530px] lg:h-[570px] xl:h-[620px] rounded-2xl sm:rounded-3xl overflow-hidden  transition-all duration-500 cursor-pointer transform ">
                <ImageWithHoverEffect
                  topImage={item.images[0]}
                  bottomImage={item.images[1]}
                  renderTopContent={() => TopContent(item)}
                />
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default OurCollectionSection;
