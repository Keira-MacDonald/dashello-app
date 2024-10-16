document.addEventListener('DOMContentLoaded', function() {
    // Function to handle navigation
    function navigateTo(url) {
        window.location.href = url;
    }

    // Switch to news
    document.getElementById('newsButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        navigateTo("News.html");
    });

    // Switch to home
    document.getElementById('homeButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        navigateTo("index.html");
    });

    // Switch to contact
    document.getElementById('contactButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        navigateTo("Contact.html");
    });

    // Switch to about
    document.getElementById('aboutButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        navigateTo("About.html");
    });
});