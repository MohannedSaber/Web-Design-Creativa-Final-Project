// // show or hide password
// const password = document.getElementById("password");
// const passwordIcon = document.getElementById("password-icon");
// if (passwordIcon)
//   passwordIcon.addEventListener("click", () => {
//     const show = password.type === "password";
//     password.type = show ? "text" : "password";
//     passwordIcon.setAttribute(
//       "aria-label",
//       show ? "Hide password" : "Show password",
//     );
//     passwordIcon.style.opacity = show ? "0.5" : "1";
//   });

// // form validation
// const form = document.getElementById("sign-in-form");
// const message = document.getElementById("message");
// if (form)
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const inputfields = form.querySelectorAll("[required]");
//     let isValid = true;
//     inputfields.forEach((f) => {
//       const value = f.value.trim() !== "";
//       f.classList.toggle("is-invalid", !value);
//       if (!value) isValid = false;
//     });
//     if (isValid) {
//       message.classList.remove("d-none");
//       setTimeout(() => message.classList.add("d-none"), 3000);
//       console.log("signed in", {
//         email: form.email.value,
//         password: form.password.value,
//         rememberMe: form.rememberMe.checked,
//       });
//     }
//   });
//Choose Color for Hoodie

let colors = document.querySelectorAll(".choose-color .img-list li");

let colorName = document.querySelector("#selected-color");
if (colorName)
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
if (plus && quantity)
  plus.addEventListener("click", function () {
    quantity.textContent++;
  });
if (minus && quantity)
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

if (typeof $ !== "undefined") {
  var owl = $(".owl-carousel");

  if (owl.length) {
    owl.owlCarousel({
      items: 4.5,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1.5,
        },
        600: {
          items: 1.5,
        },
        1000: {
          items: 4.5,
        },
      },
    });
  }
}

// ======================================================

let wishes = document.querySelectorAll(".wish");
if (wishes)
  wishes.forEach(function (wish) {
    wish.addEventListener("click", function () {
      wish.classList.toggle("active");

      let heart = wish.querySelector("i");

      heart.classList.toggle("fa-regular");
      heart.classList.toggle("fa-solid");
    });
  });

// ======================================================
const btnCart = document.querySelector(".cart-btn");
if (btnCart)
  document.addEventListener("click", function (e) {
    if (e.target.closest(".button-cart")) {
      btnCart.textContent = Number(btnCart.textContent) + 1;
    }
  });

// Counter Time Down

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

if (days && hours && minutes && seconds) {
  let d = Number(days.innerHTML);
  let h = Number(hours.innerHTML);
  let m = Number(minutes.innerHTML);
  let s = Number(seconds.innerHTML);

  function countdown() {
    if (d === 0 && h === 0 && m === 0 && s === 0) {
      return;
    }

    if (s > 0) {
      s--;
    } else {
      s = 59;

      if (m > 0) {
        m--;
      } else {
        m = 59;

        if (h > 0) {
          h--;
        } else {
          h = 23;
          d--;
        }
      }
    }

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    setTimeout(() => {
      countdown();
    }, 1000);
  }

  countdown();
}

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

const layout = document.getElementById("productLayout");

if (layout) {
  const category = document.getElementById("category");
  const prices = document.getElementById("prices");
  const sortSelect = document.getElementById("sort");
  const cards = Array.from(layout.children).filter((card) => card.dataset.cat);
  cards.forEach((card, i) => {
    card.dataset.order = i;
  });

  // filtering
  function filterCards() {
    const selected = category.value.trim().toLowerCase();
    cards.forEach((card) => {
      const cardCat = (card.dataset.cat || "").trim().toLowerCase();
      card.classList.toggle(
        "d-none",
        !(selected === "all" || cardCat === selected),
      );
    });
  }

  // sorting
  function sortCards() {
    const list = cards.slice();

    if (prices.value === "low") {
      list.sort((a, b) => a.dataset.price - b.dataset.price);
    } else if (prices.value === "high") {
      list.sort((a, b) => b.dataset.price - a.dataset.price);
    } else if (sortSelect.value === "atoz") {
      list.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
    } else if (sortSelect.value === "ztoa") {
      list.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name));
    } else {
      // default: restore original order
      list.sort((a, b) => a.dataset.order - b.dataset.order);
    }

    list.forEach((card) => layout.appendChild(card));
  }

  if (category) category.addEventListener("change", filterCards);

  if (prices) {
    prices.addEventListener("change", () => {
      sortSelect.value = "default";
      sortCards();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      prices.value = "all";
      sortCards();
    });
  }
}
// add to cart button
  const cartBtn = document.querySelector(".cart-btn");
  let cartCount = 0;
let btna = document.querySelectorAll(".btn-cart");
btna.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartCount++;
    if (cartBtn) cartBtn.textContent = cartCount;
  });
});

// wishlist button (safe on any page, since querySelectorAll returns an empty list)
document.querySelectorAll(".wishlist-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("i");
    if (!icon) return;
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
  });
});
