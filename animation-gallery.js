 // // GSAP Animation for gallery items
  // gsap.from(".image", {
  //   opacity: 0,
  //   scale: 0.8,
  //   duration: 1,
  //   stagger: 0.1,
  //   ease: "power4.out",
  //   delay: 0.5,
  // });
  
  // Lightbox show and hide animation
  const images = document.querySelectorAll(".image");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".close-btn");
  
  images.forEach((image) => {
    image.addEventListener("click", () => {
      const imgSrc = image.querySelector("img").src;
  
      // GSAP animations for lightbox
      gsap.to(lightbox, {
        display: "flex",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
  
      gsap.fromTo(
        lightboxImg,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        }
      );
  
      lightboxImg.src = imgSrc;
    });
  });
  
  // Close the lightbox
  closeBtn.addEventListener("click", () => {
    gsap.to(lightbox, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        lightbox.style.display = "none";
      },
    });
    gsap.to(lightboxImg, {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "back.in(1.7)",
    });
  });