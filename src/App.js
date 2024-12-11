import React from "react";
import "./App.css";
import SpaceParallax from "./components/hero";
import SpaceLanding from "./components/Journey";
import SpaceGallery from "./components/gallery";
import HowToBuy from "./components/buysection";
import Tokenomics from "./components/tokenomics";
import SunitaCard from "./components/footer";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <SpaceParallax />
      </section>
      <section id="about">
        <SpaceLanding />
      </section> 
      <section id="how-to-buy">
        <HowToBuy />
      </section>
    <section id="tokenomics">
        <Tokenomics />
      </section>
        <section id="gallery">
        <SpaceGallery />
      </section>
      <footer>
        <SunitaCard />
      </footer>
    </>
  );
};

export default App
