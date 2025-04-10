window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header-mobile");
  const toggleButton = document.querySelector(".header-btn-mobile");

  toggleButton.addEventListener("click", () => {
    header.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header-mobile");
  const toggleButton = document.querySelector(".header-btn-mobile-open");

  toggleButton.addEventListener("click", () => {
    header.classList.remove("open");
  });
});
