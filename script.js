$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $("nav").addClass("Sticky");
    } else {
      $("nav").removeClass("Sticky");
    }
  });
});

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});