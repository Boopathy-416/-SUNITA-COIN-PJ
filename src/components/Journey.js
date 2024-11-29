import { motion } from "framer-motion";

export default function SpaceLanding() {
  return (
    <div className="min-h-screen  text-white relative overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-8"
   >
        {/* First Marquee */}
        <div
          className="w-full sm:w-[100%] rotate-6 overflow-hidden"
          style={{
            position: "absolute",
            top: "30px",
            background: "#1c1a1a",
            padding: "1rem",
          }}
        >
          <div className="animate-marquee-left2 whitespace-nowrap flex items-center">
            {Array.from({ length: 100 }).map((_, i) => (
              <span
                key={i}
                className="mx-4 text-2xl sm:text-3xl"
                style={{
                  fontFamily: " Akira Expanded",
                  fontSize: "36.75px",
                  fontWeight: " 800",
                  lineHeight: "42.27px",
                }}
              >
                $SUNITA
              </span>
            ))}
          </div>
        </div>

        {/* Second Marquee */}
        <div
          className="w-full sm:w-[150%] py-8 -rotate-6 overflow-hidden"
          style={{
            position: "absolute",
            top: "50px",
            background: "#1c1a1a",
            padding: "1rem",
          }}
        >
          <div className="animate-marquee-right2 whitespace-nowrap flex items-center">
            {Array.from({ length: 100 }).map((_, i) => (
              <span
                key={i}
                className="mx-4 text-2xl sm:text-3xl"
                style={{
                  fontFamily: " Akira Expanded",
                  fontSize: "36.75px",
                  fontWeight: " 800",
                  lineHeight: "42.27px",
                }}
              >
                $SUNITA
              </span>
            ))}
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div className="relative z-10 flex mt-40 items-center justify-center  px-4"
         style={{
          top:"70px !important"
        }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* Left Side - Astronaut Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center "
          >
            <img
              src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732267374/main_Lft_xwieay.png"
              alt="Astronaut looking through window"
              className="object-contain max-w-full h-auto"
              style={{
                // border:"2px solid white",
                borderRadius: "100%",
              }}
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-6 sm:p-10 space-y-6">
              <h5
                className=" sm:text-3xl  leading-tight text-center sm:text-center"
                style={{
                  fontFamily: "Object Sans",
                  fontSize: "20px",
                  fontWeight: "800",
                  lineHeight: "26px",
                  letterSpacing: " 0.06em",
                  textAlign: "center",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: " none",
                }}
              >
                JOIN US ON A{" "}
                <span className="text-gray-400">JOURNEY TO PROPEL </span>
                <span className="text-white">$SUNITA TO THE MOON</span>{" "}
                <span className="text-gray-400">AND BEYOND!</span>
              </h5>

              <p
                className="text-white text-sm sm:text-base"
                style={{
                  fontFamily: "Squada One",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "15px",
                  letterSpacing: " 0.06em",
                  textAlign: "center",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: " none",
                }}
              >
                Sunita Williams ($SUNITA) is a fully decentralized,
                community-driven crypto adventure inspired by the renowned NASA
                astronaut Sunita Williams. We are on a mission to honor her
                remarkable enthusiasm and contributions to groundbreaking
                advancements in space exploration.
              </p>

              <div className="flex flex-wrap gap-4 justify-center sm:justify-center">
                <button className="bg-[#9ec405] p-1 border-4 hover:bg-green-800 text-black rounded-xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13" />
                    <path
                      d="M22 2 2 10l9 3 3 9 3-6 3 1 2-15z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                {/* Twitter/X Button */}
                <button className="bg-[#9ec405] border-4 p-1 hover:bg-green-800 text-black rounded-xl flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4l11.733 16h4.267l-11.733-16z" />
                    <path d="M4 20l6.768-6.768" />
                    <path d="M13.277 10.277l6.723-6.277" />
                  </svg>
                </button>
                <a
                  href="#"
                  className="
    inline-flex 
    items-center 
    justify-center 
    border-4 
    rounded-xl 
    bg-[#9ec405] 
    px-3 
    py-3 
    text-lg 
    font-black 
    text-black 
    text-center 
    hover:bg-green-800 
    transition-colors 
    [text-underline-position:from-font]
  "
                  style={{
                    fontFamily: "Object Sans",
                    // fontWeight:"800",
                    textDecorationSkipInk: "none",
                  }}
                >
                  BUY $SUNITA
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
