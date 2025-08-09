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
        <div className="mb-10 flex flex-col">
          <h2 className="text-[70px] text-center">{item.title}</h2>
          <button className="group-hover:underline">Shop Now</button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col py-14 gap-14">
      <h2 className="text-[70px] text-center">Our Collections</h2>
      <div className="w-full h-[800px] overflow-hidden">
        <Slider
          items={collections}
          itemsToShow={3}
          showArrows={true}
          translateIn="-x"
          showPagination={true}
          paginationLocation="bottom"
          showPartialNext={true}
          partialNextPercent={0}
          renderItem={(item) => (
            <div className="w-full h-[680px] aspect-2/3 rounded-[30px] overflow-hidden">
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
