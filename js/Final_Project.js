// show or hide password
const password = document.getElementById("password");
const passwordIcon = document.getElementById("password-icon");

passwordIcon.addEventListener("click", () => {
    const show = password.type === "password";
    password.type = show ? "text" : "password";
    passwordIcon.setAttribute("aria-label", show ? "Hide password" : "Show password");
    passwordIcon.style.opacity = show ? "0.5" : "1";
})

// form validation
const form = document.getElementById("sign-in-form");
const message = document.getElementById("message");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputfields = form.querySelectorAll("[required]");
    let isValid = true;
    inputfields.forEach((f) => {
        const value = f.value.trim() !== "";
        f.classList.toggle("is-invalid", !value);
        if(!value) isValid = false;
    });
    if(isValid) {
        message.classList.remove("d-none");
        setTimeout(() => 
        message.classList.add("d-none") , 3000);
        console.log("signed in" , {
            email: form.email.value,
            password: form.password.value,
            rememberMe: form.rememberMe.checked
        });
    }
    });
