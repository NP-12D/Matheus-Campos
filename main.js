let burger = document.querySelector(".burger");
let list = document.querySelector("nav ul");
let listitems = document.querySelectorAll("nav ul li");

function toggleBurgerMenu() {
  document.body.classList.toggle("no_scroll");
  list.classList.toggle("burgerul");
  burger.classList.toggle("burgerstyle");
  burger.classList.toggle("active");
}
burger.addEventListener("click", function () {
  toggleBurgerMenu();
  if (list.classList.contains("burgerul")) {
    listitems.forEach((item) => {
      item.addEventListener("click", toggleBurgerMenu);
    });
  } 
});


let button = document.querySelector(".top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200 && window.innerWidth < 850) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
});
button.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
