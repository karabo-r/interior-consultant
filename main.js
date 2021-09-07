const menuBtn = document.querySelector(".fa-bars");
const exitBtn = document.querySelector(".fa-times");
const logo = document.querySelector(".logo");

menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  exitBtn.style.display = "inherit";
  logo.style.display = "none";
});
exitBtn.addEventListener("click", () => {
  menuBtn.style.display = "inherit";
  logo.style.display = "inherit";
  exitBtn.style.display = "none";
});
