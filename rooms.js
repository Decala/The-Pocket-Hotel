document.addEventListener('DOMContentLoaded', function () {
    const slideIndices = {
        'standardCarousel': 1,
        'deluxeCarousel': 1,
        'suiteCarousel': 1
    };

    const slideInterval = 5000; // Time in milliseconds for automatic slide transition

    function showSlides(slideIndex, carouselId) {
        const slides = document.querySelectorAll(`#${carouselId} .room-image`);
        const dots = document.querySelectorAll(`#${carouselId} .dot`);
        if (slideIndex > slides.length) { slideIndices[carouselId] = 1 }
        if (slideIndex < 1) { slideIndices[carouselId] = slides.length }
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndices[carouselId] - 1) ? 'block' : 'none';
        });
    }

    function changeSlide(n, carouselId) {
        showSlides(slideIndices[carouselId] += n, carouselId);
    }

    function autoSlide(carouselId) {
        setInterval(() => {
            changeSlide(1, carouselId);
        }, slideInterval);
    }

    document.querySelectorAll('.carousel-button').forEach(button => {
        button.addEventListener('click', function () {
            const carouselId = this.parentElement.id;
            const direction = this.classList.contains('prev') ? -1 : 1;
            changeSlide(direction, carouselId);
        });
    });

    const carousels = Object.keys(slideIndices);
    carousels.forEach(carouselId => {
        showSlides(slideIndices[carouselId], carouselId);
        autoSlide(carouselId);
    });
});


