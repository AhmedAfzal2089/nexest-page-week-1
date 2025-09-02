import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OurClientSection from "./components/OurClientSection";
import EntireCommunitySection from "./components/EntireCommunitySection";
import ThreeYears from "./components/ThreeYears";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurClientSection />
      <EntireCommunitySection />
      <ThreeYears />
    </>
  );
};

export default App;
