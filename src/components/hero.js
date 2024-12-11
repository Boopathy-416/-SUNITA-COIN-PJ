import React, { useEffect, useRef, useState } from "react";

const SpaceParallax = () => {
  const parallaxRef = useRef(null);
  const [time, setTime] = useState("18:36:35");

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed")) || 0;
        const yPos = scrollTop * speed;
        element.style.transform = `translateY(-${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={parallaxRef} className="relative ">
      <section className="relative max-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center parallax"
          data-speed="0.1"
          style={{
            backgroundImage: `
      linear-gradient(2.46deg, #000000 23.33%, rgba(0, 0, 0, 0.01) 97.7%),
      url('https://res.cloudinary.com/dprlidj0p/image/upload/v1732257786/hero_bg_bxxqdl.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Earth and Moon */}
        <div
          className="absolute inset-0 z-10 flex justify-center items-center px-4 parallax"
          data-speed="0.2"
          style={{
            background:
              "linear-gradient(2.46deg, #000000 23.33%, rgba(0, 0, 0, 0.01) 97.7%)",
          }}
        >
          <img
            src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732612239/rehero_fniuz0.png"
            alt="Earth"
            className="rounded-full opacity-65 w-full sm:w-[572px] md:w-[556px] lg:w-[1000px] xl:w-[1400px] max-w-full"
          />
        </div>
        {/* Rocket */}

        <div
          className="parallax absolute scene z-20 flex justify-center items-center inset-0"
          data-speed="2"
        >
          <div className="rocket relative">
            <img
              src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732260107/hero_rocket_txi6a8.png"
              alt="Rocket"
              className="w-32 sm:w-40 md:w-60 lg:w-60 object-contain opacity-90"
            />
          </div>
        </div>

        {/* Content */}
        <div className="absolute top-24 left-60  parallax" data-speed="0.2">
          <img
            src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732257783/hero_satillite_hzgk4j.png"
            width={200}
            alt="Space Station"
            className=" h-auto object-contain"
          />
        </div>

        <div className="relative z-30 flex flex-col items-center justify-center  h-screen ">
          <div className="flex text-2xl sm:text-4xl  w-full justify-between items-center  px-8 -mt-20 sm:px-10 lg:px-20 xl:px-40">
            <h1
              className="font-bold tracking-[0.05em]  sm:text-4xl
               lg:text-[66.4px] xl:text-[69.66px] leading-tight lg:leading-normal "
              style={{
                fontFamily: "'Akira Expanded', sans-serif",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#D9D9D9",
                textShadow: `
              -1px -1px 0 rgba(255, 255, 255, 0.74),
         1px -1px 0 rgba(255, 255, 255, 0.74),
         -1px 1px 0 rgba(255, 255, 255, 0.74),
         1px 1px 0 rgba(255, 255, 255, 0.74),
         0px -1px 0 rgba(255, 255, 255, 0.74),
         0px 1px 0 rgba(255, 255, 255, 0.74),
         -1px 0px 0 rgba(255, 255, 255, 0.74),
         1px 0px 0 rgba(255, 255, 255, 0.74)
       `,
              }}
            >
              SUNITA
            </h1>

            <h1
              className="font-bold tracking-[0.05em] text-2xl sm:text-4xl  sm:text-[24px] lg:text-[66.4px] xl:text-[69.66px] leading-normal lg:leading-normal "
              style={{
                fontFamily: "'Akira Expanded', sans-serif",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                color: "#D9D9D9",
                Height: "28px",
                textShadow: `
              -1px -1px 0 rgba(255, 255, 255, 0.74),
         1px -1px 0 rgba(255, 255, 255, 0.74),
         -1px 1px 0 rgba(255, 255, 255, 0.74),
         1px 1px 0 rgba(255, 255, 255, 0.74),
         0px -1px 0 rgba(255, 255, 255, 0.74),
         0px 1px 0 rgba(255, 255, 255, 0.74),
         -1px 0px 0 rgba(255, 255, 255, 0.74),
         1px 0px 0 rgba(255, 255, 255, 0.74)
       `,
              }}
            >
              $SUNITA
            </h1>
          </div>
          <div
            className="flex  w-full justify-between items-center pt-8 px-6 sm:px-10 lg:px-20 xl:px-40"
            style={{
              height: "54px",
              fontFamily: "'Akira Expanded', sans-serif",
              fontWeight: "800",
              opacity: "0.7",
              letterSpacing: "0.05em",
              color: "rgba(155, 155, 155, 0.74)",
              textShadow: `
    -1px -1px 0 rgba(255, 255, 255, 0.74),
    1px -1px 0 rgba(255, 255, 255, 0.74),
    -1px 1px 0 rgba(255, 255, 255, 0.74),
    1px 1px 0 rgba(255, 255, 255, 0.74),
    0px -1px 0 rgba(255, 255, 255, 0.74),
    0px 1px 0 rgba(255, 255, 255, 0.74),
    -1px 0px 0 rgba(255, 255, 255, 0.74),
    1px 0px 0 rgba(255, 255, 255, 0.74)
  `,
            }}
          >
            <h2 className="text-gray-400 opacity-50 font-bold tracking-[0.05em] text-2xl sm:text-4xl lg:text-[64px] border-t border-white/75 pt-4 sm:pt-6 lg:pt-8">
              TO LAND
            </h2>

            <h2 className="text-gray-400 opacity-50 font-bold tracking-[0.05em] text-2xl sm:text-4xl lg:text-[64px] border-t border-white/75 pt-4 sm:pt-6 lg:pt-8">
              TO MOON <br />
            </h2>
          </div>

          <div
            className="flex justify-between items-center w-full px-6 sm:px-20 lg:px-20 xl:px-80 mt-4"
            style={{
              height: "62px",
              // put 80 px-10
            }}
          >
             <img
              src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732281029/h1_x9wxqr.png"
              alt="Image 2"
              className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            />
            <img
              src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732281029/h2_pavcp9.png"
              alt="Image 1"
              className="w-12 h-12  sm:w-20 sm:h-20 lg:w-24 lg:h-24"
            />
           
          </div>

          <div className="absolute bottom-2 group max-w-6xl mx-auto p-5  ">
            <div className="absolute inset-10 pointer-events-none -m-6">
              <div className="absolute -top-1 -left-1 w-24 h-24 border-l-2 border-t-2 border-[#474747] rounded-tl-[44px] opacity-80" />

              <div className="absolute -top-1 -right-1 w-24 h-24 border-r-2 border-t-2 border-[#474747] rounded-tr-[44px] opacity-80" />

              <div className="absolute -bottom-1 -left-1 w-24 h-24 border-l-2 border-b-2 border-[#474747] rounded-bl-[44px] opacity-80" />

              <div className="absolute -bottom-1 -right-1 w-24 h-24 border-r-2 border-b-2 border-[#474747] rounded-br-[44px] opacity-80" />
            </div>

            <div className=" bg-[#fffff] backdrop-blur-lg rounded-lg  p-8 ">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="space-y-4">
                  <p
                    className="text-[#CCFF00BF] uppercase tracking-wider"
                    style={{
                      fontFamily: "'Squada One'",
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    Mission to rescue astronauts
                  </p>
                  <div
                    className="font-mono text-6xl md:text-7xl text-neutral-300 tracking-wider tabular-nums"
                    style={{
                      fontFamily: "Technology",
                    }}
                  >
                    {time}
                  </div>
                </div>
                <div className="max-w-2xl">
                  <p
                    className="text-white text-left justify-center leading-relaxed uppercase tracking-wide"
                    style={{
                      fontFamily: "'Squada One', sans-serif",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    Our vision is to be the guiding star for blockchain-based
                    transformation, emphasizing sustainable growth, inclusive
                    access, and community-driven development. We aim to connect
                    innovation, human potential, and global impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaceParallax;
