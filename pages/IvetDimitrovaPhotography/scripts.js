document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const images = document.querySelectorAll('.gallery-item');
    let currentIndex;

    images.forEach((image, index) => {
        image.onclick = function() {
            modal.style.display = "block";
            modalImage.src = this.src;
            captionText.innerHTML = this.alt;
            currentIndex = index;
        };
    });

    document.getElementsByClassName("close")[0].onclick = function() {
        modal.style.display = "none";
    };

    window.changeSlide = function(n) {
        currentIndex += n;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        modalImage.src = images[currentIndex].src;
        captionText.innerHTML = images[currentIndex].alt;
    };
});
