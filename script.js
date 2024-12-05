// const images = [
//     'images/ifeoma.jpg',
//     'images/kachi.jpg',
//     'images/logo.jpg',
//     'images/meloddy.jpg',
//     'images/pepe-cover.jpg'
// ];

// let currentIndex = 0;

// function changeBackground() {
//     currentIndex = (currentIndex + 1) % images.length;
//     document.querySelector('.home-section').style.backgroundImage = `url(${images[currentIndex]})`;
// }

// setInterval(changeBackground, 5000);


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


