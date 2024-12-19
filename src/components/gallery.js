// import React, { useEffect, useRef } from "react";


export default function Test() {
 
  const rows = [
    { images: [1, 2, 3, 4,], animation: 'animate-marquee-left' },
    { images: [1, 2, 3, 4,], animation: 'animate-marquee-right' },
    { images: [1, 2, 3, 4,], animation: 'animate-marquee-left' },
  ];



  // const VideoPlayer = ({ videoUrl, altText }) => {
    // const iframeRef = useRef(null);

    // useEffect(() => {
    //   const iframe = iframeRef.current;


    //   iframe.src = `${videoUrl}?autoplay=1&controls=0&rel=0&showinfo=0&modestbranding=1&disablekb=1&loop=1&playlist=${videoUrl.split('/').pop()}`;

    //   const handleScroll = () => {
    //     const rect = iframe.getBoundingClientRect();
    //     const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    //     if (isVisible) {
    //       iframe.contentWindow.postMessage(
    //         '{"event":"command","func":"playVideo","args":""}',
    //         "*"
    //       );
    //     } else {
    
    //       iframe.contentWindow.postMessage(
    //         '{"event":"command","func":"pauseVideo","args":""}',
    //         "*"
    //       );
    //     }
    //   };

    //   window.addEventListener("scroll", handleScroll);

    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, [videoUrl]);

  //   return (
  //     <div
  //       className="video-container"
  //       style={{
  //         position: "relative",
  //         width: "100%",
  //         height: "100%",
  //         borderRadius: "25px",
  //         overflow: "hidden",
  //       }}
  //     >
  //       <iframe
  //         ref={iframeRef}
  //         title={altText}
  //         allow="autoplay"
  //         allowFullScreen
  //         style={{
  //           width: "100%",
  //           height: "100%",
  //           borderRadius: "25px",
  //         }}
  //       ></iframe>
  //     </div>
  //   );
  // };

  return (
    <div className="relative min-h-screen mx-auto p-8 lg:px-20">

      <div
        className="absolute inset-0  z-10"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0) 20%), 
            linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0) 20%), 
             linear-gradient(to left, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.2) 15%, rgba(0, 0, 0, 0) 20%), 
            linear-gradient(to right, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.2) 15%, rgba(0, 0, 0, 0) 20%)`,
          pointerEvents: "none",
        }}
      ></div>
      <div className="xl:-mb-[10%] md:-mb-[4%]">
        <h1
          className="font-bold mb-3 text-4xl sm:text-2xl md:text-6xl lg:text-7xl xl:text-8xl text-white border-b border-white xl:w-[35%] md:w-[45%] mx-start"
          style={{
            fontFamily: "'Akira Expanded', sans-serif",
            textAlign: "start",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          GALLERY
        </h1>
        <h2
          className="font-extrabold text-center text-white/50 mb-2"
          style={{
            fontFamily: "'Object Sans', sans-serif",
            fontSize: "clamp(24px, 4vw, 36.16px)",
            textAlign: "start",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          $SUNITA
        </h2>
      </div>
      {/* Gallery */}
      <div className="gallery">
      <div className="relative w-full">
        {rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex overflow-hidden mb-[24px] opacity-60">
            {/* Original Row */}
            <div className={`${row.animation} flex  whitespace-nowrap`}>
              {row.images.map((i) => (
                <div
                  key={`row${rowIndex}-${i}`}
                  className="w-[400px] h-[200px] flex-shrink-0"
                >
                  <img
                    src={`https://res.cloudinary.com/dprlidj0p/image/upload/v1734505877/Group_1171275593_kztn6d.png`}
                    alt={`Gallery image ${i}`}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate Row for Seamless Scrolling */}
            <div
              className={`${row.animation} flex  whitespace-nowrap`}
              aria-hidden="true"
            >
              {row.images.map((i) => (
                <div
                  key={`row${rowIndex}-duplicate-${i}`}
                  className="w-[350px] h-[200px] flex-shrink-0"
                >
                  <img
                    src={`https://res.cloudinary.com/dprlidj0p/image/upload/v1734505877/Group_1171275593_kztn6d.png`}
                    alt={`Gallery image ${i}`}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Centered Video/iframe */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] rounded-[41.15px] aspect-video"
        style={{
            border:"1.87px solid  #FFFFFF",
            boxShadow: "23px 40px 159px 0px #000000",

        }}>
          <iframe
            src="https://www.youtube.com/embed/mAKI6fhj9fA?si=_CmF3VSjTFScwOLX"
            className="w-full h-full rounded-[41.15px]"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      </div>
      
    </div>
  );
}
