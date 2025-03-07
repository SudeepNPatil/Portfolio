


// Ensure JavaScript runs after DOM is loaded
document.addEventListener("DOMContentLoaded", function some() {


    // Select elements AFTER the page has loaded
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-btn");

    // Function to open popup


    // Add event listener for close button (if it exists)
    if (closeBtn) {
        closeBtn.addEventListener("click", closePopup);
    }

    // Close popup when clicking outside
    if (popup) {
        popup.addEventListener("click", function (event) {
            if (event.target === popup) {
                closePopup();
            }
        });
    }

    // Attach openPopup() to the clickable div
    document.querySelector(".Project").addEventListener("click", openPopup);
});