import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const smoothScroll = () => {
  const scrollContainer = document.querySelector(".smooth-scroll");

  if (!scrollContainer) return;

  const updateHeight = () => {
    // Set body height to match the scrollable content
    document.body.style.height = `${scrollContainer.scrollHeight}px`;
  };

  // Add height update on ScrollTrigger initialization
  ScrollTrigger.addEventListener("refreshInit", updateHeight);

  // Smooth scrolling effect
  gsap.to(scrollContainer, {
    y: () => -(scrollContainer.scrollHeight - window.innerHeight), // Stop at the last section
    ease: "power1.in",
    stagger: .15,
    scrollTrigger: {
      trigger: scrollContainer,
      start: "top top",
     
      end: () => `${scrollContainer.scrollHeight - window.innerHeight}px`, // Stop at the last section
      scrub: 3, // Smooth scrolling effect
      invalidateOnRefresh: true, // Recalculate on resize
    },
  });

  ScrollTrigger.refresh();
};


















































// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const smoothScroll = () => {
//   const scrollContainer = document.querySelector(".smooth-scroll");
//   const body = document.body;

//   // Set up the body and scroll container
//   gsap.set(body, { overflow: "hidden", height: "100vh" });
//   gsap.set(scrollContainer, { y: 0 });

//   const updateHeight = () => {
//     // Set the body's height to match the scrollable container's height
//     body.style.height = `${scrollContainer.scrollHeight}px`;
//   };

//   ScrollTrigger.addEventListener("refreshInit", updateHeight);

//   // Smooth scrolling logic
//   gsap.to(scrollContainer, {
//     y: () => -(scrollContainer.scrollHeight - window.innerHeight), // Stop at the last section
//     ease: "none",
//     scrollTrigger: {
//       trigger: scrollContainer,
//       start: "top top",
//       end: () => `${scrollContainer.scrollHeight - window.innerHeight}px`, // End exactly at the last section
//       scrub: 1, // Smooth scrolling effect
//       invalidateOnRefresh: true,
//     },
//   });

//   ScrollTrigger.refresh();
// };
