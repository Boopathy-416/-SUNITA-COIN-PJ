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
      <section className="relative h-screen overflow-hidden">
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
            className="rounded-full opacity-65 w-60 sm:w-72 md:w-96 lg:w-[700px] xl:w-[850px] max-w-full"
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
              className="w-32 sm:w-40 md:w-48 lg:w-56 object-contain opacity-90"
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

        <div className="relative z-30 flex flex-col items-center justify-center h-screen px-8 text-center text-white">
          {/* H1 Header */}
          <h1
            className="font-bold tracking-[0.05em] text-[32px] sm:text-[50px] lg:text-[75px] xl:text-[100.66px] leading-tight lg:leading-[105.18px] text-[#d9d9d9]"
            style={{
              fontFamily: "'Akira Expanded', sans-serif",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#d9d9d9",
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

          {/* Section with TO LAND and TO MOON */}
          <div
            className="flex  w-full justify-between items-center pt-10 px-6 sm:px-10 lg:px-20 xl:px-40"
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
              TO MOON
            </h2>
          </div>

          <div className="flex justify-between items-center w-full px-6 sm:px-20 lg:px-20 xl:px-80 mt-14">
            <img
              src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732281029/h2_pavcp9.png"
              alt="Image 1"
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            />
            <img
              src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732281029/h1_x9wxqr.png"
              alt="Image 2"
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            />
          </div>

          {/* Timer Section */}
          <div className="max-w-4xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-black/80 backdrop-blur-lg rounded-3xl p-6 border border-gray-800">
              {/* Mission Text */}
              <div
                className="text-[#9eff00]  sm:text-base md:text-lg mb-2 text-center"
                style={{
                  fontFamily: "'Squada One', sans-serif",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "16.91px",
                  letterSpacing: "0.05em",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                {" "}
                MISSION TO RESCUE ASTRONAUTS
              </div>

              {/* Timer */}
              <div
                className="relative text-3xl sm:text-4xl md:text-5xl mb-4 tracking-wider text-center"
                style={{ fontFamily: "Technology" }}
              >
                {/* Placeholder Numbers */}
                <div
                  className="absolute inset-0 text-gray-400 text-3xl sm:text-4xl md:text-5xl"
                  aria-hidden="true"
                  style={{
                    fontFamily: "Technology",
                    opacity: "0.2",
                    letterSpacing: "0.1",
                  }}
                >
                  88:88:88
                </div>

                {/* Actual Timer */}
                <div
                  className="relative z-10 text-white  inset-0 text-3xl sm:text-4xl md:text-5xl"
                  style={{ fontFamily: "Technology", letterSpacing: "1" }}
                >
                  {time}
                </div>
              </div>

              {/* Vision Paragraph */}
              <p
                className="text-xs sm:text-sm md:text-base text-gray-300 tracking-wide leading-relaxed text-center"
                style={{
                  fontFamily: "'Squada One', sans-serif",
                  fontSize: "20px", // Default font size
                  fontWeight: "400",
                  lineHeight: "21.14px",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                OUR VISION IS TO BE THE GUIDING STAR FOR BLOCKCHAIN-BASED
                TRANSFORMATION, EMPHASIZING SUSTAINABLE GROWTH, INCLUSIVE
                ACCESS, AND COMMUNITY-DRIVEN DEVELOPMENT. WE AIM TO CONNECT
                INNOVATION, HUMAN POTENTIAL, AND GLOBAL IMPACT.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpaceParallax;
