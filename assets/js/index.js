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