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
  
  
  gsap.from(".hero h1", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out",
  });
  
  gsap.from(".hero p", {
    opacity: 0,
    y: 30,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out",
  });
  
  gsap.from(".carousel-container", {
    opacity: 0,
    scale: 0.5,
    duration: 1.5,
    delay: 1,
    ease: "power3.out",
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