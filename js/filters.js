/**
 * Filter Functionality
 * Handles filtering of mockup cards by category
 */

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const mockupCards = document.querySelectorAll('.mockup-card');

    if (filterButtons.length === 0 || mockupCards.length === 0) {
        return; // Exit if filter elements don't exist on this page
    }

    // Filter function
    function filterMockups(category) {
        mockupCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (category === 'all') {
                // Show all cards
                card.classList.remove('hidden');
                card.style.display = '';
            } else {
                // Show only matching category
                if (cardCategory === category) {
                    card.classList.remove('hidden');
                    card.style.display = '';
                } else {
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }
            }
        });
    }

    // Event listeners for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Filter the mockups
            filterMockups(filter);

            // Re-trigger fade-in animations for filtered items
            const visibleCards = document.querySelectorAll('.mockup-card:not(.hidden)');
            visibleCards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.1}s`;
            });
        });
    });

    // Initialize with 'all' filter
    filterMockups('all');
});
