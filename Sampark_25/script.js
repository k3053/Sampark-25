document.addEventListener("DOMContentLoaded", () => {
    // Get all nav links and page sections
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".content");
    const navbarCollapse = document.getElementById("navbarNav");

    // Function to handle page switching and navbar collapse
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Get the target page ID
            const targetPageId = link.getAttribute("data-target");

            // Show the selected page and hide others
            pages.forEach(page => {
                if (page.id === targetPageId) {
                    page.classList.remove("hidden");
                } else {
                    page.classList.add("hidden");
                }
            });

            // Highlight the active link
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");

            // Collapse navbar on mobile view
            if (window.innerWidth < 992) { // Only for mobile screens
                const collapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                collapse.hide();
            }
        });
    });
});
