// Interactivity for hamburger icon:
const hamburgerIcon = document.querySelector(".menu-icon");

const toggleMenu = function() {
    const menuItems = document.querySelector(".menu-items");
    menuItems.classList.toggle("open");
}

hamburgerIcon.addEventListener("click", toggleMenu);