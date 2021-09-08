const menuBtn = document.querySelector(".fa-bars");
const exitBtn = document.querySelector(".fa-times");
const logo = document.querySelector(".logo");
const navBar = document.querySelector("nav");
const mainSec = document.querySelector("main");

function displayMenu() {
  menuBtn.addEventListener("click", () => {
    logo.style.display = "none";
    menuBtn.style.display = "none";
    exitBtn.style.display = "inherit";
    navBar.style.visibility = "inherit";
    mainSec.style.display = "none";
  });
  exitBtn.addEventListener("click", () => {
    logo.style.display = "inherit";
    menuBtn.style.display = "inherit";
    exitBtn.style.display = "none";
    navBar.style.visibility = "hidden";
    mainSec.style.display = "inherit";
  });
}

displayMenu();
