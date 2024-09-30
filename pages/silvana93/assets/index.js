const toggleSwitch = document.querySelector('#theme-switch');

// Function to apply the theme
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Function to switch the theme and save the preference
function switchTheme(event) {
    const theme = event.target.checked ? 'dark' : 'light';
    applyTheme(theme);
    localStorage.setItem('theme', theme);
}

// Event listener for the theme switch toggle
toggleSwitch.addEventListener('change', switchTheme);

// Check for saved user preference, if any, or system preference on page load
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    applyTheme(savedTheme);
    toggleSwitch.checked = savedTheme === 'dark';
} else if (systemPrefersDark) {
    applyTheme('dark');
    toggleSwitch.checked = true;
}

// script.js
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();  // Initial call to set the clock immediately