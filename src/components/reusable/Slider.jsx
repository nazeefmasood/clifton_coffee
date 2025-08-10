import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React, { useState, useMemo, useCallback, useEffect } from "react";

const Slider = ({
  items = [],
  itemsToShow = 3,
  itemsToShowMobile = 1,
  itemsToShowTablet = 2,
  showPagination = true,
  paginationLocation = "bottom",
  showPartialNext = false,
  partialNextPercent = 0.2,
  translateIn = "-x",
  showArrows = false,
  renderItem,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("desktop");
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Enhanced screen size detection with Tailwind breakpoints
  useEffect(() => {
    if (!isMounted) return;

    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // sm breakpoint
        setScreenSize("mobile");
      } else if (width < 768) {
        // md breakpoint
        setScreenSize("small-tablet");
      } else if (width < 1024) {
        // lg breakpoint
        setScreenSize("tablet");
      } else if (width < 1280) {
        // xl breakpoint
        setScreenSize("small-tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isMounted]);

  // Enhanced responsive items calculation
  const getItemsToShow = useMemo(() => {
    switch (screenSize) {
      case "mobile":
        return Math.max(1, parseInt(itemsToShowMobile, 10) || 1);
      case "small-tablet":
        return Math.max(1, parseInt(itemsToShowTablet, 10) || 1);
      case "tablet":
        return Math.max(1, parseInt(itemsToShowTablet, 10) || 2);
      case "laptop":
        return Math.max(1, parseInt(itemsToShow, 10) || 3);
      default:
        return Math.max(1, parseInt(itemsToShow, 10) || 3);
    }
  }, [screenSize, itemsToShow, itemsToShowMobile, itemsToShowTablet]);

  const isVertical = translateIn === "-y";

  // Memoize effective items to show (including partial)
  const effectiveItemsToShow = useMemo(() => {
    return showPartialNext
      ? getItemsToShow + partialNextPercent
      : getItemsToShow;
  }, [getItemsToShow, showPartialNext, partialNextPercent]);

  // Reset currentIndex when screen size changes to prevent out-of-bounds
  useEffect(() => {
    if (!isMounted) return;

    const maxIndex = Math.max(0, items.length - getItemsToShow);
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [screenSize, getItemsToShow, currentIndex, items.length, isMounted]);

  // Memoize total pages and current page
  const totalPages = useMemo(
    () => Math.ceil(items.length / getItemsToShow),
    [items.length, getItemsToShow]
  );
  const currentPage = useMemo(
    () => Math.floor(currentIndex / getItemsToShow),
    [currentIndex, getItemsToShow]
  );

  // Enhanced navigation with smooth cycling
  const showNextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, items.length - getItemsToShow);
      if (prev >= maxIndex) {
        return showPagination ? 0 : prev; // Reset to start with pagination
      }
      return Math.min(prev + getItemsToShow, maxIndex);
    });
  }, [items.length, showPagination, getItemsToShow]);

  const showPreviousSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        const maxIndex = Math.max(0, items.length - getItemsToShow);
        return showPagination ? maxIndex : prev; // Go to last page
      }
      return Math.max(prev - getItemsToShow, 0);
    });
  }, [items.length, showPagination, getItemsToShow]);

  const handlePagination = useCallback(
    (pageIdx) => {
      setCurrentIndex(pageIdx * getItemsToShow);
    },
    [getItemsToShow]
  );

  // Enhanced responsive container classes
  const containerClasses = useMemo(() => {
    const baseClasses = "w-full h-full";
    const fontClass = `font-['var(--font-barlow)']`;

    if (paginationLocation === "left" || paginationLocation === "right") {
      return `flex ${baseClasses} relative ${fontClass}`;
    }
    return `flex flex-col gap-2 sm:gap-3 lg:gap-4 ${baseClasses} ${fontClass}`;
  }, [paginationLocation]);

  // Enhanced responsive pagination positioning
  const paginationClasses = useMemo(() => {
    switch (paginationLocation) {
      case "top":
        return "order-first mb-2 sm:mb-4";
      case "left":
        return "flex-col absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30";
      case "right":
        return "flex-col absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30";
      default:
        return "mt-2 sm:mt-4 lg:mt-6";
    }
  }, [paginationLocation]);

  // Enhanced transform calculation for smooth animation
  const transformValue = useMemo(() => {
    if (items.length === 0)
      return isVertical ? "translateY(0%)" : "translateX(0%)";

    const movePercentage = (currentIndex / items.length) * 100;

    return isVertical
      ? `translateY(-${movePercentage}%)`
      : `translateX(-${movePercentage}%)`;
  }, [currentIndex, items.length, isVertical]);

  // Enhanced item opacity for partial visibility
  const getItemOpacity = useCallback(
    (itemIndex) => {
      if (!showPartialNext) return 1;

      const visibleStart = currentIndex;
      const visibleEnd = currentIndex + effectiveItemsToShow;
      const fullVisibleEnd = currentIndex + getItemsToShow;

      if (itemIndex >= visibleStart && itemIndex < fullVisibleEnd) {
        return 1;
      }

      if (itemIndex >= fullVisibleEnd && itemIndex < visibleEnd) {
        return 0.7; // Enhanced partial opacity
      }

      return 1;
    },
    [currentIndex, effectiveItemsToShow, getItemsToShow, showPartialNext]
  );

  // Enhanced container styling with better responsive handling
  const getContainerStyle = useMemo(() => {
    if (items.length === 0) return {};

    if (isVertical) {
      return {
        height: `${items.length * (100 / effectiveItemsToShow)}%`,
        transform: transformValue,
      };
    } else {
      const containerWidth = `${items.length * (100 / effectiveItemsToShow)}%`;
      return {
        width: containerWidth,
        transform: transformValue,
      };
    }
  }, [items.length, effectiveItemsToShow, transformValue, isVertical]);

  // Enhanced item styling with responsive considerations
  const getItemStyle = useCallback(
    (idx) => {
      if (items.length === 0) return {};

      const baseStyle = isVertical
        ? { height: `${100 / items.length}%` }
        : { width: `${100 / items.length}%` };

      return {
        ...baseStyle,
        opacity: getItemOpacity(idx),
        transition: "opacity 300ms ease-in-out",
      };
    },
    [items.length, isVertical, getItemOpacity]
  );

  // Enhanced responsive padding system
  const getResponsivePadding = useMemo(() => {
    switch (screenSize) {
      case "mobile":
        return "px-3 sm:px-4";
      case "small-tablet":
        return "px-4 sm:px-5";
      case "tablet":
        return "px-4 sm:px-6 md:px-7";
      case "laptop":
        return "px-6 sm:px-8 lg:px-9";
      default:
        return "px-6 sm:px-8 lg:px-10 xl:px-12";
    }
  }, [screenSize]);

  // Enhanced responsive arrow system
  const getArrowClasses = useMemo(() => {
    const baseClasses =
      "absolute top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 z-30 disabled:opacity-40 disabled:cursor-not-allowed backdrop-blur-sm border border-white/20";

    let sizeClasses, iconSize, positioning;

    switch (screenSize) {
      case "mobile":
        sizeClasses = "p-2 w-9 h-9";
        iconSize = 16;
        positioning = { left: "left-2", right: "right-2" };
        break;
      case "small-tablet":
        sizeClasses = "p-2.5 w-10 h-10";
        iconSize = 18;
        positioning = { left: "left-3", right: "right-3" };
        break;
      case "tablet":
        sizeClasses = "p-3 w-11 h-11";
        iconSize = 20;
        positioning = { left: "left-4", right: "right-4" };
        break;
      default:
        sizeClasses = "p-3.5 w-12 h-12 lg:w-14 lg:h-14 lg:p-4";
        iconSize = 20;
        positioning = { left: "left-4 lg:left-6", right: "right-4 lg:right-6" };
    }

    return { baseClasses, sizeClasses, iconSize, positioning };
  }, [screenSize]);

  // Enhanced pagination dot sizing
  const getPaginationDotClasses = useMemo(() => {
    const baseClasses =
      "rounded-full cursor-pointer transition-all duration-300 hover:scale-110";

    switch (screenSize) {
      case "mobile":
        return {
          base: baseClasses,
          size: "w-2 h-2",
          gap: "gap-1.5",
          active: "bg-gray-900 scale-125",
          inactive: "bg-gray-300 hover:bg-gray-500",
        };
      case "small-tablet":
      case "tablet":
        return {
          base: baseClasses,
          size: "w-2.5 h-2.5",
          gap: "gap-2",
          active: "bg-gray-900 scale-125",
          inactive: "bg-gray-300 hover:bg-gray-500",
        };
      default:
        return {
          base: baseClasses,
          size: "w-3 h-3",
          gap: "gap-2.5",
          active: "bg-gray-900 scale-125",
          inactive: "bg-gray-300 hover:bg-gray-500",
        };
    }
  }, [screenSize]);

  // Enhanced spacing between items
  const getItemSpacing = useMemo(() => {
    if (isVertical) {
      return screenSize === "mobile" ? "py-1" : "py-1.5 sm:py-2";
    }
    return screenSize === "mobile" ? "px-1" : "px-1.5 sm:px-2 lg:px-3";
  }, [screenSize, isVertical]);

  // Server-side rendering protection
  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 animate-pulse">
        <div className="w-full h-32 bg-gray-200 rounded-lg"></div>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="w-full h-full flex items-center justify-center py-8 sm:py-12">
        <p
          className="text-gray-500 font-normal text-center"
          style={{
            fontSize: "var(--text-18)",
            fontFamily: "var(--font-barlow)",
          }}
        >
          No items to display
        </p>
      </div>
    );
  }

  const arrowConfig = getArrowClasses;
  const dotConfig = getPaginationDotClasses;

  return (
    <div className={containerClasses}>
      <div
        className={`w-full h-full overflow-hidden relative ${getResponsivePadding}`}
      >
        <div
          className={`flex ${
            isVertical ? "flex-col h-full" : ""
          } transition-transform duration-500 ease-out`}
          style={getContainerStyle}
        >
          {items.map((item, idx) => (
            <div
              key={`slider-item-${idx}`}
              className="flex-shrink-0"
              style={getItemStyle(idx)}
            >
              <div className={`${getItemSpacing} h-full p-8`}>
                {renderItem && typeof renderItem === "function" ? (
                  renderItem(item, idx, currentIndex, screenSize)
                ) : (
                  <div className="w-full h-full rounded-lg flex items-center justify-center">
                    <span
                      className="text-gray-400 font-medium"
                      style={{
                        fontSize: "var(--text-18)",
                        fontFamily: "var(--font-barlow)",
                      }}
                    >
                      Item {idx + 1}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {showArrows && items.length > getItemsToShow && (
          <>
            <button
              onClick={showPreviousSlide}
              disabled={!showPagination && currentIndex === 0}
              className={`${arrowConfig.baseClasses} ${arrowConfig.sizeClasses} ${arrowConfig.positioning.left}`}
              aria-label="Previous slide"
            >
              <ArrowBigLeft
                size={arrowConfig.iconSize}
                className="text-gray-700"
              />
            </button>
            <button
              onClick={showNextSlide}
              disabled={
                !showPagination && currentIndex >= items.length - getItemsToShow
              }
              className={`${arrowConfig.baseClasses} ${arrowConfig.sizeClasses} ${arrowConfig.positioning.right}`}
              aria-label="Next slide"
            >
              <ArrowBigRight
                size={arrowConfig.iconSize}
                className="text-gray-700"
              />
            </button>
          </>
        )}
      </div>

      {showPagination && totalPages > 1 && (
        <div
          className={`flex ${dotConfig.gap} justify-center items-center flex-shrink-0 z-30 ${paginationClasses} my-10`}
          role="navigation"
          aria-label="Slider pagination"
        >
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={`pagination-dot-${idx}`}
              onClick={() => handlePagination(idx)}
              className={`${dotConfig.base} ${dotConfig.size} ${
                idx === currentPage ? dotConfig.active : dotConfig.inactive
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