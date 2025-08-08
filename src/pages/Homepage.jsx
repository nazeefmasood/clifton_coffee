import React from "react";
import HeroSection from "../components/HomepageSections/HeroSection.jsx";
import NewsletterSection from "../components/HomepageSections/NewsletterSection.jsx";
import FooterSection from "../components/HomepageSections/FooterSection.jsx";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <NewsletterSection/>
      <FooterSection/>
    </>
  );
};

export default Homepage;
