const carouselContainer = document.querySelector('.carousel-container');
let slideIndex = 0;

function showNextSlide() {
    slideIndex++;
    if (slideIndex >= carouselContainer.children.length) {
        slideIndex = 0;
    }
    const offset = -slideIndex * 100 / carouselContainer.children.length;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
