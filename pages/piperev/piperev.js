document.getElementById('ctaButton').addEventListener('click', function() {
    alert('Записването за услуга ще бъде на нашия офис! Очаквайте скоро повече информация.');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Вашето съобщение беше изпратено успешно!');
});
