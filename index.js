function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
    const toggleBtn=document.querySelector('.menu-toggle');
    toggleBtn.setAttribute('aria-expanded',`${toggleBtn.getAttribute('aria-expanded')=='false'?'true':'false'}`);
}

let startX, moveX, index = 0;

const carousel = document.querySelector(".carousel-container");
carousel.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX; // Store the initial touch position
});

carousel.addEventListener("touchmove", (event) => {
  moveX = event.touches[0].clientX; // Track movement
});

carousel.addEventListener("touchend", () => {
  const swipeDistance = startX - moveX; // Calculate swipe distance
  
  if (swipeDistance > 50) moveSlide(1);  // Swipe left → next slide
  if (swipeDistance < -50) moveSlide(-1); // Swipe right → previous slide
});

function moveSlide(direction) {
  const carousel = document.querySelector(".carousel-container");
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  index += direction;

  // Prevent sliding beyond limits
  if (index < 0) index = 0;
  if (index >= items.length) index = items.length - 1;

  updateCarousel();
}

function goToSlide(slideIndex) {
  index = slideIndex;
  updateCarousel();
}

function updateCarousel() {
  const dots = document.querySelectorAll(".dot");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  carousel.style.transform = `translateX(-${(index * 100)}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");

  // Disable buttons at limits
  prevButton.disabled = index === 0;
  nextButton.disabled = index === dots.length - 1;
}

// Initialize the active dot and button states
updateCarousel();
