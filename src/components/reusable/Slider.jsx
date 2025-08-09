import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React, { useState, useMemo, useCallback } from "react";

const Slider = ({
  items = [],
  itemsToShow = 3,
  showPagination = true,
  paginationLocation = "bottom",
  showPartialNext = false,
  partialNextPercent = 0.2,
  translateIn = "-x",
  showArrows = false,
  renderItem,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShowNum = Math.max(1, parseInt(itemsToShow, 10) || 3);
  const isVertical = translateIn === "-y";

  // Memoize effective items to show (including partial)
  const effectiveItemsToShow = useMemo(() => {
    return showPartialNext
      ? itemsToShowNum + partialNextPercent
      : itemsToShowNum;
  }, [itemsToShowNum, showPartialNext, partialNextPercent]);

  // Memoize total pages and current page
  const totalPages = useMemo(
    () => Math.ceil(items.length / itemsToShowNum),
    [items.length, itemsToShowNum]
  );
  const currentPage = useMemo(
    () => Math.floor(currentIndex / itemsToShowNum),
    [currentIndex, itemsToShowNum]
  );

  // Memoize navigation handlers with rotation
  const showNextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = items.length - itemsToShowNum;
      if (prev >= maxIndex) {
        return showPagination ? 0 : prev; // Reset to start with pagination
      }
      return Math.min(prev + itemsToShowNum, maxIndex);
    });
  }, [items.length, showPagination, itemsToShowNum]);

  const showPreviousSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return showPagination ? items.length - itemsToShowNum : prev; // Go to last page
      }
      return Math.max(prev - itemsToShowNum, 0);
    });
  }, [items.length, showPagination, itemsToShowNum]);

  const handlePagination = useCallback(
    (pageIdx) => {
      setCurrentIndex(pageIdx * itemsToShowNum);
    },
    [itemsToShowNum]
  );

  // Memoize container classes
  const containerClasses = useMemo(() => {
    if (paginationLocation === "left" || paginationLocation === "right") {
      return "flex w-full h-full relative";
    }
    return "flex flex-col gap-3 w-full h-full";
  }, [paginationLocation]);

  // Memoize pagination classes
  const paginationClasses = useMemo(() => {
    switch (paginationLocation) {
      case "top":
        return "order-first";
      case "left":
        return "flex-col absolute left-2 top-1/2 -translate-y-1/2";
      case "right":
        return "flex-col absolute right-2 top-1/2 -translate-y-1/2";
      default:
        return "";
    }
  }, [paginationLocation]);

  // Memoize transform value
  const transformValue = useMemo(() => {
    // Calculate the percentage to move based on current index and effective items to show
    const movePercentage = (currentIndex / items.length) * 100;

    return isVertical
      ? `translateY(-${movePercentage}%)` // Negative for upward movement
      : `translateX(-${movePercentage}%)`; // Negative for leftward movement
  }, [currentIndex, items.length, isVertical]);

  // Memoize item opacity and visibility logic
  const getItemOpacity = useCallback(
    (itemIndex) => {
      if (!showPartialNext) {
        return 1; // Full opacity for all visible items
      }

      const visibleStart = currentIndex;
      const visibleEnd = currentIndex + effectiveItemsToShow;
      const fullVisibleEnd = currentIndex + itemsToShowNum;

      // Item is fully visible
      if (itemIndex >= visibleStart && itemIndex < fullVisibleEnd) {
        return 1;
      }

      // Item is partially visible (next item)
      if (itemIndex >= fullVisibleEnd && itemIndex < visibleEnd) {
        return 0.6; // Partial opacity for the partial item
      }

      // Item is not visible
      return 1; // Keep at 1 but will be clipped by overflow
    },
    [currentIndex, effectiveItemsToShow, itemsToShowNum, showPartialNext]
  );

  // Calculate container dimensions for partial items
  const getContainerStyle = useMemo(() => {
    if (isVertical) {
      const containerHeight = showPartialNext
        ? `${effectiveItemsToShow * (100 / itemsToShowNum)}%`
        : "100%";

      return {
        height: `${items.length * (100 / effectiveItemsToShow)}%`,
        transform: transformValue,
      };
    } else {
      const containerWidth = showPartialNext
        ? `${items.length * (100 / effectiveItemsToShow)}%`
        : `${items.length * (100 / itemsToShowNum)}%`;

      return {
        width: containerWidth,
        transform: transformValue,
      };
    }
  }, [
    items.length,
    effectiveItemsToShow,
    itemsToShowNum,
    showPartialNext,
    transformValue,
    isVertical,
  ]);

  // Calculate individual item dimensions
  const getItemStyle = useCallback(
    (idx) => {
      const baseStyle = isVertical
        ? { height: `${100 / items.length}%` }
        : { width: `${100 / items.length}%` };

      return {
        ...baseStyle,
        opacity: getItemOpacity(idx),
      };
    },
    [items.length, isVertical, getItemOpacity]
  );

  if (!items.length) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        No items to display
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <div className="w-full h-full overflow-hidden relative px-10">
        <div
          className={`flex ${
            isVertical ? "flex-col h-full" : ""
          } transition-transform duration-300 ease-in-out`}
          style={getContainerStyle}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 transition-opacity duration-300"
              style={getItemStyle(idx)}
            >
              <div className={isVertical ? "py-1.5 h-full" : "px-2 h-full"}>
                {/* Pass currentIndex as third parameter to renderItem */}
                {renderItem(item, idx, currentIndex)}
              </div>
            </div>
          ))}
        </div>

        {showArrows && (
          <>
            <button
              onClick={showPreviousSlide}
              disabled={!showPagination && currentIndex === 0}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all z-20 disabled:opacity-50"
              aria-label="Previous slide"
            >
              <ArrowBigLeft className="w-6 h-6" />
            </button>
            <button
              onClick={showNextSlide}
              disabled={
                !showPagination && currentIndex >= items.length - itemsToShowNum
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all z-20 disabled:opacity-50"
              aria-label="Next slide"
            >
              <ArrowBigRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {showPagination && totalPages > 1 && (
        <div
          className={`flex gap-2 justify-center items-center flex-shrink-0 z-30 ${paginationClasses}`}
          role="navigation"
          aria-label="Slider pagination"
        >
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => handlePagination(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                idx === currentPage
                  ? "bg-black scale-110"
                  : "bg-gray-300 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === currentPage}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
