import './sass/style.scss';

const menuBtn = document.getElementsByClassName("hamburger-menu")[0];
const navbar = document.getElementsByClassName("header__navigation")[0];
const header = document.getElementsByClassName("header")[0];
const promo = document.getElementsByClassName("promo")[0];
const logoHeader = document.getElementsByClassName("logo__header")[0];
const btn = document.getElementsByClassName("button")[0];
const btn2 = document.getElementsByClassName("button")[1];

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("change");
  header.classList.toggle("active");
  promo.classList.toggle("active");
  logoHeader.classList.toggle("active");
  btn.classList.toggle("active");
  btn2.classList.toggle("active");
});
