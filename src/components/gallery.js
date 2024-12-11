import React, { useState, useRef, useEffect } from "react";

export default function SpaceGallery() {
  const images = [
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268271/G1_i6rku7.png",
      alt: "Image 1",
      className: "gallery__item--1",
      type: "image",
    },
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G2_dglhyg.png",
      alt: "Image 2",
      className: "gallery__item--2",
      type: "image",
    },
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G3_ycfrla.png",
      alt: "Image 3",
      className: "gallery__item--3",
      type: "image",
    },
    {
      src: "https://youtu.be/yktEpsRfuF0?si=8CsFQP8nOD7Hyaz6",
      alt: "Video 1",
      className: "gallery__item--4",
      type: "video",
    },
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268271/G5_xsx4oy.png",
      alt: "Image 5",
      className: "gallery__item--5",
      type: "image",
    },
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G6_vf39ie.png",
      alt: "Image 6",
      className: "gallery__item--6",
      type: "image",
    },
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G7_orcupx.png",
      alt: "Image 7",
      className: "gallery__item--7",
      type: "image",
    },
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268273/G8_tmwzdh.png",
      alt: "Image 8",
      className: "gallery__item--8",
      type: "image",
    },
  ];

  const VideoPlayer = ({ videoUrl, altText }) => {
    const [isMuted, setIsMuted] = useState(false);
    const iframeRef = useRef(null);

    const videoId = new URL(videoUrl).searchParams.get("v");

    const toggleMute = () => {
      if (iframeRef.current) {
        const iframe = iframeRef.current.contentWindow;
        iframe.postMessage(
          JSON.stringify({
            event: "command",
            func: isMuted ? "unMute" : "mute",
            args: [],
          }),
          "*"
        );
        setIsMuted(!isMuted);
      }
    };

    useEffect(() => {
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;
      }
    }, [videoId]);

    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <iframe
          ref={iframeRef}
          className="gallery__video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={altText}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
        ></iframe>
        <button
          onClick={toggleMute}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            background: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen mx-auto p-8">
      {/* Header */}
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
        {images.map((item, index) => (
          <figure className={`gallery__item ${item.className}`} key={index}>
            {item.type === "image" ? (
              <img src={item.src} className="gallery__img" alt={item.alt} />
            ) : (
              <VideoPlayer videoUrl={item.src} altText={item.alt} />
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
