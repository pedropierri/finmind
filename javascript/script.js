document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    
    if (!track) {
        console.error("Elemento .carousel-track não encontrado.");
        return;
    }

    const slides = Array.from(track.children);
    if (slides.length === 0) return;

    let currentIndex = 0;

    const updateCarouselPosition = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        const offset = slideWidth * currentIndex;
        track.style.transform = `translateX(-${offset}px)`;
    };

    const moveToNextSlide = () => {
      currentIndex = (currentIndex + 2) % slides.length;
      updateCarouselPosition();
    };

    setInterval(moveToNextSlide, 4000);
    window.addEventListener('resize', updateCarouselPosition);
    updateCarouselPosition();
});