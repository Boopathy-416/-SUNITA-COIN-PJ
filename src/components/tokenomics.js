export default function Tokenomics() {
  return (
    <div className="min-h-screen relative text-white flex items-center justify-center p-6">
      {/* Background Layer 1 */}
      <img
        src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732535851/tokenbg1_yw0nki.png"
        alt="Background Layer 1"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Background Layer 2 */}
      <img
        src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732535852/tokenbg2_ghegib.png"
        alt="Background Layer 2"
        className="absolute opacity-50 sm:w-[20%] md:w-[20%] object-cover -z-5"
        style={{
          // width: "50% ", 
          height: "auto",
        }}
      />

      <div className="relative w-full h-full flex items-center justify-center">
        {/* Top Left */}
        <div
          className="absolute  left-4 sm:top-8 sm:left-8"
          style={{
            top: "-300px",
          }}
        >
          <div
            className="text-white  text-5xl sm:text-7xl   font-normal   tracking-[0.06em]  text-center  mb-2"
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

        {/* Top Right */}
        <div
          className="absolute  right-4 sm:top-8 sm:right-8"
          style={{
            top: "-300px",
          }}
        >
          <div
            className="text-white  text-5xl sm:text-7xl   font-normal   tracking-[0.06em]  text-center  mb-2"
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

        {/* Bottom Left */}
        <div
          className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 "
          style={{
            bottom: "-250px",
          }}
        >
          <div
            className="text-white  text-5xl sm:text-7xl   font-normal   tracking-[0.06em]  text-center  mb-2"
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

        {/* Bottom Right */}
        <div
          className="absolute  right-4 sm:bottom-8 sm:right-8"
          style={{
            bottom: "-250px",
          }}
        >
          <div
            className="text-white  text-5xl sm:text-7xl   font-normal   tracking-[0.06em]  text-center  mb-2"
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

        {/* Center */}
        <div className="absolute bg-zinc-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-zinc-800 max-w-lg mx-auto space-y-4">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-100 mb-4 tracking-wider text-center"
            style={{
              fontFamily: "Akira Expanded",
              fontSize: "33.27px",
              fontWeight: "800",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}
          >
            TOKENOMICS
          </h1>
          <p
            className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed text-center"
            style={{
              fontFamily: "Squada One",
              fontSize: "16.64px",
              fontWeight: "400",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}
          >
            Our tokenomics section is your go-to guide for the economics behind
            our project, offering investors and holders a sleek breakdown of our
            token's value and utility.
          </p>
        </div>
      </div>
    </div>
  );
}
