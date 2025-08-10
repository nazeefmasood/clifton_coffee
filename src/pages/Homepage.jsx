import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import HeroSection from "../components/HomepageSections/HeroSection.jsx";
import NewsletterSection from "../components/HomepageSections/NewsletterSection.jsx";
import FooterSection from "../components/HomepageSections/FooterSection.jsx";
import ExploreSection from "../components/HomepageSections/ExploreSection.jsx";
import SubscriptionAndToursSection from "../components/HomepageSections/SubscriptionAndToursSection.jsx";
import OurCollectionSection from "../components/HomepageSections/OurCollectionSection.jsx";
import TestimoninalsSection from "../components/HomepageSections/TestimoninalsSection.jsx";
import NewProductsSection from "../components/HomepageSections/NewProductsSection.jsx";
import OurFavouritesSection from "../components/HomepageSections/OurFavouritesSection.jsx";
import SocialMediaSection from "../components/HomepageSections/SocialMediaSection.jsx";

const Homepage = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array means this effect runs once on mount

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
