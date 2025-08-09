import React from "react";
import ImageWithHoverEffect from "../reusable/ImageWithHoverEffect";
import SubscriptionImage from "../../assets/images/subscription.jpg";
import Tour_1 from "../../assets/images/tour.png";

const SubscriptionAndToursSection = () => {
  const TopContent = ({ heading = "", subtitle = "" }) => {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full bg-black/50 p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex flex-col justify-center items-center text-center">
          {heading && (
            <h2
              className="font-bold mb-2 sm:mb-4 leading-tight"
              style={{
                fontFamily: "Barlow, sans-serif",
                fontSize: "clamp(2rem, 5vw + 0.5rem, 3.5rem)",
                fontWeight: 700,
              }}
            >
              {heading}
            </h2>
          )}
          {subtitle && (
            <p
              className="font-normal max-w-md leading-relaxed"
              style={{
                fontFamily: "Barlow, sans-serif",
                fontSize: "clamp(1rem, 0.5vw + 0.875rem, 1.125rem)",
                fontWeight: 400,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
        <button
          className="mt-6 sm:mt-8 px-6 py-3 border-2 border-white rounded-full text-white font-medium hover:bg-white hover:text-black transition-all duration-200 focus:ring-4 focus:ring-white focus:ring-opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          style={{
            fontFamily: "Barlow, sans-serif",
            fontSize: "clamp(1rem, 0.5vw + 0.875rem, 1.125rem)",
            fontWeight: 500,
          }}
        >
          Read More
        </button>
      </div>
    );
  };

  return (
    <div
      className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      style={{ fontFamily: "Barlow, sans-serif" }}
    >
      {/* Top Section - Subscriptions & Brazil Trip */}
      <div className="bg-gray-50 grid grid-cols-1 lg:grid-cols-2 py-6 sm:py-8 lg:py-8 px-4 sm:px-6 lg:px-8 gap-4 sm:gap-6 lg:gap-8 rounded-2xl mb-8 sm:mb-12 lg:mb-16 shadow-sm">
        {/* Subscriptions */}
        <div className="w-full h-[280px] sm:h-[350px] lg:h-[534px] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
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

        {/* Brazil Trip */}
        <div className="w-full h-[280px] sm:h-[350px] lg:h-[534px] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
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

      {/* Bottom Section - Virtual Tours */}
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 lg:px-8 gap-8 sm:gap-10 lg:gap-16 mt-8 sm:mt-12 lg:mt-16 items-center">
        {/* Virtual Tours Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <h2
            className="font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            style={{
              fontFamily: "Barlow, sans-serif",
              fontSize: "clamp(3rem, 6vw + 1rem, 4.375rem)",
              fontWeight: 900,
            }}
          >
            Virtual Tours
          </h2>
          <p
            className="text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal"
            style={{
              fontFamily: "Barlow, sans-serif",
              fontSize: "clamp(1rem, 0.5vw + 0.875rem, 1.125rem)",
              fontWeight: 400,
              lineHeight: "1.7",
            }}
          >
            Come and have a walk through our HQ, take a look at our roastery,
            training room, showrooms, cupping room and engineering bay! A little
            bit on Future Virtual-Ltd We are a Brighton & Bristol based family
            business, covering the whole of the UK. We are leading the way in
            creating stunning, fully immersive & interactive 360 virtual tours
            across all industries such as business.
          </p>
          <button
            className="px-8 py-4 border-2 border-black rounded-full text-black font-medium hover:bg-black hover:text-white transition-all duration-200 focus:ring-4 focus:ring-gray-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            style={{
              fontFamily: "Barlow, sans-serif",
              fontSize: "clamp(1rem, 0.5vw + 0.875rem, 1.125rem)",
              fontWeight: 500,
            }}
          >
            Read More
          </button>
        </div>

        {/* Virtual Tours Image */}
        <div className="w-full h-[280px] sm:h-[350px] lg:h-[534px] overflow-hidden rounded-2xl order-1 lg:order-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <ImageWithHoverEffect
            topImage={Tour_1}
            swapOnHover={false}
            altTop="Virtual tours showcase"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionAndToursSection;
