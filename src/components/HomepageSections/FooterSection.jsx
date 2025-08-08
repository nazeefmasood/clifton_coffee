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
    <footer className="bg-black text-white px-8 pt-8 pb-2 relative flex flex-col gap-10">
      <div className="grid grid-cols-5">
        <div className=" flex flex-col ">
          <div>
            <img
              src={FooterLogo}
              className="w-[180px] h-[200px] object-fill"
            />
            <div className="flex gap-5 justify-evenly items-center">
              <Facebook />
              <Instagram />
              <Youtube />
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-5 font-bold">Shop</h4>
          <ul className="flex flex-col gap-3">
            <li>Coffee Merchandise</li>
            <li>Brewing Equipment</li>
            <li>Clifton Hot Chocolate</li>
            <li>Clifton Tea</li>
            <li>Gift Card</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 font-bold">Coffee</h4>
          <ul className="flex flex-col gap-3">
            <li>All Coffee</li>
            <li>House Coffee</li>
            <li>Signle Origin</li>
            <li>Clifton Capsules</li>
            <li>Unparalled Series</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 font-bold">Our Ethos</h4>
          <ul className="flex flex-col gap-3">
            <li>About Us</li>
            <li>Resources</li>
            <li>Origin Films</li>
            <li>Careers</li>
            <li>HQ Virtual Tour</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-5 font-bold">Contact Us</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3">
              <Mail />
              <p>sales@cliftoncoffee.co.uk</p>
            </li>
            <li className="flex gap-3">
              <Phone />
              <p>+44 (0) 1179 820 252</p>
            </li>
            <li className="flex gap-3">
              <MapPin />
              <p>Write address here..</p>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center">
        2025 © Clifton Coffee Roasters | Privacy Policy
      </p>
      <button className="absolute bg-[#D9D9D9] w-[67px] h-[67px] rounded-full flex justify-center items-center bottom-10 right-10">
        <MessageSquareMore color="#000" size={32} />
      </button>
    </footer>
  );
};

export default FooterSection;
