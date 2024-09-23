function showContent(tab) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(tab).classList.add('active');

    // Update navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`nav a[onclick="showContent('${tab}')"]`).classList.add('active');
}
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').innerText = timeString;
}

setInterval(updateClock, 1000);

updateClock();
