document.addEventListener('DOMContentLoaded', () => {
    //Scroll
    const lenis = new Lenis({
        duration: 1.7,
        lerp: 0.07,
        wheelMultiplier: 1,
        touchMultiplier: 2, 
        smoothWheel: true,   
        smoothTouch: false, 
    })
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            lenis.scrollTo(this.getAttribute('href'));
        });
    });

    requestAnimationFrame(raf);

    //Testimonials
    const track = document.querySelector('.carousel-track');
    
    if (!track) {
        console.error("Elemento .carousel-track not founded.");
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

    // Animations
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
