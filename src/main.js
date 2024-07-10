import "./index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import swiper from "./assets/js/swiper";

const navMenu = document.querySelector(".wrapper__nav-list");
const sideMenuOverlay = document.querySelector(".wrapper__side-menu-overlay");

const menuCloseBtn = document.querySelector(".wrapper__close-nav");

menuCloseBtn.addEventListener("click", () => {
  navMenu.setAttribute("data-isOpen", "false");
  sideMenuOverlay.setAttribute("data-isOpen", "false");
});

const menuOpenBtn = document.querySelector(".wrapper__open-nav");

menuOpenBtn.addEventListener("click", () => {
  navMenu.setAttribute("data-isOpen", "true");
  sideMenuOverlay.setAttribute("data-isOpen", "true");
});

sideMenuOverlay.addEventListener("click", () => {
  navMenu.setAttribute("data-isOpen", "false");
  sideMenuOverlay.setAttribute("data-isOpen", "false");
});
