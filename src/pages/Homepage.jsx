import React from "react";
import HeroSection from "../components/HomepageSections/HeroSection.jsx";
import NewsletterSection from "../components/HomepageSections/NewsletterSection.jsx";
import FooterSection from "../components/HomepageSections/FooterSection.jsx";
import ExploreSection from "../components/HomepageSections/ExploreSection.jsx";
import SubscriptionAndToursSection from "../components/HomepageSections/SubscriptionAndToursSection.jsx";
import Demo from "../components/reusable/Demo.jsx";
import OurCollectionSection from "../components/HomepageSections/OurCollectionSection.jsx";
import TestimoninalsSection from "../components/HomepageSections/TestimoninalsSection.jsx";
import NewProductsSection from "../components/HomepageSections/NewProductsSection.jsx";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <OurCollectionSection />
      <NewProductsSection />
      <ExploreSection />

      <SubscriptionAndToursSection />
      <TestimoninalsSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default Homepage;
