import React from "react";
import Slider from "../reusable/Slider";
import P_1 from "../../assets/images/products/product_1.jpg";
import P_2 from "../../assets/images/products/product_2.jpg";
import P_3 from "../../assets/images/products/product_3.jpg";
import P_4 from "../../assets/images/products/product_4.jpg";
import P_5 from "../../assets/images/products/product_5.jpg";
import P_6 from "../../assets/images/products/product_6.jpg";
import P_7 from "../../assets/images/products/product_5.jpg";
import P_8 from "../../assets/images/products/product_4.jpg";
import P_9 from "../../assets/images/products/product_3.jpg";
import P_10 from "../../assets/images/products/product_2.jpg";
import { Star } from "lucide-react";

const OurFavouritesSection = () => {
  const products = [
    {
      image: P_1,
      name: "Peru",
      price: "£13.50",
      region: "Ahuachapán",
      producer: "Ricardo Lima",
      process: "Natural",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Peru' label",
    },
    {
      image: P_2,
      name: "Colombia",
      price: "£13.50",
      region: "Antioquia",
      producer: "Juan Pérez",
      process: "Washed",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Colombia' label",
    },
    {
      image: P_3,
      name: "Ethiopia",
      price: "£14.00",
      region: "Yirgacheffe",
      producer: "Amina Ali",
      process: "Natural",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Ethiopia' label",
    },
    {
      image: P_4,
      name: "Brazil",
      price: "£12.50",
      region: "Minas Gerais",
      producer: "Carlos Silva",
      process: "Pulped Natural",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Brazil' label",
    },
    {
      image: P_5,
      name: "Guatemala",
      price: "£13.75",
      region: "Huehuetenango",
      producer: "Maria Gonzalez",
      process: "Washed",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Guatemala' label",
    },
    {
      image: P_6,
      name: "Kenya",
      price: "£14.50",
      region: "Nyeri",
      producer: "James Kariuki",
      process: "Natural",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Kenya' label",
    },
    {
      image: P_1,
      name: "Costa Rica",
      price: "£13.00",
      region: "Tarrazú",
      producer: "Sofia Vargas",
      process: "Honey",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Costa Rica' label",
    },
    {
      image: P_4,
      name: "Rwanda",
      price: "£14.25",
      region: "Gisenyi",
      producer: "Emmanuel Niyonsaba",
      process: "Washed",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Rwanda' label",
    },
    {
      image: P_3,
      name: "Honduras",
      price: "£12.75",
      region: "Copán",
      producer: "Luis Morales",
      process: "Natural",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Honduras' label",
    },
    {
      image: P_2,
      name: "Mexico",
      price: "£13.25",
      region: "Oaxaca",
      producer: "Ana Hernández",
      process: "Washed",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Mexico' label",
    },
  ];

  return (
    <div
      className="flex flex-col mt-6 sm:mt-8 lg:mt-10 gap-6 sm:gap-8 lg:gap-10 overflow-hidden bg-[#F6F8F2] p-4 sm:p-6 lg:p-8"
      style={{ fontFamily: "Barlow, sans-serif" }}
    >
      <div className="px-2">
        <h2
          className="text-center font-black"
          style={{
            fontFamily: "Barlow, sans-serif",
            fontSize: "clamp(3rem, 6vw + 1rem, 4.375rem)",
            fontWeight: 900,
          }}
        >
          Our Favorites
        </h2>
      </div>

      <div className="w-full h-[500px] sm:h-[600px] lg:h-[700px]">
        <Slider
          items={products}
          showArrows={true}
          itemsToShow={4}
          translateIn="-x"
          showPartialNext={false}
          showPagination={false}
          renderItem={(item) => {
            return (
              <div className="flex h-[500px] sm:h-[600px] lg:h-[700px] flex-col gap-3 sm:gap-4 lg:gap-5 p-3 sm:p-4 lg:p-6 relative group overflow-hidden rounded-xl">
                {/* Hover Overlay - covers entire card */}
                <div className="absolute inset-0 bg-[rgba(224,225,218,0.95)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-around p-3 sm:p-4 lg:p-6 rounded-xl z-20">
                  {/* Top Section - Product Details */}
                  <div className="grid grid-cols-[auto_1fr_auto] gap-x-2 gap-y-3 sm:gap-y-4 text-black">
                    {/* Region */}
                    <span
                      className="font-normal"
                      style={{
                        fontFamily: "Barlow, sans-serif",
                        fontSize: "var(--text-18)",
                        fontWeight: 400,
                      }}
                    >
                      Region
                    </span>
                    <span className="w-full h-[1px] border-b border-gray-400 self-center"></span>
                    <span
                      className="font-medium"
                      style={{
                        fontFamily: "Barlow, sans-serif",
                        fontSize: "var(--text-18)",
                        fontWeight: 500,
                      }}
                    >
                      {item.region}
                    </span>

                    {/* Producer */}
                    <span
                      className="font-normal"
                      style={{
                        fontFamily: "Barlow, sans-serif",
                        fontSize: "var(--text-18)",
                        fontWeight: 400,
                      }}
                    >
                      Producer
                    </span>
                    <span className="w-full h-[1px] border-b border-gray-400 self-center"></span>
                    <span
                      className="font-medium"
                      style={{
                        fontFamily: "Barlow, sans-serif",
                        fontSize: "var(--text-18)",
                        fontWeight: 500,
                      }}
                    >
                      {item.producer}
                    </span>

                    {/* Process */}
                    <span
                      className="font-normal"
                      style={{
                        fontFamily: "Barlow, sans-serif",
                        fontSize: "var(--text-18)",
                        fontWeight: 400,
                      }}
                    >
                      Process
                    </span>
                    <span className="w-full h-[1px] border-b border-gray-400 self-center"></span>
                    <span
                      className="font-medium"
                      style={{
                        fontFamily: "Barlow, sans-serif",
                        fontSize: "var(--text-18)",
                        fontWeight: 500,
                      }}
                    >
                      {item.process}
                    </span>
                  </div>

                  {/* Bottom Section - Product Info & Actions */}
                  <div className="text-center text-black">
                    <h3
                      className="font-semibold mb-2"
                      style={{
                        fontFamily: "Barlow, sans-serif",
                        fontSize: "var(--text-25)",
                        fontWeight: 600,
                      }}
                    >
                      Clifton Coffee {item.name}
                    </h3>
                    <p
                      className="font-bold mb-3"
                      style={{
                        fontFamily: "Barlow, sans-serif",
                        fontSize: "var(--text-25)",
                        fontWeight: 700,
                      }}
                    >
                      {item.price}
                    </p>
                    <div className="flex justify-center mb-3 sm:mb-4">
                      {Array(item.rating)
                        .fill()
                        .map((_, id) => (
                          <Star key={id} size={16} fill="#000" color="#000" />
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <button
                        className="w-full bg-black text-white py-2 sm:py-2.5 px-4 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                        style={{
                          fontFamily: "Barlow, sans-serif",
                          fontSize: "var(--text-25)",
                          fontWeight: 500,
                        }}
                      >
                        Buy Now
                      </button>
                      <button
                        className="text-gray-600 underline hover:text-black transition-colors"
                        style={{
                          fontFamily: "Barlow, sans-serif",
                          fontSize: "var(--text-18)",
                          fontWeight: 400,
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 relative">
                  <div className="w-full h-full overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.desc}
                      className="w-full h-full object-cover transition-transform duration-500 rounded-xl group-hover:scale-105"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text - Hidden on hover */}
                <div className="flex-shrink-0 flex flex-col justify-center items-center relative z-10 group-hover:opacity-0 transition-opacity duration-300 py-2">
                  <p
                    className="font-medium mb-1"
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "var(--text-25)",
                      fontWeight: 500,
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="font-semibold mb-2"
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "clamp(1rem, 3vw, 1.125rem)",
                      fontWeight: 600,
                    }}
                  >
                    {item.price}
                  </p>
                  <div className="flex">
                    {Array(item.rating)
                      .fill()
                      .map((_, id) => (
                        <Star key={id} size={14} fill="#000" color="#000" />
                      ))}
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default OurFavouritesSection;
