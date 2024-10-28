let currentImageIndex = 0;
let images = Array.from(document.querySelectorAll('.gallery-image'));

function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = image.src;
    currentImageIndex = images.indexOf(image);
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

function changeSlide(n) {
    currentImageIndex += n;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.getElementById("modalImage").src = images[currentImageIndex].src;
}
