export default function Tokenomics() {
  return (
    <div className="min-h-screen relative text-white flex items-center justify-center py-8 px-4 ">
      <div
        className="absolute inset-0  z-10"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%), 
            linear-gradient(to top, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%),  `,
          pointerEvents: "none",
        }}
      >
        <img
          src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732535851/tokenbg1_yw0nki.png"
          alt="Background Layer 1"
          className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10"
        />
      </div>

      <img
        src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732535852/tokenbg2_ghegib.png"
        alt="Background Layer 2"
        className="absolute opacity-50 sm:w-[20%] md:w-[25%] object-cover -z-5"
        style={{
          height: "auto",
        }}
      />

      <div className="relative w-[100%] lg:py-10 py-20 md:py-8 px-20 md-px-10 flex items-center justify-center">
        <div
          className="absolute  left-4 sm:top-8 sm:left-8"
          style={{
            top: "-100px",
          }}
        >
          <div className="relative px-2 lg:px-10 group">
            {/* Four Corners */}
            <div className="absolute -inset-[10px] pointer-events-none">
              <div className="absolute -top-2 -left-2 w-[35px] h-[52px] lg:h-[100px] opacity-40 border-l-[0.64px] border-t-[0.64px] border-[#696767] rounded-tl-[20px] " />
              <div className="absolute -top-2 -right-2 w-[35px] h-[52px] lg:h-[100px] opacity-40 border-r-[0.64px] border-t-[0.64px] border-[#696767] rounded-tr-[20px] " />
              <div className="absolute -bottom-2 -left-2 w-[35px] h-[54px] lg:h-[90px] opacity-40 border-l-[0.64px] border-b-[0.64px] border-[#696767] rounded-bl-[20px] " />
              <div className="absolute -bottom-2 -right-2 w-[35px] h-[54px] lg:h-[90px] opacity-40 border-r-[0.64px] border-b-[0.64px] border-[#696767] rounded-br-[20px] " />
            </div>
            <div
              className="text-white   text-[29px] lg:text-[64px]  text-center"
              style={{
                fontFamily: "Squada One",
              }}
            >
              55%
            </div>
            <div
              className="text-gray-500 text-[18.35px]  lg:text-[40px] tracking-wider tracking-[0.06em] text-center"
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
            top: "-100px",
          }}
        >
          <div className="relative px-2 lg:px-10 group">
            {/* Four Corners */}
            <div className="absolute -inset-[10px] pointer-events-none">
              <div className="absolute -top-2 -left-2 w-[35px] h-[52px] lg:h-[100px] opacity-40 border-l-[0.64px] border-t-[0.64px] border-[#696767] rounded-tl-[20px] " />
              <div className="absolute -top-2 -right-2 w-[35px] h-[52px] lg:h-[100px] opacity-40 border-r-[0.64px] border-t-[0.64px] border-[#696767] rounded-tr-[20px] " />
              <div className="absolute -bottom-2 -left-2 w-[35px] h-[60px] lg:h-[97px] opacity-40 border-l-[0.64px] border-b-[0.64px] border-[#696767] rounded-bl-[20px] " />
              <div className="absolute -bottom-2 -right-2 w-[35px] h-[60px] lg:h-[97px] opacity-40 border-r-[0.64px] border-b-[0.64px] border-[#696767] rounded-br-[20px] " />
            </div>
            <div
              className="text-white  text-[29px] lg:text-[64px] font-normal tracking-[0.06em] text-center mb-2"
              style={{
                fontFamily: "Squada One",
              }}
            >
              20%
            </div>
            <div
              className="text-gray-500 text-[18.35px]  lg:text-[40px] tracking-wider tracking-[0.06em] text-center"
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
            bottom: "-100px",
            left: "60px",
          }}
        >
          <div className="relative group   lg:px-20">
            {/* Four Corners */}
            <div className="absolute -inset-[10px] pointer-events-none">
              <div className="absolute -top-2 -left-10 w-10  h-[100px] opacity-40 border-l-[0.64px] border-t-[0.64px] border-[#696767] rounded-tl-[20px] " />
              <div className="absolute -top-2 -right-10 w-10  h-[100px]  opacity-40 border-r-[0.64px] border-t-[0.64px] border-[#696767] rounded-tr-[20px] " />
              <div className="absolute -bottom-2 -left-10 w-10  h-[100px]  opacity-40 border-l-[0.64px] border-b-[0.64px] border-[#696767] rounded-bl-[20px] " />
              <div className="absolute -bottom-2 -right-10 w-10  h-[100px] opacity-40 border-r-[0.64px] border-b-[0.64px] border-[#696767] rounded-br-[20px] " />
            </div>
            <div
              className="text-white  text-[29px] lg:text-[64px] text-center mb-2"
              style={{
                fontFamily: "Squada One",
              }}
            >
              20%
            </div>
            <div
              className="text-gray-500 text-[18.35px]  lg:text-[40px] tracking-wider tracking-[0.06em] text-center"
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
          className="absolute sm:bottom-40 sm:right-0"
          style={{
            bottom: "-100px",
            right: "60px",
          }}
        >
          <div className="relative group lg:px-14">
            {/* Four Corners */}
            <div className="absolute -inset-[10px] pointer-events-none">
              <div className="absolute -top-2 -left-10 w-10  h-[100px] opacity-40 border-l-[0.64px] border-t-[0.64px] border-[#696767] rounded-tl-[20px] " />
              <div className="absolute -top-2 -right-10 w-10  h-[100px]  opacity-40 border-r-[0.64px] border-t-[0.64px] border-[#696767] rounded-tr-[20px] " />
              <div className="absolute -bottom-2 -left-10 w-10  h-[100px]  opacity-40 border-l-[0.64px] border-b-[0.64px] border-[#696767] rounded-bl-[20px] " />
              <div className="absolute -bottom-2 -right-10 w-10  h-[100px] opacity-40 border-r-[0.64px] border-b-[0.64px] border-[#696767] rounded-br-[20px] " />
            </div>

            <div
              className="text-white text-[29px] lg:text-[64px] tracking-[0.06em] text-center p-1 "
              style={{
                fontFamily: "Squada One",
              }}
            >
              5%
            </div>
            <div
              className="text-gray-500 text-[18.35px]  lg:text-[40px] tracking-wider tracking-[0.06em] text-center"
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
            <div className="absolute -top-10 -left-2 w-24 h-24 opacity-80 border-l-[0.64px] border-t-[0.64px] border-[#696767] rounded-tl-[34px]" />
            {/* Top Right Corner */}
            <div className="absolute -top-10 -right-2 w-24 h-24 opacity-80 border-r-[0.64px] border-t-[0.64px] border-[#696767] rounded-tr-[34px]" />
            {/* Bottom Left Corner */}
            <div className="absolute -bottom-10 -left-2 w-24 h-24 opacity-80 border-l-[0.64px] border-b-[0.64px] border-[#696767] rounded-bl-[34px]" />
            {/* Bottom Right Corner */}
            <div className="absolute -bottom-10 -right-2 w-24 h-24 opacity-80 border-r-[0.64px] border-b-[0.64px] border-[#696767] rounded-br-[34px]" />
          </div>

          {/* Inner Content Box */}
          <div className="flex items-center justify-center relative">
            <div className="relative w-full max-w-[391px] h-[261px] rounded-[10px] bg-zinc-900/50 backdrop-blur-sm p-4   mx-auto">
              {/* Content inside the box */}
              <h1
                className="text-[26.31px] lg:text-[33.27px] py-10 text-[#D4D4D4]  text-center"
                style={{
                  fontFamily: "Akira Expanded",
                  fontWeight: "800",
                  letterSpacing: "0.05em",
                  lineHeight: "38.27px",
                  textAlign: "center",
                }}
              >
                TOKENOMICS
              </h1>
              <p
                className="text-zinc-400 text-[16px] lg:text-[16.64px] lg:px-4 px-1 text-center"
                style={{
                  fontFamily: "Squada One",
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
