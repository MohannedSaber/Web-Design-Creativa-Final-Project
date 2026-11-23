
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

document.addEventListener("click", function (e) {
<<<<<<< HEAD
  if (e.target.closest(".button-cart")) {
    cartBtn.textContent = Number(cartBtn.textContent) + 1;
  }
});let cartBtn = document.querySelector(".cart-btn");
=======
    if (e.target.closest(".button-cart") && cartBtn) {
        cartBtn.textContent = Number(cartBtn.textContent) + 1;
    }
});

const cartBtn =document.querySelector(".cart-btn")
let cartCount = 0;
document.querySelectorAll(".btn-cart").forEach((btn) => {
    btn.addEventListener("click" , () => {
        cartCount++;
        if (cartBtn) cartBtn.textContent = cartCount;
    });
});
>>>>>>> 997249a3a1124defbde76e212ada708388f79a68

document.addEventListener("click", function (e) {
    if (e.target.closest(".button-cart") && cartBtn) {
        cartBtn.textContent = Number(cartBtn.textContent) + 1;
    }
});



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

        setTimeout(countdown, 1000);
    }

    countdown();
}




// cart:



let s1 = 39,
    s2 = 38,
    s3 = 39;

let shipping = 0,
    discount = 0;

const log = console.log;

const calcTotal = () => {

    let all = s1 + s2 + s3;
    let discountAmount = (all * discount) / 100;
    let finalPrice = all + shipping - discountAmount;

    let cartSubtotal = document.querySelector("#cartSubtotal");
    let discountValue = document.querySelector("#discountValue");
    let total = document.querySelector("#total");

    if (cartSubtotal) {
        cartSubtotal.textContent = "$" + all.toFixed(2);
    }

    if (discountValue) {
        discountValue.textContent = "$" + discountAmount.toFixed(2);
    }

    if (total) {
        total.textContent = "$" + finalPrice.toFixed(2);
    }

    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let num3 = document.querySelector("#num3");

    if (num1 && num2 && num3) {

        let q1 = Number(num1.textContent);
        let q2 = Number(num2.textContent);
        let q3 = Number(num3.textContent);

        let totalQty = q1 + q2 + q3;

        let totalQuantity = document.querySelector("#totalQuantity");
        let cartBtn = document.querySelector(".cart-btn");

        if (totalQuantity) {
            totalQuantity.textContent = totalQty;
        }

        if (cartBtn) {
            cartBtn.textContent = totalQty;
        }
    }
};

function changeQuantity(numId, price, subtotalId, change) {
    let num = document.querySelector("#" + numId);
    let x = +num.textContent;
    x = x + change;

    if (x < 1) {
        alert("Minimum quantity is 1");
    } else {
        num.textContent = x;
        let subtotal = price * x;
        document.querySelector("#" + subtotalId).textContent = "$" + subtotal.toFixed(2);

        switch (subtotalId) {
            case "subtotal1":
                s1 = subtotal;
                break;
            case "subtotal2":
                s2 = subtotal;
                break;
            default:
                s3 = subtotal;
        }

        calcTotal();
    }
}

function removeProduct(productId, subtotalId) {
    document.querySelector("#" + productId).style.display = "none";
    document.querySelector("#" + subtotalId).textContent = "$0.00";

    if (subtotalId == "subtotal1") {
        s1 = 0;
        document.querySelector("#num1").textContent = 0;
    } else if (subtotalId == "subtotal2") {
        s2 = 0;
        document.querySelector("#num2").textContent = 0;
    } else {
        s3 = 0;
        document.querySelector("#num3").textContent = 0;
    }

    calcTotal();
}

function shippingCost(price) {
    shipping = price;
    calcTotal();
}

const applyCouponBtn = document.querySelector("#applyCouponBtn");
if (applyCouponBtn) {
    applyCouponBtn.addEventListener("click", function () {
        let code = document.querySelector("#couponInput").value;
        let msg = document.querySelector("#couponMessage");

        if (code == "SAVE10") {
            discount = 10;
            msg.textContent = "Coupon applied successfully";
            msg.style.color = "green";
        } else {
            discount = 0;
            msg.textContent = "Invalid coupon code";
            msg.style.color = "red";
        }

        calcTotal();
    });
}

calcTotal();

<<<<<<< HEAD
const items = document.querySelectorAll(".item");
const items = document.querySelectorAll(".item");
const sub = document.querySelector(".sub");
const all = document.querySelector(".all");

if (items.length > 0 && sub && all) {
=======
const cartItems = document.querySelectorAll(".item");
const sub = document.querySelector(".sub");
const all = document.querySelector(".all");

if (cartItems.length > 0 && sub && all)  {
>>>>>>> 997249a3a1124defbde76e212ada708388f79a68

    function update() {
        let total = 0;

<<<<<<< HEAD
        items.forEach((item) => {
=======
        cartItems.forEach((item) => {
>>>>>>> 997249a3a1124defbde76e212ada708388f79a68
            let price = Number(item.dataset.price);
            let quantity = Number(item.querySelector(".num").textContent);

            total += price * quantity;
        });

        sub.textContent = "$" + total.toFixed(2);
        all.textContent = "$" + (total - discount).toFixed(2);
    }

<<<<<<< HEAD
    items.forEach((item) => {
=======
    cartItems.forEach((item) => {
>>>>>>> 997249a3a1124defbde76e212ada708388f79a68
        let num = item.querySelector(".num");
        let plus = item.querySelector(".plus");
        let minus = item.querySelector(".minus");

        if (plus && minus && num) {

            plus.onclick = () => {
                num.textContent++;
                update();
            };

            minus.onclick = () => {
                if (num.textContent > 1) {
                    num.textContent--;
                    update();
                }
            };
        }
    });

    let apply = document.querySelector(".apply");

    if (apply) {
        apply.onclick = () => {
            let input = document.querySelector(".input");

            if (input && input.value === "JenkateMW") {
                discount = 25;
                update();
            } else {
                alert("Wrong Coupon!");
            }
        };
    }

    let remove = document.querySelector(".remove");

    if (remove) {
        remove.onclick = () => {
            discount = 0;

            let discountElement = document.querySelector(".discount");

            if (discountElement) {
                discountElement.classList.add("d-none");
            }

            update();
        };
    }

    update();
}
