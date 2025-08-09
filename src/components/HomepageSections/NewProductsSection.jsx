import { useState } from "react";
import Slider from "../reusable/Slider";

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
            relative overflow-hidden rounded-lg
            ${images.length === 3 && index === 0 ? "row-span-2" : ""}
          `}
        >
          <img
            src={image}
            alt={`Collage image ${index + 1}`}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

// Main component
const NewProductsSection = () => {
  const [activeTab, setActiveTab] = useState("Coffee");

  // Your existing data
  const data = {
    Coffee: {
      collageImages: [
        "https://images.pexels.com/photos/3174435/pexels-photo-3174435.jpeg",
        "https://images.pexels.com/photos/19551941/pexels-photo-19551941.jpeg",
        "https://images.pexels.com/photos/18238050/pexels-photo-18238050.jpeg",
        "https://images.pexels.com/photos/3174435/pexels-photo-3174435.jpeg",
      ],
      products: [
        {
          id: 1,
          title: "Panama Coffee",
          description:
            "Introducing El Vergel Estate, a vibrant new coffee from the Bayter family's innovative farm in Fresno, Tolima. This Red and Yellow Caturra variety.",
          price: "13.50",
          image:
            "https://images.pexels.com/photos/3174435/pexels-photo-3174435.jpeg",
        },
        {
          id: 2,
          title: "Peru Coffee",
          description:
            "Introducing El Vergel Estate, a vibrant new coffee from the Bayter family's innovative farm in Fresno, Tolima. This Red and Yellow Caturra variety.",
          price: "13.50",
          image:
            "https://images.pexels.com/photos/19551941/pexels-photo-19551941.jpeg",
        },
        {
          id: 3,
          title: "Colombian Coffee",
          description:
            "Rich and full-bodied coffee with chocolate undertones from the highlands of Colombia.",
          price: "15.50",
          image:
            "https://images.pexels.com/photos/18238050/pexels-photo-18238050.jpeg",
        },
        {
          id: 4,
          title: "Ethiopian Coffee",
          description:
            "Bright and floral coffee with citrus notes from the birthplace of coffee.",
          price: "14.50",
          image:
            "https://images.pexels.com/photos/3174435/pexels-photo-3174435.jpeg",
        },
      ],
    },
    Capsule: {
      collageImages: [
        "https://images.pexels.com/photos/19551941/pexels-photo-19551941.jpeg",
        "https://images.pexels.com/photos/18238050/pexels-photo-18238050.jpeg",
        "https://images.pexels.com/photos/3174435/pexels-photo-3174435.jpeg",
      ],
      products: [
        {
          id: 1,
          title: "Intense Capsule",
          description:
            "Bold and robust flavor profile perfect for espresso lovers who enjoy a strong kick.",
          price: "8.50",
          image:
            "https://images.pexels.com/photos/19551941/pexels-photo-19551941.jpeg",
        },
        {
          id: 2,
          title: "Smooth Capsule",
          description:
            "Balanced and mellow taste with subtle notes of caramel and nuts.",
          price: "8.50",
          image:
            "https://images.pexels.com/photos/18238050/pexels-photo-18238050.jpeg",
        },
        {
          id: 3,
          title: "Decaf Capsule",
          description:
            "All the flavor without the caffeine, perfect for evening enjoyment.",
          price: "9.50",
          image:
            "https://images.pexels.com/photos/3174435/pexels-photo-3174435.jpeg",
        },
      ],
    },
    All: {
      collageImages: [
        "https://images.pexels.com/photos/3174435/pexels-photo-3174435.jpeg",
      ],
      products: [
        {
          id: 1,
          title: "Starter Pack",
          description:
            "A curated selection of our most popular coffees and capsules for beginners.",
          price: "25.00",
          image:
            "https://images.pexels.com/photos/3174435/pexels-photo-3174435.jpeg",
        },
        {
          id: 2,
          title: "Premium Bundle",
          description:
            "Our finest selection including rare single origins and exclusive blends.",
          price: "45.00",
          image:
            "https://images.pexels.com/photos/19551941/pexels-photo-19551941.jpeg",
        },
        {
          id: 3,
          title: "Monthly Subscription",
          description:
            "Get fresh coffee delivered monthly with our flexible subscription service.",
          price: "30.00",
          image:
            "https://images.pexels.com/photos/18238050/pexels-photo-18238050.jpeg",
        },
        {
          id: 4,
          title: "Gift Set",
          description:
            "Beautiful packaging with a variety of our best products, perfect for gifting.",
          price: "35.00",
          image:
            "https://images.pexels.com/photos/3174435/pexels-photo-3174435.jpeg",
        },
        {
          id: 5,
          title: "Barista Kit",
          description:
            "Everything you need to make cafe-quality drinks at home.",
          price: "55.00",
          image:
            "https://images.pexels.com/photos/19551941/pexels-photo-19551941.jpeg",
        },
      ],
    },
  };

  const tabs = ["Coffee", "Capsule", "All"];

  return (
    <div
      className="flex flex-col px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-12 lg:py-16 gap-8 sm:gap-10 lg:gap-12 overflow-hidden"
      style={{ fontFamily: "var(--font-barlow)" }}
    >
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h2
          className="font-bold text-gray-900"
          style={{
            fontSize: "var(--text-70)",
            lineHeight: "1.1",
          }}
        >
          New Products
        </h2>
        <p
          className="font-normal text-gray-600 max-w-2xl mx-auto"
          style={{
            fontSize: "var(--text-25)",
            lineHeight: "1.4",
          }}
        >
          Discover our premium coffee collections crafted for every taste!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 xl:gap-12">
        {/* Collage Section */}
        <div className="flex-1 w-full">
          <div className="h-64 sm:h-80 lg:h-96 xl:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
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
                  font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full 
                  transition-all duration-300 transform hover:scale-105
                  ${
                    activeTab === tab
                      ? "bg-gray-900 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
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
          <div className="flex-1 h-auto xl:h-[500px] relative">
            <Slider
              items={data[activeTab].products}
              itemsToShow={window.innerWidth >= 1280 ? 2 : 1}
              showPagination={false}
              showArrows={true}
              renderItem={(item) => (
                <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Product Image */}
                  <div className="w-full h-48 sm:h-56 lg:h-64 xl:h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 bg-gray-50 p-4 sm:p-6 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3
                        className="font-semibold text-gray-900 text-center"
                        style={{
                          fontSize: "var(--text-25)",
                          fontFamily: "var(--font-barlow)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="font-normal text-gray-600 text-center leading-relaxed"
                        style={{
                          fontSize: "var(--text-18)",
                          fontFamily: "var(--font-barlow)",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p
                        className="font-medium text-gray-900 text-center"
                        style={{
                          fontSize: "var(--text-25)",
                          fontFamily: "var(--font-barlow)",
                        }}
                      >
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductsSection;
