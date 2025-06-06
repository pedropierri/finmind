radius
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track')
  const slides = Array.from(track.children);
  let currentIndex = 0;

  const getSlideWidth = () => {
    const slide = slides[0];
    return slide.getBoundingClientRect().width;
  }
  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';

    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  }

  const arrangeSlides = () => {
    const slideWidth = getSlideWidth();

    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    });
  }
  const autoScroll = () => {
    const currentSlide = track.querySelector('.current-slide');

  let nextIndex = (currentIndex + 1) % slides.length;
    const nextSlide = slides[nextIndex];


    moveToSlide(track, currentSlide, nextSlide);

    currentIndex = nextIndex;
  }

arrangeSlides();
slides[0].classList.add('current-slide');
setInterval(autoScroll, 4000);
window.addEventListener('resize', arrangeSlides);

});