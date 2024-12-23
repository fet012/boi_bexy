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

gsap.from(".logo", {
  duration: 2,
  strokeDashoffset: 1000,
  strokeDasharray: 1000,
  ease: "power2.inOut",
});

// GSAP for Profile Section
gsap.from(".profile-container", {
  opacity: 0,
  scale: 0.5,
  duration: 1.5,
  delay: 1.5,
  ease: "power3.out",
});

gsap.from(".bio", {
  opacity: 0,
  y: 30,
  duration: 1.5,
  delay: 2,
  ease: "power3.out",
});

gsap
  .timeline({ repeat: -1, repeatDelay: 1 })
  .to(".glitch-text", { x: 2, y: 1, duration: 0.1, ease: "none" })
  .to(".glitch-text", { x: -2, y: -2, duration: 0.1, ease: "none" })
  .to(".glitch-text", { opacity: 0.8, duration: 0.05, ease: "none" })
  .to(".glitch-text", { x: 0, y: 0, opacity: 1, duration: 0.1, ease: "none" });

document.querySelector(".profile-img").addEventListener("mouseenter", () => {
  gsap.to(".profile-img", { scale: 1.1, rotate: 5, duration: 0.3 });
});
document.querySelector(".profile-img").addEventListener("mouseleave", () => {
  gsap.to(".profile-img", { scale: 1, rotate: 0, duration: 0.3 });
});

gsap.from(".song-title", {
  duration: 1.5,
  scale: 0.8,
  opacity: 0,
  y: -50,
  ease: "elastic.out(1, 0.5)",
});

gsap.from(".description", {
  delay: 1,
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power1.out",
});

gsap.from(".icons div", {
  opacity: 0,
  scale: 0,
  stagger: 0.2,
  delay: 1.5,
  ease: "back.out(1.7)",
});

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();
  tl.from(".about-text h1", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out",
  })
    .from(
      ".about-text p",
      {
        duration: 1,
        x: -50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .from(".visual-frame", {
      duration: 1.5,
      scale: 0.8,
      opacity: 0,
      ease: "elastic.out(1, 0.6)",
    });
});
