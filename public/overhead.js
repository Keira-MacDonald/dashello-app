// Function to save the title to localStorage and update the UI
function saveTitle() {
    const titleInput = document.getElementById("titleInput").value;
    const newTitle = titleInput.trim() !== "" ? titleInput : "";
    document.getElementById("boxTitle").innerText = newTitle;
    localStorage.setItem("boxTitle", newTitle); // Save the title to localStorage
    setTimeout(() => {
        closeModal();
    }, 200); // 200 milliseconds delay
}

// Function to save the overhead title to localStorage and update the UI
function saveOverheadTitle() {
    const overheadTitleInput = document.getElementById("overheadTitleInput").value;
    const newOverheadTitle = overheadTitleInput.trim() !== "" ? overheadTitleInput : "";
    document.getElementById("overheadTitleDisplay").innerText = newOverheadTitle;
    localStorage.setItem("overheadTitle", newOverheadTitle); // Save the overhead title to localStorage
    setTimeout(() => {
        closeOverheadModal();
    }, 200); // 200 milliseconds delay
}

// Function to load the title from localStorage and update the UI
function loadTitle() {
    const savedTitle = localStorage.getItem("boxTitle");
    if (savedTitle) {
        document.getElementById("boxTitle").innerText = savedTitle;
    } else {
        document.getElementById("boxTitle").innerText = "No Title"; // Default title
    }

    const savedOverheadTitle = localStorage.getItem("overheadTitle");
    if (savedOverheadTitle) {
        document.getElementById("overheadTitleDisplay").innerText = savedOverheadTitle;
    } else {
        document.getElementById("overheadTitleDisplay").innerText = "Overhead"; // Default title
    }
}

// Event listener for opening the overhead modal
document.getElementById("editButton").onclick = function() {
    const modal = document.getElementById("editModal");
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("show"), 10); // Add "show" class after a slight delay to trigger the animation
    const currentOverheadTitle = document.getElementById("overheadTitleDisplay").innerText;
    document.getElementById("overheadTitleInput").value = currentOverheadTitle === "Overhead" ? "" : currentOverheadTitle;
    document.getElementById("overheadTitleInput").focus(); // Optional: Focus on the input field when modal opens

    // Update the overhead title in real-time as the input changes
    document.getElementById("overheadTitleInput").addEventListener("input", function() {
        document.getElementById("overheadTitleDisplay").innerText = this.value || "Overhead";
    });
};

// Event listener for closing the overhead modal
document.getElementById("closeOverheadModal").onclick = function() {
    closeOverheadModal();
};

// Close the modal if clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("editModal");
    if (event.target === modal) {
        closeOverheadModal();
    }
};

// Function to close the overhead modal
function closeOverheadModal() {
    const modal = document.getElementById("editModal");
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 300); // Wait for the animation to finish before hiding the modal
}

// Event listener for saving the overhead title
document.getElementById("saveOverheadTitle").onclick = function() {
    saveOverheadTitle();
};

// Event listener for pressing Enter within the text input for overhead title
document.getElementById("overheadTitleInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents the default action of the Enter key (e.g., form submission)
        saveOverheadTitle();
    }
});

// Global keypress event listener to capture Enter key presses anywhere in the document
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        // Check if the modal is open
        const modal = document.getElementById("editModal");
        if (modal.style.display === "flex" || modal.classList.contains("show")) {
            event.preventDefault(); // Prevents the default action of the Enter key (e.g., form submission)
            saveOverheadTitle();
        }
    }
});

// Load the title from localStorage when the page loads
window.onload = function() {
    loadTitle();
};
