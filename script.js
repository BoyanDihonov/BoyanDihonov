function openMessengerChat() {
    window.open('https://m.me/BoyanDihonov', '_blank');
}

function showContent(contentId) {
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(contentId).classList.add('active');

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`nav a[onclick="showContent('${contentId}')"]`);
    if (activeLink) activeLink.classList.add('active');
}

function startClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    if (clockElement && dateElement) {
        setInterval(() => {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            const dateString = now.toLocaleDateString();
            clockElement.textContent = timeString;
            dateElement.textContent = dateString;
        }, 1000);
    }
}

startClock();

let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 2000);
showSlide(currentSlide);
