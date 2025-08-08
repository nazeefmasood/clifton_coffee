import React from "react";
import HeroSection from "../components/HomepageSections/HeroSection.jsx";
import NewsletterSection from "../components/HomepageSections/NewsletterSection.jsx";
import FooterSection from "../components/HomepageSections/FooterSection.jsx";
import ExploreSection from "../components/HomepageSections/ExploreSection.jsx";
import SubscriptionAndToursSection from "../components/HomepageSections/SubscriptionAndToursSection.jsx";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <ExploreSection />
      <SubscriptionAndToursSection />
      <NewsletterSection />
      <FooterSection />
    </>
  );
};

export default Homepage;
