export default function SunitaCard() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute bottom-0 left-0 w-full h-[65vh] opacity-70 bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dprlidj0p/image/upload/v1732540481/last_nhnveq.png')",
          maskImage: "linear-gradient(to top, rgba(0,0,1,1), rgba(0,0,1,0))",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        {/* Description */}
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

        {/* Card Section */}
        <div
          className="relative w-full max-w-2xl rounded-xl flex flex-col items-center p-8"
          style={{
            background: "rgba(46, 46, 46, 0.4)",
            border: "0.14px solid #848484",
            backdropFilter: "blur(43.2px)",
          }}
        >
          {/* Blur Effect */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />

          {/* Buttons */}
          <div className="relative flex flex-wrap items-center justify-center gap-4">
            {/* Home Button */}
            <button className="bg-white hover:bg-white/90 text-black rounded-xl w-12 h-12 flex items-center justify-center">
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
                <path d="M22 2 2 10l9 3 3 9 3-6 3 1 2-15z" fill="currentColor" />
              </svg>
            </button>

            {/* Twitter/X Button */}
            <button className="bg-white hover:bg-white/90 text-black rounded-xl w-12 h-12 flex items-center justify-center">
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

            {/* Buy Button */}
            <button
  className="
    hover:bg-white/90 
    rounded-xl 
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
