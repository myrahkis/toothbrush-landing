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
  const toggleButtonOpen = document.querySelector(".header-btn-mobile");
  const toggleButtonClose = document.querySelector(".header-btn-mobile-open");

  toggleButtonOpen?.addEventListener("click", () => {
    header.classList.toggle("open");
  });

  toggleButtonClose?.addEventListener("click", () => {
    header.classList.remove("open");
  });
});

// форма
const form = document.getElementById("tooth-form");

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
