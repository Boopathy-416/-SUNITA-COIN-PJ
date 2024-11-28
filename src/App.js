import React from "react";
import "./App.css";
import SpaceParallax from "./components/hero";
import SpaceLanding from "./components/Journey";
import SpaceGallery from "./components/gallery";
import HowToBuy from "./components/buysection";
import Tokenomics from "./components/tokenomics";
import SunitaCard from "./components/footer";

const App = () => {
  return (
    <>
      <SpaceParallax />
      <SpaceLanding />
     <HowToBuy />
    <Tokenomics />
      <SpaceGallery />
      <SunitaCard />
    </>
  );
};

export default App;
