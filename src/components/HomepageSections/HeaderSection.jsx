import React, { useState } from "react";
import AnnouncementBar from "./AnnouncementBar.jsx";
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

  const handleMenuHover = (index) => {
    setActiveMenu(index);
    setActiveRightMenu(null); // Close right menu when left menu is hovered
  };

  const handleRightMenuHover = (index) => {
    setActiveRightMenu(index);
    setActiveMenu(null); // Close left menu when right menu is hovered
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
    // Also close any open menu when leaving header area
    setActiveMenu(null);
    setActiveRightMenu(null);
  };

  return (
    <div className="relative z-50 ">
      {/* Announcement Bar */}
      <div className="bg-black text-white flex justify-center items-center py-3">
        <p className="text-sm font-medium">
          Order before 10am for same day dispatch!
        </p>
      </div>

      {/* Header */}
      <header
        className={`relative transition-all duration-300 ease-in-out ${
          isHeaderHovered || activeMenu !== null || activeRightMenu !== null
            ? "bg-white "
            : "bg-transparent"
        }`}
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
      >
        <div
          className={`py-4 mx-10 px-4 border-b ${
            (isHeaderHovered && activeMenu !== null) || activeRightMenu !== null
              ? "border-black "
              : "border-white"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {leftMenus.map((l_menu, index) => {
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => handleMenuHover(index)}
                  >
                    <button
                      className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                        isHeaderHovered || activeMenu !== null
                          ? "text-gray-800 hover:text-gray-600"
                          : "text-white hover:text-gray-200"
                      }`}
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
                );
              })}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0">
              <div
                className={`w-[220px] h-[70px] overflow-hidden ${
                  isHeaderHovered ||
                  activeMenu !== null ||
                  activeRightMenu !== null
                    ? "invert "
                    : ""
                }`}
              >
                <img
                  src={Logo}
                  alt="Clifton Coffee Roasters"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
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
                        ? "text-gray-800 hover:text-gray-600"
                        : "text-white hover:text-gray-200"
                    }`}
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

              {/* Icons */}
              <div className="flex items-center space-x-4">
                <button
                  className={`transition-colors duration-200 ${
                    isHeaderHovered ||
                    activeMenu !== null ||
                    activeRightMenu !== null
                      ? "text-gray-800 hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <User size={20} />
                </button>
                <button
                  className={`transition-colors duration-200 ${
                    isHeaderHovered ||
                    activeMenu !== null ||
                    activeRightMenu !== null
                      ? "text-gray-800 hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <Search size={20} />
                </button>
                <button
                  className={`transition-colors duration-200 ${
                    isHeaderHovered ||
                    activeMenu !== null ||
                    activeRightMenu !== null
                      ? "text-gray-800 hover:text-gray-600"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden transition-colors duration-200 ${
                isHeaderHovered ||
                activeMenu !== null ||
                activeRightMenu !== null
                  ? "text-gray-800"
                  : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        {activeMenu !== null && leftMenus[activeMenu]?.hasSubmenu && (
          <div
            className="absolute top-full left-0 w-full bg-white shadow-xl z-40 border-t border-gray-200"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={handleMenuLeave}
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Categories Section */}
                <div className="col-span-6">
                  <div className="grid grid-cols-2 gap-8">
                    {leftMenus[activeMenu]?.submenu?.categories?.map(
                      (category, categoryIndex) => (
                        <div key={categoryIndex}>
                          <h3 className="font-semibold text-gray-900 mb-4 text-lg border-b border-gray-200 pb-2">
                            {category.title}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 block py-2 px-2 rounded text-sm -mx-2"
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
                  <div className="grid grid-cols-2 gap-6">
                    {leftMenus[activeMenu]?.submenu?.featuredProducts?.map(
                      (product, productIndex) => (
                        <div
                          key={productIndex}
                          className="group cursor-pointer"
                        >
                          <a href={product.link || "#"} className="block">
                            <div className="relative overflow-hidden rounded-lg mb-3 shadow-md">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium bg-black bg-opacity-50 px-4 py-2 rounded">
                                  View Product
                                </span>
                              </div>
                            </div>
                            <div className="text-center">
                              <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                                {product.title}
                              </h4>
                              <p className="text-gray-600 text-sm">
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
              className="absolute top-full left-0 w-full bg-white shadow-xl z-40 border-t border-gray-200"
              onMouseEnter={() => setActiveRightMenu(activeRightMenu)}
              onMouseLeave={handleMenuLeave}
            >
              <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Categories Section */}
                  <div className="col-span-6">
                    <div className="grid grid-cols-2 gap-8">
                      {rightMenus[activeRightMenu]?.submenu?.categories?.map(
                        (category, categoryIndex) => (
                          <div key={categoryIndex}>
                            <h3 className="font-semibold text-gray-900 mb-4 text-lg border-b border-gray-200 pb-2">
                              {category.title}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <a
                                    href="#"
                                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 block py-2 px-2 rounded text-sm -mx-2"
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
                    <div className="grid grid-cols-2 gap-6">
                      {rightMenus[
                        activeRightMenu
                      ]?.submenu?.featuredProducts?.map(
                        (product, productIndex) => (
                          <div
                            key={productIndex}
                            className="group cursor-pointer"
                          >
                            <a href={product.link || "#"} className="block">
                              <div className="relative overflow-hidden rounded-lg mb-3 shadow-md">
                                <img
                                  src={product.image}
                                  alt={product.title}
                                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <span className="text-white font-medium bg-black bg-opacity-50 px-4 py-2 rounded">
                                    View Product
                                  </span>
                                </div>
                              </div>
                              <div className="text-center">
                                <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                                  {product.title}
                                </h4>
                                <p className="text-gray-600 text-sm">
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
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl z-40 border-t">
            <div className="px-4 py-6">
              <div className="space-y-6">
                {/* Left Menu Items */}
                {leftMenus.map((l_menu, index) => (
                  <div key={index}>
                    <button className="flex items-center justify-between w-full text-left text-gray-800 font-medium py-2 hover:text-gray-600 transition-colors">
                      <span>{l_menu.title}</span>
                      {l_menu.hasSubmenu && <ChevronDown size={16} />}
                    </button>

                    {l_menu.hasSubmenu && l_menu.submenu && (
                      <div className="mt-2 pl-4 space-y-4">
                        {l_menu.submenu.categories?.map(
                          (category, categoryIndex) => (
                            <div key={categoryIndex}>
                              <h4 className="font-medium text-gray-700 mb-2 border-b border-gray-200 pb-1">
                                {category.title}
                              </h4>
                              <ul className="space-y-1 pl-2">
                                {category.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <a
                                      href="#"
                                      className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block py-1 px-2 rounded -mx-2 transition-all"
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

                {/* Right Menu Items */}
                <div className="border-t pt-6">
                  {rightMenus.map((r_menu, index) => (
                    <div key={index}>
                      <button className="flex items-center justify-between w-full text-left text-gray-800 font-medium py-2 hover:text-gray-600 transition-colors">
                        <span>{r_menu.title}</span>
                        {r_menu.hasSubmenu && <ChevronDown size={16} />}
                      </button>

                      {r_menu.hasSubmenu && r_menu.submenu && (
                        <div className="mt-2 pl-4 space-y-4">
                          {r_menu.submenu.categories?.map(
                            (category, categoryIndex) => (
                              <div key={categoryIndex}>
                                <h4 className="font-medium text-gray-700 mb-2 border-b border-gray-200 pb-1">
                                  {category.title}
                                </h4>
                                <ul className="space-y-1 pl-2">
                                  {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <a
                                        href="#"
                                        className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block py-1 px-2 rounded -mx-2 transition-all"
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
                <div className="flex items-center justify-center space-x-8 pt-6 border-t">
                  <button className="text-gray-800 hover:text-gray-600 transition-colors p-2">
                    <User size={24} />
                  </button>
                  <button className="text-gray-800 hover:text-gray-600 transition-colors p-2">
                    <Search size={24} />
                  </button>
                  <button className="text-gray-800 hover:text-gray-600 transition-colors p-2">
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
