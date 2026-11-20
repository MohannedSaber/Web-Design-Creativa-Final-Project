// show or hide password
const password = document.getElementById("password");
const passwordIcon = document.getElementById("password-icon");
if (passwordIcon)
  passwordIcon.addEventListener("click", () => {
    const show = password.type === "password";
    password.type = show ? "text" : "password";
    passwordIcon.setAttribute(
      "aria-label",
      show ? "Hide password" : "Show password",
    );
    passwordIcon.style.opacity = show ? "0.5" : "1";
  });

// form validation
const form = document.getElementById("sign-in-form");
const message = document.getElementById("message");
if (form)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputfields = form.querySelectorAll("[required]");
    let isValid = true;
    inputfields.forEach((f) => {
      const value = f.value.trim() !== "";
      f.classList.toggle("is-invalid", !value);
      if (!value) isValid = false;
    });
    if (isValid) {
      message.classList.remove("d-none");
      setTimeout(() => message.classList.add("d-none"), 3000);
      console.log("signed in", {
        email: form.email.value,
        password: form.password.value,
        rememberMe: form.rememberMe.checked,
      });
    }
  });
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
if (plus)
  plus.addEventListener("click", function () {
    quantity.textContent++;
  });
if (minus)
  minus.addEventListener("click", function () {
    if (quantity.textContent > 1) {
      quantity.textContent--;
    }
  });
//Change Color Heart for wishlist button
let wishlist = document.querySelector("#wishlist");
if (wishlist)
  wishlist.addEventListener("click", function () {
    wishlist.classList.toggle("active");

    let heart = wishlist.querySelector("i");

    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");
  });

var owl = $("#two");
owl.owlCarousel({
  items: 4.5,
  loop: true,
  dots: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1.5,
      nav: true,
      dots:true
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4.5,
    },
  },
});
var owl1 = $("#one");
owl1.owlCarousel({
  items: 4.5,
  loop: true,
  dots: false,
  margin: 1,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1.5,
      nav: true,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4.5,
    },
  },
});
// ======================================================

let wishes = document.querySelectorAll(".wish");

wishes.forEach(function (wish) {
  wish.addEventListener("click", function () {
    wish.classList.toggle("active");

    let heart = wish.querySelector("i");

    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");
  });
});
const cartBtn = document.querySelector(".cart-btn");

document.addEventListener("click", function (e) {
  if (e.target.closest(".button-cart")) {
    cartBtn.textContent = Number(cartBtn.textContent) + 1;
  }
});
