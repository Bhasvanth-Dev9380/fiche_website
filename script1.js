const teamCarousel = document.querySelector('.team-carousel-container');
let teamScrollAmount = 0;

function teamAutoScroll() {
    teamScrollAmount += 2;
    if (teamScrollAmount >= teamCarousel.scrollWidth - teamCarousel.clientWidth) {
        teamScrollAmount = 0;
    }
    teamCarousel.scrollTo({
        left: teamScrollAmount,
        behavior: 'smooth'
    });
}

setInterval(teamAutoScroll, 20);
