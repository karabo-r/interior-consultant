const menuBtn = document.querySelector(".fa-bars");
const exitBtn = document.querySelector(".fa-times");
const logo = document.querySelector(".logo");
const navBar = document.querySelector("nav");
const mainSec = document.querySelector("main");
const footer = document.querySelector("footer");

function displayMenu() {
  menuBtn.addEventListener("click", () => {
    logo.style.display = "none";
    menuBtn.style.display = "none";
    footer.style.display = "inherit";

    exitBtn.style.display = "inherit";
    navBar.style.visibility = "inherit";
    mainSec.style.visibility = "hidden";
  });
  exitBtn.addEventListener("click", () => {
    footer.style.display = "";
    logo.style.display = "inherit";
    menuBtn.style.display = "inherit";
    exitBtn.style.display = "none";
    navBar.style.visibility = "hidden";
    mainSec.style.visibility = "inherit";
  });
}

displayMenu();
