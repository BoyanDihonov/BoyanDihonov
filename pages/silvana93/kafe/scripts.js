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
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById("modal-img").src = images[currentImageIndex].src;
}
