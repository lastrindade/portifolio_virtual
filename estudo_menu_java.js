const menu = document.getElementById("menu");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("mouseover", () => {
    menu.style.width = "250px";
});

menu.addEventListener("mouseleave", () => {
    menu.style.width = "0";
});