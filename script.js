const images = [
    'images/ifeoma.jpg',
    'images/kachi.jpg',
    'images/logo.jpg',
    'images/meloddy.jpg',
    'images/pepe-cover.jpg'
];

let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    document.querySelector('.home-section').style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeBackground, 5000);
