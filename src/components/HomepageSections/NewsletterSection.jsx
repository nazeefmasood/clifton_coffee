import { MoveRight } from "lucide-react";
import React from "react";

const NewsletterSection = () => {
  return (
    <div className="bg-[#E0E1DA] flex flex-col justify-center items-center leading-tight overflow-hidden px-10 py-16 gap-10">
      <div>
        <h3 className=" text-[70px] ">Newsletter</h3>
        <p className="text-sm ">
          The latest coffees, offers and news from the Clifton.
        </p>
      </div>

      <div className="flex w-[530px] border rounded-full overflow-hidden ">
        <input className="w-full h-full flex-1 p-3.5 m-0" />
        <button className="bg-black text-white p-3.5">
          <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;
