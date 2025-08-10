import React, { useState } from "react";

import Slider from "../reusable/Slider";
import { Instagram } from "lucide-react";
import data from "../../data/db";

const SocialMediaSection = () => {
  const [images, setImages] = useState(data.socialmedia.images);

  return (
    <div className="flex flex-col  gap-6 sm:gap-8 lg:gap-12 overflow-hidden py-4 sm:py-6 lg:py-8 lg:px-4 bg-[color:var(--color-light-grey-2)]">
      {/* Header Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-center  mb-2 sm:mb-4 text-36 font-normal font-barlow underline underline-offset-8 cursor-pointer">
          @cliftoncoffee
        </h2>
        <p className="text-center font-normal text-gray-600 font-barlow text-18 pointer-events-none">
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
