gsap.to(".logo", {
  y: -8,
  repeat: -1,
  yoyo: true,
  duration: 1,
  ease: "power1.inOut",
});

gsap.from(".song-title", {
  duration: 2,
  opacity: 0,
  scale: 0.5,
  ease: "back.out(1.7)",
  stagger: 0.1,
});

gsap.utils.toArray(".icons svg").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    gsap.to(icon, { scale: 1.2, rotation: 15, duration: 0.4 });
  });
  icon.addEventListener("mouseleave", () => {
    gsap.to(icon, { scale: 1, rotation: 0, duration: 0.4 });
  });
});

gsap.from(".navbar-nav .nav-item", {
  duration: 0.5,
  x: -100,
  opacity: 0,
  stagger: 0.1,
  ease: "power2.out",
});

gsap.from(".logo path", {
  duration: 2,
  strokeDashoffset: 1000,
  strokeDasharray: 1000,
  ease: "power2.inOut",
});

// SMOOTH SCROLL
const scrollSections = document.querySelectorAll(".scroll-section");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  scrollSections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (
      scrollPosition >= sectionTop - 600 &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});

// JavaScript to toggle the navbar and icon
const toggleButton = document.getElementById("navbarToggleBtn");
const navbarCollapse = document.getElementById("navbarNav");

// This handles both the hamburger icon and menu collapse functionality
toggleButton.addEventListener("click", function () {
  // Toggle the collapsed class to transform the hamburger into an X
  toggleButton.classList.toggle("collapsed");

  // Toggle the collapse of the navbar
  navbarCollapse.classList.toggle("collapse");
  navbarCollapse.classList.toggle("show"); // Show the menu when expanded
});

// GSAP Animation for gallery items
gsap.from(".image", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  stagger: 0.1,
  ease: "power4.out",
  delay: 0.5,
});

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

document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".profile-pic", {
    opacity: 0,
    scale: 0.5,
    duration: 1.5,
    ease: "power4.out",
  });

  gsap.from(".intro-text", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    delay: 0.5,
    ease: "power4.out",
  });
});
