document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const carouselImages = carousel.querySelector('.carousel-images');
        const images = carouselImages.querySelectorAll('img');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 100;
            carouselImages.style.transform = `translateX(${offset}%)`;
        }

        prevButton.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = images.length - 1;
            }
            updateCarousel();
        });

        nextButton.addEventListener('click', function() {
            if (currentIndex < images.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        });

        // Optional: Auto-slide
        setInterval(function() {
            nextButton.click();
        }, 5000); // Adjust the interval time as needed
    });

    // Booking button functionality
    const bookNowButton = document.querySelector('.booknow-button');
    bookNowButton.addEventListener('click', function(event) {
        window.location.href = 'roomsbooking.html';
    });
});
