import React, { useState } from "react";
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
import { Star, X } from "lucide-react";
import Button from "../reusable/Button";

const OurFavouritesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const products = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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

  const openProductModal = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeProductModal = () => {
    setShowModal(false);
    setCurrentProduct(null);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 overflow-hidden bg-[#F6F8F2] lg:p-8">
      <div className="px-2">
        <h2 className="text-center font-barlow font-normal text-70 mt-10 sm:mt-0 tracking-tighter">
          Our Favorites
        </h2>
      </div>

      <div className="w-full h-max sm:h-[600px] lg:h-max">
        <Slider
          items={products}
          showArrows={true}
          itemsToShow={4}
          translateIn="-x"
          showPartialNext={false}
          showPagination={false}
          renderItem={(item) => {
            return (
              <div className="flex h-[500px] sm:h-[600px] lg:h-[700px] flex-col relative group overflow-hidden rounded-xl">
                {/* Desktop Hover Overlay - Only shows on large screens */}
                <div className="hidden lg:block absolute inset-0 bg-[rgba(224,225,218,0.95)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 rounded-xl">
                  <div className="flex flex-col justify-around p-3 sm:p-4 lg:p-6 h-full">
                    {/* Top Section - Product Details */}
                    <div className="grid grid-cols-[auto_1fr_auto] gap-x-2 gap-y-3 sm:gap-y-4 text-black">
                      {/* Region */}
                      <span className="font-normal text-18 font-barlow">
                        Region
                      </span>
                      <span className="w-full h-[1px] border-b border-gray-400 self-center"></span>
                      <span className="font-normal text-18 font-barlow">
                        {item.region}
                      </span>

                      {/* Producer */}
                      <span className="font-normal text-18 font-barlow">
                        Producer
                      </span>
                      <span className="w-full h-[1px] border-b border-gray-400 self-center"></span>
                      <span className="font-normal text-18 font-barlow">
                        {item.producer}
                      </span>

                      {/* Process */}
                      <span className="font-normal text-18 font-barlow">
                        Process
                      </span>
                      <span className="w-full h-[1px] border-b border-gray-400 self-center"></span>
                      <span className="font-normal text-18 font-barlow">
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
                      <div className="space-y-2 flex flex-col gap-5 mt-10">
                        <Button
                          text="Buy Now"
                          bg="bg-black"
                          hoverBg="hover:bg-black"
                          border="border-white"
                          hoverBorder="hover:border-black"
                          textColor="text-white"
                          hoverTextColor="hover:text-white"
                          paddingX={"px-10"}
                          paddingY="py-3"
                        />
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
                </div>

                {/* Image */}
                <div className="flex-1 relative">
                  <div className="w-full h-full overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.desc}
                      className="w-full h-full aspect-square lg:aspect-5/6 object-cover transition-transform duration-500 rounded-xl lg:group-hover:scale-105"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text - Always visible, but opacity changes on desktop hover */}
                <div className="flex-1 flex flex-col justify-top mt-5 items-center relative z-10 lg:group-hover:opacity-0 transition-opacity duration-300 py-2">
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
                  <p className="font-semibold mb-2 text-25 font-barlow">
                    {item.price}
                  </p>
                  <div className="flex mb-4">
                    {Array(item.rating)
                      .fill()
                      .map((_, id) => (
                        <Star key={id} size={24} fill="#000" color="#000" />
                      ))}
                  </div>

                  {/* Mobile/Tablet View Details Button */}
                  <button
                    className="lg:hidden bg-black text-white py-2 px-6 rounded-full font-medium active:bg-gray-800 transition-colors shadow-md"
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontSize: "16px",
                      fontWeight: 500,
                      touchAction: "manipulation",
                    }}
                    onTouchStart={() => openProductModal(item)}
                    onMouseDown={() => openProductModal(item)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          }}
        />
      </div>

      {/* Mobile/Tablet Modal Portal */}
      {showModal && currentProduct && (
        <div
          className="lg:hidden fixed inset-0 z-[99999] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          <div
            className="bg-white rounded-2xl max-w-sm w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            style={{ backgroundColor: "rgba(224,225,218,1)" }}
          >
            {/* Header with close button */}
            <div className="sticky top-0 bg-[rgba(224,225,218,1)] p-4 border-b border-gray-300 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-lg font-semibold text-black">
                Product Details
              </h3>
              <button
                className="p-2 hover:bg-gray-200 rounded-full transition-colors bg-white shadow-sm"
                onTouchStart={closeProductModal}
                onMouseDown={closeProductModal}
                style={{ touchAction: "manipulation" }}
              >
                <X size={20} color="#000" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 text-black">
              {/* Product Image */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.desc}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details Grid */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="font-normal text-gray-700">Region</span>
                  <span className="font-normal text-black">
                    {currentProduct.region}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="font-normal text-gray-700">Producer</span>
                  <span className="font-normal text-black">
                    {currentProduct.producer}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="font-normal text-gray-700">Process</span>
                  <span className="font-normal text-black">
                    {currentProduct.process}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  Clifton Coffee {currentProduct.name}
                </h3>
                <p className="text-2xl font-bold mb-3 text-black">
                  {currentProduct.price}
                </p>
                <div className="flex justify-center mb-4">
                  {Array(currentProduct.rating)
                    .fill()
                    .map((_, id) => (
                      <Star key={id} size={18} fill="#000" color="#000" />
                    ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  className="w-full bg-black text-white py-3 px-4 rounded-full font-medium active:bg-gray-800 transition-colors text-lg shadow-lg"
                  style={{ touchAction: "manipulation" }}
                >
                  Buy Now
                </button>
                <button
                  className="w-full text-gray-600 underline hover:text-black transition-colors py-2"
                  style={{ touchAction: "manipulation" }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurFavouritesSection;
