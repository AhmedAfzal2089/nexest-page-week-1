import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OurClientSection from "./components/OurClientSection";
import EntireCommunitySection from "./components/EntireCommunitySection";
import ThreeYears from "./components/ThreeYears";
import ReinventItself from "./components/ReinventItself";
import SiteFooterSection from "./components/SiteFooterSection";
import CaringMarketing from "./components/CaringMarketing";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurClientSection />
      <EntireCommunitySection />
      <ThreeYears />
      <ReinventItself />
      <SiteFooterSection />
      <CaringMarketing />
    </>
  );
};

export default App;
