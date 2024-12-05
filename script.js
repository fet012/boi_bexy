gsap.to(".logo", {
  y: -8, 
  repeat: -1, 
  yoyo: true, 
  duration: 1, 
  ease: "power1.inOut"
});



gsap.from(".song-title", {
  duration: 2,
  opacity: 0,
  scale: 0.5,
  ease: "back.out(1.7)",
  stagger: 0.1,
});

gsap.utils.toArray(".icons svg").forEach(icon => {
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
  ease: "power2.out"
});



gsap.from(".logo path", {
  duration: 2,
  strokeDashoffset: 1000,
  strokeDasharray: 1000,
  ease: "power2.inOut"
});

gsap.registerPlugin(SplitText);
const splitText = new SplitText(".song-title", { type: "chars" });
gsap.from(splitText.chars, {
  duration: 0.8,
  opacity: 0,
  y: 50,
  stagger: 0.05,
  ease: "back.out(1.7)"
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

toggleButton.addEventListener("click", function () {
  // Toggle the collapse class on the button
  toggleButton.classList.toggle("collapsed");
});


