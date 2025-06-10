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

    // Clona todos os testemunhos e os adiciona ao final da lista
    const testimonials = Array.from(track.children);
    testimonials.forEach(testimonial => {
        const clone = testimonial.cloneNode(true);
        track.appendChild(clone);
    });
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
        threshold: 0.25
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
