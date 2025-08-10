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
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  const footerLinks = [
    {
      title: "Shop",
      links: [
        "Coffee Merchandise",
        "Brewing Equipment",
        "Clifton Hot Chocolate",
        "Clifton Tea",
        "Gift Card",
      ],
    },
    {
      title: "Coffee",
      links: [
        "All Coffee",
        "House Coffee",
        "Single Origin",
        "Clifton Capsules",
        "Unparalleled Series",
      ],
    },
    {
      title: "Our Ethos",
      links: [
        "About Us",
        "Resources",
        "Origin Films",
        "Careers",
        "HQ Virtual Tour",
      ],
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      content: "sales@cliftoncoffee.co.uk",
      href: "mailto:sales@cliftoncoffee.co.uk",
    },
    {
      icon: Phone,
      content: "+44 (0) 1179 820 252",
      href: "tel:+441179820252",
    },
    {
      icon: MapPin,
      content: "Write address here..",
    },
  ];

  return (
    <footer
      className="bg-black text-white px-4 sm:px-6 lg:px-8 pt-8 pb-2 relative flex flex-col gap-10"
      style={{ fontFamily: "var(--font-barlow)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
        {/* Logo & Social */}
        <div className="flex flex-col lg:col-span-1">
          <div className="flex flex-col items-center lg:items-start">
            <img
              src={FooterLogo}
              alt="Clifton Coffee Roasters"
              className="w-[140px] sm:w-[160px] lg:w-[180px] h-[160px] sm:h-[180px] lg:h-[200px] object-fill mb-4"
            />
            <div className="flex gap-8 sm:gap-10 justify-center lg:justify-start items-center">
              {socialLinks.map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  <Icon size={30} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Link Sections */}
        {footerLinks.map((section, idx) => (
          <div key={idx} className="text-center lg:text-left">
            <h4
              className="mb-5 font-bold"
              style={{ fontSize: "var(--text-25)" }}
            >
              {section.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="font-normal text-18 hover:text-gray-300 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Us */}
        <div className="text-center lg:text-left">
          <h4 className="mb-5 font-bold" style={{ fontSize: "var(--text-25)" }}>
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3">
            {contactInfo.map(({ icon: Icon, content, href }, idx) => (
              <li
                key={idx}
                className="flex gap-3 items-start justify-center lg:justify-start"
              >
                <Icon size={18} className="mt-1 flex-shrink-0" />
                {href ? (
                  <a
                    href={href}
                    className="font-normal text-18 hover:text-gray-300 transition-colors duration-200"
                  >
                    {content}
                  </a>
                ) : (
                  <p className="font-normal text-18">{content}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center font-normal text-18">
        2025 © Clifton Coffee Roasters | Privacy Policy
      </p>

      {/* Chat Button */}
      <button className="absolute bg-[#D9D9D9] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[67px] lg:h-[67px] rounded-full flex justify-center items-center bottom-20 right-4 sm:bottom-6 sm:right-6 lg:bottom-10 lg:right-10 hover:bg-gray-200 transition-colors duration-200">
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
