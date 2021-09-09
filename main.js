const displayMenu = () => {
  document.querySelector(".fa-bars").style.visibility = "hidden";
  document.querySelector(".logo").style.visibility = "hidden";
  document.querySelector("main").style.visibility = "hidden";
  document.querySelector("nav").style.visibility = "inherit";
  document.querySelector(".fa-times").style.display = "inherit";
};

const hideMenu = () => {
  document.querySelector(".fa-bars").style.visibility = "";
  document.querySelector(".logo").style.visibility = "";
  document.querySelector("main").style.visibility = "";
  document.querySelector("nav").style.visibility = "";
  document.querySelector(".fa-times").style.display = "";
};
