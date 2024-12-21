alert("Ifeoma coming out soon");

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
      scrollPosition >= sectionTop - 800 &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});

document.querySelectorAll("a.nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { scrollTo: e.target.getAttribute("href"), duration: 1 });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const popupOverlay = document.querySelector(".popup-overlay");
  const popupContent = document.querySelector(".popup-content");
  const popupClose = document.querySelector(".popup-close");

  // Duplicate gallery content dynamically for seamless scrolling
  const gallery = document.querySelector(".gallery");
  while (gallery.scrollWidth < window.innerWidth * 2) {
    gallery.innerHTML += gallery.innerHTML;
  }

  // Query all gallery items again after duplication
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const type = item.getAttribute("data-type");
      const src = item.getAttribute("data-src");

      // Clear previous popup content
      popupContent.innerHTML = `<button class="popup-close">X</button>`;

      if (type === "image") {
        const img = document.createElement("img");
        img.src = src;
        popupContent.appendChild(img);
      } else if (type === "video") {
        const video = document.createElement("video");
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        popupContent.appendChild(video);
      }

      popupOverlay.classList.add("active");
    });
  });

  // Handle popup close
  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay || e.target === popupClose) {
      popupOverlay.classList.remove("active");
    }
  });
});
