import React from "react";
import FooterLogo from "../../assets/images/footer_logo.png";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageSquareMore,
  Phone,
  Youtube,
} from "lucide-react";

const FooterSection = () => {
  return (
    <footer
      className="bg-black text-white px-4 sm:px-6 lg:px-8 pt-8 pb-2 relative flex flex-col gap-10"
      style={{ fontFamily: "var(--font-barlow)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
        {/* Logo and Social Media */}
        <div className="flex flex-col lg:col-span-1">
          <div className="flex flex-col items-center lg:items-start">
            <img
              src={FooterLogo}
              alt="Clifton Coffee Roasters"
              className="w-[140px] sm:w-[160px] lg:w-[180px] h-[160px] sm:h-[180px] lg:h-[200px] object-fill mb-4"
            />
            <div className="flex gap-4 sm:gap-5 justify-center lg:justify-start items-center">
              <button className="hover:text-gray-300 transition-colors duration-200">
                <Facebook size={30} />
              </button>
              <button className="hover:text-gray-300 transition-colors duration-200">
                <Instagram size={30} />
              </button>
              <button className="hover:text-gray-300 transition-colors duration-200">
                <Youtube size={30} />
              </button>
            </div>
          </div>
        </div>

        {/* Shop */}
        <div className="text-center lg:text-left">
          <h4 className="mb-5 font-bold" style={{ fontSize: "var(--text-25)" }}>
            Shop
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                Coffee Merchandise
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                Brewing Equipment
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                Clifton Hot Chocolate
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                Clifton Tea
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                Gift Card
              </a>
            </li>
          </ul>
        </div>

        {/* Coffee */}
        <div className="text-center lg:text-left">
          <h4 className="mb-5 font-bold" style={{ fontSize: "var(--text-25)" }}>
            Coffee
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                All Coffee
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                House Coffee
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                Single Origin
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                Clifton Capsules
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                Unparalleled Series
              </a>
            </li>
          </ul>
        </div>

        {/* Our Ethos */}
        <div className="text-center lg:text-left">
          <h4 className="mb-5 font-bold" style={{ fontSize: "var(--text-25)" }}>
            Our Ethos
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                Origin Films
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                HQ Virtual Tour
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-center lg:text-left">
          <h4 className="mb-5 font-bold" style={{ fontSize: "var(--text-25)" }}>
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 items-start justify-center lg:justify-start">
              <Mail size={18} className="mt-1 flex-shrink-0" />
              <a
                href="mailto:sales@cliftoncoffee.co.uk"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                sales@cliftoncoffee.co.uk
              </a>
            </li>
            <li className="flex gap-3 items-start justify-center lg:justify-start">
              <Phone size={18} className="mt-1 flex-shrink-0" />
              <a
                href="tel:+441179820252"
                className="font-normal hover:text-gray-300 transition-colors duration-200"
                style={{ fontSize: "var(--text-18)" }}
              >
                +44 (0) 1179 820 252
              </a>
            </li>
            <li className="flex gap-3 items-start justify-center lg:justify-start">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <p className="font-normal" style={{ fontSize: "var(--text-18)" }}>
                Write address here..
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p
        className="text-center font-normal"
        style={{ fontSize: "var(--text-18)" }}
      >
        2025 © Clifton Coffee Roasters | Privacy Policy
      </p>

      {/* Chat Button */}
      <button className="absolute bg-[#D9D9D9] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[67px] lg:h-[67px] rounded-full flex justify-center items-center bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-10 lg:right-10 hover:bg-gray-200 transition-colors duration-200">
        <MessageSquareMore
          color="#000"
          size={24}
          className="sm:w-7 sm:h-7 lg:w-8 lg:h-8"
        />
      </button>
    </footer>
  );
};

export default FooterSection;
