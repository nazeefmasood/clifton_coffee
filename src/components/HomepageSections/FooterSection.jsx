import React, { useState } from "react";
import { MessageSquareMore, X } from "lucide-react";
import FooterLogo from "../../assets/images/footer_logo.png";
import data from "../../data/db";

const FooterSection = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [socialLinks, setSocialLinks] = useState(data.footer.sociallinks);
  const [footerLinks, setFooterLinks] = useState(data.footer.footerlinks);
  const [contactInfo, setContactInfo] = useState(data.footer.contactinfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setShowEnquiryPopup(false);
  };

  return (
    <>
      <footer
        className="bg-[color:var(--color-black-shade)] text-white px-4 sm:px-6 lg:px-8 pt-8 pb-2 relative flex flex-col gap-10"
        style={{ fontFamily: "var(--font-barlow)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Logo & Social */}
          <div className="flex flex-col lg:col-span-1">
            <div className="flex flex-col items-center lg:items-start gap-5">
              <div className="w-[140px] sm:w-[160px] lg:w-[180px] h-[160px] sm:h-[180px] lg:h-[200px]  mb-4 flex items-center justify-center p-4">
                <img
                  src={FooterLogo}
                  alt="Clifton Coffee Roasters"
                  classname="w-[140px] sm:w-[160px] lg:w-[180px] h-[160px] sm:h-[180px] lg:h-[200px] object-fill mb-4"
                />
              </div>
              <div className="flex gap-8 sm:gap-10 justify-center lg:justify-start items-center ml-0 lg:ml-5">
                {socialLinks.map(({ icon: Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
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
              <h4 className="mb-5 font-bold text-25">{section.title}</h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {typeof link === "object" ? (
                      <button
                        onClick={() => setShowEnquiryPopup(true)}
                        className="font-normal text-16 hover:text-gray-300 hover:underline underline-offset-8 transition-colors duration-200"
                      >
                        {link.text}
                      </button>
                    ) : (
                      <a
                        href="#"
                        className="font-normal text-16 hover:text-gray-300 hover:underline underline-offset-8 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us */}
          <div className="text-center lg:text-left">
            <h4 className="mb-5 font-bold text-25">Contact Us</h4>
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
                      className="font-normal text-16 hover:text-gray-300 transition-colors duration-200"
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
        <p className="text-center font-normal text-16 my-3">
          2025 © Clifton Coffee Roasters | Privacy Policy
        </p>

        {/* Chat Button */}
        <button className="absolute bg-[color:var(--color-light-grey-4)] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[67px] lg:h-[67px] rounded-full flex justify-center items-center bottom-20 right-4 sm:bottom-6 sm:right-6 lg:bottom-10 lg:right-10 hover:bg-gray-200 transition-colors duration-200">
          <MessageSquareMore
            color="#000"
            size={24}
            className="sm:w-7 sm:h-7 lg:w-8 lg:h-8"
          />
        </button>
      </footer>

      {/* Enquiry Popup */}
      {showEnquiryPopup && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-[color:var(--color-light-green-1)] rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setShowEnquiryPopup(false)}
              className="absolute top-4 right-4 z-10 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
            >
              <X size={20} />
            </button>

            {/* Popup Content */}
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                Enquiry
              </h2>

              <p className="text-gray-700 mb-6">
                Have questions or ready to join us? Fill out the form, and our
                team will get in touch to explore how we can collaborate with
                you.
              </p>

              <div className="mb-6">
                <span className="font-medium text-black">Email: </span>
                <span className="text-gray-700">
                  wholesale@cliftoncoffee.co.uk
                </span>
              </div>

              <div className="space-y-6">
                {/* First Row - First Name and Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Second Row - Business Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      placeholder="Enter your business name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Third Row - Mobile and Postcode */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Mobile
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      placeholder="Enter your Business mobile number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="postcode"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Postcode
                    </label>
                    <input
                      type="text"
                      id="postcode"
                      placeholder="Enter your postcode"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Enter your inquiries"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-vertical"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-black text-white py-4 px-6 rounded-md hover:bg-gray-800 transition-colors duration-200 font-medium text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterSection;
