/**
 * Lightbox / Image Gallery
 * Handles fullscreen image viewing with navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    if (!lightbox || triggers.length === 0) {
        return; // Exit if lightbox elements don't exist on this page
    }

    let currentIndex = 0;
    const images = Array.from(triggers);

    // Open lightbox
    function openLightbox(index) {
        currentIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Update lightbox image
    function updateLightboxImage() {
        const trigger = images[currentIndex];
        const imageSrc = trigger.getAttribute('src') || trigger.getAttribute('data-image-src');
        const imageAlt = trigger.getAttribute('alt') || 'Image';
        const imageType = trigger.getAttribute('data-image-type');

        // Update lightbox image source and alt text
        lightboxImage.src = imageSrc;
        lightboxImage.alt = imageAlt;

        // Copy the image type to the lightbox if it exists
        if (imageType) {
            lightboxImage.setAttribute('data-image-type', imageType);
        }
    }

    // Navigate to previous image
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }

    // Navigate to next image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightboxImage();
    }

    // Event listeners for triggers
    triggers.forEach((trigger, index) => {
        trigger.addEventListener('click', function() {
            openLightbox(index);
        });
    });

    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', showPrevImage);
    }

    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', showNextImage);
    }

    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) {
            return;
        }

        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });

    // Prevent scrolling when lightbox is open
    lightbox.addEventListener('wheel', function(e) {
        e.preventDefault();
    }, { passive: false });

    // Handle touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;

        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next image
            showNextImage();
        }

        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous image
            showPrevImage();
        }
    }
});
