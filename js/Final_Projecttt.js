
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
  
const layout     = document.getElementById("productLayout");
const category   = document.getElementById("category");
const prices     = document.getElementById("prices");
const sortSelect = document.getElementById("sort");
const cartBtn    = document.querySelector(".cart-btn");
var cartCount  = 0;

var cards = Array.from(layout.children).filter(function (card) {
    return card.dataset.cat;
});

cards.forEach(function (card, i) { card.dataset.order = i; });

// filtering
function filterCards() {
    var selected = category.value.trim().toLowerCase();

    cards.forEach(function (card) {
    var cardCat = (card.dataset.cat || "").trim().toLowerCase();

    if (selected === "all" || cardCat === selected) {
        card.classList.remove("d-none");
    } else {
        card.classList.add("d-none");
    }
    });
}

// sorting
function sortCards() {
    const list = cards.slice();

    if (prices.value === "low") {
    list.sort(function (a, b) { return a.dataset.price - b.dataset.price; });
    } else if (prices.value === "high") {
    list.sort(function (a, b) { return b.dataset.price - a.dataset.price; });
    } else if (sortSelect.value === "atoz") {
    list.sort(function (a, b) { return a.dataset.name.localeCompare(b.dataset.name); });
    } else if (sortSelect.value === "ztoa") {
    list.sort(function (a, b) { return b.dataset.name.localeCompare(a.dataset.name); });
    }

// default if no sorting is chosen
list.forEach(function (card) { layout.appendChild(card); });
}
category.addEventListener("change", filterCards);
prices.addEventListener("change", function () {
    sortSelect.value = "default";
    sortCards();
});
sortSelect.addEventListener("change", function () {
    prices.value = "all";
    sortCards();
});

// add to cart button
document.querySelectorAll(".btn-cart").forEach(function (btn) {
    btn.addEventListener("click", function () {
    cartCount++;
    cartBtn.textContent = cartCount;
    });
});

// wishlist button
document.querySelectorAll(".wishlist-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
    const icon = btn.querySelector("i");
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
    });
});

