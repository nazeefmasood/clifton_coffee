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
    <div
      className="w-full h-full relative group overflow-hidden"
      style={{ fontFamily: "Barlow, sans-serif" }}
    >
      {swapOnHover && bottomImage && topImage ? (
        <>
          {/* Bottom image */}
          <img
            src={bottomImage}
            alt={altBottom}
            className="absolute inset-0 w-full h-full z-10 object-cover opacity-100 scale-100 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-105"
            loading="lazy"
          />

          {/* Top image */}
          <img
            src={topImage}
            alt={altTop}
            className="absolute inset-0 w-full h-full z-20 object-cover opacity-0 scale-100 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-105"
            loading="lazy"
          />
        </>
      ) : (
        // Single image mode (no hover swap) - Enhanced responsiveness
        <img
          src={topImage || bottomImage}
          alt={altTop || altBottom}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          loading="lazy"
        />
      )}

      {/* Optional overlay content - Enhanced for mobile responsiveness */}
      {typeof renderTopContent === "function" && (
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="w-full h-full">{renderTopContent()}</div>
        </div>
      )}
    </div>
  );
};

export default ImageWithHoverEffect;
