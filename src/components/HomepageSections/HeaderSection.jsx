import React, { useState, useEffect } from "react";
import { ChevronDown, Search, ShoppingCart, User, Menu, X } from "lucide-react";
import Logo from "../../assets/images/logo.png";
import data from "../../data/db.js";
import Button from "../reusable/Button";

const HeaderSection = () => {
  const [rightMenus, setRightMenu] = useState(
    data.navigation_menus.right_menus
  );
  const [leftMenus, setLeftMenu] = useState(data.navigation_menus.left_menus);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeRightMenu, setActiveRightMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Prevent body scroll when overlays are open
  useEffect(() => {
    if (isCartOpen || isSearchOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen, isSearchOpen, isMobileMenuOpen]);

  const handleMenuHover = (index) => {
    if (!isCartOpen && !isSearchOpen) {
      setActiveMenu(index);
      setActiveRightMenu(null);
    }
  };

  const handleRightMenuHover = (index) => {
    if (!isCartOpen && !isSearchOpen) {
      setActiveRightMenu(index);
      setActiveMenu(null);
    }
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
    setActiveRightMenu(null);
  };

  const handleHeaderMouseEnter = () => {
    if (!isCartOpen && !isSearchOpen) {
      setIsHeaderHovered(true);
    }
  };

  const handleHeaderMouseLeave = () => {
    if (!isCartOpen && !isSearchOpen) {
      setIsHeaderHovered(false);
      setActiveMenu(null);
      setActiveRightMenu(null);
    }
  };

  const toggleMobileSubmenu = (index, type) => {
    const menuKey = type === "left" ? `left-${index}` : `right-${index}`;
    setExpandedMobileMenu(expandedMobileMenu === menuKey ? null : menuKey);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    setActiveRightMenu(null);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsCartOpen(false);
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    setActiveRightMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsCartOpen(false);
    setIsSearchOpen(false);
    setActiveMenu(null);
    setActiveRightMenu(null);
  };

  const closeAllOverlays = () => {
    setIsCartOpen(false);
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    setActiveRightMenu(null);
  };

  return (
    <div className="relative z-50" style={{ fontFamily: "var(--font-barlow)" }}>
      {/* Announcement Bar */}
      <div className="bg-black text-white">
        <div className="flex justify-center items-center py-2 px-4 sm:py-3">
          <p className="text-14 sm:text-14 lg:text-base font-medium text-center whitespace-nowrap">
            Order before 10am for same day dispatch!
          </p>
        </div>
      </div>

      {/* Header */}
      <header
        className={`relative transition-all duration-500 ease-in-out ${
          isHeaderHovered ||
          activeMenu !== null ||
          activeRightMenu !== null ||
          isCartOpen ||
          isSearchOpen
            ? "bg-white"
            : "bg-transparent"
        }`}
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
      >
        <div
          className={`py-3 sm:py-4 px-4 sm:px-6 lg:px-10 border-b transition-colors duration-300 ${
            (isHeaderHovered && activeMenu !== null) ||
            activeRightMenu !== null ||
            isCartOpen ||
            isSearchOpen
              ? "border-black"
              : "border-white"
          }`}
        >
          <div className="flex items-center justify-between mx-auto">
            {/* Left Navigation - Desktop Only */}
            <div className="hidden xl:flex items-center space-x-6 2xl:space-x-8 flex-1">
              {leftMenus.map((l_menu, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMenuHover(index)}
                >
                  <button
                    className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                      isHeaderHovered ||
                      activeMenu !== null ||
                      isCartOpen ||
                      isSearchOpen
                        ? "text-gray-900 hover:text-gray-600"
                        : "text-white hover:text-gray-200"
                    }`}
                  >
                    <span className="font-normal text-22">{l_menu.title}</span>
                    {l_menu.hasSubmenu && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeMenu === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Logo - Centered */}
            <div className="flex-shrink-0 flex-grow xl:flex-grow-0 flex justify-between xl:justify-center">
              <div
                className={`w-36 h-12 sm:w-44 sm:h-12 md:h-16 lg:w-56 lg:h-20 xl:w-56 xl:h-24 mt-0 lg:mt-5 overflow-hidden transition-all duration-300 ${
                  isHeaderHovered ||
                  activeMenu !== null ||
                  activeRightMenu !== null ||
                  isCartOpen ||
                  isSearchOpen
                    ? "invert"
                    : ""
                }`}
              >
                <img
                  src={Logo}
                  alt="Clifton Coffee Roasters"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Navigation - Desktop Only */}
            <div className="hidden xl:flex items-center space-x-6 2xl:space-x-8 flex-1 justify-end">
              <div className="flex items-center space-x-6 2xl:space-x-8">
                {rightMenus.map((r_menu, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() =>
                      r_menu.hasSubmenu ? handleRightMenuHover(index) : null
                    }
                  >
                    <a
                      href={r_menu.link || "#"}
                      className={`font-medium transition-colors duration-200 flex items-center space-x-1 ${
                        isHeaderHovered ||
                        activeMenu !== null ||
                        activeRightMenu !== null ||
                        isCartOpen ||
                        isSearchOpen
                          ? "text-gray-900 hover:text-gray-600"
                          : "text-white hover:text-gray-200"
                      }`}
                    >
                      <span className="font-normal text-22">{r_menu.title}</span>
                      {r_menu.hasSubmenu && (
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            activeRightMenu === index ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </a>
                  </div>
                ))}
              </div>

              {/* Icons */}
              <div className="flex items-center space-x-3 lg:space-x-4 ml-6">
                <button
                  className={`transition-colors duration-200 p-1 ${
                    isHeaderHovered ||
                    activeMenu !== null ||
                    activeRightMenu !== null ||
                    isCartOpen ||
                    isSearchOpen
                      ? "text-gray-900 hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <User size={18} className="lg:w-7 lg:h-7" />
                </button>
                <button
                  onClick={toggleSearch}
                  className={`transition-colors duration-200 p-1 ${
                    isHeaderHovered ||
                    activeMenu !== null ||
                    activeRightMenu !== null ||
                    isCartOpen ||
                    isSearchOpen
                      ? "text-gray-900 hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  } ${isSearchOpen ? "text-blue-600" : ""}`}
                >
                  <Search size={24} className="lg:w-7 lg:h-7" />
                </button>
                <button
                  onClick={toggleCart}
                  className={`transition-colors duration-200 p-1 relative ${
                    isHeaderHovered ||
                    activeMenu !== null ||
                    activeRightMenu !== null ||
                    isCartOpen ||
                    isSearchOpen
                      ? "text-gray-900 hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  } ${isCartOpen ? "text-blue-600" : ""}`}
                >
                  <ShoppingCart size={24} className="lg:w-7 lg:h-7" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`xl:hidden transition-colors duration-200 p-1 ${
                isHeaderHovered ||
                activeMenu !== null ||
                activeRightMenu !== null ||
                isMobileMenuOpen ||
                isCartOpen ||
                isSearchOpen
                  ? "text-gray-900"
                  : "text-white"
              }`}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        {activeMenu !== null &&
          leftMenus[activeMenu]?.hasSubmenu &&
          !isCartOpen &&
          !isSearchOpen && (
            <div
              className="absolute top-full left-0 w-full bg-white shadow-2xl z-40 border-t border-gray-200 hidden xl:block"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={handleMenuLeave}
            >
              <div className=" mx-auto px-6 lg:px-20 py-8 lg:py-12">
                <div className="grid grid-cols-12 gap-8 lg:gap-12">
                  {/* Categories Section */}
                  <div className="col-span-6">
                    <div
                      className={`grid grid-cols-1 gap-6 lg:gap-8   ${
                        leftMenus[activeMenu]?.submenu?.categories.length < 2
                          ? "lg:grid-cols-2"
                          : "lg:grid-cols-3"
                      }`}
                    >
                      {leftMenus[activeMenu]?.submenu?.categories?.map(
                        (category, categoryIndex) => (
                          <div key={categoryIndex}>
                            <h3 className="font-semibold  text-25 text-gray-900 mb-4 pb-2 border-b border-gray-200">
                              {category.title}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <a
                                    href="#"
                                    className="text-gray-600 hover:text-gray-900 hover:underline underline-offset-8 transition-all duration-200 block py-2 px-3 rounded-md font-normal mx-3  text-18"
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Featured Products Section */}
                  <div className="col-span-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {leftMenus[activeMenu]?.submenu?.featuredProducts?.map(
                        (product, productIndex) => (
                          <div
                            key={productIndex}
                            className="group cursor-pointer "
                          >
                            <a href={product.link || "#"} className="block">
                              <div className="relative overflow-hidden rounded-lg mb-3 shadow-lg">
                                <img
                                  src={product.image}
                                  alt={product.title}
                                  className="w-full h-36 lg:h-[300px] object-cover group-hover:scale-110 transition-transform aspect-square duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                              </div>
                              <div className="text-center">
                                <h4 className="font-semibold text-25 text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                                  {product.title}
                                </h4>
                                <p className="text-gray-600 font-normal text-16">
                                  {product.subtitle}
                                </p>
                              </div>
                            </a>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* Right Menu Dropdown */}
        {activeRightMenu !== null &&
          rightMenus[activeRightMenu]?.hasSubmenu &&
          !isCartOpen &&
          !isSearchOpen && (
            <div
              className="absolute top-full left-0 w-full bg-white shadow-2xl z-40 border-t border-gray-200 hidden xl:block"
              onMouseEnter={() => setActiveRightMenu(activeRightMenu)}
              onMouseLeave={handleMenuLeave}
            >
              <div className=" mx-auto px-6 lg:px-20 py-8 lg:py-12">
                <div className="grid grid-cols-12 gap-8 lg:gap-12">
                  {/* Categories Section */}
                  <div className="col-span-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                      {rightMenus[activeRightMenu]?.submenu?.categories?.map(
                        (category, categoryIndex) => (
                          <div key={categoryIndex}>
                            <h3 className="font-semibold text-gray-900  text-25 mb-4 pb-2 border-b border-gray-200">
                              {category.title}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <a
                                    href="#"
                                    className="text-gray-600 hover:text-gray-900 hover:underline underline-offset-8 transition-all duration-200 block py-2 px-3 rounded-md font-normal mx-3 text-18"
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Featured Products Section */}
                  <div className="col-span-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {rightMenus[
                        activeRightMenu
                      ]?.submenu?.featuredProducts?.map(
                        (product, productIndex) => (
                          <div
                            key={productIndex}
                            className="group cursor-pointer"
                          >
                            <a href={product.link || "#"} className="block">
                              <div className="relative overflow-hidden rounded-lg mb-3 shadow-lg">
                                <img
                                  src={product.image}
                                  alt={product.title}
                                  className="w-full h-36 lg:h-48 object-cover group-hover:scale-110 transition-transform aspect-square duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                              </div>
                              <div className="text-center">
                                <h4 className="font-semibold text-gray-900 mb-1  text-25 group-hover:text-gray-600 transition-colors">
                                  {product.title}
                                </h4>
                                <p className="text-gray-600 font-normal text-16">
                                  {product.subtitle}
                                </p>
                              </div>
                            </a>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="w-32 h-8">
                <img
                  src={Logo}
                  alt="Clifton Coffee Roasters"
                  className="w-full h-full object-contain"
                />
              </div>
              <button
                onClick={closeAllOverlays}
                className="text-gray-900 hover:text-gray-600 transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <div className="space-y-4">
                {/* Left Menu Items */}
                <div className="space-y-4">
                  {leftMenus.map((l_menu, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <button
                        className="flex items-center justify-between w-full text-left text-gray-900 font-medium py-3 hover:text-gray-600 transition-colors text-18"
                        onClick={() =>
                          l_menu.hasSubmenu &&
                          toggleMobileSubmenu(index, "left")
                        }
                      >
                        <span>{l_menu.title}</span>
                        {l_menu.hasSubmenu && (
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              expandedMobileMenu === `left-${index}`
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        )}
                      </button>

                      {l_menu.hasSubmenu &&
                        l_menu.submenu &&
                        expandedMobileMenu === `left-${index}` && (
                          <div className="mt-3 pl-4 space-y-4  rounded-lg p-4">
                            {l_menu.submenu.categories?.map(
                              (category, categoryIndex) => (
                                <div key={categoryIndex}>
                                  <h4 className="font-medium text-gray-900 mb-3 text-18 pb-2 border-b border-gray-200">
                                    {category.title}
                                  </h4>
                                  <ul className="space-y-2 pl-2">
                                    {category.items.map((item, itemIndex) => (
                                      <li key={itemIndex}>
                                        <a
                                          href="#"
                                          className="text-gray-600 hover:text-gray-900 hover:bg-white block py-2 px-3 rounded-md transition-all font-normal text-18"
                                        >
                                          {item}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                              {l_menu.submenu?.featuredProducts?.map(
                                (product, productIndex) => (
                                  <div
                                    key={productIndex}
                                    className="group cursor-pointer "
                                  >
                                    <a
                                      href={product.link || "#"}
                                      className="block"
                                    >
                                      <div className="relative overflow-hidden rounded-lg mb-3 shadow-lg">
                                        <img
                                          src={product.image}
                                          alt={product.title}
                                          className="w-full h-36  object-cover group-hover:scale-110 transition-transform aspect-5/3  duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/50 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                      </div>
                                      <div className="text-center">
                                        <h4 className="font-semibold text-gray-900 text-18 mb-1 group-hover:text-gray-600 transition-colors">
                                          {product.title}
                                        </h4>
                                        <p className="text-gray-600 font-normal text-16">
                                          {product.subtitle}
                                        </p>
                                      </div>
                                    </a>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                    </div>
                  ))}
                </div>

                {/* Right Menu Items */}
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  {rightMenus.map((r_menu, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <button
                        className="flex items-center text-18 justify-between w-full text-left text-gray-900 font-medium py-3 hover:text-gray-600 transition-colors"
                        onClick={() =>
                          r_menu.hasSubmenu &&
                          toggleMobileSubmenu(index, "right")
                        }
                      >
                        <span>{r_menu.title}</span>
                        {r_menu.hasSubmenu && (
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              expandedMobileMenu === `right-${index}`
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        )}
                      </button>

                      {r_menu.hasSubmenu &&
                        r_menu.submenu &&
                        expandedMobileMenu === `right-${index}` && (
                          <div className="mt-3 pl-4 space-y-4  rounded-lg p-4">
                            {r_menu.submenu.categories?.map(
                              (category, categoryIndex) => (
                                <div key={categoryIndex}>
                                  <h4 className="font-medium text-gray-900 text-18 mb-3 pb-2 border-b border-gray-200">
                                    {category.title}
                                  </h4>
                                  <ul className="space-y-2 pl-2">
                                    {category.items.map((item, itemIndex) => (
                                      <li key={itemIndex}>
                                        <a
                                          href="#"
                                          className="text-gray-600 hover:text-gray-900 text-18 hover:bg-white block py-2 px-3 rounded-md transition-all font-normal"
                                        >
                                          {item}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                  <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-10">
                                    {r_menu.submenu?.featuredProducts?.map(
                                      (product, productIndex) => (
                                        <div
                                          key={productIndex}
                                          className="group cursor-pointer "
                                        >
                                          <a
                                            href={product.link || "#"}
                                            className="block"
                                          >
                                            <div className="relative overflow-hidden rounded-lg mb-3 shadow-lg">
                                              <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-36  object-cover group-hover:scale-110 transition-transform aspect-5/3  duration-500"
                                              />
                                              <div className="absolute inset-0 bg-black/50 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                            </div>
                                            <div className="text-center">
                                              <h4
                                                className="font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors"
                                                style={{
                                                  fontSize: "var(--text-18)",
                                                }}
                                              >
                                                {product.title}
                                              </h4>
                                              <p
                                                className="text-gray-600 font-normal"
                                                style={{
                                                  fontSize: "var(--text-16)",
                                                }}
                                              >
                                                {product.subtitle}
                                              </p>
                                            </div>
                                          </a>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        )}
                    </div>
                  ))}
                </div>

                {/* Mobile Icons */}
                <div className="flex items-center justify-center space-x-8 pt-6 border-t border-gray-200">
                  <button className="text-gray-900 hover:text-gray-600 transition-colors p-3">
                    <User size={24} />
                  </button>
                  <button
                    onClick={toggleSearch}
                    className="text-gray-900 hover:text-gray-600 transition-colors p-3"
                  >
                    <Search size={24} />
                  </button>
                  <button
                    onClick={toggleCart}
                    className="text-gray-900 hover:text-gray-600 transition-colors p-3"
                  >
                    <ShoppingCart size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center pt-20">
          <button
            onClick={closeAllOverlays}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-4xl px-4 relative">
            <div className="text-center mb-8">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Start search"
                  className="w-full bg-transparent border-b-2 border-white text-white text-xl md:text-2xl py-4 px-0 focus:outline-none focus:border-gray-300 placeholder-white"
                  autoFocus
                />
              </div>

              {searchQuery && (
                <div className="mt-8 text-white">
                  <p className="text-lg mb-4">
                    Search results for "{searchQuery}":
                  </p>
                  <div className="space-y-2">
                    <div className="p-4 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-pointer transition-colors">
                      <h3 className="font-semibold">Sample Product 1</h3>
                      <p className="text-gray-300">
                        Product description here...
                      </p>
                    </div>
                    <div className="p-4 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-pointer transition-colors">
                      <h3 className="font-semibold">Sample Product 2</h3>
                      <p className="text-gray-300">
                        Product description here...
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 bg-opacity-50"
            onClick={closeAllOverlays}
          ></div>

          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-25 font-semibold">Shopping Cart (0)</h2>
                <button
                  onClick={closeAllOverlays}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={32} />
                </button>
              </div>

              {/* Cart Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col items-center justify-center h-full text-center px-6">
                  <div className="mb-8">
                    <p className="text-xl font-medium text-gray-900 mb-2">
                      Your cart is currently empty.
                    </p>
                  </div>
                  <Button
                    text="Continue Browsing"
                    bg="bg-black/90"
                    hoverBg="hover:bg-black"
                    border="border-black"
                    hoverBorder="hover:border-black"
                    textColor="text-white"
                    hoverTextColor="hover:text-white"
                    paddingX={"px-8 sm:px-10"}
                    paddingY="py-2 sm:py-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderSection;
