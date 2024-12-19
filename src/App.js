  import React, { useEffect } from "react";
  import "./App.css";
  import SpaceParallax from "./components/hero";
  import SpaceLanding from "./components/Journey";
  import HowToBuy from "./components/buysection";
  import Tokenomics from "./components/tokenomics";
  import Navbar from "./components/navbar";
  import About from "./components/about";
  import SunitaCard from "./components/footer";
  import SpaceGallery from "./components/ks";
  import { smoothScroll } from "./components/smoothScroll";

  const App = () => {
    const BREAKPOINT = 768; // Use a named constant for clarity

    useEffect(() => {
      if (window.innerWidth > BREAKPOINT) {
        smoothScroll();
      }
    }, []);

    return (
      <>
        <Navbar />
    
        <div className="scrollContainer ">
          <section id="home">
            <SpaceParallax />
          </section>
          <section id="about">
            <About />
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
        </div>
      </>
    );
  };

  export default App;

  // import React, { useEffect } from "react";
  // import "./App.css";
  // import SpaceParallax from "./components/hero";
  // import SpaceLanding from "./components/Journey";
  // import HowToBuy from "./components/buysection";
  // import Tokenomics from "./components/tokenomics";
  // import Navbar from "./components/navbar";
  // import About from "./components/about";
  // import SunitaCard from "./components/footer";
  // import SpaceGallery from "./components/ks";
  // import { smoothScroll } from "./components/smoothScroll";

  // const App = () => {
  //   useEffect(() => {
  //     if (window.innerWidth > 768) {
  //       smoothScroll();
  //     }
  //   }, []);

  //   return (
  //     <>
  //       <Navbar />
  //       {/* Smooth Scroll Wrapper */}
  //       <div className="smooth-scroll">
  //         <section id="home">
  //           <SpaceParallax />
  //         </section>
  //         <section id="about">
  //           <About />
  //         </section>
  //         <section id="how-to-buy">
  //           <HowToBuy />
  //         </section>
  //         <section id="tokenomics">
  //           <Tokenomics />
  //         </section>
  //         <section id="gallery">
  //           <SpaceGallery />
  //         </section>
  //         <footer>
  //           <SunitaCard />
  //         </footer>
  //       </div>
  //     </>
  //   );
  // };

  // export default App;
