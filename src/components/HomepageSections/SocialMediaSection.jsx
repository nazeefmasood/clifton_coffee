import React from "react";
import Social_1 from "../../assets/images/social_media/social_1.jpg";
import Social_2 from "../../assets/images/social_media/social_2.jpg";
import Social_3 from "../../assets/images/social_media/social_5.jpg";
import Social_4 from "../../assets/images/social_media/social_4.jpg";
import Social_5 from "../../assets/images/social_media/social_1.jpg";
import Social_6 from "../../assets/images/social_media/social_2.jpg";
import Social_7 from "../../assets/images/social_media/social_4.jpg";
import Social_8 from "../../assets/images/social_media/social_5.jpg";
import Slider from "../reusable/Slider";
import { Instagram } from "lucide-react";

const SocialMediaSection = () => {
  const images = [
    { img: Social_1 },
    { img: Social_2 },
    { img: Social_3 },
    { img: Social_4 },
    { img: Social_5 },
    { img: Social_6 },
    { img: Social_7 },
    { img: Social_8 },
  ];

  return (
    <div
      className="flex flex-col mt-6 sm:mt-8 lg:mt-12 gap-6 sm:gap-8 lg:gap-12 overflow-hidden py-4 sm:py-6 lg:py-8"
      style={{ fontFamily: "Barlow, sans-serif" }}
    >
      {/* Header Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center font-black mb-2 sm:mb-4"
          style={{
            fontFamily: "Barlow, sans-serif",
            fontSize: "clamp(3rem, 6vw + 1rem, 4.375rem)",
            fontWeight: 900,
          }}
        >
          @cliftoncoffee
        </h2>
        <p
          className="text-center font-normal text-gray-600"
          style={{
            fontFamily: "Barlow, sans-serif",
            fontSize: "clamp(1rem, 0.5vw + 0.875rem, 1.125rem)",
            fontWeight: 400,
          }}
        >
          Follow us on Instagram for the latest updates!
        </p>
      </div>

      {/* Instagram Grid Slider */}
      <div className="w-full">
        <Slider
          items={images}
          itemsToShow={5}
          showArrows={false}
          renderItem={(item) => {
            return (
              <div className="aspect-square relative group rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer">
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center z-20">
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white mb-2 transform group-hover:scale-110 transition-transform duration-300" />
                  <p
                    className="text-white font-medium hidden sm:block"
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                      fontWeight: 500,
                    }}
                  >
                    View on Instagram
                  </p>
                </div>

                {/* Image */}
                <img
                  src={item.img}
                  alt="Instagram post from @cliftoncoffee"
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-75"
                  loading="lazy"
                />

                {/* Gradient Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default SocialMediaSection;
