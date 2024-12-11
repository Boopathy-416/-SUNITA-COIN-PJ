export default function HowToBuy() {
  return (
    <div
      className="min-h-screen text-white h-full" >
      
      <h1
        className="text-4xl font-bold text-center tracking-wider md:text-[103.73px] md:tracking-[5px] md:leading-[119.33px] text-gray-200 
             "
        style={{
          fontFamily: "Akira Expanded, sans-serif",
        }}
      >
        HOW TO BUY
        <hr className="mx-52 border border-t-0 opacity-20 mb-5  border-gray-400 " />
      </h1>
      <div className="p-12 flex items-center justify-center text-center">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="relative group">
              {/* Four Corners */}
              <div className="absolute -inset-[10px] pointer-events-none">
                {/* Top Left Corner */}
                <div className="absolute -top-1 -left-1 w-24 h-24 opacity-40 border-l-2 border-t-2 border-[#696767] rounded-tl-[44px]" />

                {/* Top Right Corner */}
                <div className="absolute -top-1 -right-1 w-24 h-24 opacity-40 border-r-2 border-t-2 border-[#696767] rounded-tr-[44px]" />

                {/* Bottom Left Corner */}
                <div className="absolute -bottom-1 -left-1 w-24 h-24 opacity-40 border-l-2 border-b-2 border-[#696767] rounded-bl-[44px]" />

                {/* Bottom Right Corner */}
                <div className="absolute -bottom-1 -right-1 w-24 h-24 opacity-40 border-r-2 border-b-2 border-[#696767] rounded-br-[44px]" />
              </div>

              {/* Your existing content */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-[#2E2E2E] opacity-40 rounded-[40px] border border-[#848484] backdrop-blur-lg transition" />
                <div className="relative opacity-90 backdrop-blur-lg p-6 sm:p-8 rounded-3xl min-h-[280px] flex flex-col">
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
                    Download SUI <br />
                    Compatible Wallet.
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
                    href="https://suiwallet.com/"
                    className="text-[#9FE870] hover:text-[#B1FF7C] transition-colors mt-4 break-words"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://suiwallet.com/
                  </a>
                </div>
              </div>
            </div>

            {/* here to below */}
            <div className="relative group">
              {/* Four Corners */}
              <div className="absolute -inset-[10px] pointer-events-none">
                {/* Top Left Corner */}
                <div className="absolute -top-1 -left-1 w-24 h-24 opacity-40 border-l-2 border-t-2 border-[#696767] rounded-tl-[44px]" />

                {/* Top Right Corner */}
                <div className="absolute -top-1 -right-1 w-24 h-24 opacity-40 border-r-2 border-t-2 border-[#696767] rounded-tr-[44px]" />

                {/* Bottom Left Corner */}
                <div className="absolute -bottom-1 -left-1 w-24 h-24 opacity-40 border-l-2 border-b-2 border-[#696767] rounded-bl-[44px]" />

                {/* Bottom Right Corner */}
                <div className="absolute -bottom-1 -right-1 w-24 h-24 opacity-40 border-r-2 border-b-2 border-[#696767] rounded-br-[44px]" />
              </div>

              {/* Your existing content */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-[#2E2E2E] opacity-40 rounded-[40px] border border-[#848484] transition" />
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
            </div>

            <div className="relative group">
              {/* Four Corners */}
              <div className="absolute -inset-[10px] pointer-events-none">
                {/* Top Left Corner */}
                <div className="absolute -top-1 -left-1 w-24 h-24 opacity-40 border-l-2 border-t-2 border-[#696767] rounded-tl-[44px]" />

                {/* Top Right Corner */}
                <div className="absolute -top-1 -right-1 w-24 h-24 opacity-40 border-r-2 border-t-2 border-[#696767] rounded-tr-[44px]" />

                {/* Bottom Left Corner */}
                <div className="absolute -bottom-1 -left-1 w-24 h-24 opacity-40 border-l-2 border-b-2 border-[#696767] rounded-bl-[44px]" />

                {/* Bottom Right Corner */}
                <div className="absolute -bottom-1 -right-1 w-24 h-24 opacity-40 border-r-2 border-b-2 border-[#696767] rounded-br-[44px]" />
              </div>

              {/* Your existing content */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-[#2E2E2E] opacity-40 rounded-[40px] border border-[#848484] backdrop-blur-lg transition" />
                <div className="relative opacity-90 p-6 sm:p-8 rounded-3xl min-h-[280px] backdrop-blur-lg flex z-40  flex-col">
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
                    href="https://app.cetus.zone/"
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
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-start z-45 items-center lg:px-20  ">
            <iframe
              src="https://app.uniswap.org/swap?outputCurrency=0x6982508145454ce325ddbe47a25d4ec3d2311933"
              title="Uniswap Embedded Interface"
              width="100%"
              height="400"
              className="border-none rounded-xl overflow-hidden"
            ></iframe>
          </div>

          <div className="flex justify-center z-20 items-center relative">
            <img
              src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732272870/B_Rft_hn6b9i.png"
              alt="Animated Decorative Image"
              className="pointer-events-none"
              style={{
                width: "350px",
                height: "auto",
              }}
            />
             <div className="absolute bottom-0 -z-[100] right-0 ">
        <img
          src="https://res.cloudinary.com/dprlidj0p/image/upload/v1732272873/B_center_qowsth.png"
          alt="Bottom-right section image"
          className="w-[600px] h-[700px] bg-contain shadow-lg bg-no-repeat bg-right "
        />
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}
