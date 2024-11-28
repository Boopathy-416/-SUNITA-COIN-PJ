import React from 'react'

function Photo() {
    const images = [
        { src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268271/G1_i6rku7.png", alt: "Image 1", className: "gallery__item--1" },
        { src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G2_dglhyg.png", alt: "Image 2", className: "gallery__item--2" },
        { src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G3_ycfrla.png", alt: "Image 3", className: "gallery__item--3" },
        { src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268273/G4_nrzv1x.png", alt: "Image 4", className: "gallery__item--4" },
        { src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268271/G5_xsx4oy.png", alt: "Image 5", className: "gallery__item--5" },
        { src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G6_vf39ie.png", alt: "Image 6", className: "gallery__item--6" },
        { src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268272/G7_orcupx.png", alt: "Image 7", className: "gallery__item--7" },
        { src: "https://res.cloudinary.com/dprlidj0p/image/upload/v1732268273/G8_tmwzdh.png", alt: "Image 8", className: "gallery__item--8" },
      
      ];
    
      return (
        <div className="gallery">
          {images.map((image, index) => (
            <figure className={`gallery__item ${image.className}`} key={index}>
              <img src={image.src} className="gallery__img" alt={image.alt} />
            </figure>
          ))}
        </div>
      );
    };
export default Photo
