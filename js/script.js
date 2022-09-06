"use strict";
const hamburger = document.querySelector(".nav__hamburger");
const menu = document.querySelector(".nav__menu");
const closeMenu = document.querySelector(".nav__menu-close");
let overlay = document.querySelector(".overlay");

const closeMenuFunc = () => {
  console.log("overlay clicked");
  menu.classList.toggle("menu__open");
  overlay.remove();
};

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu__open");
  overlay = document.createElement("div");
  overlay.classList.add("overlay");
  menu.parentElement.prepend(overlay);
});

closeMenu.addEventListener("click", closeMenuFunc);

overlay && overlay.addEventListener("click", closeMenuFunc);
