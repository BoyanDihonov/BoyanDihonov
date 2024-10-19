let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function moveSlide(n) {
    currentSlide += n;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateSlides();
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 3000);
}

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === currentSlide) ? 'block' : 'none';
    });
}

updateSlides();
autoSlide();
