'use strict'

// Responsive menu
const menuIcon = document.querySelector("#menu-icon")
const navBar = document.querySelector(".navbar")

menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active")
    menuIcon.classList.toggle("bx-x")
})

window.addEventListener("scroll", () => {
    navBar.classList.remove("active")
    menuIcon.classList.remove("bx-x")
})

// Scroll Reveal
const sr = ScrollReveal({
    distance: "40px",
    duration: 2600,
    reset: true
})
sr.reveal(".home-text", {delay: 300, origin: "left"})
sr.reveal(".about, .services, .portfolio, .blog, .contact", {delay: 100, origin: "bottom"})