import React from "react";

const ImageWithHoverEffect = ({
  topImage,
  bottomImage,
  renderTopContent,
  altTop = "Top image",
  altBottom = "Bottom image",
  swapOnHover = true, // if false → single image mode
}) => {
  // If no images provided, don't render
  if (!topImage && !bottomImage) {
    return null;
  }

  return (
    <div className="w-full h-full relative group overflow-hidden bg-amber-700">
      {swapOnHover && bottomImage && topImage ? (
        <>
          {/* Bottom image */}
          <img
            src={bottomImage}
            alt={altBottom}
            className="absolute inset-0 z-10 object-contain opacity-100 scale-100 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-105"
            loading="lazy"
          />

          {/* Top image */}
          <img
            src={topImage}
            alt={altTop}
            className="absolute inset-0 z-20 object-contain opacity-0 scale-100 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-105"
            loading="lazy"
          />
        </>
      ) : (
        // Single image mode (no hover swap)
        <img
          src={topImage || bottomImage}
          alt={altTop || altBottom}
          className="w-full h-full z-10 object-fill scale-100  "
          loading="lazy"
        />
      )}

      {/* Optional overlay content */}
      {typeof renderTopContent === "function" && (
        <div className="absolute inset-0 z-30 pointer-events-none">
          {renderTopContent()}
        </div>
      )}
    </div>
  );
};

export default ImageWithHoverEffect;
