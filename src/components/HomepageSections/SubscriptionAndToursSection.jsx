import React from "react";
import ImageWithHoverEffect from "../reusable/ImageWithHoverEffect";
import SubscriptionImage_1 from "../../assets/images/subscription_1.jpg";
import SubscriptionImage_2 from "../../assets/images/subscription_2.jpg";
import Trip_1 from "../../assets/images/trip_1.jpg";
import Trip_2 from "../../assets/images/trip_2.jpg";
import Tour_1 from "../../assets/images/tour.png";
import Tour_2 from "../../assets/images/tour_1.jpg";
import Button from "../reusable/Button";

const SubscriptionAndToursSection = () => {
  const TopContent = ({ heading = "", subtitle = "" }) => {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full bg-black/50 p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex flex-col justify-center items-center text-center mb-10">
          {heading && (
            <h2 className="font-normal font-barlow text-70 mb-2 sm:mb-4 leading-[50px] tracking-tighter">
              {heading}
            </h2>
          )}
          {subtitle && (
            <p className="font-normal max-w-md leading-relaxed font-barlow text-18">
              {subtitle}
            </p>
          )}
        </div>
        <Button
          text="Read More"
          bg="bg-transparent"
          hoverBg="hover:bg-black"
          border="border-white"
          hoverBorder="hover:border-black"
          textColor="text-white"
          hoverTextColor="hover:text-white"
          paddingX={"px-8 sm:px-10"}
          paddingY="py-2 sm:py-3"
        />
      </div>
    );
  };

  return (
    <div className="bg-[color:var(--color-light-grey-2)]">
      {/* Top Section - Subscriptions & Brazil Trip */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 py-6 sm:py-8 lg:py-8 px-4 gap-4 sm:gap-6 lg:gap-8 rounded-2xl mb-8 sm:mb-12 lg:mb-16">
        {/* Subscriptions */}
        <div className="w-full h-[400px] sm:h-[350px] lg:h-[634px] overflow-hidden rounded-2xl   duration-300">
          <ImageWithHoverEffect
            topImage={SubscriptionImage_2}
            bottomImage={SubscriptionImage_1}
            swapOnHover={true}
            renderTopContent={() =>
              TopContent({
                heading: "Subscriptions",
                subtitle: "Ethically sourced and direct to your door",
              })
            }
          />
        </div>

        {/* Brazil Trip */}
        <div className="w-full h-[400px] sm:h-[350px] lg:h-[634px] overflow-hidden rounded-2xl   duration-300">
          <ImageWithHoverEffect
            topImage={Trip_2}
            bottomImage={Trip_1}
            swapOnHover={true}
            renderTopContent={() =>
              TopContent({
                heading: "Brazil Trip 2024",
                subtitle: "Blogs",
              })
            }
          />
        </div>
      </div>

      {/* Bottom Section - Virtual Tours */}
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 gap-8 sm:gap-10 lg:gap-16 mt-8 sm:mt-12 lg:mt-16 items-center bg-[color:var(--color-light-grey-2)] ">
        {/* Virtual Tours Content */}
        <div className="flex flex-col justify-center items-center  text-center order-2 lg:order-1 ">
          <h2 className="font-normal font-barlow text-70 text-gray-900 mb-4 sm:mb-6 leading-tight">
            Virtual Tours
          </h2>
          <p className="text-gray-600  font-barlow text-18 leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal">
            Come and have a walk through our HQ, take a look at our roastery,
            training room, showrooms, cupping room and engineering bay! A little
            bit on Future Virtual-Ltd We are a Brighton & Bristol based family
            business, covering the whole of the UK. We are leading the way in
            creating stunning, fully immersive & interactive 360 virtual tours
            across all industries such as business.
          </p>
          <Button
            text="Read More"
            bg="bg-transparent"
            hoverBg="hover:bg-black"
            border="border-black"
            hoverBorder="hover:border-black"
            textColor="text-black"
            hoverTextColor="hover:text-white"
            paddingX={"px-8 sm:px-10"}
            paddingY="py-2 sm:py-3"
          />
        </div>

        {/* Virtual Tours Image */}
        <div className="w-full h-[280px] sm:h-[350px] lg:h-[600px] aspect-square overflow-hidden rounded-2xl order-1 lg:order-2   duration-300">
          <ImageWithHoverEffect
            topImage={Tour_2}
            bottomImage={Tour_1}
            swapOnHover={true}
            altTop="Virtual tours showcase"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionAndToursSection;
