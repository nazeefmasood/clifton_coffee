import React, { useState } from "react";
import { ChevronDown, Search, ShoppingCart, User, Menu, X } from "lucide-react";
import Logo from "../../assets/images/logo.png";
import data from "../../data/db.js";

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

  const handleMenuHover = (index) => {
    setActiveMenu(index);
    setActiveRightMenu(null);
  };

  const handleRightMenuHover = (index) => {
    setActiveRightMenu(index);
    setActiveMenu(null);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
    setActiveRightMenu(null);
  };

  const handleHeaderMouseEnter = () => {
    setIsHeaderHovered(true);
  };

  const handleHeaderMouseLeave = () => {
    setIsHeaderHovered(false);
    setActiveMenu(null);
    setActiveRightMenu(null);
  };

  const toggleMobileSubmenu = (index, type) => {
    const menuKey = type === "left" ? `left-${index}` : `right-${index}`;
    setExpandedMobileMenu(expandedMobileMenu === menuKey ? null : menuKey);
  };

  return (
    <div className="relative z-50" style={{ fontFamily: "var(--font-barlow)" }}>
      {/* Announcement Bar */}
      <div className="bg-black text-white">
        <div className="flex justify-center items-center py-2 px-4 sm:py-3">
          <p className="text-xs sm:text-sm lg:text-base font-medium text-center whitespace-nowrap">
            Order before 10am for same day dispatch!
          </p>
        </div>
      </div>

      {/* Header */}
      <header
        className={`relative transition-all duration-300 ease-in-out ${
          isHeaderHovered || activeMenu !== null || activeRightMenu !== null
            ? "bg-white"
            : "bg-transparent"
        }`}
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
      >
        <div
          className={`py-3 sm:py-4 px-4 sm:px-6 lg:px-10 border-b transition-colors duration-300 ${
            (isHeaderHovered && activeMenu !== null) || activeRightMenu !== null
              ? "border-black"
              : "border-white"
          }`}
        >
          <div className="flex items-center justify-between  mx-auto ">
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
                      isHeaderHovered || activeMenu !== null
                        ? "text-gray-900 hover:text-gray-600"
                        : "text-white hover:text-gray-200"
                    }`}
                    style={{ fontSize: "var(--text-18)" }}
                  >
                    <span>{l_menu.title}</span>
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
                className={`w-36 h-12 sm:w-44 sm:h-12 lg:w-56 lg:h-16 xl:w-56 xl:h-24 overflow-hidden transition-all duration-300 ${
                  isHeaderHovered ||
                  activeMenu !== null ||
                  activeRightMenu !== null
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
                        activeRightMenu !== null
                          ? "text-gray-900 hover:text-gray-600"
                          : "text-white hover:text-gray-200"
                      }`}
                      style={{ fontSize: "var(--text-18)" }}
                    >
                      <span>{r_menu.title}</span>
                      {r_menu.hasSubmenu && (
                        <ChevronDown
                          size={16}
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
                    activeRightMenu !== null
                      ? "text-gray-900 hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <User size={18} className="lg:w-5 lg:h-5" />
                </button>
                <button
                  className={`transition-colors duration-200 p-1 ${
                    isHeaderHovered ||
                    activeMenu !== null ||
                    activeRightMenu !== null
                      ? "text-gray-900 hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <Search size={18} className="lg:w-5 lg:h-5" />
                </button>
                <button
                  className={`transition-colors duration-200 p-1 ${
                    isHeaderHovered ||
                    activeMenu !== null ||
                    activeRightMenu !== null
                      ? "text-gray-900 hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <ShoppingCart size={18} className="lg:w-5 lg:h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`xl:hidden transition-colors duration-200 p-1 ${
                isHeaderHovered ||
                activeMenu !== null ||
                activeRightMenu !== null ||
                isMobileMenuOpen
                  ? "text-gray-900"
                  : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        {activeMenu !== null && leftMenus[activeMenu]?.hasSubmenu && (
          <div
            className="absolute top-full left-0 w-full bg-white shadow-2xl z-40 border-t border-gray-200 hidden xl:block"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={handleMenuLeave}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-12">
              <div className="grid grid-cols-12 gap-8 lg:gap-12">
                {/* Categories Section */}
                <div className="col-span-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {leftMenus[activeMenu]?.submenu?.categories?.map(
                      (category, categoryIndex) => (
                        <div key={categoryIndex}>
                          <h3
                            className="font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200"
                            style={{ fontSize: "var(--text-25)" }}
                          >
                            {category.title}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 block py-2 px-3 rounded-md font-normal -mx-3"
                                  style={{ fontSize: "var(--text-18)" }}
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
                          className="group cursor-pointer"
                        >
                          <a href={product.link || "#"} className="block">
                            <div className="relative overflow-hidden rounded-lg mb-3 shadow-lg">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-36 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span
                                  className="text-white font-medium bg-black bg-opacity-50 px-4 py-2 rounded-md"
                                  style={{ fontSize: "var(--text-18)" }}
                                >
                                  View Product
                                </span>
                              </div>
                            </div>
                            <div className="text-center">
                              <h4
                                className="font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors"
                                style={{ fontSize: "var(--text-18)" }}
                              >
                                {product.title}
                              </h4>
                              <p
                                className="text-gray-600 font-normal"
                                style={{ fontSize: "var(--text-18)" }}
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
              </div>
            </div>
          </div>
        )}

        {/* Right Menu Dropdown */}
        {activeRightMenu !== null &&
          rightMenus[activeRightMenu]?.hasSubmenu && (
            <div
              className="absolute top-full left-0 w-full bg-white shadow-2xl z-40 border-t border-gray-200 hidden xl:block"
              onMouseEnter={() => setActiveRightMenu(activeRightMenu)}
              onMouseLeave={handleMenuLeave}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-12">
                <div className="grid grid-cols-12 gap-8 lg:gap-12">
                  {/* Categories Section */}
                  <div className="col-span-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                      {rightMenus[activeRightMenu]?.submenu?.categories?.map(
                        (category, categoryIndex) => (
                          <div key={categoryIndex}>
                            <h3
                              className="font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200"
                              style={{ fontSize: "var(--text-25)" }}
                            >
                              {category.title}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <a
                                    href="#"
                                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 block py-2 px-3 rounded-md font-normal -mx-3"
                                    style={{ fontSize: "var(--text-18)" }}
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
                                  className="w-full h-36 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <span
                                    className="text-white font-medium bg-black bg-opacity-50 px-4 py-2 rounded-md"
                                    style={{ fontSize: "var(--text-18)" }}
                                  >
                                    View Product
                                  </span>
                                </div>
                              </div>
                              <div className="text-center">
                                <h4
                                  className="font-semibold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors"
                                  style={{ fontSize: "var(--text-18)" }}
                                >
                                  {product.title}
                                </h4>
                                <p
                                  className="text-gray-600 font-normal"
                                  style={{ fontSize: "var(--text-18)" }}
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
                </div>
              </div>
            </div>
          )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl z-40 border-t max-h-screen overflow-y-auto">
            <div className="px-4 py-6">
              <div className="space-y-4">
                {/* Left Menu Items */}
                <div className="space-y-4">
                  {leftMenus.map((l_menu, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <button
                        className="flex items-center justify-between w-full text-left text-gray-900 font-medium py-3 hover:text-gray-600 transition-colors"
                        style={{ fontSize: "var(--text-18)" }}
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
                          <div className="mt-3 pl-4 space-y-4 bg-gray-50 rounded-lg p-4">
                            {l_menu.submenu.categories?.map(
                              (category, categoryIndex) => (
                                <div key={categoryIndex}>
                                  <h4
                                    className="font-medium text-gray-900 mb-3 pb-2 border-b border-gray-200"
                                    style={{ fontSize: "var(--text-18)" }}
                                  >
                                    {category.title}
                                  </h4>
                                  <ul className="space-y-2 pl-2">
                                    {category.items.map((item, itemIndex) => (
                                      <li key={itemIndex}>
                                        <a
                                          href="#"
                                          className="text-gray-600 hover:text-gray-900 hover:bg-white block py-2 px-3 rounded-md transition-all font-normal"
                                          style={{ fontSize: "var(--text-18)" }}
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
                        )}
                    </div>
                  ))}
                </div>

                {/* Right Menu Items */}
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  {rightMenus.map((r_menu, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <button
                        className="flex items-center justify-between w-full text-left text-gray-900 font-medium py-3 hover:text-gray-600 transition-colors"
                        style={{ fontSize: "var(--text-18)" }}
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
                          <div className="mt-3 pl-4 space-y-4 bg-gray-50 rounded-lg p-4">
                            {r_menu.submenu.categories?.map(
                              (category, categoryIndex) => (
                                <div key={categoryIndex}>
                                  <h4
                                    className="font-medium text-gray-900 mb-3 pb-2 border-b border-gray-200"
                                    style={{ fontSize: "var(--text-18)" }}
                                  >
                                    {category.title}
                                  </h4>
                                  <ul className="space-y-2 pl-2">
                                    {category.items.map((item, itemIndex) => (
                                      <li key={itemIndex}>
                                        <a
                                          href="#"
                                          className="text-gray-600 hover:text-gray-900 hover:bg-white block py-2 px-3 rounded-md transition-all font-normal"
                                          style={{ fontSize: "var(--text-18)" }}
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
                        )}
                    </div>
                  ))}
                </div>

                {/* Mobile Icons */}
                <div className="flex items-center justify-center space-x-8 pt-6 border-t border-gray-200">
                  <button className="text-gray-900 hover:text-gray-600 transition-colors p-3">
                    <User size={24} />
                  </button>
                  <button className="text-gray-900 hover:text-gray-600 transition-colors p-3">
                    <Search size={24} />
                  </button>
                  <button className="text-gray-900 hover:text-gray-600 transition-colors p-3">
                    <ShoppingCart size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default HeaderSection;
