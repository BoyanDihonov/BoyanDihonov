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
    activeLink.classList.add('active');
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 1500);
showSlide(currentSlide);

function updateClockAndDate() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
    dateElement.textContent = now.toLocaleDateString();
}

setInterval(updateClockAndDate, 1000);
updateClockAndDate();
