// хедер
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// хедер мобилки
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

// форма
const form = document.getElementById("tooth-form");
const subBtn = document.querySelector(".form__btnform__btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const userData = {};

  for (const [key, value] of formData.entries()) {
    userData[key] = value;
  }

  console.log(userData);

  form.reset();
});
