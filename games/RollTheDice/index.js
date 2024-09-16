// Generate a random number for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// Select the first dice image and update its src attribute
document.querySelector('.img1').setAttribute("src", `./images/dice${randomNumber1}.png`);

// Generate a random number for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// Select the second dice image and update its src attribute
document.querySelector('.img2').setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "🚩 Player 1 Wins"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 wins 🚩"
} else {
    document.querySelector('h1').innerHTML = "It's a Draw!"
}


function rollDice(){
    // Generate a random number for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// Select the first dice image and update its src attribute
document.querySelector('.img1').setAttribute("src", `./images/dice${randomNumber1}.png`);

// Generate a random number for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// Select the second dice image and update its src attribute
document.querySelector('.img2').setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "🚩 Player 1 Wins"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 wins 🚩"
} else {
    document.querySelector('h1').innerHTML = "It's a Draw!"
}
}