document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links (removed for multi-page navigation)

    // Example of a simple dynamic element (can be expanded)
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // You can add more interactive elements here, like a contact form submission handler,
    // image sliders, or other dynamic content.
});