import React from "react";

export default function SunitaCard() {
  return (
    <div
      className="relative inset-0  z-0 bg-cover"
      style={{ overflow: "hidden" }}
    >
      <iframe
        src="https://my.spline.design/earthwallpaper-4bccde5736f7f903aee4be5c79cda0aa/"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      ></iframe>

      <div
        className="absolute inset-0  z-10"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0) 50%), 
            linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0) 50%), 
            linear-gradient(to left, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0) 50%), 
            linear-gradient(to right, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0) 50%)
          `,
          pointerEvents: "none",
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        <p
          className="text-center text-zinc-400 max-w-3xl mb-12"
          style={{
            fontFamily: "'Squada One', sans-serif",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "1.2",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          SUNITA ($SUNITA) is a token with no roadmap, no intrinsic value, and
          no expectation of financial return. This token is solely a tribute to
          the renowned NASA astronaut Sunita Williams and aims to contribute to
          Elon Musk's space program.
        </p>

        <div
          className="relative w-full -bottom-20 max-w-4xl p-10 lg:py-20 md:py-20 py-14 rounded-lg opacity-100   flex flex-col items-center   "
          style={{
            border:"2.14px solid #848484",
            // padding: "100px",
          }}
        >
          <div className="absolute  inset-0 bg-[#2e2e2e66] backdrop-blur-lg border-1 border-[#848484] rounded-xl  pointer-events-none" />

          <div className="relative  flex flex-wrap items-center justify-center gap-4">
            <button className="bg-white hover:bg-white/90 text-black rounded-[5.79px] w-12 h-12 flex items-center justify-center">
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

            <button className="bg-white hover:bg-white/90 text-black rounded-[5.79px] w-12 h-12 flex items-center justify-center">
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

            <button
              className="
    hover:bg-white/90 
    rounded-[5.79px] 
    px-8 
    h-12 
    text-center 
    bg-white 
    text-black 
    font-[Object Sans] 
    font-black 
    text-lg 
   
  
  "
            >
              BUY $SUNITA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
