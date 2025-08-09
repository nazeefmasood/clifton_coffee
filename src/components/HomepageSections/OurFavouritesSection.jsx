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
      image: P_7,
      name: "Costa Rica",
      price: "£13.00",
      region: "Tarrazú",
      producer: "Sofia Vargas",
      process: "Honey",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Costa Rica' label",
    },
    {
      image: P_8,
      name: "Rwanda",
      price: "£14.25",
      region: "Gisenyi",
      producer: "Emmanuel Niyonsaba",
      process: "Washed",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Rwanda' label",
    },
    {
      image: P_9,
      name: "Honduras",
      price: "£12.75",
      region: "Copán",
      producer: "Luis Morales",
      process: "Natural",
      rating: 5,
      desc: "A bag of Clifton coffee with a green background, 'CLIFTON' logo, and 'Honduras' label",
    },
    {
      image: P_10,
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
    <div className="flex flex-col mt-10 gap-10 overflow-hidden bg-[#F6F8F2] p-4">
      <div>
        <h2 className="text-[70px] text-center">Our Favorites</h2>
      </div>

      <div className="w-full h-[450px]">
        <Slider
          items={products}
          showArrows={true}
          itemsToShow={4}
          translateIn="-x"
          showPartialNext={false}
          showPagination={false}
          renderItem={(item) => {
            return (
              <div className="flex h-[450px] flex-col gap-5 p-6 relative group overflow-hidden rounded-xl ">
                {/* Overlay covering whole item */}
                {/* Hover Overlay - covers entire card */}
                <div className="absolute inset-0 bg-[rgba(224,225,218,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-around p-6 rounded-xl">
                  {/* Top Section - Product Details */}
                  <div className="grid grid-cols-[auto_1fr_auto] gap-x-2 gap-y-4 text-black">
                    {/* Region */}
                    <span className="text-sm">Region</span>
                    <span className="w-full h-[2px] border-b border-gray-400 self-center"></span>
                    <span className="text-sm font-medium">{item.region}</span>

                    {/* Producer */}
                    <span className="text-sm">Producer</span>
                    <span className="w-full h-[2px] border-b border-gray-400 self-center"></span>
                    <span className="text-sm font-medium">{item.producer}</span>

                    {/* Process */}
                    <span className="text-sm">Process</span>
                    <span className="w-full h-[2px] border-b border-gray-400 self-center"></span>
                    <span className="text-sm font-medium">{item.process}</span>
                  </div>

                  {/* Bottom Section - Product Info & Actions */}
                  <div className="text-center text-black">
                    <h3 className="text-lg font-semibold mb-2">
                      Clifton Coffee {item.name}
                    </h3>
                    <p className="text-xl font-bold mb-3">{item.price}</p>
                    <div className="flex justify-center mb-4">
                      {Array(item.rating)
                        .fill()
                        .map((_, id) => (
                          <Star key={id} size={16} fill="#000" color="#000" />
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <button className="w-full bg-black text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                        Buy Now
                      </button>
                      <button className="text-sm text-gray-600 underline hover:text-black transition-colors">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="w-full h-full overflow-hidden rounded-xl   ">
                    <img
                      src={item.image}
                      alt={item.desc}
                      className="w-full h-full object-cover transition-transform duration-300 rounded-xl "
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1  flex flex-col justify-center items-center relative z-10 group-hover:hidden">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-lg font-semibold">{item.price}</p>
                  <div className="flex">
                    {Array(item.rating)
                      .fill()
                      .map((_, id) => (
                        <Star key={id} size={16} fill="#000" color="#000" />
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
