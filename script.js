const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});






const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
let index = 0;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 20; // include margin
  carousel.style.transform = `translateX(${-index * cardWidth}px)`;
}

// Auto-slide every 3 seconds
setInterval(() => {
  index++;
  if (index >= cards.length) {
    index = 0; // loop back to first card
  }
  updateCarousel();
}, 3000);

// Optional: Keep buttons functional
document.querySelector('.next').addEventListener('click', () => {
  index++;
  if (index >= cards.length) index = 0;
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  index--;
  if (index < 0) index = cards.length - 1;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
