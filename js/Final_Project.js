//Choose Color for Hoodie
let colors = document.querySelectorAll(".choose-color .img-list li");

let colorName = document.querySelector("#selected-color");

colors.forEach(function (color) {
  color.addEventListener("click", function () {
    colors.forEach(function (item) {
      item.classList.remove("active");
    });

    color.classList.add("active");

    colorName.textContent = color.dataset.color;
  });
});
// the Counter for the hoodie
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let quantity = document.querySelector("#quantity");

plus.addEventListener("click", function () {
  quantity.textContent++;
});

minus.addEventListener("click", function () {
  if (quantity.textContent > 1) {
    quantity.textContent--;
  }
});
//Change Color Heart for wishlist button
let wishlist = document.querySelector("#wishlist");

wishlist.addEventListener("click", function () {
  wishlist.classList.toggle("active");

  let heart = wishlist.querySelector("i");

  heart.classList.toggle("fa-regular");
  heart.classList.toggle("fa-solid");
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
