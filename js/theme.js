/**
 * Theme Switcher
 * Handles light/dark mode toggle with localStorage persistence
 */

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Apply the theme
    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        updateThemeIcon(theme);
        swapLogos(theme);
    }

    // Update the theme icon
    function updateThemeIcon(theme) {
        if (themeToggle) {
            themeToggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
            themeToggle.setAttribute('aria-label',
                theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // Event listener for theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Apply saved theme on load
    applyTheme(currentTheme);

    // Listen for system theme preference changes
    if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

        darkModeQuery.addEventListener('change', function(e) {
            // Only auto-switch if user hasn't set a preference
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    function swapLogos(theme) {
        const navLogos = document.querySelectorAll('.nav-logo img');
        const footerLogos = document.querySelectorAll('.footer-logo');
        const lightLogo = 'assets/images/logo-white.png';
        const darkLogo = 'assets/images/logo.jpeg';
        const targetSrc = theme === 'light' ? lightLogo : darkLogo;

        navLogos.forEach(img => {
            if (img) img.src = targetSrc;
        });

        footerLogos.forEach(img => {
            if (img) img.src = targetSrc;
        });
    }
});
