// DONE BY SHIN THANT AUNG (243816M)

document.addEventListener('DOMContentLoaded', function () {
    const slideIndices = {
        'standardCarousel': 1,
        'deluxeCarousel': 1,
        'suiteCarousel': 1
    };

    const slideInterval = 5000; // Time for automatic carousel slideshow)

    //Display the slides
    function showSlides(slideIndex, carouselId) {
        const slides = document.querySelectorAll(`#${carouselId} .room-image`);
        const dots = document.querySelectorAll(`#${carouselId} .dot`);
        if (slideIndex > slides.length) { slideIndices[carouselId] = 1 }
        if (slideIndex < 1) { slideIndices[carouselId] = slides.length }
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndices[carouselId] - 1) ? 'block' : 'none';
        });
    }

    //Change slides accordig to index
    function changeSlide(n, carouselId) {
        showSlides(slideIndices[carouselId] += n, carouselId);
    }

    //Automatic slide changing
    function autoSlide(carouselId) {
        setInterval(() => {
            changeSlide(1, carouselId);
        }, slideInterval);
    }


    //Manual button for changing slides via index changing
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


