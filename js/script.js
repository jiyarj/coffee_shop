let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

// Modal functionality for About section
const aboutReadMoreBtn = document.getElementById('about-readmore-btn');
const aboutModal = document.getElementById('about-modal');
const aboutModalClose = document.getElementById('about-modal-close');

if (aboutReadMoreBtn && aboutModal && aboutModalClose) {
  aboutReadMoreBtn.onclick = function(e) {
    e.preventDefault();
    aboutModal.style.display = 'block';
  };
  aboutModalClose.onclick = function() {
    aboutModal.style.display = 'none';
  };
  window.onclick = function(event) {
    if (event.target === aboutModal) {
      aboutModal.style.display = 'none';
    }
  };
}

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});