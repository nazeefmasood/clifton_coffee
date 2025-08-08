import React from "react";
import ImageWithHoverEffect from "../reusable/ImageWithHoverEffect";
import SubscriptionImage from "../../assets/images/subscription.jpg";
import Tour_1 from "../../assets/images/tour.png";
const SubscriptionAndToursSection = () => {
  const TopContent = ({ heading = "", subtitle = "" }) => {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full bg-[rgba(0,0,0,0.5)] p-4 text-white">
        <div className="flex flex-col justify-center items-center">
          {heading && <h2 className="text-[70px] font-bold">{heading}</h2>}
          {subtitle && <p className="mt-1 text-[18px]">{subtitle}</p>}
        </div>
        <button className="px-4 py-2 border rounded-full text-white hover:bg-black hover:text-white hover:border-black transition mt-5">
          Read More
        </button>
      </div>
    );
  };

  return (
    <div className="p-4">
      <div className="bg-[#F5F5F5] grid grid-cols-2 py-4 px-8 gap-5 ">
        <div className="w-full h-[434px] overflow-hidden rounded-[15px]">
          <ImageWithHoverEffect
            topImage={SubscriptionImage}
            swapOnHover={false}
            renderTopContent={() =>
              TopContent({
                heading: "Subscriptions",
                subtitle: "Ethically sourced and direct to your door",
              })
            }
          />
        </div>
        <div className="w-full h-[434px] overflow-hidden rounded-[15px]">
          <ImageWithHoverEffect
            topImage={SubscriptionImage}
            swapOnHover={false}
            renderTopContent={() =>
              TopContent({
                heading: "Brazil Trip 2024",
                subtitle: "Blogs",
              })
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-2 px-8 gap-5">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[70px]">Virtual Tours</h2>
          <p className="text-[18px] text-center">
            Come and have a walk through our HQ, take a look at our roastery,
            training room, showrooms, cupping room and engineering bay!A little
            bit on Future Virtual Ltd – We are a Brighton & Bristol based family
            business, covering the whole of the UK. We are leading the way in
            creating stunning, fully immersive & interactive 360 virtual tours
            across all industries such as business.
          </p>

          <button className="px-4 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white hover:border-black transition mt-5">
            Read More
          </button>
        </div>
        <div className="w-full h-[434px] overflow-hidden rounded-[15px]">
          <ImageWithHoverEffect topImage={Tour_1} swapOnHover={false} />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionAndToursSection;
