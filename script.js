
















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
  event.preventDefault();

    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    event.preventDefault();
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
  event.preventDefault();
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



//services animation




const slidesHai = document.querySelector('.carousel-slides-servicehai');
const autoBtnsHai = document.querySelectorAll('.carousel-btn-servicehai');

let carouselIndexHai = 0;

function changeCarouselImagesHai(imageUrlsHai) {
  const slideImagesHai = document.querySelectorAll('.carousel-slides-servicehai .carousel-slide-servicehai img');
  slideImagesHai.forEach((imgHai, indexHai) => {
    imgHai.src = imageUrlsHai[indexHai];
  });
  carouselIndexHai = 0;
  showCarouselSlideHai();
  return false; // Prevent default anchor behavior
}

const showCarouselSlideHai = () => {
  slidesHai.style.transform = `translateX(-${carouselIndexHai * 100}%)`;
  autoBtnsHai.forEach((btnHai, indexHai) => {
    if (indexHai === carouselIndexHai) {
      btnHai.classList.add('active');
    } else {
      btnHai.classList.remove('active');
    }
  });
};

const nextCarouselSlideHai = () => {
  if (carouselIndexHai === 1) {
    carouselIndexHai = 0;
  } else {
    carouselIndexHai++;
  }
  showCarouselSlideHai();
};

// Initialize the slider
showCarouselSlideHai();
setInterval(nextCarouselSlideHai, 3000); // Change slide every 3 seconds



