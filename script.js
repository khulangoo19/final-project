const searchInput = document.getElementById('searchInput');
const priceFilter = document.getElementById('priceFilter');
const lifeFilter = document.getElementById('lifeFilter');

// Backup the original slides
const originalSlides = Array.from(document.querySelectorAll('.swiper-slide')).map(slide => slide.cloneNode(true));

// Swiper setup
const swiper = new Swiper('.wrapper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});