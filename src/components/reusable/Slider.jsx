import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowBigUp,
  ArrowBigDown,
} from "lucide-react";
import React, { useState } from "react";

const Slider = ({
  items = [],
  itemsToShow = 3,
  showPagination = true,
  paginationLocation = "bottom",
  showNextItem = false,
  translateIn = "-x",
  showArrows = false,
  renderItem,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShowNum = parseInt(itemsToShow);

  // Calculate the maximum index (for single items, it's items.length - 1)
  const maxIndex = items.length - 1;

  const showNextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  const showPreviousSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  const handlePagination = (idx) => {
    setCurrentIndex(idx);
  };

  const isVertical = translateIn === "-y";

  const getContainerClasses = () => {
    if (paginationLocation === "left" || paginationLocation === "right") {
      return "flex w-full h-full relative";
    }
    return "flex flex-col gap-3 w-full h-full";
  };
  const getPaginationClasses = () => {
    switch (paginationLocation) {
      case "top":
        return "order-first";
      case "left":
        return "flex-col absolute left-2 top-1/2 transform -translate-y-1/2";
      case "right":
        return "flex-col absolute right-2 top-1/2 transform -translate-y-1/2";
      default:
        return "";
    }
  };
  return (
    <div className={getContainerClasses()}>
      {/* Slider container with relative positioning for absolute arrows */}
      <div className="w-full h-full overflow-hidden relative">
        <div
          className={`${
            isVertical ? "flex flex-col h-full" : "flex"
          } transition-transform duration-300 ease-in-out`}
          style={
            isVertical
              ? {
                  height: `${items.length * 100}%`,
                  transform: `translateY(-${
                    (currentIndex * 100) / items.length
                  }%)`,
                }
              : {
                  width: `${(items.length * 100) / itemsToShowNum}%`,
                  transform: `translateX(-${
                    (currentIndex * 100) / items.length
                  }%)`,
                }
          }
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0"
              style={
                isVertical
                  ? { height: `${100 / items.length}%` }
                  : { width: `${100 / items.length}%` }
              }
            >
              <div className={isVertical ? "py-1.5 h-full" : "px-1.5"}>
                {renderItem(item)}
              </div>
            </div>
          ))}
        </div>

        {/* Absolutely positioned navigation arrows */}
        {showArrows && (
          <>
            {isVertical ? (
              // Vertical arrows (top and bottom)
              <>
                <button
                  onClick={showPreviousSlide}
                  className="absolute top-2 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all z-20"
                >
                  <ArrowBigUp className="w-6 h-6" />
                </button>
                <button
                  onClick={showNextSlide}
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all z-20"
                >
                  <ArrowBigDown className="w-6 h-6" />
                </button>
              </>
            ) : (
              // Horizontal arrows (left and right)
              <>
                <button
                  onClick={showPreviousSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all z-20"
                >
                  <ArrowBigLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={showNextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all z-20"
                >
                  <ArrowBigRight className="w-6 h-6" />
                </button>
              </>
            )}
          </>
        )}
      </div>

      {/* Pagination dots */}
      {showPagination && (
        <div
          className={`flex gap-2 justify-center items-center flex-shrink-0 z-30  ${getPaginationClasses()}`}
        >
          {items.map((_, idx) => (
            <div
              key={idx}
              onClick={() => handlePagination(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-black scale-110"
                  : "bg-gray-300 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
