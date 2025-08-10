import React, { useState } from "react";
import Slider from "../reusable/Slider";
import { Star, X, Plus, Minus } from "lucide-react";
import Button from "../reusable/Button";
import data from "../../data/db";

const OurFavouritesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState(data.favourite.products);
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState({});
  const [selectedWeight, setSelectedWeight] = useState("250g");
  const [selectedRoast, setSelectedRoast] = useState("Filter Roast");
  const [selectedType, setSelectedType] = useState("Wholebean");
  const [quantity, setQuantity] = useState(1);
  const [showDesktopBuyOverlay, setShowDesktopBuyOverlay] = useState({});

  const openProductModal = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeProductModal = () => {
    setShowModal(false);
    setCurrentProduct(null);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  const openBuyNowModal = (product) => {
    if (window.innerWidth >= 1024) {
      setShowDesktopBuyOverlay((prev) => ({ ...prev, [product.id]: true }));
      setCurrentProduct(product);
      setSelectedWeight("250g");
      setSelectedRoast("Filter Roast");
      setSelectedType("Wholebean");
      setQuantity(1);
    } else {
      setCurrentProduct(product);
      setShowBuyNowModal(true);
      setSelectedWeight("250g");
      setSelectedRoast("Filter Roast");
      setSelectedType("Wholebean");
      setQuantity(1);
      document.body.style.overflow = "hidden";
    }
  };

  const closeBuyNowModal = () => {
    setShowBuyNowModal(false);
    setCurrentProduct(null);
    document.body.style.overflow = "unset";
  };

  const closeDesktopBuyOverlay = (productId) => {
    setShowDesktopBuyOverlay((prev) => ({ ...prev, [productId]: false }));
    setCurrentProduct(null);
  };

  const handleAddToCart = (productId) => {
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        closeBuyNowModal();
      }, 1000);
    } else {
      setTimeout(() => {
        closeDesktopBuyOverlay(productId);
      }, 1000);
    }
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <section className="flex flex-col gap-6 sm:gap-8 lg:gap-10 overflow-hidden bg-[color:var(--color-light-grey-2)] lg:px-4">
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
              <div className="flex h-max sm:h-[600px] lg:h-[700px] flex-col relative group overflow-hidden rounded-xl">
                {/* Desktop Hover Overlay - Only shows on large screens */}
                <div
                  className={`hidden lg:block absolute inset-0 bg-[rgba(224,225,218,0.95)] transition-opacity duration-300 z-20 rounded-xl ${
                    showDesktopBuyOverlay[item.id]
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <div className="flex flex-col justify-around p-3 sm:p-4 lg:p-6 h-full">
                    {/* Close button for Buy Now overlay - only show when buy overlay is active */}
                    {showDesktopBuyOverlay[item.id] && (
                      <button
                        className="absolute top-4 right-4 p-2 bg-[color:var(--color-light-grey-2)] rounded-full shadow-md cursor-pointer hover transition-colors z-30"
                        onClick={() => closeDesktopBuyOverlay(item.id)}
                      >
                        <X size={16} color="#000" />
                      </button>
                    )}

                    {!showDesktopBuyOverlay[item.id] ? (
                      // Regular hover content
                      <>
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
                                <Star
                                  key={id}
                                  size={16}
                                  fill="#000"
                                  color="#000"
                                />
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
                              paddingX={"px-10 cursor-pointer"}
                              paddingY="py-3"
                              onClick={() => openBuyNowModal(item)}
                            />
                            <button
                              className="text-gray-600 underline hover:text-black transition-colors cursor-pointer"
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
                      </>
                    ) : (
                      // Buy Now overlay content
                      <div className="text-black h-full flex flex-col justify-evenly">
                        {/* Product Info Header */}
                        <div>
                          {" "}
                          <div className="text-center mb-6">
                            <h3 className="text-25 font-normal mb-2">
                              Clifton Coffee {item.name}
                            </h3>
                            <p className="text-18 font-normal mb-3">
                              {item.price}
                            </p>
                            <div className="flex justify-center mb-4">
                              {Array(item.rating)
                                .fill()
                                .map((_, id) => (
                                  <Star
                                    key={id}
                                    size={24}
                                    fill="#000"
                                    color="#000"
                                  />
                                ))}
                            </div>
                          </div>
                          {/* Options */}
                          <div className="space-y-4 mb-6 flex flex-col ">
                            {/* Weight */}
                            <div className="flex justify-between w-full">
                              <div>
                                <label className="block text-sm font-medium mb-3">
                                  Weight
                                </label>
                                <select
                                  value={selectedWeight}
                                  onChange={(e) =>
                                    setSelectedWeight(e.target.value)
                                  }
                                  className="w-full cursor-pointer px-5 py-2 border border-black rounded-full bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                >
                                  <option value="250g">250g</option>
                                  <option value="500g">500g</option>
                                  <option value="1kg">1kg</option>
                                </select>
                              </div>
                              {/* Roast */}
                              <div>
                                <label className="block text-sm font-medium mb-3">
                                  Roast
                                </label>
                                <select
                                  value={selectedRoast}
                                  onChange={(e) =>
                                    setSelectedRoast(e.target.value)
                                  }
                                  className="w-full cursor-pointer px-5 py-2 border border-black rounded-full bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                >
                                  <option value="Filter Roast">
                                    Filter Roast
                                  </option>
                                  <option value="Espresso Roast">
                                    Espresso Roast
                                  </option>
                                  <option value="Medium Roast">
                                    Medium Roast
                                  </option>
                                </select>
                              </div>
                              {/* Type */}
                              <div>
                                <label className="block text-sm font-medium mb-3">
                                  Type
                                </label>
                                <select
                                  value={selectedType}
                                  onChange={(e) =>
                                    setSelectedType(e.target.value)
                                  }
                                  className="w-full px-5 cursor-pointer py-2 border border-black rounded-full bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                >
                                  <option value="Wholebean">Wholebean</option>
                                  <option value="Ground">Ground</option>
                                </select>
                              </div>
                            </div>

                            {/* Quantity */}
                            <div className="mr-auto rounded-full">
                              <label className="block text-sm font-medium mb-1">
                                Quantity
                              </label>
                              <div className="flex items-center justify-center border border-black hover:border-black  rounded-full overflow-hidden">
                                <button
                                  onClick={decrementQuantity}
                                  className="w-7 h-7 cursor-pointer group border-r border-black flex hover:border-black items-center justify-center hover:bg-black not-first-of-type:transition-colors"
                                >
                                  <Minus
                                    size={14}
                                    className="hover:text-white"
                                  />
                                </button>
                                <span className="text-sm font-medium w-8 h-max  text-center">
                                  {quantity}
                                </span>
                                <button
                                  onClick={incrementQuantity}
                                  className="w-7 h-7 cursor-pointer  border-l border-black hover:border-black flex items-center justify-center hover:bg-black transition-colors group"
                                >
                                  <Plus
                                    size={14}
                                    className="hover:text-white"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                          onClick={() => handleAddToCart(item.id)}
                          className={`w-full py-4 px-4 rounded-full font-medium text-18 cursor-pointer shadow-lg transition-all duration-300 ${
                            addedToCart[item.id]
                              ? "bg-green-600 text-white cursor-default"
                              : "bg-[color:var(--color-light-grey-2)] text-black hover:bg-black hover:text-white"
                          }`}
                          disabled={addedToCart[item.id]}
                        >
                          {addedToCart[item.id]
                            ? "Added to Cart"
                            : "Add To Cart"}
                        </button>
                      </div>
                    )}
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
                <div
                  className={`flex-1 flex flex-col justify-top mt-5 items-center relative z-10 transition-opacity duration-300 py-2 ${
                    showDesktopBuyOverlay[item.id]
                      ? "lg:opacity-0"
                      : "lg:group-hover:opacity-0"
                  }`}
                >
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
                    className="lg:hidden bg-black mt-5 text-white py-2 px-6 rounded-full font-medium active:bg-gray-800 transition-colors shadow-md"
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

      {/* Mobile/Tablet Details Modal */}
      {showModal && currentProduct && (
        <div className="lg:hidden fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black bg-opacity-80">
          <div className="bg-[#E0E1DA] rounded-2xl max-w-sm w-full max-h-[85vh] overflow-y-auto shadow-2xl">
            {/* Header with close button */}
            <div className="sticky top-0 bg-[#E0E1DA] p-4 border-b border-gray-300 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-lg font-semibold text-black">
                Product Details
              </h3>
              <button
                className="p-2 hover:bg-gray-200 rounded-full transition-colors bg-white shadow-sm"
                onClick={closeProductModal}
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
                  className="w-full bg-black text-white py-3 px-4 rounded-full font-medium hover:bg-gray-800 transition-colors text-lg shadow-lg"
                  onClick={() => openBuyNowModal(currentProduct)}
                >
                  Buy Now
                </button>
                <button className="w-full text-gray-600 underline hover:text-black transition-colors py-2">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Buy Now Modal - Works for all screen sizes */}
      {showBuyNowModal && currentProduct && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black bg-opacity-80">
          <div className="bg-[#E0E1DA] rounded-2xl max-w-sm w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header with close button */}
            <div className="sticky top-0 bg-[color:var(--color-medium-green-4)] p-4 border-b border-black flex justify-between items-center rounded-t-2xl">
              <h3 className="text-lg font-semibold text-black text-center flex-1">
                Clifton Coffee {currentProduct.name}
              </h3>
              <button
                className="p-2 hover:bg-gray-200 rounded-full transition-colors  shadow-sm ml-2"
                onClick={closeBuyNowModal}
              >
                <X size={20} color="#000" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 text-black">
              {/* Price and Rating */}
              <div className="text-center mb-6">
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

              {/* Options */}
              <div className="space-y-6">
                {/* Weight */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                    Weight
                  </label>
                  <select
                    value={selectedWeight}
                    onChange={(e) => setSelectedWeight(e.target.value)}
                    className="w-full px-4 py-2 border border-black rounded-full  text-black focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="250g">250g</option>
                    <option value="500g">500g</option>
                    <option value="1kg">1kg</option>
                  </select>
                </div>

                {/* Roast */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                    Roast
                  </label>
                  <select
                    value={selectedRoast}
                    onChange={(e) => setSelectedRoast(e.target.value)}
                    className="w-full px-4 py-2 border border-black rounded-full  text-black focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="Filter Roast">Filter Roast</option>
                    <option value="Espresso Roast">Espresso Roast</option>
                    <option value="Medium Roast">Medium Roast</option>
                  </select>
                </div>

                {/* Wholebean or Ground */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                    Wholebean or Ground
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 border border-black rounded-full  text-black focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="Wholebean">Wholebean</option>
                    <option value="Ground">Ground</option>
                  </select>
                </div>

                {/* Quantity */}
                <div className="rounded-full w-min justify-self-center">
                  <label className="block text-sm font-medium mb-3 text-center">
                    Quantity
                  </label>
                  <div className="flex items-center justify-center border border-black hover:border-black  rounded-full overflow-hidden">
                    <button
                      onClick={decrementQuantity}
                      className="w-7 h-7 cursor-pointer group border-r border-black flex hover:border-black items-center justify-center hover:bg-black not-first-of-type:transition-colors"
                    >
                      <Minus size={14} className="hover:text-white" />
                    </button>
                    <span className="text-sm font-medium w-8 h-max  text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      className="w-7 h-7 cursor-pointer  border-l border-black hover:border-black flex items-center justify-center hover:bg-black transition-colors group"
                    >
                      <Plus size={14} className="hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={() => handleAddToCart(currentProduct.id)}
                  className={`w-full py-3 px-4 rounded-full font-medium text-lg shadow-lg transition-all duration-300 ${
                    addedToCart[currentProduct.id]
                      ? "bg-green-600 text-white cursor-default"
                      : "bg-black text-white border border-black "
                  }`}
                  disabled={addedToCart[currentProduct.id]}
                >
                  {addedToCart[currentProduct.id]
                    ? "Added to Cart"
                    : "Add To Cart"}
                </button>
                <button className="w-full text-gray-600 underline hover:text-black transition-colors py-2">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </se>
  );
};

export default OurFavouritesSection;
