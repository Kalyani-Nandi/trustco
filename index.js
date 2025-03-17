const burger = document.getElementById("burger");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

burger.addEventListener("click", () => {
  modal.classList.add("show");
});

close.addEventListener("click", () => {
  modal.classList.remove("show");
});
