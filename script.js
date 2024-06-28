let founderCurrentIndex = 0;

function founderShowSlide(index) {
    const slides = document.querySelectorAll('.founder-carousel-item');
    if (index >= slides.length) {
        founderCurrentIndex = 0;
    } else if (index < 0) {
        founderCurrentIndex = slides.length - 1;
    } else {
        founderCurrentIndex = index;
    }
    const offset = -founderCurrentIndex * 100;
    document.querySelector('.founder-carousel-inner').style.transform = `translateX(${offset}%)`;
}

function founderNextSlide() {
    founderShowSlide(founderCurrentIndex + 1);
}

function founderPrevSlide() {
    founderShowSlide(founderCurrentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(founderNextSlide, 3000); // Change slide every 3 seconds
});









function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }


  //carousel part

  
  let slideIndices = [0, 0, 0, 0, 0, 0, 0];

    // Initialize all carousels to show the first slide
    for (let i = 0; i < slideIndices.length; i++) {
        showSlide(i, slideIndices[i]);
    }

    // Function to show slide in a carousel
    function showSlide(carouselIndex, index) {
        const slides = document.querySelectorAll(`#carousel${carouselIndex + 1} .slide`);
        if (index >= slides.length) {
            slideIndices[carouselIndex] = 0;
        } else if (index < 0) {
            slideIndices[carouselIndex] = slides.length - 1;
        } else {
            slideIndices[carouselIndex] = index;
        }
        const offset = -slideIndices[carouselIndex] * 100;
        slides.forEach(slide => {
            slide.style.transform = `translateX(${offset}%)`;
        });
    }

    // Function to change slide in a carousel
    function changeSlide(carouselIndex, direction) {
        showSlide(carouselIndex, slideIndices[carouselIndex] + direction);
    }

    // Event listeners for carousel buttons
    const carouselButtons = document.querySelectorAll('.carousel-buttons a');
    carouselButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const carouselIndex = parseInt(button.getAttribute('data-carousel')) - 1;
            document.querySelectorAll('.carousel').forEach(carousel => {
                carousel.classList.remove('active');
            });
            document.getElementById(`carousel${carouselIndex + 1}`).classList.add('active');
        });
    });

    //terms and conditions

    // Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


