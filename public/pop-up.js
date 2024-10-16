// Function to save the title to localStorage and update the UI
function saveTitle() {
    const titleInput = document.getElementById("titleInput").value;
    const newTitle = titleInput.trim() !== "" ? titleInput : "";
    document.getElementById("boxTitle").innerText = newTitle;
    document.getElementById("overheadTitle").innerText = newTitle;
    localStorage.setItem("boxTitle", newTitle); // Save the title to localStorage
    setTimeout(() => {
        closeModal();
    }, 200); // 200 milliseconds delay
}

// Function to load the title from localStorage and update the UI
function loadTitle() {
    const savedTitle = localStorage.getItem("boxTitle");
    if (savedTitle) {
        document.getElementById("boxTitle").innerText = savedTitle;
        document.getElementById("overheadTitle").innerText = savedTitle;
    } else {
        document.getElementById("boxTitle").innerText = "No Title"; // Default title
        document.getElementById("overheadTitle").innerText = "No Title";
    }
}

// Event listener for opening the modal
document.getElementById("editButton").onclick = function() {
    const modal = document.getElementById("editModal");
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("show"), 10); // Add "show" class after a slight delay to trigger the animation
    const currentTitle = document.getElementById("boxTitle").innerText;
    document.getElementById("titleInput").value = currentTitle === "No Title" ? "" : currentTitle;
    document.getElementById("titleInput").focus(); // Optional: Focus on the input field when modal opens

    // Update the title in real-time as the input changes
    document.getElementById("titleInput").addEventListener("input", function() {
        document.getElementById("boxTitle").innerText = this.value || "No Title";
    });
};

// Event listener for closing the modal
document.getElementById("closeModal").onclick = function() {
    closeModal();
};

// Close the modal if clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("editModal");
    if (event.target === modal) {
        closeModal();
    }
};

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("editModal");
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 300); // Wait for the animation to finish before hiding the modal
}

// Event listener for saving the title
document.getElementById("saveTitle").onclick = function() {
    saveTitle();
};

// Event listener for pressing Enter within the text input
document.getElementById("titleInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents the default action of the Enter key (e.g., form submission)
        saveTitle();
    }
});

// Global keypress event listener to capture Enter key presses anywhere in the document
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        // Check if the modal is open
        const modal = document.getElementById("editModal");
        if (modal.style.display === "flex" || modal.classList.contains("show")) {
            event.preventDefault(); // Prevents the default action of the Enter key (e.g., form submission)
            saveTitle();
        }
    }
});

// Load the title from localStorage when the page loads
window.onload = function() {
    loadTitle();
};
