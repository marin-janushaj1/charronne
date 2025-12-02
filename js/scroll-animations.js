/**
 * Scroll Animations
 * Handles fade-in animations using Intersection Observer and parallax effects
 */

document.addEventListener('DOMContentLoaded', function() {
    // Fade-in animation using Intersection Observer
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after animation
                // fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Parallax effect for hero and large images
    const parallaxElements = document.querySelectorAll('.parallax-element');
    let ticking = false;

    // Only enable parallax on larger screens
    if (window.innerWidth > 768 && parallaxElements.length > 0) {
        function updateParallax() {
            const scrolled = window.pageYOffset;

            parallaxElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top + scrolled;
                const elementHeight = element.offsetHeight;
                const viewportHeight = window.innerHeight;

                // Check if element is in viewport
                if (scrolled + viewportHeight > elementTop && scrolled < elementTop + elementHeight) {
                    // Calculate parallax offset
                    const distance = scrolled - elementTop + viewportHeight;
                    const percentage = distance / (viewportHeight + elementHeight);
                    const parallaxOffset = (percentage - 0.5) * 100; // Adjust multiplier for effect strength

                    element.style.transform = `translateY(${parallaxOffset}px)`;
                }
            });

            ticking = false;
        }

        function requestParallaxUpdate() {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestParallaxUpdate);

        // Initial parallax position
        updateParallax();
    }

    // Disable parallax on mobile for performance
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            parallaxElements.forEach(element => {
                element.style.transform = 'none';
            });
        }
    });

    // Smooth scroll behavior for same-page links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only handle same-page anchors
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();

                    const nav = document.querySelector('.main-nav');
                    const navHeight = nav ? nav.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
