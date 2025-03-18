const burger = document.getElementById("burger");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

burger.addEventListener("click", () => {
  modal.classList.add("show");
});

close.addEventListener("click", () => {
  modal.classList.remove("show");
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 20,
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 2 },
    },
  });
});