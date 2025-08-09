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
import OurFavouritesSection from "../components/HomepageSections/OurFavouritesSection.jsx";
import SocialMediaSection from "../components/HomepageSections/SocialMediaSection.jsx";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <OurCollectionSection />
      <NewProductsSection />
      <ExploreSection />
      <OurFavouritesSection />
      <SubscriptionAndToursSection />
      <TestimoninalsSection />
      <SocialMediaSection />
      <NewsletterSection />
      <FooterSection />
    </>
  );
};

export default Homepage;
