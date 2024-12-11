alert("Fet");

// NAVBAR DROP
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

//  TOGGLE NAVBAR AND ICON
const toggleButton = document.getElementById("navbarToggleBtn");
const navbarCollapse = document.getElementById("navbarNav");

toggleButton.addEventListener("click", function () {
  toggleButton.classList.toggle("collapsed");

  navbarCollapse.classList.toggle("collapse");
  navbarCollapse.classList.toggle("show");
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
