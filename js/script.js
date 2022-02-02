/* Hover effect for search SVG icon */
const searchIcon = document.querySelector(".nav-search");
const hamburgerMenu = document.querySelector(".nav-menu");
const navItem = document.querySelectorAll(".nav-item");
const navbar = document.querySelector(".nav");

/* Hamburger Menu Content */
const hamburgerMenuContentClose = `
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="4" y1="6" x2="14" y2="6" />
    <line x1="4" y1="18" x2="14" y2="18" />
    <path d="M4 12h17l-3 -3m0 6l3 -3" />
`;

const hamburgerMenuContentOpen = `
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
`; 

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
        hamburgerMenu.innerHTML = hamburgerMenuContentClose;
    } else {
        navbar.style.animationName = "slideClose";
        setTimeout(() => {
            hamburgerMenu.classList.replace("hamburger", "nav-menu");
            navbar.classList.remove("navigation");
            searchIcon.style.display = "block";
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].classList.remove("item");
            }
            hamburgerMenu.innerHTML = hamburgerMenuContentOpen;
        }, 1000);
    }
});





