/* Hover effect for search SVG icon */
let searchIcon = window.document.querySelector(".search");

function hoverOver() {
    searchIcon.setAttribute("stroke", "#ffda69");
}

function leave() {
    searchIcon.setAttribute("stroke", "#ffffff");
}

