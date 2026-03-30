document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scroll
    const lenis = new Lenis({
        duration: 1.7,
        lerp: 0.07,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        smoothWheel: true,
        smoothTouch: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');

    hamburger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Anchor Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            nav.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            lenis.scrollTo(this.getAttribute('href'));
        });
    });

    // Testimonials Carousel
    const track = document.querySelector('.carousel-track');
    Array.from(track.children).forEach(item => {
        track.appendChild(item.cloneNode(true));
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});
