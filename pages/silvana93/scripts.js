window.onload = function () {
    const imageFolder = 'kafe/images/';
    const imageCount = 7; 
    const carousel = document.getElementById('carousel');

    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement('img');
        img.src = `${imageFolder}kafe${i}.jpg`;
        img.alt = `Кафе ${i}`;
        img.classList.add('carousel-slide');
        carousel.appendChild(img);
    }

    slides = document.querySelectorAll('.carousel-slide'); 
    updateSlides();
    autoSlide();
};

let currentSlide = 0;
let slides = []; 

function moveSlide(n) {
    currentSlide += n;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateSlides();
}

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === currentSlide) ? 'block' : 'none';
    });
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 3000);
}
