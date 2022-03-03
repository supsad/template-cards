const slides = document.querySelectorAll('.container_slide');

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses();

    slide.classList.add('active');
  })
}

for (const closeSlide of slides) {
  closeSlide.addEventListener('dblclick', () => {
    clearActiveClasses();
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  })
}