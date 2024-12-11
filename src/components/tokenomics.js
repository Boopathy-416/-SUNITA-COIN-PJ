export default function Tokenomics() {
  return (
    <div className="min-h-screen relative text-white flex items-center justify-center p-6">
      <img
        src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732535851/tokenbg1_yw0nki.png"
        alt="Background Layer 1"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <img
        src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732535852/tokenbg2_ghegib.png"
        alt="Background Layer 2"
        className="absolute opacity-50 sm:w-[20%] md:w-[25%] object-cover -z-5"
        style={{
          height: "auto",
        }}
      />

      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="absolute  left-4 sm:top-8 sm:left-8"
          style={{
            top: "-200px",
          }}
        >
          <div className="relative group">
            {/* Four Corners */}
            <div className="absolute -inset-[10px] pointer-events-none">
              <div className="absolute -top-2 -left-2 w-10 h-[40px] opacity-40 border-l-2 border-t-2 border-[#696767] rounded-tl-[20px]" />
              <div className="absolute -top-2 -right-2 w-10 h-[40px] opacity-40 border-r-2 border-t-2 border-[#696767] rounded-tr-[20px]" />
              <div className="absolute -bottom-2 -left-2 w-10 h-[40px] opacity-40 border-l-2 border-b-2 border-[#696767] rounded-bl-[20px]" />
              <div className="absolute -bottom-2 -right-2 w-10 h-[40px] opacity-40 border-r-2 border-b-2 border-[#696767] rounded-br-[20px]" />
            </div>
            <div
              className="text-white  text-5xl sm:text-7xl font-normal tracking-[0.06em] text-center mb-2"
              style={{
                fontFamily: "Squada One",
              }}
            >
              55%
            </div>
            <div
              className="text-gray-500 text-2xl sm:text-3xl lg:text-4xl tracking-wider tracking-[0.06em] text-center"
              style={{
                fontFamily: "Squada One",
              }}
            >
              LIQUIDITY POOL
            </div>
          </div>
        </div>

        {/* Top Right */}
        <div
          className="absolute  right-4 sm:top-8 sm:right-8"
          style={{
            top: "-200px",
          }}
        >
          <div className="relative group">
            {/* Four Corners */}
            <div className="absolute -inset-[10px] pointer-events-none">
              <div className="absolute -top-2 -left-2 w-[35px] h-[40px] opacity-40 border-l-2 border-t-2 border-[#696767] rounded-tl-[20px]" />
              <div className="absolute -top-2 -right-2 w-[35px] h-[40px] opacity-40 border-r-2 border-t-2 border-[#696767] rounded-tr-[20px]" />
              <div className="absolute -bottom-2 -left-2 w-[35px] h-[40px] opacity-40 border-l-2 border-b-2 border-[#696767] rounded-bl-[20px]" />
              <div className="absolute -bottom-2 -right-2 w-[35px] h-[40px] opacity-40 border-r-2 border-b-2 border-[#696767] rounded-br-[20px]" />
            </div>
            <div
              className="text-white text-5xl sm:text-7xl font-normal tracking-[0.06em] text-center mb-2"
              style={{
                fontFamily: "Squada One",
              }}
            >
              20%
            </div>
            <div
              className="text-gray-500 text-2xl sm:text-3xl lg:text-4xl tracking-wider tracking-[0.06em] text-center"
              style={{
                fontFamily: "Squada One",
              }}
            >
              MARKETING
            </div>
          </div>
        </div>

        {/* Bottom Left */}
        <div
          className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 "
          style={{
            bottom: "-200px",
          }}
        >
          <div className="relative group">
            {/* Four Corners */}
            <div className="absolute -inset-[10px] pointer-events-none">
              <div className="absolute -top-2 -left-2 w-10 h-[40px] opacity-40 border-l-2 border-t-2 border-[#696767] rounded-tl-[20px]" />
              <div className="absolute -top-2 -right-2 w-10 h-[40px] opacity-40 border-r-2 border-t-2 border-[#696767] rounded-tr-[20px]" />
              <div className="absolute -bottom-2 -left-2 w-10 h-[40px] opacity-40 border-l-2 border-b-2 border-[#696767] rounded-bl-[20px]" />
              <div className="absolute -bottom-2 -right-2 w-10 h-[40px] opacity-40 border-r-2 border-b-2 border-[#696767] rounded-br-[20px]" />
            </div>
            <div
              className="text-white text-5xl sm:text-7xl font-normal tracking-[0.06em] text-center mb-2"
              style={{
                fontFamily: "Squada One",
              }}
            >
              20%
            </div>
            <div
              className="text-gray-500 text-2xl sm:text-3xl lg:text-4xl tracking-wider tracking-[0.06em] text-center"
              style={{
                fontFamily: "Squada One",
              }}
            >
              EMSP
            </div>
          </div>
        </div>

        {/* Bottom Right */}
        <div
          className="absolute  right-4 sm:bottom-8 sm:right-8"
          style={{
            bottom: "-200px",
          }}
        >
          <div className="relative group">
            {/* Four Corners */}
            <div className="absolute -inset-[10px] pointer-events-none">
              <div className="absolute -top-2 -left-2 w-10 h-[40px] opacity-40 border-l-2 border-t-2 border-[#696767] rounded-tl-[20px]" />
              <div className="absolute -top-2 -right-2 w-10 h-[40px] opacity-40 border-r-2 border-t-2 border-[#696767] rounded-tr-[20px]" />
              <div className="absolute -bottom-2 -left-2 w-10 h-[40px] opacity-40 border-l-2 border-b-2 border-[#696767] rounded-bl-[20px]" />
              <div className="absolute -bottom-2 -right-2 w-10 h-[40px] opacity-40 border-r-2 border-b-2 border-[#696767] rounded-br-[20px]" />
            </div>
            <div
              className="text-white text-5xl sm:text-7xl font-normal tracking-[0.06em] text-center mb-2"
              style={{
                fontFamily: "Squada One",
              }}
            >
              5%
            </div>
            <div
              className="text-gray-500 text-2xl sm:text-3xl lg:text-4xl tracking-wider tracking-[0.06em] text-center"
              style={{
                fontFamily: "Squada One",
              }}
            >
              TEAM
            </div>
          </div>
        </div>

        <div className="relative group">
          {/* Four Outer Corners */}
          <div className="absolute -inset-[10px] pointer-events-none">
            {/* Top Left Corner */}
            <div className="absolute -top-10 -left-5 w-24 h-24 opacity-40 border-l-2 border-t-2 border-[#696767] rounded-tl-[25px]" />
            {/* Top Right Corner */}
            <div className="absolute -top-10 -right-5 w-24 h-24 opacity-40 border-r-2 border-t-2 border-[#696767] rounded-tr-[25px]" />
            {/* Bottom Left Corner */}
            <div className="absolute -bottom-10 -left-5 w-24 h-24 opacity-40 border-l-2 border-b-2 border-[#696767] rounded-bl-[25px]" />
            {/* Bottom Right Corner */}
            <div className="absolute -bottom-10 -right-5 w-24 h-24 opacity-40 border-r-2 border-b-2 border-[#696767] rounded-br-[25px]" />
          </div>

          {/* Inner Content Box */}
          <div className="flex items-center justify-center relative">
            <div className="relative w-full max-w-[391px] h-[261px] rounded-[10px] bg-zinc-900/50 backdrop-blur-sm p-4 sm:p-8 border border-zinc-800 mx-auto">
              {/* Content inside the box */}
              <h1
                className="text-2xl sm:text-3xl md:text-4xl text-[#D4D4D4] mt-5 mb-14 tracking-wider text-center"
                style={{
                  fontFamily: "Akira Expanded",
                  fontSize: "33.27px",
                  fontWeight: "800",
                  letterSpacing: "0.05em",
                  lineHeight: "38.27px",
                  textAlign: "center",
                }}
              >
                TOKENOMICS
              </h1>
              <p
                className="text-zinc-400 text-sm sm:text-base md:text-lg text-center"
                style={{
                  fontFamily: "Squada One",
                  fontSize: "16.64px",
                  fontWeight: "400",
                  marginTop: "-10px",
                  lineHeight: "17.58px",
                  letterSpacing: "0.05em",
                  textAlign: "center",
                }}
              >
                Our tokenomics section is your go-to guide for the economics
                behind our project, offering investors and holders a sleek
                breakdown of our token's value and utility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
