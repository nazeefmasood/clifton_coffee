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
      <div className="w-full h-full flex bg-[rgba(0,0,0,0.4)] text-white justify-end items-center flex-col group">
        <div className="mb-4 sm:mb-6 lg:mb-8 xl:mb-10 flex flex-col px-4 sm:px-6">
          <h2
            className="text-center font-bold mb-3 sm:mb-4"
            style={{
              fontSize: "var(--text-40)",
              fontFamily: "var(--font-barlow)",
            }}
          >
            {item.title}
          </h2>
          <button
            className="group-hover:underline border border-white text-white hover:bg-white hover:text-gray-900 font-medium px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 transition-all duration-300 rounded-none"
            style={{
              fontSize: "var(--text-18)",
              fontFamily: "var(--font-barlow)",
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className="flex flex-col py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 gap-6 sm:gap-8 lg:gap-12 xl:gap-14"
      style={{ fontFamily: "var(--font-barlow)" }}
    >
      <h2
        className="text-center text-primary font-bold"
        style={{ fontSize: "var(--text-70)" }}
      >
        Our Collections
      </h2>
      <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px] overflow-hidden">
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
            <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] xl:h-[650px] aspect-[2/3] rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] xl:rounded-[30px] overflow-hidden">
              <ImageWithHoverEffect
                topImage={item.images[0]}
                bottomImage={item.images[1]}
                renderTopContent={() => TopContent(item)}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default OurCollectionSection;
