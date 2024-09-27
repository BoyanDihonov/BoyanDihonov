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

function openMessengerChat() {
    FB.CustomerChat.showDialog();
}

function startClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        setInterval(() => {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            clockElement.textContent = timeString;
        }, 1000);
    }
}

startClock();
