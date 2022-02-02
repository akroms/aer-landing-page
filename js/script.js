/* Hover effect for search SVG icon */
const searchIcon = document.querySelector(".nav-search");
const hamburgerMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");
const navbar = document.querySelector(".nav");

function hoverOver() {
    searchIcon.setAttribute("stroke", "#ffda69");
}

function leave() {
    searchIcon.setAttribute("stroke", "#ffffff");
}

/* Navigation menu Toggler */

hamburgerMenu.addEventListener("click", () => {
    if (hamburgerMenu.classList.contains("nav-menu")) {
        hamburgerMenu.classList.replace("nav-menu", "hamburger");
        searchIcon.style.display = "none";

        for (let i = 0; i < navItem.length; i++) {
            navItem[i].classList.add("item");
        }
        navbar.classList.add("navigation");
        navbar.style.animationName = "slideOpen";
    } else {
        navbar.style.animationName = "slideClose";
        setTimeout(() => {
            hamburgerMenu.classList.replace("hamburger", "nav-menu");
            navbar.classList.remove("navigation");
            searchIcon.style.display = "block";
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].classList.remove("item");
            }
        }, 1000);
    }
});


