import { useState } from "react";
import Slider from "../reusable/Slider";
import mydata from "../../data/db";

const Collage = ({ images }) => {
  if (!images || images.length === 0) return null;

  const getCollageLayout = () => {
    switch (images.length) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-2 grid-rows-2";
      case 4:
        return "grid-cols-2 grid-rows-2";
      default:
        return "grid-cols-2 grid-rows-2";
    }
  };

  return (
    <div className={`grid ${getCollageLayout()} gap-1 sm:gap-2 h-full`}>
      {images.slice(0, 4).map((image, index) => (
        <div
          key={index}
          className={`
            relative overflow-hidden rounded-lg bg-gray-200 group
            ${images.length === 3 && index === 0 ? "row-span-2" : ""}
          `}
        >
          <img
            src={image}
            alt={`Collage image ${index + 1}`}
            className="absolute inset-0 z-20 w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
            style={{
              minWidth: "100%",
              minHeight: "100%",
            }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 z-10 group-hover:z-30 flex justify-center items-center">
            <p className="text-white hover:underline text-16 underline-offset-4 cursor-pointer">
              View More
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main component
const NewProductsSection = () => {
  const [activeTab, setActiveTab] = useState("Coffee");
  const [data, setData] = useState(mydata.newProducts.data);

  const tabs = ["Coffee", "Capsule", "All"];

  return (
    <div className="flex font-barlow flex-col lg:px-4   py-8 sm:py-12 lg:py-16 gap-8 sm:gap-10 lg:gap-12 overflow-hidden bg-[color:var(--color-light-grey-2)]">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h2 className="font-normal text-gray-900 text-70 ">New Products</h2>
        <p
          className="font-normal text-gray-600 max-w-2xl mx-auto mb-10 text-25"
        
        >
          Discover our premium coffee collections crafted for every taste!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 xl:gap-12">
        {/* Collage Section */}
        <div className="flex-1 w-full">
          <div className="h-80 sm:h-96 lg:h-[800px] xl:h-[800px] rounded-2xl lg:rounded-3xl overflow-hidden bg-gray-100">
            <Collage images={data[activeTab].collageImages} />
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1 flex flex-col">
          {/* Tab Navigation */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 justify-center xl:justify-start">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-full 
                  transition-all duration-300 transform hover:scale-105
                  ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "bg-transparent border  text-gray-700 hover:bg-black hover:text-white "
                  }
                `}
                style={{
                  fontSize: "var(--text-18)",
                  fontFamily: "var(--font-barlow)",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Products Slider */}
          <div className="flex-1 h-max xl:h-[500px] relative">
            <Slider
              items={data[activeTab].products}
              itemsToShow={2}
              itemsToShowMobile={1}
              itemsToShowTablet={2}
              showPagination={false}
              showArrows={true}
              renderItem={(item, index) => {
                // Define background colors for variety
                const bgColors = [
                  "bg-[color:var(--color-light-green-gray)]",
                  "bg-[color:var(--color-warm-light-green-beige)]",
                  "bg-[color:var(--color-soft-cream-gray)]",
                  "bg-[color:var(--color-muted-seafoam-gray)]",
                  "bg-[color:var(--color-gentle-stone-gray)]",
                  "bg-[color:var(--color-light-sand-beige)]",
                  "bg-[color:var(--color-pale-sage-gray)]",
                  "bg-[color:var(--color-off-white-warm)]",
                ];
                const bgColor = bgColors[index % bgColors.length];

                return (
                  <div className="group flex flex-col rounded-3xl overflow-hidden h-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    {/* Product Image with colored background */}
                    <div
                      className={`relative w-full sm:h-32 lg:h-80 xl:h-91 overflow-hidden  flex items-center justify-center`}
                    >
                      <div className="relative w-full h-full ">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-center aspect-4/4 transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div
                      className={`flex-1 ${bgColor} p-4 sm:p-6 flex flex-col justify-between relative`}
                    >
                      <div className="space-y-3">
                        <h3 className="font-normal text-gray-900 text-center text-25">
                          {item.title}
                        </h3>
                        <p className="font-normal text-gray-600 text-center leading-relaxed text-14 lg:text-18">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-4">
                        <p className="font-semibold text-gray-900 text-center mb-4 text-25">
                          £{item.price}
                        </p>

                        <button className="bg-black w-full text-14 font-semibold text-white px-6 py-3 rounded-full border border-black   transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0  ">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductsSection;
