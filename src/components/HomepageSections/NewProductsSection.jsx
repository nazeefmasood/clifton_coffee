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
    <div className={`grid ${getCollageLayout()}  h-full `}>
      {images.slice(0, 4).map((image, index) => (
        <div
          key={index}
          className={`
            relative overflow-hidden 
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

  // Dummy data for different categories
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
        },
        {
          id: 2,
          title: "Smooth Capsule",
          description:
            "Balanced and mellow taste with subtle notes of caramel and nuts.",
          price: "8.50",
        },
        {
          id: 3,
          title: "Decaf Capsule",
          description:
            "All the flavor without the caffeine, perfect for evening enjoyment.",
          price: "9.50",
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
        },
        {
          id: 2,
          title: "Premium Bundle",
          description:
            "Our finest selection including rare single origins and exclusive blends.",
          price: "45.00",
        },
        {
          id: 3,
          title: "Monthly Subscription",
          description:
            "Get fresh coffee delivered monthly with our flexible subscription service.",
          price: "30.00",
        },
        {
          id: 4,
          title: "Gift Set",
          description:
            "Beautiful packaging with a variety of our best products, perfect for gifting.",
          price: "35.00",
        },
        {
          id: 5,
          title: "Barista Kit",
          description:
            "Everything you need to make cafe-quality drinks at home.",
          price: "55.00",
        },
      ],
    },
  };

  const tabs = ["Coffee", "Capsule", "All"];

  return (
    <div className="flex flex-col mt-10 gap-10 overflow-hidden">
      <div>
        <h2 className="text-[70px] text-center">New Products</h2>
        <p className="text-[18px] text-center">
          Discover our premium coffee collections crafted for every taste!
        </p>
      </div>
      <div className="flex p-8 h-[800px] gap-3">
        <div className="flex-1 w-full">
          <div className="h-full rounded-2xl overflow-hidden">
            <Collage images={data[activeTab].collageImages} />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          {/* Tab Navigation */}
          <div className="flex  gap-4 mb-8 justify-start">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex-1 h-[600px]">
            <Slider
              items={data[activeTab].products}
              itemsToShow={2}
              showPagination={false}
              showArrows={true}
              renderItem={(item) => (
                <div
                  className={`bg-white rounded-xl flex flex-col transition-all duration-300 w-full h-full overflow-hidden`}
                >
                  <div className=" w-full h-[400px] overflow-hidden">
                    <img
                      src={item.image}
                      className="w-full h-full block object-cover"
                    />
                  </div>
                  <div className="w-full h-[200px] bg-gray-200 flex flex-col justify-top items-center p-4">
                    <h3 className="text-[25px]">{item.title}</h3>
                    <p className="text-[18px] text-center">
                      {item.description}
                    </p>
                    <p className="text-[18px]">{item.price}</p>
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
