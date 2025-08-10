import React, { useState } from "react";
import Slider from "../reusable/Slider";
import { Star } from "lucide-react";
import data from "../../data/db";

const TestimonialsSection = () => {
  const [reviews, setReviews] = useState(data.reviews);

  return (
    <div className="flex flex-col py-8 sm:py-12 lg:py-16 gap-8 lg:px-4 sm:gap-12 lg:gap-16   mx-auto bg-[color:var(--color-light-grey-2)]">
      <h2 className="text-center leading-tight font-barlow font-normal text-70 tracking-tighter">
        Thousands of 5 Star Reviews
      </h2>

      <div className="w-full h-[350px] md:h-[480px] lg:h-[450px] overflow-hidden">
        <Slider
          items={reviews}
          itemsToShow={3}
          showArrows={false}
          translateIn="-x"
          showPagination={true}
          paginationLocation="bottom"
          showPartialNext={true}
          partialNextPercent={0}
          renderItem={(item) => (
            <div className="w-full h-[250px] sm:h-[260px] lg:h-[280px] bg-[color:var(--color-light-green-3)]  flex flex-col justify-center items-center overflow-hidden p-4 sm:p-6 lg:p-8 rounded-xl    duration-300 xl:justify-between xl:items-start hover:scale-[1.02]">
              <div className="flex flex-col justify-center items-center   xl:justify-between xl:items-start">
                <div className="flex mb-2">
                  {Array(item.rating)
                    .fill()
                    .map((_, id) => (
                      <Star
                        key={id}
                        color="#000"
                        fill="#000"
                        size={16}
                        className="sm:w-5 sm:h-5"
                      />
                    ))}
                </div>
                <h3 className="font-semibold leading-tight text-18 font-barlow mt-4">
                  {item.title}
                </h3>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 sm:gap-3 flex-1 min-h-0 justify-center items-center xl:justify-between xl:items-start mt-3">
                <p className="font-normal leading-relaxed flex-1 overflow-hidden text-center xl:text-start font-barlow text-16">
                  {item.text}
                </p>
                <p
                  className="font-medium mt-auto pt-2"
                  style={{
                    fontFamily: "Barlow, sans-serif",
                    fontSize: "clamp(0.875rem, 2vw, 1rem)",
                    fontWeight: 500,
                  }}
                >
                  — {item.author}
                </p>
              </div>

              {/* Author */}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default TestimonialsSection;
