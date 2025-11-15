document.addEventListener('DOMContentLoaded', function() {
    // Dynamic year for footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Active link highlighting
    const currentPath = window.location.pathname.split('/').pop(); // Gets "index.html", "about.html", etc.
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            // Remove 'current' class from any other li
            const currentActive = document.querySelector('header nav ul li.current');
            if (currentActive) {
                currentActive.classList.remove('current');
            }
            // Add 'current' class to the parent li of the active link
            link.parentElement.classList.add('current');
        }
    });
});