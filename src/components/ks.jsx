import React, { useEffect, useRef } from "react";
import "../MarqueeGallery.css";

export default function SpaceGallery() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const iframe = iframeRef.current;

        if (entry.isIntersecting) {
          // Add autoplay when the iframe is in view
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        } else {
          // Pause the video when out of view
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Observe relative to the viewport
      threshold: 0.5, // Trigger when 50% of the iframe is visible
    });

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  const rows = [
    {
      images: [
        "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G6_vf39ie.png",
        "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G7_orcupx.png",
        "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G3_ycfrla.png",
        "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268271/G1_i6rku7.png",
      ],
      animation: "animate-marquee-left",
    },
    {
      images: [
        "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268271/G1_i6rku7.png",
        "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G6_vf39ie.png",
        "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G3_ycfrla.png",
        "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G7_orcupx.png",
      ],
      animation: "animate-marquee-right",
    },
    {
      images: [
        "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268271/G1_i6rku7.png",
        "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G3_ycfrla.png",
        "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G7_orcupx.png",
        "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G6_vf39ie.png",
      ],
      animation: "animate-marquee-left",
    },
  ];

  return (
    <div className="min-h-full bg-black  relative overflow-hidden lg:px-20">
      <div
        className="absolute inset-0  z-10"
        style={{
          background: `
            linear-gradient(to left, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.2) 15%, rgba(0, 0, 0, 0) 20%), 
            linear-gradient(to right, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.2) 15%, rgba(0, 0, 0, 0) 20%)
          `,
          pointerEvents: "none",
        }}
      ></div>
      <div className="p-8">
        <h1
          className="font-black mb-3 text-4xl sm:text-2xl md:text-6xl lg:text-7xl xl:text-8xl text-white border-b border-white xl:w-[35%] md:w-[45%] mx-start"
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
          className="font-black text-center text-white/50 mb-2"
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

      <div className="relative w-full">
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex overflow-hidden mb-[24px]   opacity-60"
          >
            <div className={`${row.animation} flex gap-4  whitespace-nowrap`}>
              {row.images.map((image, imageIndex) => (
                <div
                  key={`row${rowIndex}-${imageIndex}`}
                  className="w-[400px] h-[200px] flex-shrink-0"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${imageIndex + 1}`}
                    className="w-full h-full rounded-lg object-cover grayscale"
                  />
                </div>
              ))}
            </div>

            <div
              className={`${row.animation} flex gap-4   whitespace-nowrap`}
              aria-hidden="true"
            >
              {row.images.map((image, imageIndex) => (
                <div
                  key={`row${rowIndex}-duplicate-${imageIndex}`}
                  className="w-[350px] h-[200px]   flex-shrink-0"
                >
                  <img
                    src={image}
                    alt={`Gallery image duplicate ${imageIndex + 1}`}
                    className="w-full rounded-lg  h-full object-contain grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] rounded-[41.15px] aspect-video"
          style={{
            border: "1.87px solid  #FFFFFF",
            boxShadow: "23px 40px 159px 0px #000000",
          }}
        >
          <iframe
            ref={iframeRef}
            className="w-full h-full rounded-[41.15px]"
            src="https://www.youtube.com/embed/mAKI6fhj9fA?enablejsapi=1&autoplay"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
// import '../MarqueeGallery.css'

// export default function SpaceGallery() {
//   const rows = [
//     { images: [4, 2, 3, 1,], animation: 'animate-marquee-left' },
//     { images: [1, 4, 3, 2,], animation: 'animate-marquee-right' },
//     { images: [1, 3, 2, 4,], animation: 'animate-marquee-left' },
//   ];

//   return (
//     <div className="min-h-full bg-black  relative overflow-hidden lg:px-20">

//       <div
//         className="absolute inset-0  z-10"
//         style={{
//           background: `
//             linear-gradient(to left, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.2) 15%, rgba(0, 0, 0, 0) 20%),
//             linear-gradient(to right, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.2) 15%, rgba(0, 0, 0, 0) 20%)
//           `,
//           pointerEvents: "none",
//         }}
//       ></div>
//       <div className="p-8">
//       <h1
//           className="font-black mb-3 text-4xl sm:text-2xl md:text-6xl lg:text-7xl xl:text-8xl text-white border-b border-white xl:w-[35%] md:w-[45%] mx-start"
//           style={{
//             fontFamily: "'Akira Expanded', sans-serif",
//             textAlign: "start",
//             textUnderlinePosition: "from-font",
//             textDecorationSkipInk: "none",
//             color: "rgba(255, 255, 255, 1)",
//           }}
//         >
//           GALLERY
//         </h1>
//         <h2
//           className="font-black text-center text-white/50 mb-2"
//           style={{
//             fontFamily: "'Object Sans', sans-serif",
//             fontSize: "clamp(24px, 4vw, 36.16px)",
//             textAlign: "start",
//             textUnderlinePosition: "from-font",
//             textDecorationSkipInk: "none",
//           }}
//         >
//           $SUNITA
//         </h2>
//       </div>

//       <div className="relative w-full">
//         {rows.map((row, rowIndex) => (
//           <div key={`row-${rowIndex}`} className="flex overflow-hidden mb-[24px] opacity-60">

//             <div className={`${row.animation} flex  whitespace-nowrap`}>
//               {row.images.map((i) => (
//                 <div
//                   key={`row${rowIndex}-${i}`}
//                   className="w-[400px] h-[200px] flex-shrink-0"
//                 >
//                   <img
//                     src={`https://res.cloudinary.com/dprlidj0p/image/upload/v1734505877/Group_1171275593_kztn6d.png`}
//                     alt={`Gallery image ${i}`}
//                     className="w-full h-full object-cover grayscale"
//                   />
//                 </div>
//               ))}
//             </div>

//             <div
//               className={`${row.animation} flex  whitespace-nowrap`}
//               aria-hidden="true"
//             >
//               {row.images.map((i) => (
//                 <div
//                   key={`row${rowIndex}-duplicate-${i}`}
//                   className="w-[350px] h-[200px] flex-shrink-0"
//                 >
//                   <img
//                     src={`https://res.cloudinary.com/dprlidj0p/image/upload/v1734505877/Group_1171275593_kztn6d.png`}
//                     alt={`Gallery image ${i}`}
//                     className="w-full h-full object-cover grayscale"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] rounded-[41.15px] aspect-video"
//         style={{
//             border:"1.87px solid  #FFFFFF",
//             boxShadow: "23px 40px 159px 0px #000000",

//         }}>
//           <iframe
//             src="https://www.youtube.com/embed/mAKI6fhj9fA?si=_CmF3VSjTFScwOLX"
//             className="w-full h-full rounded-[41.15px]"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         </div>
//       </div>
//     </div>
//   );
// }