import React from "react";

export default function SpaceGallery() {
  const images = [
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268271/G1_i6rku7.png",
      alt: "Image 1",
      className: "gallery__item--1",
    },
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G2_dglhyg.png",
      alt: "Image 2",
      className: "gallery__item--2",
    },
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G3_ycfrla.png",
      alt: "Image 3",
      className: "gallery__item--3",
    },
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268273/G4_nrzv1x.png",
      alt: "Image 4",
      className: "gallery__item--4",
    },
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268271/G5_xsx4oy.png",
      alt: "Image 5",
      className: "gallery__item--5",
    },
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G6_vf39ie.png",
      alt: "Image 6",
      className: "gallery__item--6",
    },
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G7_orcupx.png",
      alt: "Image 7",
      className: "gallery__item--7",
    },
    {
      src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268273/G8_tmwzdh.png",
      alt: "Image 8",
      className: "gallery__item--8  ",
    },
  ];

  return (
    <div className="relative min-h-screen mx-auto p-8">
      <div className="   xl:-mb-[10%] md:-mb-[4%] ">
      <h1
  className="font-bold mb-3 text-4xl sm:text-2xl  md:text-6xl lg:text-7xl xl:text-8xl   text-white border-b border-white xl:w-[35%] md:w-[45%]  mx-start"
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
    fontSize: "clamp(24px, 4vw, 36.16px)", // Responsive font-size
    textAlign: "start", // Center aligned
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
  }}
>
  $SUNITA
</h2>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <figure className={`gallery__item ${image.className}`} key={index}>
            <img src={image.src} className="gallery__img" alt={image.alt} />
          </figure>
        ))}
      </div>
    </div>
  );
}
