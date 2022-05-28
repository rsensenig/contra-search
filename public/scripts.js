// Interactivity for hamburger icon:
const hamburgerIcon = document.querySelector(".menu-icon");

const toggleMenu = function() {
    const menuItems = document.querySelector(".menu-items");
    menuItems.classList.toggle("open");
}

hamburgerIcon.addEventListener("click", toggleMenu);

// "Approve" button functionality:

// Steps for DOM Manipulation:

// 1. Select the "Approve" button.


// 2. Write the event handler function to toggle needsReview from true to false


// 3. Use .addEventListener to attach the "Approve" button to the event of a mouse click, and the above event handler function.