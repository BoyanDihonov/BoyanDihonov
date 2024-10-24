// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;

//     if (name && email && message) {
//         alert("Благодарим Ви за съобщението, " + name + "! Ще се свържем с Вас скоро.");
//         document.getElementById("contact-form").reset();
//     } else {
//         alert("Моля, попълнете всички полета.");
//     }
// });
let currentImageIndex = 0;
let images = [];

function openModal(imageElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = imageElement.src;

    images = document.querySelectorAll(".gallery-image");
    currentImageIndex = Array.from(images).indexOf(imageElement);
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function changeSlide(n) {
    currentImageIndex += n;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Отива на последното изображение
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Отива на първото изображение
    }
    document.getElementById("modal-img").src = images[currentImageIndex].src;
}
