

export default function HowToBuy() {


  return (
    <div
      className="min-h-screen text-white  md:p-8 bg-contain bg-no-repeat bg-right h-full"
      style={{
        backgroundImage:
          " url('https://res.cloudinary.com/dprlidj0p/image/upload/v1732272873/B_center_qowsth.png')",
      }}
    >
      <h1
        className="text-4xl md:text-6xl font-bold text-center mb-12 tracking-wider border-b border-gray-600"
        style={{
          fontFamily: "Akira Expanded, sans-serif",
          letterSpacing: "0.05em",
          lineHeight: "4.4rem",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          color: "rgba(212, 212, 212, 1)",
        }}
      >
        HOW TO BUY
      </h1>
      <div className="p-6 flex items-center justify-center text-center">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Wallet Card */}
            <div className="relative group">
              {/* Border design */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-600/20 to-gray-900/20 opactiy-30 rounded-3xl" />
              <div className="absolute inset-0 border border-gray-700 rounded-3xl" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-[24px]  opacity-30 group-hover:opacity-50 transition" />

              {/* Content */}
              <div className="relative opacity-90 p-6 sm:p-8 rounded-3xl min-h-[280px] flex flex-col">
                <h2
                  className="text-xl sm:text-2xl font-semibold mb-6 tracking-wider text-white"
                  style={{
                    fontFamily: "Akira Expanded, sans-serif",
                    letterSpacing: "0.05em",
                    lineHeight: "3.4rem",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "rgba(212, 212, 212, 1)",
                  }}
                >
                  WALLET
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-auto"
                 style={{
                  fontFamily: "Squada One",
                  fontSize: "20px",
                  fontWeight: "400",
                  letterSpacing: "0.05em",
                  lineHeight: "21.24px",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#767676",
                }}>
                  Download SUI <br />
                  Compatible Wallet.
                </p>
                <a
                  href="https://suiwallet.com/"
                  style={{
                    fontFamily: "TT Firs Neue Trl",
                    fontSize: "1.2em",
                    fontWeight: "400",
                    letterSpacing: "0.05em",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                   
                  }}
                  className="text-[#9FE870] hover:text-[#B1FF7C] transition-colors mt-4 break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://suiwallet.com/
                </a>
              </div>
            </div>

            {/* Exchange Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-600/20 to-gray-900/20 opacity-30 rounded-3xl" />
              <div className="absolute inset-0 border border-gray-700 rounded-3xl" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-[24px] blur opacity-20 group-hover:opacity-50 transition" />

              <div className="relative opacity-90 p-6 sm:p-8 rounded-3xl min-h-[280px] flex flex-col">
                <h2
                  className="text-xl sm:text-2xl font-semibold mb-6 tracking-wider text-white"
                  style={{
                    fontFamily: "Akira Expanded, sans-serif",
                    letterSpacing: "0.05em",
                    lineHeight: "3.4rem",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "rgba(212, 212, 212, 1)",
                  }}
                >
                  EXCHANGE
                </h2>
                <p className="text-sm sm:text-base text-gray-300 mb-auto"
                 style={{
                  fontFamily: "Squada One",
                  fontSize: "20px",
                  fontWeight: "400",
                  letterSpacing: "0.05em",
                  lineHeight: "21.24px",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  color: "#767676",
                }}>
                  Use SimpleSwap to Exchange SOL or ETH for SUI. Send SUI to
                  Your Wallet Address.
                </p>
                <a
                 style={{
                  fontFamily: "TT Firs Neue Trl",
                  fontSize: "1.2em",
                  fontWeight: "400",
                  letterSpacing: "0.05em",
                  textAlign: "center",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                 
                }}
                  href="https://simpleswap.io/"
                  className="text-[#9FE870] hover:text-[#B1FF7C] transition-colors mt-4 break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://simpleswap.io/
                </a>
              </div>
            </div>

            {/* Swap Card */}
            <div className="relative group ">
              <div className="absolute inset-0 bg-black opacity-20 rounded-3xl" />
              <div className="absolute inset-0 border border-gray-700 rounded-3xl" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-[24px] blur opacity-30 group-hover:opacity-50 transition" />

              <div className="relative opacity-90 p-6 sm:p-8 rounded-3xl min-h-[280px] flex flex-col">
                <h2
                  className="text-xl sm:text-2xl font-semibold mb-6 tracking-wider text-white"
                  style={{
                    fontFamily: "Akira Expanded, sans-serif",
                    letterSpacing: "0.05em",
                    lineHeight: "3.4rem",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "rgba(212, 212, 212, 1)",
                  }}
                >
                  SWAP
                </h2>
                <p
                  className="text-sm sm:text-base text-gray-300 mb-auto"
                  style={{
                    fontFamily: "Squada One",
                    fontSize: "20px",
                    fontWeight: "400",
                    letterSpacing: "0.05em",
                    lineHeight: "21.24px",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    color: "#767676",
                  }}
                >
                  Swap SUI on Cetus DEX with $SUNITHA.
                </p>
                <a
                 style={{
                  fontFamily: "TT Firs Neue Trl",
                  fontSize: "1.2em",
                  fontWeight: "400",
                  letterSpacing: "0.05em",
                  textAlign: "center",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                 
                }}
                  href="https://app.cetus.zone/swap/"
                  className="text-[#9FE870] hover:text-[#B1FF7C] transition-colors mt-4 break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://app.cetus.zone/swap/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swap Interface */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Embedded Content - Uniswap */}
          <div className="flex justify-start items-center">
            <iframe
            
              src="https://app.uniswap.org/"
              title="Uniswap Embedded Interface"
              width="100%"
              height="400"
              className="border-none rounded-xl overflow-hidden"
             
            ></iframe>
          </div>

          {/* Decorative Image */}
          <div className="flex justify-center items-center relative">
            <img
              src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732272870/B_Rft_hn6b9i.png"
              alt="Animated Decorative Image"
              className="pointer-events-none"
              style={{
                width: "350px",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
