import { MoveRight } from "lucide-react";
import React from "react";

const NewsletterSection = () => {
  return (
    <div className="bg-[#E0E1DA] h-[400px] lg:h-[500px]  flex flex-col justify-center items-center leading-tight overflow-hidden px-4 sm:px-6 lg:px-10 py-12 sm:py-16 gap-8 lg:gap-10">
      {/* Content */}
      <div className="text-center max-w-2xl">
        <h3 className="font-barlow font-normal text-70 text-primary mb-4 tracking-tighter">
          Newsletter
        </h3>
        <p className="text-body barlow-regular text-18 pointer-events-none">
          The latest coffees, offers and news from the Clifton.
        </p>
      </div>

      {/* Newsletter Form */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
        <div className="flex border-1 h-14 lg:h-18 border-black rounded-full overflow-hidden shadow-sm hover:border-black focus-within:border-black focus-within:ring-2 focus-within:ring-black focus-within:ring-opacity-20 transition-all duration-200">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full flex-1 px-4 sm:px-6 py-4 sm:py-4 text-body barlow-regular text-primary placeholder-gray-500 bg-transparent border-none outline-none"
          />
          <button className="bg-black text-white px-4 sm:px-6 py-3 sm:py-4 hover:bg-black transition-colors duration-200 flex items-center justify-center group">
            <MoveRight
              size={18}
              className="sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
